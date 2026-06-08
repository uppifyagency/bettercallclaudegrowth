# Chapter 11: Ad Settings

## Core Idea
Ad settings are the backbone of a Meta performance campaign: they decide who sees your ad, when, and at what cost. The chapter is a click-by-click walkthrough of how to configure every campaign, ad set, and ad-level setting to minimize CPM/CPA, clear the learning phase fast, and strip out dynamic elements that hurt conversions.

## Frameworks Introduced
- **How to Choose a Campaign Objective with the Lowest CPM**: The conversion location tied to your objective drives CPM. Engagement/Traffic/Lead Generation objectives carry moderate CPMs; Conversion objectives (sales, sign-ups) carry the highest CPMs because Meta optimizes delivery toward users most likely to complete the action.
  - When to use: At the very first step of campaign setup, when selecting the objective.
  - How (4 steps): (1) Understand your conversion goal — name the exact action (purchase, newsletter, app download). (2) Choose an objective that directly aligns with that goal. (3) Experiment with different objectives to find which yields the lowest CPM while still hitting the goal. (4) Monitor performance via CPM, CPA, and conversion rate to validate the objective choice.

- **The Author's Default Settings Walkthrough (sterile-audience setup)**: A prescriptive end-to-end configuration optimized for a single, clean test with minimal dynamic variables.
  - When to use: Setting up any new performance campaign from scratch.
  - How (the defaults): Campaign setup = "Manually Build your Campaign"; Advantage Campaign Budget = OFF (one ad set only); A/B Test = OFF for a new campaign; Conversion Location = Website (in most cases); Performance Goal = "Maximize Number of Conversions"; select your Pixel dataset and conversion event; leave Cost per Result Goal blank; Dynamic Creative = OFF; budget set high to clear learning phase; placements = Manual, Audience Network unselected.

## Key Concepts
- **CPM (Cost per Mille)**: Cost per thousand impressions; the core efficiency metric the chapter optimizes against, heavily influenced by objective/conversion location.
- **Conversion Location**: Where people land after clicking (usually your website); its options change by objective and it strongly affects CPM.
- **Advantage Campaign Budget**: Meta's option to spread budget across multiple ad sets simultaneously — left OFF because parallel ad sets compete for the same audience and raise CPM.
- **Learning Phase**: Meta's optimization period requiring a minimum of 50 conversion events in the first 48 hours (author targets 24 hours) before delivery stabilizes.
- **Dynamic Creative**: Meta feature that auto-recombines creative elements; turned OFF because it can change performance negatively and adds unwanted variability.
- **Audience+ with Audience Suggestions**: Meta's expansion tool; use it but click "Audience Suggestions (optional)" to add interests, job titles, and demographic targeting layered on top of your audience.
- **Audience Network**: Meta's off-platform placement network; always unselected because it "will lower conversions 100% of the time."
- **Sterile Audience**: A deliberately constrained audience that limits cross-ad-set competition so early test results aren't skewed.
- **Special Ad Category**: Restricted verticals (housing, credit) with limited targeting; if applicable, see the book's Special Ad Category optimization section.

## Mental Models
- **Think of ad settings as the instrument tuner for your ad orchestra**: Get the tuning wrong and the whole campaign plays out of key regardless of creative quality.
- **Use one ad set, not many, when you want clean test signal**: Multiple ad sets cannibalize the same audience and inflate CPM — a single sterile audience isolates the variable you're actually testing.
- **Treat every "dynamic" toggle as a threat to measurement**: Dynamic Creative, Browser Add-ons, and Languages all introduce variability that skews conversion tracking; minimize dynamic elements in a performance campaign.
- **Match the Call to Action verb to the literal conversion action**: "Sign Up" for sign-ups, "Download" for an ebook — alignment materially lifts CTA conversion.

## Anti-patterns
- **Leaving Advantage Campaign Budget / multiple ad sets on**: Ad sets compete for the same audience, raising CPM. Run one ad set at a time.
- **A/B testing at campaign launch**: Adding variables requires a larger budget and more impressions, skewing early testing objectives before initial assumptions are validated. Leave A/B Test off when first setting up.
- **Running on Audience Network**: Lowers conversions every time — manually unselect it.
- **Leaving Dynamic Creative on**: Meta can shift creative performance in a way that diminishes conversions.
- **Running ads 24/7**: Raises CPA at night when fewer people engage; schedule ads for peak Facebook/Instagram usage hours.
- **Editing Cost per Result Goal or setting a Browser Add-on / dynamic Languages**: These skew tracking across campaigns — leave them blank/off.
- **Not minimizing age/geography for intent**: Failing to raise minimum age for decision-makers or to restrict language to "English (All)" when expanding geography wastes spend.

## Key Takeaways
1. Pick the objective whose conversion location yields the lowest CPM for your actual goal, then verify with CPM/CPA/conversion-rate monitoring.
2. Build manually, run a single ad set against a sterile audience, and turn off Advantage Campaign Budget and A/B Test on new campaigns.
3. Budget aggressively (author uses $500/day) to hit the 50-conversion learning-phase threshold within 24-48 hours, and watch early performance closely.
4. Use Manual Placements and unselect Audience Network — never run on it.
5. Expand geography to higher-converting English-speaking and key Western/Brazil markets, target "English (All)," and layer Audience+ suggestions (interests, job titles, income/zip demographics) to lower CPM.
6. Strip out dynamic elements everywhere: Dynamic Creative off, Browser Add-ons blank, dynamic Languages off, Cost per Result Goal blank.
7. Schedule ads for peak engagement hours rather than 24/7, and match each CTA verb to the exact desired action.

## Connects To
- **Ch 10**: Primary text, headlines, and descriptions for the Ads section are covered there; this chapter defers creative messaging to it.
- **Special Ad Category Performance Optimization Tips (this book)**: Referenced for housing/credit campaigns with restricted targeting.
- **Meta Pixel / dataset & conversion events**: Settings here depend on prior pixel setup feeding conversion data back to Meta's algorithm.
- **Learning Phase (Meta Ads concept)**: The 50-events-in-48-hours threshold is a Meta delivery-optimization standard the budget strategy is built around.
