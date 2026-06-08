#!/usr/bin/env node
/*
 * BetterCallClaudeGrowth plugin validator.
 * Checks structure, manifest schema, and version alignment.
 * No external dependencies. Exit 0 if OK, 1 if it finds errors.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PLUGIN_DIR = path.join(ROOT, 'bettercallclaudegrowth');
const errors = [];
const ok = (m) => console.log('  ✓ ' + m);
const fail = (m) => { errors.push(m); console.log('  ✗ ' + m); };

function readJSON(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch (e) { fail(`invalid or missing JSON: ${path.relative(ROOT, p)} (${e.message})`); return null; }
}
function mustExist(p, label) {
  if (fs.existsSync(p)) { ok(`${label} exists`); return true; }
  fail(`${label} missing: ${path.relative(ROOT, p)}`); return false;
}

console.log('\n# Structure');
const marketplacePath = path.join(ROOT, '.claude-plugin', 'marketplace.json');
const pluginPath = path.join(PLUGIN_DIR, '.claude-plugin', 'plugin.json');
const pkgPath = path.join(ROOT, 'package.json');
mustExist(marketplacePath, 'marketplace.json');
mustExist(pluginPath, 'plugin.json');
mustExist(pkgPath, 'package.json');
mustExist(path.join(PLUGIN_DIR, 'agents'), 'agents/ folder');
mustExist(path.join(PLUGIN_DIR, 'commands'), 'commands/ folder');
mustExist(path.join(PLUGIN_DIR, 'skills'), 'skills/ folder');

console.log('\n# marketplace.json');
const market = readJSON(marketplacePath);
let marketVersion = null;
if (market) {
  if (market.name) ok('name present'); else fail('marketplace.json: name missing');
  if (Array.isArray(market.plugins) && market.plugins.length) {
    ok(`plugins[] not empty (${market.plugins.length})`);
    market.plugins.forEach((p, i) => {
      ['name', 'version', 'source', 'repository', 'license'].forEach((f) => {
        if (!p[f]) fail(`plugins[${i}]: field "${f}" missing`);
      });
      if (p.source && !p.source.startsWith('./')) fail(`plugins[${i}]: source must start with "./"`);
      if (i === 0) marketVersion = p.version;
    });
  } else fail('marketplace.json: plugins[] empty or missing');
}

console.log('\n# plugin.json');
const plugin = readJSON(pluginPath);
if (plugin) {
  ['name', 'version', 'description'].forEach((f) => {
    if (plugin[f]) ok(`plugin.json: ${f} present`); else fail(`plugin.json: ${f} missing`);
  });
}

console.log('\n# package.json');
const pkg = readJSON(pkgPath);
if (pkg) { if (pkg.version) ok('package.json: version present'); else fail('package.json: version missing'); }

console.log('\n# Version alignment');
const versions = { marketplace: marketVersion, plugin: plugin && plugin.version, package: pkg && pkg.version };
const uniq = [...new Set(Object.values(versions).filter(Boolean))];
if (uniq.length === 1) ok(`all aligned at ${uniq[0]}`);
else fail(`versions misaligned: ${JSON.stringify(versions)}`);

console.log('\n# Skills');
const skillsDir = path.join(PLUGIN_DIR, 'skills');
if (fs.existsSync(skillsDir)) {
  const dirs = fs.readdirSync(skillsDir, { withFileTypes: true }).filter((d) => d.isDirectory());
  if (!dirs.length) fail('no skills found');
  dirs.forEach((d) => {
    const sp = path.join(skillsDir, d.name, 'SKILL.md');
    if (fs.existsSync(sp)) ok(`skill ${d.name}: SKILL.md present`);
    else fail(`skill ${d.name}: SKILL.md missing`);
  });
}

console.log('\n# Command & agent frontmatter');
function checkFrontmatter(dir, label) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).filter((f) => f.endsWith('.md')).forEach((f) => {
    const txt = fs.readFileSync(path.join(dir, f), 'utf8');
    const m = txt.match(/^---\n([\s\S]*?)\n---/);
    if (!m) { fail(`${label} ${f}: missing YAML frontmatter`); return; }
    if (/(^|\n)description:/.test(m[1])) ok(`${label} ${f}: ok`);
    else fail(`${label} ${f}: missing description field`);
  });
}
checkFrontmatter(path.join(PLUGIN_DIR, 'commands'), 'command');
checkFrontmatter(path.join(PLUGIN_DIR, 'agents'), 'agent');

console.log('\n' + '='.repeat(40));
if (errors.length) { console.error(`✗ VALIDATION FAILED: ${errors.length} errors`); process.exit(1); }
console.log('✓ VALIDATION OK'); process.exit(0);
