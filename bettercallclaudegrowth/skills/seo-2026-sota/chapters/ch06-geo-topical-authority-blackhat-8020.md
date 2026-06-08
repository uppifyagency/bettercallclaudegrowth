# Chapter 6: Topical Authority GEO, Black Hat, and the 80/20 Rule

## Core Idea
Generative models reward depth within a vertical, not generic breadth. The 20% of work that generates 80% of the results is clear and repeatable; black hat tactics produce short-lived gains with high reputational risk.

## Frameworks Introduced
- **Topical authority GEO (narrower than SEO)**: a site with 50 articles on a single vertical is cited more often than one with 500 articles across 20 verticals — even with less organic traffic.
- **Internal linking with the Claude tool**: export URL + titles from the CMS → load into Claude → "propose an internal link matrix to build topical authority on the [X] vertical: source URL, destination, anchor, context sentence" → Claude returns 50–200 links → implement (Link Whisper/Yoast or manually).
- **80/20 GEO Rule** (the 20% that generates 80%):
  1. 3–5 high-quality BoFu listicles (4–6 weeks).
  2. Complete G2 + Capterra profiles with 20–30 real reviews (8–12 hours + 2–3 weeks outreach).
  3. 3–5 long-form YouTube videos on prompt-target topics (3–4 weeks).
  4. Authentic presence on 2–3 subreddits (ongoing, 30 min/week).
  5. Schema Article+Author+Organization implemented properly (1–2 days, one-time).

## GEO-Friendly Cluster Architecture (example)
```
/marketing-tools/                              ← pillar
├─ /marketing-tools/seo-tool/                  ← spoke (BoFu listicle)
├─ /marketing-tools/seo-tool/ahrefs-vs-semrush/  ← sub-spoke (comparison)
├─ /marketing-tools/seo-tool/ahrefs-alternative/ ← sub-spoke
└─ /marketing-tools/email-marketing/           ← spoke
```

## Anti-patterns (black hat — recognize them, don't use them)
- **Domain review farm** (NameOfSaaSReviews.com): works for 2–6 months, then Google demotes it and LLMs recalibrate. Opportunity cost + reputational damage + algorithmic dependency + domino effect on the main domain (linked WHOIS).
- **Reddit astroturfing**: detected by moderators, brand banned from the subreddit, sometimes site-wide.
- **Aggressive Wikipedia editing**: the community detects and bans corporate accounts; violates editorial guidelines.

## Mental Models
- "Everything else — review farms, astroturfing, prompt injection, Wikipedia manipulation — is the 20% of results that costs 80% of the time and introduces reputational risk." Not recommended for businesses that want to last beyond 12 months.
- Tanya's fact-checked rule: the direction of industry insights is correct; numerical proportions should be verified against primary sources.

## Key Takeaways
1. Vertical depth > generic breadth for LLM citations.
2. Dense internal linking creates a semantic map readable by the model.
3. Concentrate resources on the 5 durable 80/20 assets.
4. Black hat shortcuts pay little and last even less; the risk is asymmetric.

## Connects To
- **Ch 9** (SEO): hub & spoke and topical clusters on the Google side.
- **Ch 2**: the operational steps that feed these assets.
- **Ch 20** (Exec): site reputation abuse / parasite SEO in antispam policies.
