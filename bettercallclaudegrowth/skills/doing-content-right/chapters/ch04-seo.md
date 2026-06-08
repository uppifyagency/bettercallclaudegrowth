# Chapter 4: Search Engine Optimization

## Core Idea
SEO is "user research at scale" — every Google query is a problem someone wants solved, and Google openly shares the data on what billions of people care about. Stop trying to game the algorithm; instead match the right content to the right search intent so you build dependable, scalable bedrock traffic that compounds over time.

## Frameworks Introduced
- **CRU (Credible, Relevant, Usable)**: The three fundamentals Google actually optimizes for. Credible = high quality / high DA; Relevant = matches the query; Usable = good UX for the searcher. Every popular "ranking factor" (keyword density, links, site speed, SSL, bounce rate) is just a proxy for one of these three.
  - When to use: As your mental filter for any ranking factor you read about online.
  - How: For each factor ask "Is this signalling Credible, Relevant, or Usable?" Weighting shifts by query type (e.g. medical queries weight Credible heavily).
- **The Four Search Intents (Google's "micro-moments")**: Informational ("I want to know"), Navigational ("I want to go"), Transactional ("I want to do"), Commercial ("I want to buy"). Plus a fifth: Ambiguous/Hybrid SERPs where the searching population diverges.
  - When to use: Before choosing any keyword — intent is the precursor to everything else.
  - How: Google the keyword and look at the type of results on the first 3 spots; never guess intent. Long-form content only ranks for Informational intent.
- **Three Keyword Selection Criteria**: A good primary keyword has the right Intent + approachable Search Volume + reasonable Competitiveness (relative to your DA). Never compromise on intent; you can be flexible on volume.
- **Informational vs Inspirational (Viral)**: Informational articles solve problems people already search for (optimize these). Inspirational/viral articles (e.g. "I Sell Onions on the Internet") aren't searched for — don't force SEO onto them.
- **Associated Problems**: Don't target your product/name (no one searches for it). Target the adjacent problems your audience already searches for (Transferwise ranks for "cad to usd" and bank routing-number pages, not "money transfer service").

## SEO Workflow / Steps
1. Decide if the article is **Informational** ("Are people searching for this?") — only optimize these, not inspirational pieces.
2. Brainstorm candidate keywords: ask "What problem does this article solve?" then "How would someone articulate this to Google?"
3. Pick ONE singular **primary keyword**. Validate **intent** by Googling it and checking the top 3 results' type.
4. Check **search volume** (target ~200–5,000/month unless you're a huge site; "0 × 1m is still 0").
5. Check **competitiveness** in Ahrefs Keyword Explorer (keyword difficulty = DA + link profile of current rankings, not volume).
6. Use "People Also Ask," related/"Also rank for" keywords, and currently-ranking articles to build the outline (integrate keyword + competitor research from the outline stage).
7. Optimize on-page (the "checklist"): primary keyword in title, meta description, slug, and body; secondary keywords sprinkled; title ≤60 chars, meta ≤160 chars; length only as long as the problem demands.
8. Publish, then submit to Google Search Console → URL Inspection → Request Indexing (re-submit after major edits).
9. Build links toward DA ~10 (target 30 links) so Google starts testing your content; revisit Search Console for impressions.
10. Re-optimize old informational articles and update content for "freshness" over time.

## Key Concepts
- **Search intent**: The "bond" between a query and the content served to address the searcher's need.
- **Search volume**: Monthly searches for a keyword — reframe as "volume of value" waiting to be delivered.
- **Keyword difficulty / competitiveness**: How hard a SERP is to rank on, driven by the DA and backlink/referring-domain profile of current rankings, not volume.
- **SERP**: Search engine results page; SERPs are dynamic and shift as intent evolves.
- **Long-tail keywords**: Lower-volume, more specific queries that are less competitive and easier to rank #1 on.
- **Domain Authority (DA) / Domain Rating (DR)**: Logarithmic metric of a site's relative strength, weighted by number and quality of referring domains and backlinks; starts at 0.
- **Backlinks & referring domains**: Inbound links = micro-trust signals ("votes/endorsements"); links are unidirectional and the first link from a domain is worth more than repeats.
- **Link juice**: Authority passed via a follow link; higher-DA referrers pass more.
- **Follow vs Nofollow links**: Follow links pass juice and build DA; nofollow tells Google to disregard the vote (common on UGC, social, comments).
- **Canonical tag**: Signals the original piece for syndicated/duplicate content (no duplicate-content penalty, but Google rarely shows duplicates on one SERP).
- **User engagement metrics**: CTR, time on site, bounce rate — Google's ultimate tiebreaker for whether a page solved the problem.
- **Bedrock traffic**: Dependable, compounding organic baseline that doesn't require you to keep posting daily.

## Tools Mentioned
- **Ahrefs**: Keyword Explorer (difficulty, est. backlinks needed), competitor organic keywords, "Also rank for," backlink analysis (most recommended, most expensive).
- **Keywords Everywhere**: Browser extension showing volume, trend, and related keywords alongside the SERP.
- **Google Keyword Planner**: Search volume estimates.
- **Google Search Console**: Indexing, impressions/clicks, average position, URL inspection.
- **Yoast**: On-page checklist for WordPress (don't blindly "make Yoast green").
- **GTmetrix**: Page load speed (aim for ≤2 seconds).
- **HotJar / CrazyEgg**: See how users engage with pages.
- **HARO (Help A Reporter Out)**: Build high-DA links by answering reporter queries (10–30% hit rate).
- **Google Alerts / Mention**: Find unlinked brand mentions to claim.
- **Expired Domains**: Find domains with existing backlink profiles to buy.
- Others: SEMRush, Backlinks by Neil Patel, Monitor Backlinks, Cognitive SEO, RankWatch, SimilarWeb.

## Mental Models
- **The NYC pizza analogy**: Use when explaining ranking factors — you pick a restaurant via inputs (friend recs = backlinks, menu match = keyword, wait time = page speed). Google runs the same algorithm; serve "the best pizza," not just a pink tent over rotten fruit.
- **"Listen to Google / answers to the test"**: Use when unsure of intent or content type — what ranks today is Google telling you what it wants. Don't assume you're smarter than billions of searchers.
- **"Faster horse"**: Use when no one searches for your product — target the familiar problem (associated problems), not your novel solution.
- **DA as restaurant recommendations**: Use when evaluating link quality — want diverse, trustworthy referrers; fake/bad links hurt you like fake reviews.

## Anti-patterns
- **Optimizing the checklist for a keyword you should never have targeted**: Wrong intent or a SERP of DA-80 sites when you're DA-20 means you can't rank no matter how good the content.
- **Chasing high search volume (TAM fallacy)**: "1% of 1m searches" is fantasy if you rank 80th — first page gets 99% of traffic; competition rises exponentially with volume.
- **Ignoring intent**: Trying to rank long-form informational content on a navigational/transactional query will fail regardless of backlinks or quality.
- **Black-hat tactics / keyword stuffing / gaming**: Risks waking up to an empty dashboard after a core update; you and Google should share the same objective (serve the user).
- **Building nofollow links / bad paid links**: Won't build DA, and toxic links can actively harm your domain.
- **Forcing SEO onto inspirational articles or extending length just to rank**: Don't fit a square peg in a round hole; user experience trumps all.
- **Building keyword-bloat pages with zero search volume**: Verify search demand before mass-producing long-tail pages.

## Key Takeaways
1. Pick ONE primary keyword with the right intent first — intent is the precursor; you can flex on volume but never on intent.
2. Target ~200–5,000 monthly searches and long-tail keywords you can actually rank #1 for; small ranked traffic beats big un-ranked traffic.
3. Judge competitiveness by the DA/backlink profile of current rankings (Ahrefs), not search volume alone.
4. Build ~30 quality follow links to cross DA ~10–20 so Google starts testing your content ("second chances" / retesting as DA grows).
5. Use Google's own data (SERP, "People Also Ask," related keywords, ranking articles) to build better outlines and find new topics via "content competitors."
6. SEO is long-term bedrock: a single article at 50 pageviews/day ≈ 20k/year; it compounds and doesn't require constant posting.
7. The user always comes first — engagement metrics are Google's final judge, so solve the problem thoroughly rather than gaming factors.

## Connects To
- **Ch 3 (Distribution)**: SEO generates "bedrock" traffic vs. short-term spikes (Hacker News, ads); the informational-vs-inspirational split mirrors Ch 3's distribution thinking and the CODES channel framework.
- **Ch 5**: Carries forward link-building and syndication into broader promotion/partnership tactics; great content plus distribution naturally earns backlinks, feeding the SEO flywheel.
