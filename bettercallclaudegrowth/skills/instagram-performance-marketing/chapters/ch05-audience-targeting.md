# Chapter 5: Audience Targeting

## Core Idea
The fastest way to lower CPA on Meta is to feed Meta's algorithm high-quality seed data — your existing customers (via Custom Audiences and Lookalikes) and high-purchase-intent Google searchers (via Google Search Audience Feeds) — so the algorithm optimizes toward people who actually convert rather than people who merely match interest filters.

## Frameworks Introduced

- **Customer List → Lookalike pipeline**: Upload your current customer list as a Custom Audience, then build a Lookalike from it to target Meta accounts that resemble your existing buyers.
  - When to use: You have an existing customer list and want to lower CPA by reaching digital "doppelgängers" of proven buyers.
  - How:
    1. Prepare a spreadsheet (Word/Google Sheets) with, at minimum: First Name, Last Name, Email, Mobile Phone, City, State, Zip. Save as CSV.
    2. In Meta Ads Manager → Audiences → Create Audience → Custom Audience → source "Customer List" → upload CSV → review data mapping → Create Audience.
    3. Audiences → Create Audience → Lookalike Audience → pick the Custom Audience as source → choose country/region → choose audience size (1–10%) → Create Audience.
    4. Select that Lookalike as the target audience when building/editing a campaign; set budget/schedule; launch.

- **Google Search Audience Feeds**: Acquire a third-party list of people who searched Google for keywords your customers would use, then load it into Meta as a Custom Audience to inject high-intent seed data.
  - When to use: You lack a customer list, or you want to materially boost an existing campaign by feeding Meta high purchase-intent users it can build its algorithm around.
  - How: Search Google for "Google Search Audience Feeds" and pick an organic-result provider (ignore the paid ads — they aren't relevant); the author buys from Feededly.com. Build a list from buyer-intent keywords (e.g. a custom-windows seller targets "Custom Home Windows"), then create a Meta Custom Audience from that data to reach high-intent users at lower cost than PPC.

## Key Concepts
- **Custom Audience**: An audience built in Meta from your own uploaded data (e.g. a CSV customer list) used as a targeting source or as a seed.
- **Lookalike Audience**: A Meta-generated audience of accounts that resemble a chosen source audience across demographics, interests, and online behavior.
- **Audience size (1–10%)**: The Lookalike percentage setting controlling breadth vs. similarity — smaller % = closer match to the seed, larger % = broader reach.
- **Interest-based targeting**: Targeting people by stated hobbies/interests (e.g. vintage teapots) using Meta's filters.
- **CPA (Cost Per Acquisition)**: The ad spend required to produce one conversion; the chapter's primary success metric to drive down.
- **Click-through rate (CTR)**: The share of impressions that produce clicks; rises when ad relevance rises.
- **Purchase intent**: A signal (like an active Google search for a buying keyword) that someone is close to buying, which makes them higher-value seed data than interest matches.
- **Seed data / training the algorithm**: The input audience whose quality determines what Meta's delivery algorithm learns to optimize toward.

## Mental Models
- **Think of targeting as a party with name tags**: Audience targeting is knowing who's in the room, what makes them tick, and what keeps them from leaving early — relevance is the whole game.
- **Use your current customer list as the best possible seed**: Existing customers are your strongest signal; a Lookalike of them inherits their propensity to convert.
- **Treat high-intent search data as algorithm fuel**: Feed Meta proven buying-intent users and it builds its optimization around them — better than any native interest filter could.
- **Prefer intent over interest**: A Google searcher for "Custom Home Windows" is worth more than someone who merely "likes" home improvement, because intent predicts conversion.

## Anti-patterns
- **Targeting a broad/irrelevant audience**: Showing ads to people unlikely to convert is "throwing money away" — it inflates CPA and wastes budget.
- **Relying solely on Meta's native interest targeting for high-intent buyers**: Before Google Search Audience Feeds there was no native way to reach high purchase-intent consumers; interest filters alone leave the highest-value users unreached.
- **Clicking the paid ads when sourcing feeds**: When Googling for "Google Search Audience Feeds," the paid results aren't relevant — use organic results.
- **Uploading a low-quality customer list**: Lookalike quality depends on seed quality; a weak list produces a weak Lookalike.

## Key Takeaways
1. Upload your customer list as a Custom Audience and build a 1–10% Lookalike from it to lower CPA by mirroring proven buyers.
2. Include at minimum First/Last Name, Email, Mobile Phone, City, State, Zip in CSV format for the customer-list upload.
3. Smaller Lookalike percentages match the seed more closely; larger percentages broaden reach — choose by goal.
4. If you have no customer list (or want to scale results), buy a Google Search Audience Feed to inject high purchase-intent users into Meta.
5. The author treats Google Search Audience Feeds as the cornerstone of every campaign — they report moving one client from $1,600 to $13 per lead, and another from $94 to under $1 per website registration; they "don't run campaigns without this data."
6. Always monitor campaign performance and adjust targeting as needed.

## Connects To
- **Ch 4 / earlier chapters**: Builds on the conversion-marketing premise that every click and conversion counts; audience quality is the input that the rest of the campaign optimizes on.
- **Lookalike Audiences (facebook-ads skill)**: Standard Meta lookalike workflow used here as the primary CPA-lowering lever.
- **PPC / Google Search**: Google Search Audience Feeds bridge search intent (a PPC signal) into Meta delivery at lower cost than running PPC directly.
- **ICP / customer data**: The customer-list seed is effectively an operational use of an ideal-customer profile.
