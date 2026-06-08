---
description: Design an email automation workflow (goal+KPI, segment, trigger, delay, if/then, sequence) starting from the input.
argument-hint: "<flow or goal, e.g. welcome series | abandoned cart | VIP winback | lead-gen drip> [+ client/industry context]"
---

# /gtm-email - Email automation workflow

This command applies the `advanced-email-marketing` skill.

Always respect `userConfig.output_language` (IT default), `userConfig.industry`, `userConfig.brand_voice` and `userConfig.default_channel`.

## Steps

1. **Load the skill.** Invoke the `advanced-email-marketing` skill by name (it activates from its description; do not use file paths) and apply its frameworks, going deeper with cheatsheets, patterns and the relevant chapter (RFM, advanced segments, specific flow) when needed. Do NOT copy the books' content: use it only to reason.

2. **Frame the input.** Analyze `$ARGUMENTS` and the `industry` to understand the scenario (lead-gen vs e-commerce), the goal of the flow and the audience. If essential data is missing (product cycle, desired length, exclusions), ask 1-2 targeted questions before proceeding.

3. **Apply the frameworks.** Work in the order of the **workflow grammar**: start from the **customer journey** and choose the correct activation trigger among the **8 triggers**. Define the **segment** (via **RFM segmentation** for e-commerce or scoring for lead-gen) and the excluded ones. Set delays, **if/then** and branching. Model the right flow among **welcome / drip / abandoned cart / winback** (and its related Sunset). Verify **deliverability**, **GDPR** compliance and plan at least one **A/B test** on subject or timing.

4. **Produce the structured output** in the `brand_voice`:
   - **Goal + KPI** (and who to EXCLUDE)
   - **Segment** (definition + size check)
   - **Trigger / Enrollment** (exact condition with AND/OR/NOT, one-time entry or always-on)
   - **Email sequence**: for each -> delay, if/then branch, subject + preview text, content angle, CTA
   - **Operational notes**: deliverability, GDPR/consent, dynamic vs static coupon, planned A/B test

Close with the skill's pre-launch checklist as a final check before activation.

> **Red-team (optional).** Invoke the `gtm-critic` agent to stress-test the flow (offer↔email message consistency, frictions and exit points, deliverability/GDPR, correct trigger), then integrate the fixes.
