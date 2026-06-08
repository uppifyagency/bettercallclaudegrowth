---
description: Set up Meta/Instagram conversion campaigns with structure, audience, creative, and budget for your industry.
argument-hint: [offer/product + objective + ICP + GEO/budget, e.g. "B2B course for HR, leads, Italy+EU, 500/day"]
---

# /gtm-instagram - Meta/Instagram conversion campaign setup

This command applies the **instagram-performance-marketing** skill. Respect `userConfig.output_language` (IT by default), `userConfig.industry`, `userConfig.brand_voice`, and `userConfig.default_channel`.

User input: `$ARGUMENTS`

## Steps

1. **Load the skill.** Invoke the `instagram-performance-marketing` skill by name (it activates from its description; do not use file paths) and apply its frameworks, going deeper with the cheatsheet, patterns, and the relevant chapter (audience/lookalike, GEO/CPM, creative, ad settings, retargeting, A/B test) when needed. Do not copy the book's content: use it only to reason.

2. **Frame the objective.** Extract from `$ARGUMENTS` the offer, desired action, ICP, and constraints (GEO, budget, available first-party data). Adapt everything to `userConfig.industry` and coordinate with `userConfig.default_channel`.

3. **Choose the campaign objective.** Apply the **campaign objectives** framework: select the objective that matches the exact desired action (conversions/leads/installs) and justify the choice on the CPM-per-objective scale.

4. **Build audience and GEO.** Apply **audience & lookalike targeting** (Custom Audience from first-party data -> tiered Lookalike, with an optional intent-based supplement) and **GEO/CPM reduction** (set of high-conversion countries vs emerging markets, broad for tests, specific for retargeting) for the industry.

5. **Define creative and budget.** Apply **ad creative** (AI video/UGC-style, 2-3 CTR-oriented variants) and **accelerated spend** (front-loading, learning phase ~50 events, sterile launch with a single ad set) to set up the launch structure and daily budget.

6. **Add retargeting and tests.** Apply **retargeting** (segments via Pixel, frequency cap) and **A/B test** (one variable, 7-14 day window) as the plan for the post-launch phase, consistent with **training the algorithm** (CPM -> CPA loop).

7. **Produce the structured output:**
   - Summary: offer, objective, ICP, constraints.
   - Campaign structure (objective, ad set, performance goal, key ad settings).
   - Audience + GEO spec (Custom/Lookalike, tiers, target countries).
   - Creative brief (formats, angles, variants, CTA).
   - Budget and launch plan (budget/day, learning phase threshold, kill rule).
   - Retargeting + A/B test plan for the next 14 days.

> **Red-team (optional).** Invoke the `gtm-critic` agent to stress-test the setup (campaign objective ↔ desired action consistent? offer and creative aligned? ROAS/CPA guardrails vs margin? budget not scaled too early?), then integrate the fixes.
