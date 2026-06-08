# Patterns & Techniques — SEO / GEO 2026

## Editorial Pivot ToFu → BoFu
**When**: organic CTR collapses with AI Overviews and informational queries go zero-click.
**How**: reallocate budget to the 4 BoFu formats (vertical listicles, X vs Y, choice guides with matrix, "alternatives to [competitor]"). Keep informational hubs for topical authority.
**Trade-off**: less ToFu traffic, more conversions; worthwhile for B2B/SaaS, not for high-volume e-commerce.

## Heading-as-question + atomic answer
**When**: you want to be cited by AI Overviews/LLMs and earn dynamic snippets.
**How**: H2/H3 = real question; first sentence below = self-contained answer 1-2 lines (≤100 chars for Gemini); detail follows.
**Trade-off**: none — works for both classic SEO and GEO.

## AI Crawlability check (first response)
**When**: before any GEO work.
**How**: AI Eyes (toggle JS off; <70% content = problem) or `curl -s URL | grep -c '</p>'`. If client-side → prerendering (SSR/SSG/Islands) before content.
**Trade-off**: AI crawlers do not execute JS; Googlebot does but with a delay.

## Parallel push indexing
**When**: after every publication.
**How**: Google = Search Console (URL Inspection → Request Indexing) + sitemap; Bing/Perplexity/LLM = IndexNow.
**Trade-off**: IndexNow does not touch Google but accelerates Bing/Copilot.

## Canonicalization by decreasing strength
**When**: content reachable from multiple URLs.
**How**: 301 (strongest) > rel=canonical > hreflang > sitemap > consistent internal links. Self-referencing canonical on every page.
**Trade-off**: rel=canonical is only a hint; verify the chosen canonical in GSC.

## Targeted CWV optimization (LCP/INP/CLS)
**When**: <75% of visits "Good" on CrUX (28-day window).
**How**: LCP → preload + fetchpriority=high + AVIF/WebP + TTFB; INP → break tasks ≤50ms, code splitting, Web Worker, debounce; CLS → width/height on media, reserved space, font size-adjust.
**Trade-off**: INP is the 2026 bottleneck (43% fail) — hunt down post-load blocking JS.

## Hub & spoke for topical authority
**When**: you want to "own" a vertical.
**How**: pillar → spoke → sub-spoke with dense internal linking and descriptive anchors. For GEO: narrower scope (depth > breadth).
**Trade-off**: semantic coherence outweighs backlink count (Core Update Mar 2026).

## Claude-assisted internal linking
**When**: you have many articles to connect.
**How**: export URLs+titles → Claude proposes a matrix (source, destination, anchor, context sentence, 50-200 links) → implement with Link Whisper/Yoast.
**Trade-off**: review anchors to avoid over-optimization.

## Machine-readable E-E-A-T (for Google and LLMs)
**When**: content that gives advice (especially YMYL) or BoFu pages.
**How**: Schema Person+sameAs (LinkedIn/ORCID); complete Organization; author bio with photo/credentials; client logos as **text**; result numbers in body; citations of primary sources; "How we tested" section.
**Trade-off**: LLMs do not OCR images — text is the signal.

## Republish with canonical (Medium/LinkedIn)
**When**: you want quick long-tail traffic leveraging the platform's DR.
**How**: canonical on your blog → wait 1-2 weeks → republish with rel=canonical pointing to the blog.
**Trade-off**: adapt title/intro to the platform; get cited by Perplexity/Copilot.

## 3× B2B effect (review profiles)
**When**: B2B software targeting ChatGPT citations.
**How**: G2 + Capterra + Trustpilot complete, 20-30 reviews, rating 4.3+, quarterly update.
**Trade-off**: 12-16 hours one-time + review campaign.

## Debugging traffic drops (7 steps)
**When**: organic traffic drop.
**How**: source → timing coincidences (Search Status Dashboard) → technical → algorithmic (gradual = Core Update) → manual action → seasonality (Trends) → competition.
**Trade-off**: do not act impulsively; one change at a time.

## CI/CD for structured data
**When**: pipeline on sites with schema.
**How**: local validation schema-dts+AJV → Schema Markup Validator → Rich Results Test as gate on staging.
**Trade-off**: Rich Results Test covers only the types supported by Google.

## Lighthouse CI as PR gate
**When**: you want to prevent performance regressions.
**How**: lighthouserc.json with assertion/budget; PR fails if a metric regresses; @lhci/server for historical tracking.
**Trade-off**: run the audit multiple times to reduce variance.

## GSC + GA4 + Trends triangulation
**When**: periodic business-oriented reporting.
**How**: connect GSC↔GA4, set up events/conversions, contextualize with Trends (5 years). BigQuery export for advanced analysis (anomalous CTR, branded/non-branded, &udm=14).
**Trade-off**: without GA4 conversion events, value cannot be measured.

## GEO allocation by model
**When**: limited resources (5-10h/week).
**How**: map customers→models→channels. ChatGPT=Wikipedia/G2; Claude=technical docs/GitHub; Gemini/AIO=YouTube/schema/recency; Perplexity=Reddit.
**Trade-off**: only Gemini/AIO provides measurable feedback in GSC.
