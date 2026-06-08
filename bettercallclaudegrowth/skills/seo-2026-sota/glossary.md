# SEO / GEO / SOTA 2026 Glossary

**AI Mode** — Google's conversational search mode (Gemini, 2025), multi-turn with citations (Ch13, Ch15, Ch20).
**AI Overview (AIO)** — Generative inline summary in the SERP with links to sources, powered by Gemini, since 2024 (Ch13, Ch20).
**AI Visibility Prompt / Prompt-target** — The conversational query under which you want to be cited by an LLM; more verbose than a Google keyword (Ch1, Ch2).
**Anchor text** — Clickable text of a link; signals the content of the linked page (Ch10).
**Back button hijacking** — Anti-spam policy added Apr 2026: interfering with back navigation (Ch15).
**BoFu (Bottom-of-Funnel)** — Content for purchase-ready users: listicles, comparisons, alternatives, buying guides (Ch1).
**Canonical URL** — Representative URL for a group of duplicates; via rel=canonical, 301, sitemap, internal linking. A hint, not a directive (Ch9).
**CLS — Cumulative Layout Shift** — CWV for visual instability. Good ≤0.1 (Ch13, Ch16).
**Crawl budget** — Number of pages Googlebot crawls in a period; limited for large/slow sites (Ch8).
**CrUX — Chrome User Experience Report** — Public dataset of real-world CWV (Chrome opted-in), rolling 28 days, p75. API/History/BigQuery (Ch16, Ch18).
**E-E-A-T** — Experience, Expertise, Authoritativeness, Trustworthiness. SQRG framework; Experience dominant since Mar 2026 (Ch12, Ch13, Ch20).
**Entity** — Unique concept in the Knowledge Graph; optimising for entities means covering properties and relationships (Ch10).
**FAQPage** — FAQ schema; rich result removed from SERP since May 2026, still useful for AI Mode (Ch13).
**Featured snippet** — "Position zero": extracted answer shown prominently (Ch13).
**GEO** — Generative Engine Optimization: visibility in generative engines and AI interfaces (Ch1).
**Glue** — Google internal system (antitrust): counterpart to NavBoost for universal features (Ch20).
**Googlebot** — Main crawler; variants Image/Video/News/AdsBot/Storebot (Ch7).
**Google-Extended** — User-agent for opting out of generative training; blocking it does NOT affect Search (Ch20).
**Heading-as-question** — H2/H3 headings worded as real questions with a concise 1-2 line answer below; pattern extracted by LLMs (Ch2, Ch13).
**Helpful Content System (HCU)** — Site-wide usefulness classifier (Aug 2022), integrated into core (Mar 2024/2026) (Ch13).
**hreflang** — Attribute declaring the language/region of a page; requires bidirectionality and self-reference (Ch13).
**Hub & spoke** — Pillar→spoke→sub-spoke architecture for topical authority (Ch9, Ch6).
**IndexNow** — Push protocol (Bing/Yandex/Naver/Seznam — not Google) to notify URLs (Ch13).
**INP — Interaction to Next Paint** — CWV for responsiveness; replaced FID (12 Mar 2024); stricter. Good ≤200ms (Ch13, Ch16).
**JSON-LD** — Recommended format for structured data, in `<script type="application/ld+json">` (Ch13, Ch19).
**LCP — Largest Contentful Paint** — CWV for rendering the largest above-the-fold element. Good ≤2.5s (Ch13, Ch16).
**Lighthouse** — Open-source audit engine behind DevTools/PSI/Lighthouse CI (Ch16, Ch19).
**LLM referral traffic** — Clicks from chatgpt.com, claude.ai, perplexity.ai, gemini.google.com (Ch2).
**Mobile-first indexing** — Google indexes the mobile version (since 2019) (Ch14).
**NavBoost** — Re-ranking on click data, rolling 13 months; a Twiddler. Confirmed under oath (Ch20).
**Needs Met** — SQRG mechanism for evaluating intent satisfaction (Ch20).
**Noindex** — Directive (meta/X-Robots-Tag) that excludes from the index but allows crawling (Ch8).
**NSR (Normalized Site Rank)** — Normalised per-site score (2024 leak), complementary to PageRank (Ch20).
**PageRank** — Original link-based algorithm (1998); one of hundreds of signals (Ch12).
**Parasite SEO / Site reputation abuse** — Exploiting a host domain's reputation with unrelated third-party content (Ch13, Ch15).
**Rich result / Rich snippet** — Enhanced result (stars, price, images) from structured data (Ch13).
**Robots.txt** — Root file controlling crawling (not indexing); RFC 9309 standard (Ch8, Ch19).
**RFC 9309** — Robots Exclusion Protocol (IETF Sep 2022; co-author Illyes/Sassman) (Ch19).
**RFC 8288** — Web Linking; HTTP Link: header for canonical on non-HTML assets (Ch19).
**Schema.org** — Standard vocabulary for entities; co-sponsored by Google/Microsoft/Yahoo/Yandex (Ch13, Ch19).
**SERP** — Search Engine Results Page (Ch7).
**Sitemap XML** — List of important URLs; 50,000 URLs / 50MB per file (Ch8, Ch19).
**SiteAuthority** — Site-level authority metric (2024 leak); Google has always denied a "domain authority" (Ch20).
**SQRG — Search Quality Rater Guidelines** — Manual for human raters (~182 pages); feeds training (Ch20).
**SSR / SSG / CSR / ISR / Islands** — Rendering strategies; CSR discouraged for SEO (Ch8).
**Tangram (formerly Tetris)** — Final SERP assembler after NavBoost+Glue (Ch20).
**Topical authority** — Authority on a topic (breadth+depth+consistency); ranking signal (Ch6, Ch9).
**Trust transfer** — An LLM recommendation is processed as advice, not advertising (Ch1).
**Twiddler** — Post-retrieval re-ranking architecture; NavBoost is a Twiddler (Ch20).
**YMYL — Your Money or Your Life** — Pages impacting health/finances/safety; stricter E-E-A-T standards (Ch20, Ch13).
**Zero-click search** — Query resolved within the interface without a click (AIO, Knowledge Panel, snippet) (Ch1).
