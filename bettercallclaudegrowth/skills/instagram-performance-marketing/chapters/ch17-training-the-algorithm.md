# Chapter 17: Training Facebook’s Algorithm for Conversion Marketing

## Core Idea
The single lever that drives a low CPA is a low CPM, and you lower CPM by feeding Meta's algorithm as much accurate targeting and conversion data as possible (broad geo, first-party data, lookalikes, deep interest targeting) while accelerating spend hard enough to exit the learning phase. The terminal goal is 1,000 converted-audience events, after which there is almost nothing left to optimize.

## Frameworks Introduced

- **"The lower your CPM, the lower your CPA"** — the chapter's organizing principle. Every tactic exists to push CPM down so CPA follows.
  - When to use: as the diagnostic lens for every campaign decision (objective, geo, audience, creative).
  - How: broaden targeting + expand geo + feed more customer data → CPM drops → CPA drops.

- **Feed-the-Algorithm data stack** — layered data inputs that train Meta to find your ideal customer.
  - When to use: at campaign/audience build, before scaling.
  - How (in order): (1) upload converted first-party customer data as a Custom Audience; (2) build a 0%–3% Lookalike from it; (3) expand geo to all high-converting countries; (4) add a large (400k+) Google Search Audience data feed and build a Lookalike from it; (5) add extensive manual Interest + Job Title targeting via "Original Audience"; (6) install pixel tracking and build Lookalikes from pixel data.

- **High-Converting Countries list** — the geo set used to broaden targeting and lower CPM.
  - When to use: when building lookalikes and expanding any audience's geo.
  - How: target United States, Canada, United Kingdom, Australia, New Zealand, Germany, France, Italy, Spain, Brazil.

- **Accelerated Ad Spend (learning-phase exit)** — spend aggressively to push conversion volume fast.
  - When to use: on a new campaign that shows early success indicators.
  - How: set ~$500/day per campaign (each, if testing multiple) to generate enough impressions/reach to hit ~50 conversion events fast and exit the learning phase.

- **Early Success Indicators (gate before scaling)** — decide whether a campaign deserves accelerated spend.
  - When to use: before pouring budget into a fresh campaign.
  - How: look for relatively low CPM and low cost-per-conversion. If starting CPA is low (or slightly high but manageable), assume optimization will reduce eventual CPA by 40%–60%; if that projected CPA fits the goal, accelerate budget.

## Key Concepts
- **CPM**: cost per 1,000 impressions; the primary variable to minimize because CPA tracks it.
- **CPA**: cost per acquisition/conversion; the outcome metric the whole chapter optimizes.
- **Custom Audience (first-party)**: an audience built from your own uploaded converted-customer data.
- **Lookalike Audience**: a Meta audience modeled on a seed list; author specifies a 0%–3% match for tightest similarity.
- **Google Search Audience Feed**: purchased third-party data (400k+ consumers) on people searching for your product, used as a Lookalike seed; primarily US, expandable via the high-converting countries.
- **Original Audience (vs Advantage+)**: the Ad Set option that lets you hand-pick interests/job titles instead of letting Meta auto-select.
- **Interest / Job Title / Demographic targeting**: manual targeting types; Job Titles and Interests are most important (high-income zip targeting available US-only).
- **Conversion Location**: where the customer lands and where the conversion is tracked; changes with objective and materially affects CPM.
- **Learning Phase**: Meta's optimization window that needs ~50 conversion events before CPM/CPA start dropping.
- **Converted Audience (1,000 events)**: the terminal milestone; at 1,000 conversion events the campaign reaches its lowest achievable CPA.

## Mental Models
- **Use CPM as your thermostat.** Treat every choice — geo width, audience breadth, objective, creative — as a dial that moves CPM; if a change raises CPM, it will raise CPA.
- **Think of the algorithm as a student you must over-feed.** More accurate data in (first-party, search feeds, interests, pixel events) = better targeting out. Underfunding spend starves it of the conversion data it needs to learn.
- **Use broad-but-detailed targeting, not broad-OR-detailed.** Stack many interests and job titles (which both broadens reach and lowers CPM) rather than narrowing — breadth lowers CPM while the detail keeps relevance.
- **Project the eventual CPA, not the launch CPA.** Expect a 40%–60% reduction post-optimization; decide whether to scale based on that projected number against your goal.

## Anti-patterns
- **Limiting conversion campaigns to the US market only**: pairing a conversion objective with a single, narrow geo spikes CPM substantially — the opposite of conversion-marketing goals.
- **Letting Meta auto-pick interests (Advantage+) instead of "Original Audience"**: surrenders the interest/job-title data you should be feeding the algorithm; pick interests manually.
- **Minimizing ad spend during testing**: too little spend fails to deliver enough conversion data to train the algorithm or exit the ~50-event learning phase.
- **Accelerating spend before early success shows**: scaling a campaign without low CPM / low cost-per-conversion signals wastes budget.
- **Buying a small Google Search Audience feed**: feeds should be as large as possible (400k+) to train Meta accurately; small seeds limit lookalike quality.

## Key Takeaways
1. Drive CPA down by driving CPM down; broaden geo and audience and feed more customer data to do it.
2. Build the data stack in order: first-party Custom Audience → 0%–3% Lookalike → expanded geo → 400k+ Google Search feed (+ its Lookalike) → manual Interests/Job Titles via Original Audience → pixel + pixel-based Lookalikes.
3. Expand geo to the ten high-converting countries (US, CA, UK, AU, NZ, DE, FR, IT, ES, BR) on every lookalike.
4. Hit ~50 conversion events fast to clear the learning phase; the author runs ~$500/day per campaign to do it.
5. Only accelerate spend once early indicators (low CPM, low/ manageable cost per conversion) appear; expect eventual CPA to fall 40%–60%.
6. Run separate campaigns testing Objective × Conversion Location combinations and keep the pairing with the lowest CPM and CPA.
7. Use the highest-CTR creative you can find (author cites Captions.ai UGC-style GenAI video, CTRs up to 9.8% vs Meta's ~0.90% average); higher CTR extracts more value from the same 1,000 impressions.
8. Pixel-based lookalikes cut CPA another ~10%–20%; reaching 1,000 conversion events is the ultimate goal for the lowest possible CPA.

## Connects To
- **Earlier chapters on Geo Targeting**: this chapter repeatedly references the book's prior detail on expanding geo to high-converting countries as the first CPM lever.
- **Creative chapters**: the highest-CTR-creative section depends on the book's UGC/GenAI video creative guidance (Captions.ai).
- **Meta Ads Manager mechanics**: Advantage+ vs Original Audience selection, Conversion Location options, and the pixel/learning-phase behavior are platform-native concepts.
- **Lookalike & Custom Audience modeling**: standard Meta audience tooling, here applied with a specific 0%–3% match and 400k+ seed-size discipline.
