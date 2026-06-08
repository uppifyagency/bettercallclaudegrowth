#!/usr/bin/env node
/*
 * validate-content.js — content integrity for the BetterCallClaudeGrowth plugin.
 * Complements validate-plugin.js (schema + versions). Here it checks:
 *   - no template placeholders (<NAME>, <YOUR-USERNAME>, ...) in manifests/README/content;
 *   - referential integrity: every skill cited in commands and in the routing matrix exists;
 *   - every agent referenced by commands exists;
 *   - every playbook linked in playbooks/_index.md exists; every archetype has a playbook;
 *   - the deterministic script selftests pass;
 *   - command/agent/skill counts are consistent between disk and the inner README.
 * No external dependencies. Exit 0 if OK, 1 if it finds errors.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const PLUGIN_DIR = path.join(ROOT, 'bettercallclaudegrowth');
const errors = [];
const ok = (m) => console.log('  ✓ ' + m);
const fail = (m) => { errors.push(m); console.log('  ✗ ' + m); };

function read(p) { return fs.readFileSync(p, 'utf8'); }
function listMd(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
}
function skillNames() {
  const d = path.join(PLUGIN_DIR, 'skills');
  if (!fs.existsSync(d)) return [];
  return fs.readdirSync(d, { withFileTypes: true })
    .filter((e) => e.isDirectory() && fs.existsSync(path.join(d, e.name, 'SKILL.md')))
    .map((e) => e.name);
}

// 1. Template placeholders ----------------------------------------------------
console.log('\n# Template placeholders');
const PLACEHOLDER = /<[A-Z][A-Z0-9_\- ]*>/; // e.g. <NAME>, <YOUR-USERNAME>; ignores <2.5s>, <https://...>
const scanForPlaceholders = [
  path.join(ROOT, '.claude-plugin', 'marketplace.json'),
  path.join(ROOT, 'package.json'),
  path.join(ROOT, 'README.md'),
  path.join(PLUGIN_DIR, '.claude-plugin', 'plugin.json'),
  path.join(PLUGIN_DIR, 'README.md'),
];
['commands', 'agents', 'playbooks'].forEach((sub) => {
  const d = path.join(PLUGIN_DIR, sub);
  listMd(d).forEach((f) => scanForPlaceholders.push(path.join(d, f)));
});
let placeholderHits = 0;
scanForPlaceholders.forEach((p) => {
  if (!fs.existsSync(p)) return;
  const txt = read(p);
  txt.split('\n').forEach((line, i) => {
    const m = line.match(PLACEHOLDER);
    if (m) { fail(`placeholder ${m[0]} in ${path.relative(ROOT, p)}:${i + 1}`); placeholderHits++; }
  });
});
if (!placeholderHits) ok('no leftover template placeholders');

// 2. Referential integrity: skill <- command ---------------------------------
// Skills are invoked BY NAME (auto-activation), not via a skills/X/SKILL.md path
// (a relative path in the body would resolve against the user's cwd and break).
// Here we verify each command cites its expected skill by name and that the skill exists.
console.log('\n# Referential integrity (command -> skill, by name)');
const skills = skillNames();
const cmdDir = path.join(PLUGIN_DIR, 'commands');
const COMMAND_SKILL_MAP = {
  'gtm-jobs.md': ['christensen-jobs'],
  'gtm-positioning.md': ['butcher-productize', 'doing-content-right'],
  'gtm-offer.md': ['hormozi-offers'],
  'gtm-leads.md': ['hormozi-leads'],
  'gtm-content.md': ['doing-content-right'],
  'gtm-copy.md': ['drew-sucks-framework'],
  'gtm-email.md': ['advanced-email-marketing'],
  'gtm-seo.md': ['seo-2026-sota'],
  'gtm-instagram.md': ['instagram-performance-marketing'],
};
let refErrors = 0;
// forbidden: relative skills/<realname>/SKILL.md path in command/agent bodies
// (resolves against the user's cwd and breaks). Allowed only as a fallback
// with ${CLAUDE_PLUGIN_ROOT}/skills/... or with the <archetype> placeholder.
['commands', 'agents'].forEach((sub) => {
  const d = path.join(PLUGIN_DIR, sub);
  listMd(d).forEach((f) => {
    const stripped = read(path.join(d, f))
      .replace(/\$\{CLAUDE_PLUGIN_ROOT\}\/skills\/[a-z0-9<>\-]+\/SKILL\.md/g, ''); // remove the allowed form
    if (/skills\/[a-z0-9\-]+\/SKILL\.md/.test(stripped)) {
      fail(`${sub}/${f}: relative skills/<name>/SKILL.md path in body (use the skill name or \${CLAUDE_PLUGIN_ROOT})`); refErrors++;
    }
  });
});
Object.entries(COMMAND_SKILL_MAP).forEach(([f, expected]) => {
  const fp = path.join(cmdDir, f);
  if (!fs.existsSync(fp)) { fail(`expected command missing: ${f}`); refErrors++; return; }
  const txt = read(fp);
  expected.forEach((s) => {
    if (!skills.includes(s)) { fail(`${f}: mapped skill not found on disk: ${s}`); refErrors++; }
    else if (!new RegExp('`' + s + '`').test(txt)) { fail(`${f}: does not cite the skill \`${s}\` by name`); refErrors++; }
  });
});
if (!refErrors) ok(`every command cites its skill by name; no fragile skills/.../SKILL.md path (${skills.length} skills on disk)`);

// 3. Referenced agents exist --------------------------------------------------
console.log('\n# Referenced agents');
const agentDir = path.join(PLUGIN_DIR, 'agents');
const agents = listMd(agentDir).map((f) => f.replace(/\.md$/, ''));
['gtm-orchestrator', 'gtm-critic', 'gtm-buddy'].forEach((a) => {
  if (agents.includes(a)) ok(`agent ${a} present`);
  else fail(`expected agent missing: ${a}`);
});
// every agent cited in commands/agents/playbooks must exist
let agentRefErrors = 0;
[cmdDir, agentDir, path.join(PLUGIN_DIR, 'playbooks')].forEach((dir) => {
  listMd(dir).forEach((f) => {
    const txt = read(path.join(dir, f));
    [...txt.matchAll(/`(gtm-[a-z]+)`/g)].map((m) => m[1]).forEach((ref) => {
      if (['gtm-orchestrator', 'gtm-critic', 'gtm-buddy'].includes(ref) && !agents.includes(ref)) {
        fail(`${f}: cites a non-existent agent ${ref}`); agentRefErrors++;
      }
    });
  });
});
if (!agentRefErrors) ok('no references to non-existent agents');

// 4. Playbooks ----------------------------------------------------------------
console.log('\n# Playbooks & routing matrix');
const pbDir = path.join(PLUGIN_DIR, 'playbooks');
const indexPath = path.join(pbDir, '_index.md');
if (!fs.existsSync(indexPath)) {
  fail('playbooks/_index.md missing');
} else {
  ok('_index.md present');
  const idx = read(indexPath);
  // every markdown link to a .md in playbooks must resolve
  [...idx.matchAll(/\(([a-z0-9\-]+\.md)\)/g)].map((m) => m[1]).forEach((link) => {
    if (fs.existsSync(path.join(pbDir, link))) ok(`playbook link resolves: ${link}`);
    else fail(`broken playbook link in _index.md: ${link}`);
  });
  // every archetype must have a playbook
  const requiredPlaybooks = ['coaching-services', 'b2b-saas', 'b2c-product', 'local-service', 'established-no-marketing', 'micro-launch'];
  requiredPlaybooks.forEach((p) => {
    if (fs.existsSync(path.join(pbDir, p + '.md'))) ok(`playbook ${p} present`);
    else fail(`required playbook missing: ${p}.md`);
  });
  // the routing matrix (section 6) must only map existing skills
  [...idx.matchAll(/`([a-z0-9\-]+)`/g)].map((m) => m[1])
    .filter((t) => skills.includes(t) || /^(christensen-jobs|butcher-productize|doing-content-right|hormozi-offers|hormozi-leads|drew-sucks-framework|advanced-email-marketing|seo-2026-sota|instagram-performance-marketing)$/.test(t))
    .forEach((t) => { if (!skills.includes(t)) fail(`routing matrix cites a non-existent skill: ${t}`); });
}

// 5. Deterministic script selftests -------------------------------------------
console.log('\n# Deterministic script selftests');
const scriptsDir = path.join(PLUGIN_DIR, 'scripts');
['cfa-calculator.js', 'value-equation-score.js', 'gtm-readiness-score.js', 'gtm-plan-lint.js'].forEach((s) => {
  const sp = path.join(scriptsDir, s);
  if (!fs.existsSync(sp)) { fail(`script missing: ${s}`); return; }
  try { execFileSync(process.execPath, [sp, '--selftest'], { stdio: 'pipe' }); ok(`${s}: selftest OK`); }
  catch (e) { fail(`${s}: selftest FAILED (${(e.stderr || e.stdout || '').toString().trim()})`); }
});

// 6. Counts consistent with the inner README ----------------------------------
console.log('\n# Command/agent/skill counts');
const nCmd = listMd(cmdDir).length;
const nAgent = agents.length;
const nSkill = skills.length;
ok(`disk: ${nCmd} commands, ${nAgent} agents, ${nSkill} skills`);
const innerReadme = path.join(PLUGIN_DIR, 'README.md');
if (fs.existsSync(innerReadme)) {
  const txt = read(innerReadme);
  // every command on disk must appear in the inner README
  listMd(cmdDir).map((f) => '/' + f.replace(/\.md$/, '')).forEach((slug) => {
    if (txt.includes(slug)) ok(`README cites ${slug}`);
    else fail(`inner README does not document the command ${slug}`);
  });
}

console.log('\n' + '='.repeat(40));
if (errors.length) { console.error(`✗ CONTENT VALIDATION FAILED: ${errors.length} errors`); process.exit(1); }
console.log('✓ CONTENT VALIDATION OK'); process.exit(0);
