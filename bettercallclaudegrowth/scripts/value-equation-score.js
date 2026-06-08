#!/usr/bin/env node
/*
 * value-equation-score.js — Value Equation di Hormozi (offerta).
 * (Dream Outcome x Perceived Likelihood) / (Time Delay x Effort & Sacrifice).
 * Input: 4 driver su scala 1-10. Per Dream e Likelihood: 10 = ottimo.
 * Per Time ed Effort: 10 = MOLTO alto (= peggiore, riduce il valore).
 * Restituisce indice grezzo, score normalizzato 0-100 e la leva piu' debole.
 * Zero dipendenze.
 *
 * Uso:
 *   node value-equation-score.js --dream 8 --likelihood 5 --time 7 --effort 6
 *   node value-equation-score.js --dream 8 --likelihood 5 --time 7 --effort 6 --json
 *   node value-equation-score.js --selftest
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

function check(v, name) {
  const n = Number(v);
  if (!Number.isFinite(n) || n < 1 || n > 10) throw new Error(`--${name} deve essere un numero 1-10`);
  return n;
}

function compute({ dream, likelihood, time, effort }) {
  const index = (dream * likelihood) / (time * effort); // range 0.01 .. 100
  // normalizzazione logaritmica: 0.01 -> 0, 1 -> 50, 100 -> 100
  const norm = Math.max(0, Math.min(100, Math.round(((Math.log10(index) + 2) / 4) * 100)));

  // Leva piu' debole = quella che danneggia di piu' il valore.
  // numeratore: penalita' = (10 - valore). denominatore: penalita' = valore (alto e' male).
  const levers = [
    { name: 'Dream Outcome', penalty: 10 - dream, fix: 'rendi il risultato piu\' vivido e legato allo status; non una feature' },
    { name: 'Perceived Likelihood', penalty: 10 - likelihood, fix: 'aggiungi prova, track record, garanzia: abbassa il dubbio "funziona per me?"' },
    { name: 'Time Delay', penalty: time, fix: 'accorcia il time-to-first-win; bonus che danno una vittoria rapida' },
    { name: 'Effort & Sacrifice', penalty: effort, fix: 'sposta da DIY a Done-With/For-You; togli lavoro al compratore' },
  ];
  levers.sort((a, b) => b.penalty - a.penalty);
  const weakest = levers[0];

  let band;
  if (norm < 35) band = 'DEBOLE (offerta poco irresistibile: lavora la leva piu\' debole)';
  else if (norm < 60) band = 'MEDIA (margine di miglioramento concreto)';
  else if (norm < 80) band = 'BUONA';
  else band = 'FORTE (Grand Slam: difficile dire di no)';

  return {
    drivers: { dream, likelihood, time, effort },
    value_index: Math.round(index * 100) / 100,
    score_0_100: norm,
    band,
    weakest_lever: weakest.name,
    highest_leverage_fix: weakest.fix,
    levers_ranked: levers.map((l) => ({ lever: l.name, penalty: l.penalty })),
  };
}

function render(o) {
  const L = [];
  L.push('# Value Equation — score offerta');
  L.push(`  Dream ${o.drivers.dream} | Likelihood ${o.drivers.likelihood} | Time ${o.drivers.time} | Effort ${o.drivers.effort}`);
  L.push(`  Indice grezzo:   ${o.value_index}`);
  L.push(`  Score (0-100):   ${o.score_0_100}  -> ${o.band}`);
  L.push(`  Leva piu' debole: ${o.weakest_lever}`);
  L.push(`  Mossa a leva piu' alta: ${o.highest_leverage_fix}`);
  return L.join('\n');
}

function selftest() {
  const assert = (c, m) => { if (!c) { console.error('SELFTEST FAIL: ' + m); process.exit(1); } };
  const balanced = compute({ dream: 10, likelihood: 10, time: 1, effort: 1 });
  assert(balanced.score_0_100 === 100, 'offerta perfetta deve dare 100, ottenuto ' + balanced.score_0_100);
  const neutral = compute({ dream: 10, likelihood: 10, time: 10, effort: 10 });
  assert(neutral.value_index === 1, 'indice neutro atteso 1, ottenuto ' + neutral.value_index);
  assert(neutral.score_0_100 === 50, 'score neutro atteso 50, ottenuto ' + neutral.score_0_100);
  const weak = compute({ dream: 3, likelihood: 9, time: 2, effort: 2 });
  assert(weak.weakest_lever === 'Dream Outcome', 'leva debole attesa Dream, ottenuta ' + weak.weakest_lever);
  console.log('value-equation-score: SELFTEST OK');
}

function main() {
  const a = parseArgs(process.argv.slice(2));
  if (a.selftest) return selftest();
  if (['dream', 'likelihood', 'time', 'effort'].some((k) => a[k] === undefined)) {
    console.error('Uso: node value-equation-score.js --dream <1-10> --likelihood <1-10> --time <1-10> --effort <1-10> [--json]');
    console.error('Nota: time/effort -> 10 = molto alto (peggiore).');
    process.exit(1);
  }
  try {
    const out = compute({
      dream: check(a.dream, 'dream'),
      likelihood: check(a.likelihood, 'likelihood'),
      time: check(a.time, 'time'),
      effort: check(a.effort, 'effort'),
    });
    console.log(a.json ? JSON.stringify(out, null, 2) : render(out));
  } catch (e) {
    console.error('Errore: ' + e.message);
    process.exit(1);
  }
}

main();
