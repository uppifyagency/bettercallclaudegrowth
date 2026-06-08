#!/usr/bin/env node
/*
 * value-equation-score.js — Hormozi's Value Equation (offer).
 * (Dream Outcome x Perceived Likelihood) / (Time Delay x Effort & Sacrifice).
 * Input: 4 drivers on a 1-10 scale. For Dream and Likelihood: 10 = best.
 * For Time and Effort: 10 = VERY high (= worst, lowers the value).
 * Returns the raw index, a normalized 0-100 score, and the weakest lever.
 * Zero dependencies.
 *
 * Usage:
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
  if (!Number.isFinite(n) || n < 1 || n > 10) throw new Error(`--${name} must be a number 1-10`);
  return n;
}

function compute({ dream, likelihood, time, effort }) {
  const index = (dream * likelihood) / (time * effort); // range 0.01 .. 100
  // logarithmic normalization: 0.01 -> 0, 1 -> 50, 100 -> 100
  const norm = Math.max(0, Math.min(100, Math.round(((Math.log10(index) + 2) / 4) * 100)));

  // Weakest lever = the one hurting the value the most.
  // numerator: penalty = (10 - value). denominator: penalty = value (high is bad).
  const levers = [
    { name: 'Dream Outcome', penalty: 10 - dream, fix: 'make the outcome more vivid and status-linked; not a feature' },
    { name: 'Perceived Likelihood', penalty: 10 - likelihood, fix: 'add proof, track record, guarantee: lower the "will it work for me?" doubt' },
    { name: 'Time Delay', penalty: time, fix: 'shorten time-to-first-win; bonuses that deliver a quick win' },
    { name: 'Effort & Sacrifice', penalty: effort, fix: 'move from DIY to Done-With/For-You; take work off the buyer' },
  ];
  levers.sort((a, b) => b.penalty - a.penalty);
  const weakest = levers[0];

  let band;
  if (norm < 35) band = 'WEAK (not very irresistible: work the weakest lever)';
  else if (norm < 60) band = 'MEDIUM (real room for improvement)';
  else if (norm < 80) band = 'GOOD';
  else band = 'STRONG (Grand Slam: hard to say no)';

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
  L.push('# Value Equation — offer score');
  L.push(`  Dream ${o.drivers.dream} | Likelihood ${o.drivers.likelihood} | Time ${o.drivers.time} | Effort ${o.drivers.effort}`);
  L.push(`  Raw index:        ${o.value_index}`);
  L.push(`  Score (0-100):    ${o.score_0_100}  -> ${o.band}`);
  L.push(`  Weakest lever:    ${o.weakest_lever}`);
  L.push(`  Highest-leverage move: ${o.highest_leverage_fix}`);
  return L.join('\n');
}

function selftest() {
  const assert = (c, m) => { if (!c) { console.error('SELFTEST FAIL: ' + m); process.exit(1); } };
  const balanced = compute({ dream: 10, likelihood: 10, time: 1, effort: 1 });
  assert(balanced.score_0_100 === 100, 'a perfect offer must score 100, got ' + balanced.score_0_100);
  const neutral = compute({ dream: 10, likelihood: 10, time: 10, effort: 10 });
  assert(neutral.value_index === 1, 'neutral index expected 1, got ' + neutral.value_index);
  assert(neutral.score_0_100 === 50, 'neutral score expected 50, got ' + neutral.score_0_100);
  const weak = compute({ dream: 3, likelihood: 9, time: 2, effort: 2 });
  assert(weak.weakest_lever === 'Dream Outcome', 'weak lever expected Dream, got ' + weak.weakest_lever);
  console.log('value-equation-score: SELFTEST OK');
}

function main() {
  const a = parseArgs(process.argv.slice(2));
  if (a.selftest) return selftest();
  if (['dream', 'likelihood', 'time', 'effort'].some((k) => a[k] === undefined)) {
    console.error('Usage: node value-equation-score.js --dream <1-10> --likelihood <1-10> --time <1-10> --effort <1-10> [--json]');
    console.error('Note: time/effort -> 10 = very high (worst).');
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
    console.error('Error: ' + e.message);
    process.exit(1);
  }
}

main();
