#!/usr/bin/env node
/*
 * gtm-readiness-score.js — GTM Readiness Score 0-100.
 * Aggregates the 0-10 scores of the GTM phases into an overall score and band,
 * pointing to the lowest-scoring phase = next priority.
 * For a micro-launch, pass only the active phases (jobs, offer, channel, measure).
 * Zero dependencies.
 *
 * Usage:
 *   node gtm-readiness-score.js --jobs 8 --offer 6 --leads 7 --content 7 --channel 6 --email 5 --measure 6
 *   node gtm-readiness-score.js --jobs 8 --offer 7 --channel 7 --measure 6   # micro-launch
 *   node gtm-readiness-score.js ... --json
 *   node gtm-readiness-score.js --selftest
 *
 * Note: a phase with an unresolved gtm-critic "Critical" finding must not exceed 6
 * (apply the cap upstream by passing it in --cap for that phase).
 */
'use strict';

const PHASES = [
  ['jobs', 'Jobs/Positioning & ICP'],
  ['offer', 'Offer'],
  ['leads', 'Lead generation'],
  ['content', 'Content & Copy'],
  ['channel', 'Channels'],
  ['email', 'Email & Nurturing'],
  ['measure', 'Measure & Iterate'],
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
  if (!Number.isFinite(n) || n < 0 || n > 10) throw new Error(`--${name} must be a number 0-10`);
  return n;
}

function band(score) {
  if (score < 40) return 'Not Ready (foundations to rebuild)';
  if (score < 70) return 'Fragile (launchable only as a test, known risks)';
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
  if (!entries.length) throw new Error('No phases provided');
  const sum = entries.reduce((s, e) => s + e.value, 0);
  const max = entries.length * 10;
  const score = Math.round((sum / max) * 100);
  const weakest = entries.slice().sort((a, b) => a.value - b.value)[0];
  return {
    phases: entries.map((e) => ({ phase: e.label, score: e.value, ...(e.capped ? { critical_cap: `from ${e.raw} to 6` } : {}) })),
    active_phases: entries.length,
    micro_launch: entries.length < PHASES.length,
    capped_phases: entries.filter((e) => e.capped).map((e) => e.key),
    gtm_readiness_score: score,
    band: band(score),
    next_priority: { phase: weakest.label, score: weakest.value },
  };
}

function parseCap(v) {
  if (!v) return new Set();
  return new Set(v.split(',').map((s) => s.trim()).filter(Boolean));
}

function render(o) {
  const L = [];
  L.push('# GTM Readiness Score' + (o.micro_launch ? ' (micro-launch: active phases)' : ''));
  o.phases.forEach((p) => L.push(`  ${String(p.score).padStart(2)}/10  ${p.phase}${p.critical_cap ? '  [critical cap: ' + p.critical_cap + ']' : ''}`));
  L.push('  ' + '-'.repeat(28));
  L.push(`  SCORE: ${o.gtm_readiness_score}/100  -> ${o.band}`);
  L.push(`  Next priority: ${o.next_priority.phase} (${o.next_priority.score}/10)`);
  return L.join('\n');
}

function selftest() {
  const assert = (c, m) => { if (!c) { console.error('SELFTEST FAIL: ' + m); process.exit(1); } };
  const full = compute({ jobs: 7, offer: 7, leads: 7, content: 7, channel: 7, email: 7, measure: 7 });
  assert(full.gtm_readiness_score === 70, 'expected 70, got ' + full.gtm_readiness_score);
  assert(full.band.startsWith('Launch-Ready'), 'expected band Launch-Ready');
  assert(full.micro_launch === false, 'seven phases are not a micro-launch');
  const micro = compute({ jobs: 8, offer: 8, channel: 8, measure: 8 });
  assert(micro.gtm_readiness_score === 80, 'micro expected 80, got ' + micro.gtm_readiness_score);
  assert(micro.micro_launch === true, 'four phases = micro-launch');
  const weak = compute({ jobs: 9, offer: 3, leads: 8, content: 7, channel: 6, email: 6, measure: 5 });
  assert(weak.next_priority.phase === 'Offer', 'expected priority Offer, got ' + weak.next_priority.phase);
  // critical cap: offer 9 with an unresolved Critical finding -> must drop to 6
  const capped = compute({ jobs: 8, offer: 9, leads: 7, content: 7, channel: 7, email: 7, measure: 7 }, new Set(['offer']));
  assert(capped.phases.find((p) => p.phase === 'Offer').score === 6, 'capped offer must equal 6');
  assert(capped.capped_phases.includes('offer'), 'offer must be capped');
  const uncapped = compute({ jobs: 8, offer: 9, leads: 7, content: 7, channel: 7, email: 7, measure: 7 });
  assert(uncapped.gtm_readiness_score > capped.gtm_readiness_score, 'the cap must lower the score');
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
    console.error('Usage: node gtm-readiness-score.js --jobs <0-10> --offer <0-10> [--leads --content --channel --email --measure] [--cap offer,leads]');
    process.exit(1);
  }
  try {
    const capSet = parseCap(a.cap);
    const result = compute(scores, capSet);
    console.log(a.json ? JSON.stringify(result, null, 2) : render(result));
  } catch (e) {
    console.error('Error: ' + e.message);
    process.exit(1);
  }
}

main();
