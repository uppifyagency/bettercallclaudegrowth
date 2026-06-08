---
description: Defines the ICP, positioning statement, Personal Monopoly and differentiating angle based on your input and industry.
argument-hint: who you are + what you offer + who you serve (e.g. "tax consultant for e-commerce, target SMBs")
---

# /gtm-positioning - ICP, Personal Monopoly and differentiating angle

This command applies the **butcher-productize** and **doing-content-right** skills (exact folder names in `skills/`).

It works in Italian (userConfig.output_language, IT default) and tailors every output to userConfig.industry, userConfig.brand_voice and userConfig.default_channel.

User input: $ARGUMENTS

## Steps

1. **Load the skills.** Invoke the `butcher-productize` and `doing-content-right` skills by name (they activate from their description; do not use file paths) and apply their frameworks, going deeper with cheatsheets/patterns when needed. Do not copy the books' content: use the frameworks as a working lens.

2. **Define the ICP.** Apply niche & positioning from **doing-content-right** (niche = targeted, not small) to delimit the ideal customer of $ARGUMENTS within the industry: who they are, their biggest pain, where they already search. Synthesize into a sharp ICP.

3. **Build the Personal Monopoly.** Use Personal Monopoly and the Ikigai Idea (**doing-content-right**) together with Productize Yourself and the Uniqueness Question from the Brand Iceberg (**butcher-productize**) to isolate what only this person is strong at and loves doing. Cite permissionless mentors as a reference source, without explaining them.

4. **Write the positioning statement.** Produce the "What for who" one-liner (**doing-content-right**): pain solved + differentiator + core audience, aligned with brand_voice and default_channel.

5. **Extract the differentiating angle.** Keep the 3-step method (reps -> processes -> scale) from **butcher-productize** in mind as a long-term trajectory, and formulate the angle that makes the positioning defensible and out of the "more of the same".

6. **Structured output.** Return distinct sections: (a) ICP, (b) Positioning statement, (c) Personal Monopoly, (d) Differentiating angle.

7. **Final red-team.** Invoke the **gtm-critic** agent to stress-test the ICP, statement, Personal Monopoly and angle (genericity, indefensible niche, unsustainable claims); integrate the proposed fixes into the final version.
