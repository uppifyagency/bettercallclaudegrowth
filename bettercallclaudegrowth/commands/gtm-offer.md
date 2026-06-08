---
description: Builds a Grand Slam Offer (promise, price, bonuses, guarantee, scarcity/urgency, name) for the specified offer or product.
argument-hint: product/service + target market/avatar (e.g. "auto parts consulting for independent repair shops")
---

# /gtm-offer - Grand Slam Offer, Hormozi style

This command applies the `hormozi-offers` skill. Respect `userConfig.output_language` (IT by default), `userConfig.industry`, `userConfig.brand_voice` and `userConfig.default_channel`.

User input: $ARGUMENTS

## Steps

1. **Load the skill.** Invoke the `hormozi-offers` skill by name (it activates from its description; do not use file paths) and apply its frameworks, digging deeper into cheatsheets/patterns when needed. Do NOT copy the book's content: use it only as an operational guide.

2. **Frame the market.** Briefly assess the input against the **Starving Crowd** (Pain, Purchasing Power, Easy to Target, Growing) to anchor the offer to a real avatar in the `industry`.

3. **Apply the Value Equation.** For the offer in $ARGUMENTS, work the four drivers: raise **Dream Outcome** and **Perceived Likelihood**, lower **Time Delay** and **Effort & Sacrifice**. Keep these drivers as the compass for every subsequent element. For an objective score and the weakest lever, run: `node "${CLAUDE_PLUGIN_ROOT}/scripts/value-equation-score.js" --dream <1-10> --likelihood <1-10> --time <1-10> --effort <1-10>` (time/effort: 10 = very high).

4. **Compose the Grand Slam Offer** and return the structured spec:
   - **Promise** — specific Dream Outcome tied to the avatar's status.
   - **Price** — premium price with rationale (price-to-value); never discounts.
   - **Bonuses** — 3-5 bonuses, each with a name, the problem it solves and an anchored value.
   - **Guarantee** — choose and justify the type (unconditional/conditional/anti-guarantee/implied); you can stack them.
   - **Scarcity/Urgency** — honest levers on limited supply and/or deadline.
   - **Name** — apply the **MAGIC** formula (3-5 components) for a short, magnetic name.

5. **Align voice and channel.** Adapt tone and format to `brand_voice` and the `default_channel` set in the configuration.

6. **Final red-team.** Invoke the `gtm-critic` agent to stress-test the offer spec (credible promise? defensible price? risky guarantee? honest scarcity?), then fold the proposed fixes into the final version.
