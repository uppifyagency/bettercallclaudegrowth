#!/usr/bin/env node
/*
 * gtm-plan-lint.js — checks that a gtm-plan.md contains the expected sections.
 * Verifies the archetype/stage header, offer, critic checkpoint,
 * synthesis/falsifiability, GTM Readiness Score, and KPIs.
 * Patterns match English and Italian plans (output_language EN/IT).
 * Default: exit 0 with warnings. With --strict: exit 1 if a required section is missing.
 * Zero dependencies.
 *
 * Usage:
 *   node gtm-plan-lint.js gtm-plan.md
 *   node gtm-plan-lint.js gtm-plan.md --strict --json
 *   node gtm-plan-lint.js --selftest
 */
'use strict';
const fs = require('fs');

const CHECKS = [
  { name: 'Archetype/stage header', re: /archet|stage|stadio/i },
  { name: 'Offer section', re: /offer/i },
  { name: 'Critic checkpoint', re: /critic/i },
  { name: 'Synthesis / falsifiability', re: /perceive|synthes|sintesi|falsif/i },
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
  L.push(r.pass ? '  OK: all expected sections present' : `  Missing: ${r.missing.join(', ')}`);
  return L.join('\n');
}

function selftest() {
  const assert = (c, m) => { if (!c) { console.error('SELFTEST FAIL: ' + m); process.exit(1); } };
  const good = 'Archetype: b2b-saas, stage scaling. Grand Slam Offer. Critic: ... PERCEIVE ANALYZE synthesis, falsifiable. GTM Readiness Score 72/100. KPI: trials.';
  const bad = 'Just a rough offer draft, nothing else.';
  assert(lintText(good).pass === true, 'the complete plan must pass');
  assert(lintText(bad).pass === false, 'the incomplete plan must fail');
  assert(lintText(bad).missing.includes('KPI'), 'bad must flag missing KPI');
  console.log('gtm-plan-lint: SELFTEST OK');
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('--selftest')) return selftest();
  const json = argv.includes('--json');
  const strict = argv.includes('--strict');
  const file = argv.find((t) => !t.startsWith('--'));
  if (!file) {
    console.error('Usage: node gtm-plan-lint.js <gtm-plan.md> [--strict] [--json]');
    process.exit(1);
  }
  if (!fs.existsSync(file)) { console.error('File not found: ' + file); process.exit(1); }
  const r = lintText(fs.readFileSync(file, 'utf8'));
  console.log(json ? JSON.stringify(r, null, 2) : render(r));
  if (strict && !r.pass) process.exit(1);
}

main();
