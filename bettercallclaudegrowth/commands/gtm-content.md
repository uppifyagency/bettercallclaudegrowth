---
description: Content strategy (niche, channels, pillars) and editorial calendar based on the frameworks from "Doing Content Right".
argument-hint: topic/product + target audience (e.g. "workshop management tool for independent mechanics")
---

# /gtm-content - Content strategy and editorial calendar

Apply the **doing-content-right** skill to the user's input.

Respect `userConfig`: write in `output_language` (IT by default), calibrate tone and vocabulary to `brand_voice`, contextualize everything to the `industry`, and favor `default_channel` when choosing distribution channels.

## Steps

1. **Load the skill.** Invoke the `doing-content-right` skill by name (it activates from its description; do not use file paths) and apply its frameworks, going deeper with the cheatsheet, patterns, and the relevant chapter (niche, distribution, SEO, monetization) when needed.

2. **Apply the frameworks to `$ARGUMENTS` and the industry.** Do not copy the book's content: use these frameworks by name and adapt them to the concrete case:
   - **Personal Monopoly** + **niche & positioning** → define the defensible niche and the positioning (including the "what for who" in a single sentence).
   - **distribution channels** → select and prioritize the channels consistent with `default_channel` and the industry.
   - **SEO** → identify the topics with informational intent and the long-tail opportunities.
   - **audience growth** and **monetization** → indicate the growth lever and the monetization horizon consistent with the positioning.

3. **Produce the structured output:**
   - **Content strategy** — (a) Niche & positioning; (b) Prioritized distribution channels with rationale; (c) 3-5 editorial pillars anchored to the Personal Monopoly and the industry.
   - **Editorial calendar** — a 4-week table: for each release indicate date/week, pillar, format, channel, angle/title, and intent (informational/awareness/conversion).

Keep the output actionable and faithful to the `brand_voice`; flag where tactics or metrics from the book (2020) need verification before acting.

> **Red-team (optional).** Invoke the `gtm-critic` agent to stress-test the strategy and calendar (is the niche truly defensible? are the pillars anchored to the Personal Monopoly or generic? are the channels consistent with the archetype?), then incorporate the fixes.
