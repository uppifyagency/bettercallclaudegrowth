---
description: Generate a lead generation plan with a prioritized Core Four and lead magnet design for your industry.
argument-hint: [offer/product + ICP + channel or budget, e.g. "B2B course for HR, budget 500/month"]
---

# /gtm-leads - Lead generation plan with Core Four and lead magnet

This command applies the **hormozi-leads** skill. Respect `userConfig.output_language` (IT by default), `userConfig.industry`, `userConfig.brand_voice` and `userConfig.default_channel`.

User input: `$ARGUMENTS`

## Steps

1. **Load the skill.** Invoke the `hormozi-leads` skill by name (it activates from its description; do not use file paths) and apply its frameworks, going deeper with the cheatsheet, patterns and the relevant chapter (lead magnet, cold outreach, acquisition math, referrals, affiliates) when needed. Do not copy the book's content: use it only to reason.

2. **Frame the goal.** From `$ARGUMENTS`, extract the offer/core offer, the ICP and the constraints (channel, budget, resources). Adapt everything to `userConfig.industry` and to `userConfig.default_channel`.

3. **Prioritize the Core Four.** Evaluate the four methods — **warm outreach**, **cold outreach**, **content** (post free content), **paid ads** — against resources, budget and business maturity. Assign a priority (now / next / later) following the logic of the Roadmap and the Rule of 100. For each chosen method, indicate a concrete action, target volume and first move.

4. **Design the Lead Magnet.** Use the **Lead Magnet** framework (the 3 types and the 7 steps) to design a free/low-cost offer that solves a narrow problem of the industry and reveals the bigger problem that the core offer solves. Define the type, a testable name, the consumption format and the CTA.

5. **Add the growth lever.** Indicate how to trigger **referrals** (systematic ask, quota target) and/or **affiliates**, and note the economic constraint **Client-Financed Acquisition** (CAC recovery within 30 days, LTGP:CAC ≥ 3:1) as a guardrail for scaling paid ads. If you have the numbers, verify it with: `node "${CLAUDE_PLUGIN_ROOT}/scripts/cfa-calculator.js" --ltgp <n> --cac <n> [--cash30 <n>] [--monthly-gp <n>]`.

6. **Produce the structured output:**
   - Summary: offer, ICP, constraints.
   - Prioritized Core Four table (method, priority, action, volume, first move).
   - Lead Magnet spec (type, narrow problem, name, consumption, CTA).
   - Referral/affiliate lever + note on CAC and LTGP:CAC.
   - First operational step for the next 7 days.

> **Red-team (optional).** For a high-impact plan, invoke the `gtm-critic` agent to stress-test the lead plan (is the Core Four truly credible or "post and pray"? is the lead magnet narrow enough? is the CAC/LTGP:CAC math sustainable?), then integrate the fixes.
