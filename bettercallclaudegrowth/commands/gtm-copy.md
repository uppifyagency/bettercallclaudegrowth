---
description: Writes ready-to-use copy (email, landing, or post) by applying the SUCKS framework to your input and industry.
argument-hint: format (email|landing|post) + brief, offer, or draft to transform. E.g. "landing: workshop management software"
---

# /gtm-copy - Copy that SUCKS (in the good way): Specific, Useful, Clear, Kept simple, Structured

This command applies the **drew-sucks-framework** skill. It respects `userConfig.output_language` (IT default), `userConfig.industry`, `userConfig.brand_voice` and, if the format is not specified, `userConfig.default_channel`.

## Steps

1. **Load the skill.** Invoke the `drew-sucks-framework` skill by name (it activates from its description; do not use file paths): use the cheatsheet for the pre-publication run-through and dig into patterns and chapters (proof, curiosity, structure) when needed. Do NOT summarize the theory to the user: apply it.

2. **Frame the input.** From `$ARGUMENTS` derive the requested format (email / landing / post) and the brief. If the format is missing, infer it from the brief; failing that, map `userConfig.default_channel` (email→email, instagram→post, seo→landing; `auto`→infer from context). Identify One True Fan, one problem, one solution (Rule of One) grounded in the `industry`.

3. **Apply SUCKS to `$ARGUMENTS`:**
   - **S — Specific**: Rule of One + non-round numbers and concrete industry details.
   - **U — Useful / Unique / Undeniable**: clear payoff for the reader-hero, "How-I" angle + named mechanism, and Persuasion Proof Stack (association → your results → client results).
   - **C — Clear / Curious / Conversational**: clean sentences, the 4 curiosity triggers in the hooks, tone in the `brand_voice` ("would I say it in person?").
   - **K — Kept simple**: small words, rule of 1/3, low readability.
   - **S — Structured**: skimmable formatting and a slippery slope toward the CTA.

4. **Produce the final copy** already in the requested format:
   - **email**: subject + 2-3 hook variants, body, CTA.
   - **landing**: hero (headline + sub), sections with subheadings, proof, CTA.
   - **post**: hook, skimmable development, closing/CTA for the channel.

5. **Close with the SUCKS checklist** (S/U/C/K/S checked off) and 1-2 notes on what to strengthen if the user provides more proof or data.

> **Red-team (optional).** Beyond the self-checklist, invoke the `gtm-critic` agent for an adversarial SUCKS audit of the copy (Specific/Undeniable/Clear/Structured: where is the Rule of One, the Persuasion Proof Stack, the hook missing?), then integrate the fixes.
