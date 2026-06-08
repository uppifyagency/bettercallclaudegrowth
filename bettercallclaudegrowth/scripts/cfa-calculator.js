#!/usr/bin/env node
/*
 * cfa-calculator.js — Client-Financed Acquisition & LTGP:CAC (Hormozi).
 * Computes the LTGP:CAC ratio, the CAC payback, and whether acquisition
 * is self-funded by the customer (CAC recovered within 30 days).
 * Zero dependencies. Exit 0 if OK, 1 on input error.
 *
 * Usage:
 *   node cfa-calculator.js --ltgp 3000 --cac 800
 *   node cfa-calculator.js --ltgp 3000 --cac 800 --cash30 1000 --monthly-gp 250 --json
 *   node cfa-calculator.js --selftest
 *
 * Arguments:
 *   --ltgp        Lifetime Gross Profit per customer (gross profit, not revenue)
 *   --cac         Cost to Acquire a Customer
 *   --cash30      (optional) gross profit collected within 30 days from that customer
 *   --monthly-gp  (optional) monthly gross profit per customer -> computes payback in months
 *   --json        JSON output
 */
'use strict';

function parseArgs(argv) {
  const a = {};
  for (let i = 0; i < argv.length; i++) {
    const t = argv[i];
    if (t === '--json') { a.json = true; continue; }
    if (t === '--selftest') { a.selftest = true; continue; }
    if (t.startsWith('--')) { a[t.slice(2)] = argv[++i]; }
  }
  return a;
}

function num(v, name) {
  const n = Number(v);
  if (!Number.isFinite(n)) throw new Error(`Non-numeric value for --${name}: ${v}`);
  return n;
}

function compute({ ltgp, cac, cash30, monthlyGp }) {
  if (cac <= 0) throw new Error('--cac must be > 0');
  const ratio = ltgp / cac;
  let ratioBand;
  if (ratio < 1) ratioBand = 'LOSS (LTGP < CAC: every customer burns margin)';
  else if (ratio < 3) ratioBand = 'FRAGILE (below Hormozi\'s 3:1 minimum)';
  else if (ratio < 5) ratioBand = 'HEALTHY (>=3:1)';
  else ratioBand = 'STRONG (>=5:1: plenty of room to scale acquisition)';

  const out = {
    ltgp, cac,
    ltgp_cac_ratio: Math.round(ratio * 100) / 100,
    ratio_target: '>= 3:1',
    ratio_band: ratioBand,
  };

  if (cash30 !== undefined) {
    const selfFinanced = cash30 >= cac;
    out.cash_recovered_30d = cash30;
    out.client_financed = selfFinanced;
    out.cfa_band = selfFinanced
      ? 'CLIENT-FINANCED: CAC recovered within 30 days -> self-funded acquisition, scale without a cash constraint'
      : `NOT self-funded: ${Math.round((cac - cash30) * 100) / 100} short of covering CAC in the first 30 days`;
  }

  if (monthlyGp !== undefined) {
    if (monthlyGp <= 0) throw new Error('--monthly-gp must be > 0');
    const payback = cac / monthlyGp;
    out.cac_payback_months = Math.round(payback * 100) / 100;
    out.payback_band = payback <= 1 ? 'great (<=1 month)'
      : payback <= 3 ? 'good (<=3 months)'
      : payback <= 12 ? 'acceptable (<=12 months)'
      : 'slow (>12 months: cash risk when scaling)';
  }

  return out;
}

function render(out) {
  const L = [];
  L.push('# Client-Financed Acquisition — LTGP:CAC');
  L.push(`  LTGP per customer:       ${out.ltgp}`);
  L.push(`  CAC:                     ${out.cac}`);
  L.push(`  LTGP:CAC:                ${out.ltgp_cac_ratio}:1  (target ${out.ratio_target})`);
  L.push(`  -> ${out.ratio_band}`);
  if (out.client_financed !== undefined) {
    L.push(`  Cash recovered in 30d:   ${out.cash_recovered_30d}`);
    L.push(`  -> ${out.cfa_band}`);
  }
  if (out.cac_payback_months !== undefined) {
    L.push(`  CAC payback:             ${out.cac_payback_months} months -> ${out.payback_band}`);
  }
  return L.join('\n');
}

function selftest() {
  const r = compute({ ltgp: 3000, cac: 800, cash30: 1000, monthlyGp: 250 });
  const assert = (c, m) => { if (!c) { console.error('SELFTEST FAIL: ' + m); process.exit(1); } };
  assert(r.ltgp_cac_ratio === 3.75, 'expected ratio 3.75, got ' + r.ltgp_cac_ratio);
  assert(r.client_financed === true, 'cash30 1000 >= cac 800 must be client-financed');
  assert(r.cac_payback_months === 3.2, 'expected payback 3.2, got ' + r.cac_payback_months);
  const r2 = compute({ ltgp: 500, cac: 800 });
  assert(r2.ltgp_cac_ratio === 0.63, 'expected ratio 0.63, got ' + r2.ltgp_cac_ratio);
  assert(/LOSS/.test(r2.ratio_band), 'ltgp<cac must be LOSS');
  console.log('cfa-calculator: SELFTEST OK');
}

function main() {
  const a = parseArgs(process.argv.slice(2));
  if (a.selftest) return selftest();
  if (a.ltgp === undefined || a.cac === undefined) {
    console.error('Usage: node cfa-calculator.js --ltgp <n> --cac <n> [--cash30 <n>] [--monthly-gp <n>] [--json]');
    process.exit(1);
  }
  try {
    const out = compute({
      ltgp: num(a.ltgp, 'ltgp'),
      cac: num(a.cac, 'cac'),
      cash30: a.cash30 !== undefined ? num(a.cash30, 'cash30') : undefined,
      monthlyGp: a['monthly-gp'] !== undefined ? num(a['monthly-gp'], 'monthly-gp') : undefined,
    });
    console.log(a.json ? JSON.stringify(out, null, 2) : render(out));
  } catch (e) {
    console.error('Error: ' + e.message);
    process.exit(1);
  }
}

main();
