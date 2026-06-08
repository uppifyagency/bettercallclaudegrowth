#!/usr/bin/env node
/*
 * cfa-calculator.js — Client-Financed Acquisition & LTGP:CAC (Hormozi).
 * Calcola il rapporto LTGP:CAC, il payback del CAC e se l'acquisizione
 * e' auto-finanziata dal cliente (CAC recuperato entro 30 giorni).
 * Zero dipendenze. Exit 0 se OK, 1 su errore di input.
 *
 * Uso:
 *   node cfa-calculator.js --ltgp 3000 --cac 800
 *   node cfa-calculator.js --ltgp 3000 --cac 800 --cash30 1000 --monthly-gp 250 --json
 *   node cfa-calculator.js --selftest
 *
 * Argomenti:
 *   --ltgp        Lifetime Gross Profit per cliente (profitto lordo, non fatturato)
 *   --cac         Cost to Acquire a Customer
 *   --cash30      (opz.) profitto lordo incassato entro 30 giorni da quel cliente
 *   --monthly-gp  (opz.) profitto lordo mensile per cliente -> calcola payback in mesi
 *   --json        output JSON
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
  if (!Number.isFinite(n)) throw new Error(`Valore non numerico per --${name}: ${v}`);
  return n;
}

function compute({ ltgp, cac, cash30, monthlyGp }) {
  if (cac <= 0) throw new Error('--cac deve essere > 0');
  const ratio = ltgp / cac;
  let ratioBand;
  if (ratio < 1) ratioBand = 'PERDITA (LTGP < CAC: ogni cliente brucia margine)';
  else if (ratio < 3) ratioBand = 'FRAGILE (sotto il minimo 3:1 di Hormozi)';
  else if (ratio < 5) ratioBand = 'SANO (>=3:1)';
  else ratioBand = 'FORTE (>=5:1: ampio spazio per scalare l\'acquisizione)';

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
      ? 'CLIENT-FINANCED: CAC recuperato entro 30 giorni -> acquisizione auto-finanziata, scala senza vincolo di cassa'
      : `NON auto-finanziata: mancano ${Math.round((cac - cash30) * 100) / 100} per coprire il CAC nei primi 30 giorni`;
  }

  if (monthlyGp !== undefined) {
    if (monthlyGp <= 0) throw new Error('--monthly-gp deve essere > 0');
    const payback = cac / monthlyGp;
    out.cac_payback_months = Math.round(payback * 100) / 100;
    out.payback_band = payback <= 1 ? 'ottimo (<=1 mese)'
      : payback <= 3 ? 'buono (<=3 mesi)'
      : payback <= 12 ? 'accettabile (<=12 mesi)'
      : 'lento (>12 mesi: rischio di cassa nello scaling)';
  }

  return out;
}

function render(out) {
  const L = [];
  L.push('# Client-Financed Acquisition — LTGP:CAC');
  L.push(`  LTGP per cliente:        ${out.ltgp}`);
  L.push(`  CAC:                     ${out.cac}`);
  L.push(`  LTGP:CAC:                ${out.ltgp_cac_ratio}:1  (target ${out.ratio_target})`);
  L.push(`  -> ${out.ratio_band}`);
  if (out.client_financed !== undefined) {
    L.push(`  Cassa recuperata 30gg:   ${out.cash_recovered_30d}`);
    L.push(`  -> ${out.cfa_band}`);
  }
  if (out.cac_payback_months !== undefined) {
    L.push(`  CAC payback:             ${out.cac_payback_months} mesi -> ${out.payback_band}`);
  }
  return L.join('\n');
}

function selftest() {
  const r = compute({ ltgp: 3000, cac: 800, cash30: 1000, monthlyGp: 250 });
  const assert = (c, m) => { if (!c) { console.error('SELFTEST FAIL: ' + m); process.exit(1); } };
  assert(r.ltgp_cac_ratio === 3.75, 'ratio atteso 3.75, ottenuto ' + r.ltgp_cac_ratio);
  assert(r.client_financed === true, 'cash30 1000 >= cac 800 deve essere client-financed');
  assert(r.cac_payback_months === 3.2, 'payback atteso 3.2, ottenuto ' + r.cac_payback_months);
  const r2 = compute({ ltgp: 500, cac: 800 });
  assert(r2.ltgp_cac_ratio === 0.63, 'ratio atteso 0.63, ottenuto ' + r2.ltgp_cac_ratio);
  assert(/PERDITA/.test(r2.ratio_band), 'ltgp<cac deve essere PERDITA');
  console.log('cfa-calculator: SELFTEST OK');
}

function main() {
  const a = parseArgs(process.argv.slice(2));
  if (a.selftest) return selftest();
  if (a.ltgp === undefined || a.cac === undefined) {
    console.error('Uso: node cfa-calculator.js --ltgp <n> --cac <n> [--cash30 <n>] [--monthly-gp <n>] [--json]');
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
    console.error('Errore: ' + e.message);
    process.exit(1);
  }
}

main();
