#!/usr/bin/env node
/*
 * Validatore plugin BetterCallClaudeGrowth.
 * Verifica struttura, schema dei manifest e allineamento delle versioni.
 * Nessuna dipendenza esterna. Esce 0 se OK, 1 se trova errori.
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
  catch (e) { fail(`JSON non valido o assente: ${path.relative(ROOT, p)} (${e.message})`); return null; }
}
function mustExist(p, label) {
  if (fs.existsSync(p)) { ok(`${label} esiste`); return true; }
  fail(`${label} mancante: ${path.relative(ROOT, p)}`); return false;
}

console.log('\n# Struttura');
const marketplacePath = path.join(ROOT, '.claude-plugin', 'marketplace.json');
const pluginPath = path.join(PLUGIN_DIR, '.claude-plugin', 'plugin.json');
const pkgPath = path.join(ROOT, 'package.json');
mustExist(marketplacePath, 'marketplace.json');
mustExist(pluginPath, 'plugin.json');
mustExist(pkgPath, 'package.json');
mustExist(path.join(PLUGIN_DIR, 'agents'), 'cartella agents/');
mustExist(path.join(PLUGIN_DIR, 'commands'), 'cartella commands/');
mustExist(path.join(PLUGIN_DIR, 'skills'), 'cartella skills/');

console.log('\n# marketplace.json');
const market = readJSON(marketplacePath);
let marketVersion = null;
if (market) {
  if (market.name) ok('name presente'); else fail('marketplace.json: name mancante');
  if (Array.isArray(market.plugins) && market.plugins.length) {
    ok(`plugins[] non vuoto (${market.plugins.length})`);
    market.plugins.forEach((p, i) => {
      ['name', 'version', 'source', 'repository', 'license'].forEach((f) => {
        if (!p[f]) fail(`plugins[${i}]: campo "${f}" mancante`);
      });
      if (p.source && !p.source.startsWith('./')) fail(`plugins[${i}]: source deve iniziare con "./"`);
      if (i === 0) marketVersion = p.version;
    });
  } else fail('marketplace.json: plugins[] vuoto o assente');
}

console.log('\n# plugin.json');
const plugin = readJSON(pluginPath);
if (plugin) {
  ['name', 'version', 'description'].forEach((f) => {
    if (plugin[f]) ok(`plugin.json: ${f} presente`); else fail(`plugin.json: ${f} mancante`);
  });
}

console.log('\n# package.json');
const pkg = readJSON(pkgPath);
if (pkg) { if (pkg.version) ok('package.json: version presente'); else fail('package.json: version mancante'); }

console.log('\n# Allineamento versioni');
const versions = { marketplace: marketVersion, plugin: plugin && plugin.version, package: pkg && pkg.version };
const uniq = [...new Set(Object.values(versions).filter(Boolean))];
if (uniq.length === 1) ok(`tutte allineate a ${uniq[0]}`);
else fail(`versioni disallineate: ${JSON.stringify(versions)}`);

console.log('\n# Skills');
const skillsDir = path.join(PLUGIN_DIR, 'skills');
if (fs.existsSync(skillsDir)) {
  const dirs = fs.readdirSync(skillsDir, { withFileTypes: true }).filter((d) => d.isDirectory());
  if (!dirs.length) fail('nessuna skill trovata');
  dirs.forEach((d) => {
    const sp = path.join(skillsDir, d.name, 'SKILL.md');
    if (fs.existsSync(sp)) ok(`skill ${d.name}: SKILL.md presente`);
    else fail(`skill ${d.name}: SKILL.md mancante`);
  });
}

console.log('\n# Frontmatter command & agent');
function checkFrontmatter(dir, label) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).filter((f) => f.endsWith('.md')).forEach((f) => {
    const txt = fs.readFileSync(path.join(dir, f), 'utf8');
    const m = txt.match(/^---\n([\s\S]*?)\n---/);
    if (!m) { fail(`${label} ${f}: frontmatter YAML mancante`); return; }
    if (/(^|\n)description:/.test(m[1])) ok(`${label} ${f}: ok`);
    else fail(`${label} ${f}: campo description mancante`);
  });
}
checkFrontmatter(path.join(PLUGIN_DIR, 'commands'), 'command');
checkFrontmatter(path.join(PLUGIN_DIR, 'agents'), 'agent');

console.log('\n' + '='.repeat(40));
if (errors.length) { console.error(`✗ VALIDAZIONE FALLITA: ${errors.length} errori`); process.exit(1); }
console.log('✓ VALIDAZIONE OK'); process.exit(0);
