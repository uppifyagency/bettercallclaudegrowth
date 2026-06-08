#!/usr/bin/env node
/*
 * gtm-plan-lint.js — verifica che un gtm-plan.md contenga le sezioni attese.
 * Controlla intestazione archetipo/stadio, offerta, checkpoint critic,
 * sintesi/falsificabilita', GTM Readiness Score e KPI.
 * Default: exit 0 con warning. Con --strict: exit 1 se manca una sezione richiesta.
 * Zero dipendenze.
 *
 * Uso:
 *   node gtm-plan-lint.js gtm-plan.md
 *   node gtm-plan-lint.js gtm-plan.md --strict --json
 *   node gtm-plan-lint.js --selftest
 */
'use strict';
const fs = require('fs');

const CHECKS = [
  { name: 'Intestazione archetipo/stadio', re: /archetip|stadio/i },
  { name: 'Sezione Offerta', re: /offert/i },
  { name: 'Checkpoint Critic', re: /critic/i },
  { name: 'Sintesi / falsificabilita\'', re: /perceive|sintesi|falsific/i },
  { name: 'GTM Readiness Score', re: /readiness|score/i },
  { name: 'KPI', re: /\bkpi\b/i },
];

function lintText(text) {
  const checks = CHECKS.map((c) => ({ name: c.name, ok: c.re.test(text) }));
  const missing = checks.filter((c) => !c.ok).map((c) => c.name);
  return { checks, missing, pass: missing.length === 0 };
}

function render(r) {
  const L = ['# gtm-plan lint'];
  r.checks.forEach((c) => L.push(`  ${c.ok ? '✓' : '✗'} ${c.name}`));
  L.push('  ' + '-'.repeat(28));
  L.push(r.pass ? '  OK: tutte le sezioni attese presenti' : `  Mancanti: ${r.missing.join(', ')}`);
  return L.join('\n');
}

function selftest() {
  const assert = (c, m) => { if (!c) { console.error('SELFTEST FAIL: ' + m); process.exit(1); } };
  const good = 'Archetipo: b2b-saas, stadio scaling. Offerta Grand Slam. Critic: ... Sintesi PERCEIVE ANALYZE falsificabilita. GTM Readiness Score 72/100. KPI: trial.';
  const bad = 'Solo una bozza di offerta senza altro.';
  assert(lintText(good).pass === true, 'il piano completo deve passare');
  assert(lintText(bad).pass === false, 'il piano incompleto deve fallire');
  assert(lintText(bad).missing.includes('KPI'), 'bad deve segnalare KPI mancante');
  console.log('gtm-plan-lint: SELFTEST OK');
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('--selftest')) return selftest();
  const json = argv.includes('--json');
  const strict = argv.includes('--strict');
  const file = argv.find((t) => !t.startsWith('--'));
  if (!file) {
    console.error('Uso: node gtm-plan-lint.js <gtm-plan.md> [--strict] [--json]');
    process.exit(1);
  }
  if (!fs.existsSync(file)) { console.error('File non trovato: ' + file); process.exit(1); }
  const r = lintText(fs.readFileSync(file, 'utf8'));
  console.log(json ? JSON.stringify(r, null, 2) : render(r));
  if (strict && !r.pass) process.exit(1);
}

main();
