#!/usr/bin/env node
/*
 * validate-content.js — integrita' dei contenuti del plugin BetterCallClaudeGrowth.
 * Complementa validate-plugin.js (schema + versioni). Qui verifica:
 *   - nessun placeholder template (<NOME>, <TUO-USERNAME>, ...) nei manifest/README/contenuti;
 *   - integrita' referenziale: ogni skill citata nei command e nella routing matrix esiste;
 *   - ogni agent referenziato dai command esiste;
 *   - ogni playbook linkato in playbooks/_index.md esiste; ogni archetipo ha un playbook;
 *   - i selftest degli script deterministici passano;
 *   - coerenza dei conteggi command/agent/skill tra disco e README interno.
 * Nessuna dipendenza esterna. Exit 0 se OK, 1 se trova errori.
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

// 1. Placeholder template -----------------------------------------------------
console.log('\n# Placeholder template');
const PLACEHOLDER = /<[A-Z][A-Z0-9_\- ]*>/; // es. <NOME>, <TUO-USERNAME>; ignora <2.5s>, <https://...>
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
if (!placeholderHits) ok('nessun placeholder template residuo');

// 2. Integrita' referenziale skill <- command --------------------------------
// Le skill si richiamano PER NOME (auto-attivazione), non via path skills/X/SKILL.md
// (un path relativo nel body si risolverebbe contro la cwd dell'utente e si romperebbe).
// Qui verifichiamo che ogni command citi per nome la skill attesa e che la skill esista.
console.log('\n# Integrita\' referenziale (command -> skill, per nome)');
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
// vietato: path relativo skills/<realname>/SKILL.md nei body di command/agent
// (si risolve contro la cwd utente e si rompe). Consentito solo come fallback
// con ${CLAUDE_PLUGIN_ROOT}/skills/... oppure col placeholder <nome>.
['commands', 'agents'].forEach((sub) => {
  const d = path.join(PLUGIN_DIR, sub);
  listMd(d).forEach((f) => {
    const stripped = read(path.join(d, f))
      .replace(/\$\{CLAUDE_PLUGIN_ROOT\}\/skills\/[a-z0-9<>\-]+\/SKILL\.md/g, ''); // togli la forma consentita
    if (/skills\/[a-z0-9\-]+\/SKILL\.md/.test(stripped)) {
      fail(`${sub}/${f}: path relativo skills/<nome>/SKILL.md nel body (usa il nome della skill o \${CLAUDE_PLUGIN_ROOT})`); refErrors++;
    }
  });
});
Object.entries(COMMAND_SKILL_MAP).forEach(([f, expected]) => {
  const fp = path.join(cmdDir, f);
  if (!fs.existsSync(fp)) { fail(`command atteso mancante: ${f}`); refErrors++; return; }
  const txt = read(fp);
  expected.forEach((s) => {
    if (!skills.includes(s)) { fail(`${f}: skill mappata inesistente su disco: ${s}`); refErrors++; }
    else if (!new RegExp('`' + s + '`').test(txt)) { fail(`${f}: non cita per nome la skill \`${s}\``); refErrors++; }
  });
});
if (!refErrors) ok(`ogni command cita per nome la sua skill; nessun path skills/.../SKILL.md fragile (${skills.length} skill su disco)`);

// 3. Agent referenziati esistono ---------------------------------------------
console.log('\n# Agent referenziati');
const agentDir = path.join(PLUGIN_DIR, 'agents');
const agents = listMd(agentDir).map((f) => f.replace(/\.md$/, ''));
['gtm-orchestrator', 'gtm-critic', 'gtm-buddy'].forEach((a) => {
  if (agents.includes(a)) ok(`agent ${a} presente`);
  else fail(`agent atteso mancante: ${a}`);
});
// ogni agent citato nei command/agent/playbook deve esistere
let agentRefErrors = 0;
[cmdDir, agentDir, path.join(PLUGIN_DIR, 'playbooks')].forEach((dir) => {
  listMd(dir).forEach((f) => {
    const txt = read(path.join(dir, f));
    [...txt.matchAll(/`(gtm-[a-z]+)`/g)].map((m) => m[1]).forEach((ref) => {
      if (['gtm-orchestrator', 'gtm-critic', 'gtm-buddy'].includes(ref) && !agents.includes(ref)) {
        fail(`${f}: cita agent inesistente ${ref}`); agentRefErrors++;
      }
    });
  });
});
if (!agentRefErrors) ok('nessun riferimento ad agent inesistenti');

// 4. Playbook -----------------------------------------------------------------
console.log('\n# Playbook & routing matrix');
const pbDir = path.join(PLUGIN_DIR, 'playbooks');
const indexPath = path.join(pbDir, '_index.md');
if (!fs.existsSync(indexPath)) {
  fail('playbooks/_index.md mancante');
} else {
  ok('_index.md presente');
  const idx = read(indexPath);
  // ogni link markdown a un .md nei playbook deve risolvere
  [...idx.matchAll(/\(([a-z0-9\-]+\.md)\)/g)].map((m) => m[1]).forEach((link) => {
    if (fs.existsSync(path.join(pbDir, link))) ok(`link playbook risolve: ${link}`);
    else fail(`link playbook rotto in _index.md: ${link}`);
  });
  // ogni archetipo deve avere un playbook
  const requiredPlaybooks = ['coaching-services', 'b2b-saas', 'b2c-product', 'local-service', 'established-no-marketing', 'micro-launch'];
  requiredPlaybooks.forEach((p) => {
    if (fs.existsSync(path.join(pbDir, p + '.md'))) ok(`playbook ${p} presente`);
    else fail(`playbook richiesto mancante: ${p}.md`);
  });
  // la routing matrix (sez. 6) deve mappare solo skill esistenti
  [...idx.matchAll(/`([a-z0-9\-]+)`/g)].map((m) => m[1])
    .filter((t) => skills.includes(t) || /^(christensen-jobs|butcher-productize|doing-content-right|hormozi-offers|hormozi-leads|drew-sucks-framework|advanced-email-marketing|seo-2026-sota|instagram-performance-marketing)$/.test(t))
    .forEach((t) => { if (!skills.includes(t)) fail(`routing matrix cita skill inesistente: ${t}`); });
}

// 5. Selftest script deterministici ------------------------------------------
console.log('\n# Selftest script deterministici');
const scriptsDir = path.join(PLUGIN_DIR, 'scripts');
['cfa-calculator.js', 'value-equation-score.js', 'gtm-readiness-score.js', 'gtm-plan-lint.js'].forEach((s) => {
  const sp = path.join(scriptsDir, s);
  if (!fs.existsSync(sp)) { fail(`script mancante: ${s}`); return; }
  try { execFileSync(process.execPath, [sp, '--selftest'], { stdio: 'pipe' }); ok(`${s}: selftest OK`); }
  catch (e) { fail(`${s}: selftest FALLITO (${(e.stderr || e.stdout || '').toString().trim()})`); }
});

// 6. Conteggi coerenti col README interno ------------------------------------
console.log('\n# Conteggi command/agent/skill');
const nCmd = listMd(cmdDir).length;
const nAgent = agents.length;
const nSkill = skills.length;
ok(`disco: ${nCmd} command, ${nAgent} agent, ${nSkill} skill`);
const innerReadme = path.join(PLUGIN_DIR, 'README.md');
if (fs.existsSync(innerReadme)) {
  const txt = read(innerReadme);
  // ogni command su disco deve comparire nel README interno
  listMd(cmdDir).map((f) => '/' + f.replace(/\.md$/, '')).forEach((slug) => {
    if (txt.includes(slug)) ok(`README cita ${slug}`);
    else fail(`README interno non documenta il command ${slug}`);
  });
}

console.log('\n' + '='.repeat(40));
if (errors.length) { console.error(`✗ VALIDAZIONE CONTENUTI FALLITA: ${errors.length} errori`); process.exit(1); }
console.log('✓ VALIDAZIONE CONTENUTI OK'); process.exit(0);
