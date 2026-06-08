---
description: Uncovers the customer's Jobs to Be Done (progress + circumstance, functional/social/emotional dimensions), the Forces of Progress, and the Big/Little Hire risk — the demand-side foundation that precedes positioning and offer.
argument-hint: product/service + customer and usage situation (e.g. "digital travel guides for tourists in Italy")
---

# /gtm-jobs - Jobs to Be Done in Christensen style

This command applies the `christensen-jobs` skill (Jobs Theory from *Competing Against Luck*). It is the **upstream demand-side layer**: it defines *what progress* the customer is seeking, not *what you sell*. Its outputs constrain positioning, offer, and copy. Respect `userConfig.output_language` (IT by default), `userConfig.industry`, `userConfig.brand_voice`, and `userConfig.default_channel`.

User input: $ARGUMENTS

## Steps

1. **Load the skill.** Invoke the `christensen-jobs` skill by name (it activates from its description; do not use file paths) and apply its frameworks, going deeper with cheatsheets/patterns when needed. Do NOT copy the book's content: use it only as an operating lens.

2. **Define the Job(s).** For $ARGUMENTS write the job as a sentence — *"When [circumstance], help me [progress, verb], so I can [deeper purpose]"* — using **verbs and nouns**, never adjectives. Check the level of abstraction (broad enough to see the true competitive set, narrow enough to guide design). If the circumstances differ, isolate **distinct jobs** (the "Milk Shake Dilemma"): same product, different jobs → different messages and tiers.

3. **Map the three dimensions.** For each job make the **functional, social, and emotional** components explicit. Flag where the social/emotional is underweighted: that is usually where you win and where generic competitors (Google, AI, commodities) cannot follow.

4. **Pinpoint the circumstance and the struggling moment.** Define the **trigger** (precipitating event) and the time window. This is what targeting and forms must read — not demographics.

5. **Frame the real competitive field.** Always include **nonconsumption** ("competing with nothing" / the DIY route) and **workarounds/compensating behaviors**. What does the customer "fire" to "hire" your solution?

6. **Analyze the Forces of Progress.** Map the four forces: **Push** of the situation + **Pull** of the solution (which drive change) vs **Habit** of the present + **Anxiety** (of choosing + of using) which hold it back. The switch happens only if push+pull > habit+anxiety. Indicate the **binding constraint** and the cheapest lever (often reducing anxiety/habit, not adding features).

7. **Big Hire / Little Hire.** Distinguish the purchase (Big Hire) from the actual recurring use (Little Hire). Highlight the "bought and never used" risk and how to design the experience so the product is *actually used* (that is what generates reviews and referrals).

8. **Job Spec → Résumé.** Synthesize the **job spec** (dimensions, trade-offs, competitive set, obstacles/anxieties to remove) as a bridge to the offer: what the product must "have on its résumé" to be hired.

9. **Structured output.** Return in distinct sections: (a) the defined Job(s), (b) the three dimensions, (c) circumstance and trigger, (d) competitive field + nonconsumption, (e) Forces of Progress with the binding constraint, (f) Big/Little Hire, (g) Job Spec for the offer. Align tone to `brand_voice`.

10. **Final red-team.** Invoke the `gtm-critic` agent to stress-test the analysis (job at the wrong level of abstraction? job defined with adjectives instead of verbs? social/emotional ignored? nonconsumption forgotten? opposing forces not addressed?), then integrate the fixes into the final version.

> **Funnel hook:** this is step 0 of the go-to-market. The Job(s) defined here feed `/gtm-positioning` (the competitive frame is born from the job), `/gtm-offer` (the Job Spec becomes the value stack), and `/gtm-copy` (the hero answers a force, not a feature).
