# Capitolo 20: Internal Documents, Google People, and the GEO/AI Frontier

## Core Idea
The "middle ground" (SQRG, antitrust proceedings, 2024 leak) is the only official window into how the ranking machine actually works. In 2026 Google officially acknowledges that "AI Search is still SEO." The official voice has become deplatformized across the entire Search Relations team.

## Frameworks Introduced — publicly released internal documents
- **Search Quality Rater Guidelines (SQRG)** — the most important document Google has ever produced for anyone doing serious SEO. 182-page PDF (11 Sep 2025). Manual for human quality raters: they do not determine rankings but feed the training data. 3 parts: Page Quality (Lowest→Highest scale), Understanding Search User Needs (Know/Do/Website/Visit-in-Person intent, Needs Met), Needs Met Rating. Sep 2025 updates: criteria for AI Overviews, YMYL refinement (extended to Government/Civics), examples for AI-generated pages.
- **USA v. Google (antitrust)** — systems confirmed under oath for the first time:
  - **NavBoost**: re-ranking on click data, 13-month rolling window. "Not a machine learning system. It's just a big spreadsheet" (Lehman) — click log on query-URL pairs.
  - **Glue**: NavBoost counterpart for universal features (carousel, knowledge panel).
  - **Tangram (formerly Tetris)**: final SERP assembler (composition + prominence).
  - **RankBrain, DeepRank, RankEmbed BERT**: final deep-learning refinement layers.
  - Real pipeline: Retrieval → NavBoost cull → RankBrain/DeepRank scoring → Tangram assembly.
- **API Content Warehouse Leak (5 May 2024)**: 2,596 modules, 14,014 attributes (Google confirmed authenticity). Features that surfaced: **SiteAuthority** (Google had always denied a "domain authority"), **NSR** (Normalized Site Rank), NavBoost confirmed as a **Twiddler** (post-retrieval re-ranking), HostAge (sandbox for new domains), Chrome data integration. Real value: **vocabulary** for naming what you observe in the SERPs.

## Frameworks Introduced — GEO/AI frontier (official Google)
- **AI Features and Your Website**: requirements = page indexed, eligible for snippet, compliant. **No new files, no markup, no llms.txt.** AIO/AI Mode traffic included in the Performance report (type "Web," no segmentation).
- **AI Optimization Guide (15 May 2026)**: first consolidated official guide. Non-commodity content (Google's example: "7 Tips for First-Time Homebuyers" = commodity vs. "Why We Waived the Inspection & Saved Money" = non-commodity). **Explicit rebuttals**: llms.txt receives no special treatment; artificial chunking is useless; AI-specific markup does not exist.
- **4 pillars (post May 2025)**: unique non-commodity content; solid page experience; multimedia support; understanding the value of AI traffic (higher-quality clicks).
- **AI crawlers**: **Google-Extended** (opt-out generative training — blocking it does NOT affect Search ranking/traffic); GoogleOther (catch-all); Googlebot (do not block).
- **Gemini API**: the engine behind AI Overviews. `groundingMetadata` reveals "where" a response is built from → enables reverse-engineering how AI Overviews choose their sources.

## Google People to Follow (2026 map)
| Person | 2026 Platform | Focus |
|---|---|---|
| John Mueller | **Bluesky** @johnmu.com | Crawl/index, myth debunking |
| Martin Splitt | LinkedIn, YouTube | JavaScript SEO, rendering |
| Gary Illyes | LinkedIn, Mastodon | Crawling, robots.txt, IndexNow |
| Lizzi Sassman | LinkedIn, Mastodon | Technical writing docs |
| Danny Sullivan | (Liaison ended Aug 2025) | Internal Search direction |
| Daniel Waisberg | LinkedIn, YouTube | Search Console |
| Barry Pollard | web.dev, Bluesky | Core Web Vitals |
| Addy Osmani | addyosmani.com | Performance + AI (Google Cloud AI) |

## Mental Models — the 5 structural shifts of 2026
1. **End of click denial**: NavBoost/Glue exist (antitrust + leak). "Clicks don't matter" is demonstrably false → measuring CTR and dwell time has strategic value.
2. **Deplatformization of the official voice**: no single voice anymore → monitor 5+ channels.
3. **"AI Search is still SEO"**: no special markup/llms.txt/chunking → classic SEO made more rigorous, not separate disciplines.
4. **Primacy of non-commodity content**: Google asks for content no one else could have produced (the E of Experience) → pure-volume content is obsolete.
5. **Performance↔AI integration**: CWV are the minimum condition for being selected as a source by an AI Overview.

## Key Takeaways
1. SQRG = essential one-time read; E-E-A-T sections for content teams.
2. The leak gives you vocabulary (SiteAuthority, NavBoost): name what you observe.
3. For AI Overviews do not build "AI-specific layers": Google has declared them nonexistent.
4. Google's voice is a distributed feed to monitor, not a library to archive.

## Connects To
- **Ch 4** (GEO): apparent tension "AI Search is still SEO" (Google AIO) vs. low overlap (external LLMs).
- **Ch 12** (SEO): debunked myths vs. leak (SiteAuthority exists, third-party "Domain Authority" does not).
- **Ch 1** (GEO): non-commodity content = originality backed by proprietary data.
