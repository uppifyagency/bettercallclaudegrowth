#!/usr/bin/env node
/*
 * gtm-readiness-score.js — GTM Readiness Score 0-100.
 * Aggrega i punteggi 0-10 delle fasi GTM in un punteggio complessivo e banda,
 * indicando la fase a punteggio piu' basso = prossima priorita'.
 * Per il micro-lancio passa solo le fasi attive (jobs, offer, channel, measure).
 * Zero dipendenze.
 *
 * Uso:
 *   node gtm-readiness-score.js --jobs 8 --offer 6 --leads 7 --content 7 --channel 6 --email 5 --measure 6
 *   node gtm-readiness-score.js --jobs 8 --offer 7 --channel 7 --measure 6   # micro-launch
 *   node gtm-readiness-score.js ... --json
 *   node gtm-readiness-score.js --selftest
 *
 * Nota: una fase con una "Critica" del gtm-critic non risolta non deve superare 6
 * (applica il tetto a monte passando max 6 per quella fase).
 */
'use strict';

const PHASES = [
  ['jobs', 'Jobs/Posizionamento & ICP'],
  ['offer', 'Offerta'],
  ['leads', 'Lead generation'],
  ['content', 'Contenuti & Copy'],
  ['channel', 'Canali'],
  ['email', 'Email & Nurturing'],
  ['measure', 'Misura & Itera'],
];

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

function check(v, name) {
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0 || n > 10) throw new Error(`--${name} deve essere un numero 0-10`);
  return n;
}

function band(score) {
  if (score < 40) return 'Not Ready (fondamenta da rifare)';
  if (score < 70) return 'Fragile (lanciabile solo come test, rischi noti)';
  if (score < 85) return 'Launch-Ready';
  return 'Strong';
}

function compute(scores, capSet) {
  const cap = capSet || new Set();
  const entries = PHASES.filter(([k]) => scores[k] !== undefined).map(([k, label]) => {
    const raw = scores[k];
    const capped = cap.has(k) ? Math.min(raw, 6) : raw;
    return { key: k, label, value: capped, raw, capped: capped !== raw };
  });
  if (!entries.length) throw new Error('Nessuna fase fornita');
  const sum = entries.reduce((s, e) => s + e.value, 0);
  const max = entries.length * 10;
  const score = Math.round((sum / max) * 100);
  const weakest = entries.slice().sort((a, b) => a.value - b.value)[0];
  return {
    phases: entries.map((e) => ({ fase: e.label, punteggio: e.value, ...(e.capped ? { tetto_critica: `da ${e.raw} a 6` } : {}) })),
    active_phases: entries.length,
    micro_launch: entries.length < PHASES.length,
    capped_phases: entries.filter((e) => e.capped).map((e) => e.key),
    gtm_readiness_score: score,
    band: band(score),
    next_priority: { fase: weakest.label, punteggio: weakest.value },
  };
}

function parseCap(v) {
  if (!v) return new Set();
  return new Set(v.split(',').map((s) => s.trim()).filter(Boolean));
}

function render(o) {
  const L = [];
  L.push('# GTM Readiness Score' + (o.micro_launch ? ' (micro-launch: fasi attive)' : ''));
  o.phases.forEach((p) => L.push(`  ${String(p.punteggio).padStart(2)}/10  ${p.fase}${p.tetto_critica ? '  [tetto Critica: ' + p.tetto_critica + ']' : ''}`));
  L.push('  ' + '-'.repeat(28));
  L.push(`  SCORE: ${o.gtm_readiness_score}/100  -> ${o.band}`);
  L.push(`  Prossima priorita': ${o.next_priority.fase} (${o.next_priority.punteggio}/10)`);
  return L.join('\n');
}

function selftest() {
  const assert = (c, m) => { if (!c) { console.error('SELFTEST FAIL: ' + m); process.exit(1); } };
  const full = compute({ jobs: 7, offer: 7, leads: 7, content: 7, channel: 7, email: 7, measure: 7 });
  assert(full.gtm_readiness_score === 70, 'atteso 70, ottenuto ' + full.gtm_readiness_score);
  assert(full.band.startsWith('Launch-Ready'), 'banda attesa Launch-Ready');
  assert(full.micro_launch === false, 'sette fasi non sono micro-launch');
  const micro = compute({ jobs: 8, offer: 8, channel: 8, measure: 8 });
  assert(micro.gtm_readiness_score === 80, 'micro atteso 80, ottenuto ' + micro.gtm_readiness_score);
  assert(micro.micro_launch === true, 'quattro fasi = micro-launch');
  const weak = compute({ jobs: 9, offer: 3, leads: 8, content: 7, channel: 6, email: 6, measure: 5 });
  assert(weak.next_priority.fase === 'Offerta', 'priorita\' attesa Offerta, ottenuta ' + weak.next_priority.fase);
  // tetto Critica: offerta 9 con Critica non risolta -> deve scendere a 6
  const capped = compute({ jobs: 8, offer: 9, leads: 7, content: 7, channel: 7, email: 7, measure: 7 }, new Set(['offer']));
  assert(capped.phases.find((p) => p.fase === 'Offerta').punteggio === 6, 'offerta con cap deve valere 6');
  assert(capped.capped_phases.includes('offer'), 'offer deve risultare capped');
  const uncapped = compute({ jobs: 8, offer: 9, leads: 7, content: 7, channel: 7, email: 7, measure: 7 });
  assert(uncapped.gtm_readiness_score > capped.gtm_readiness_score, 'il cap deve abbassare lo score');
  console.log('gtm-readiness-score: SELFTEST OK');
}

function main() {
  const a = parseArgs(process.argv.slice(2));
  if (a.selftest) return selftest();
  const scores = {};
  let any = false;
  for (const [k] of PHASES) {
    if (a[k] !== undefined) { scores[k] = check(a[k], k); any = true; }
  }
  if (!any) {
    console.error('Uso: node gtm-readiness-score.js --jobs <0-10> --offer <0-10> [--leads --content --channel --email --measure] [--cap offer,leads]');
    process.exit(1);
  }
  try {
    const capSet = parseCap(a.cap);
    const result = compute(scores, capSet);
    console.log(a.json ? JSON.stringify(result, null, 2) : render(result));
  } catch (e) {
    console.error('Errore: ' + e.message);
    process.exit(1);
  }
}

main();
