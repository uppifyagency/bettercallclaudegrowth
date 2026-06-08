# Capitolo 13: Stato dell'arte 2026 — CWV, E-E-A-T/HCS, AI Overviews, Schema, JS SEO, IndexNow, hreflang

## Core Idea
The enrichment section: topics not yet covered in the official Starter Guide but that in 2026 make the difference between a well-built site and a winning site.

## Frameworks Introduced

### Core Web Vitals 2026
Three metrics based on real-world data (CrUX), evaluated at the 75th percentile over the last 28 days. A page passes if 75% of visits are "Good" on all three. In 2026, only 47% of sites pass all three; 43% fail on INP.
- **LCP** ≤ 2.5s: preload the LCP resource (`fetchpriority="high"` + preload, never lazy), CDN, AVIF/WebP, reduce TTFB, inline critical CSS ≤ 14 KB.
- **INP** ≤ 200ms (replaced FID on 12 Mar 2024; stricter — measures ALL interactions, worst value): break up long tasks (≤ 50ms), code splitting, Web Worker, limit third-party scripts, debounce 150–300ms on live search.
- **CLS** ≤ 0.1: width/height on media elements; reserve space for ads/widgets; fonts with `font-display: swap` + `size-adjust`.

### E-E-A-T Evolution and the Helpful Content System
- HCU Aug 2022 (site-wide utility classifier: good pages suffer from a poorly helpful section on the same site) → +Experience Dec 2022 → integration into core (Mar 2024 and Mar 2026, the latter moved 79.5% of the top-three global positions).
- **SOTA 2026 — centrality of Experience**: the Core Update Mar 2026 made Experience the dominant signal. Operationally: author pages with bio/LinkedIn/ORCID, original photos, a "How we tested" section, methodology disclosure (especially YMYL).

### AI Overviews and AI Mode — 7 Citation Practices
Google's position: **there are no separate best practices for AI**. Operational constants: (1) heading-as-question; (2) concise 1–2-line answer immediately below; (3) structured schema; (4) topical authority; (5) verifiable originality; (6) terminological consistency; (7) rich internal linking. Key data point: 93.8% of sources cited in AI Overviews come from beyond the first organic page.

### Schema.org / Structured Data
JSON-LD is the recommended format (separate from HTML, validatable, server-generatable). Used for rich results and — since 2024–25 — to verify claims/entities in AI Overviews. Always validate with Rich Results Test + Schema Markup Validator.

### Advanced JavaScript SEO
Web Components with open Shadow DOM are indexable (expose content as light DOM slots). RSC / Astro Islands / Qwik / Solid reduce client-side JS → full HTML in the response (LCP) + less JS on the main thread (INP): the most balanced choice for new SEO projects.

### IndexNow
Push protocol (Microsoft/Yandex 2021). Adopted by Bing, Yandex, Seznam, Naver, DuckDuckGo (via Bing) — **NOT Google**. 80M+ sites; 22% of Bing 2025 clicks from URLs notified via IndexNow. Key: 8–128 chars published at the root. Google Indexing API officially only for JobPosting/BroadcastEvent.

### Internationalization (hreflang)
Golden rules: bidirectionality is mandatory; self-reference required; correct codes (ISO 639-1 + 3166-1 alpha-2); `x-default` for fallback; absolute URLs; consistency with geotargeting.

## Code Examples
```html
<!-- Schema Article (BlogPosting) -->
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BlogPosting","headline":"Guida CWV 2026",
"datePublished":"2026-04-12","dateModified":"2026-05-10",
"author":{"@type":"Person","name":"Mario Rossi","url":"…/autori/mario-rossi"},
"publisher":{"@type":"Organization","name":"Acme"}}
</script>
```
```html
<link rel="alternate" hreflang="it-it" href="https://www.example.com/it/">
<link rel="alternate" hreflang="x-default" href="https://www.example.com/">
```
```bash
# IndexNow batch
curl -X POST 'https://api.indexnow.org/IndexNow' -H 'Content-Type: application/json' \
 -d '{"host":"www.example.com","key":"KEY-32-CHARS","urlList":["…/url1","…/url2"]}'
```

## Reference Table — CWV Thresholds
| Metric | Good | Needs Improvement | Poor |
|---|---|---|---|
| LCP | ≤ 2.5s | ≤ 4.0s | > 4.0s |
| INP | ≤ 200ms | ≤ 500ms | > 500ms |
| CLS | ≤ 0.1 | ≤ 0.25 | > 0.25 |

## Anti-patterns
- **FAQ rich results removed (May 2026)**: no longer appear in the SERP. The FAQPage schema is still useful for AI Mode (entity verification).
- **Site reputation abuse / Parasite SEO**: trusted domains hosting unrelated third-party content (coupons, gambling, AI translations). Algorithmic since 2025; in 2026 it hits SaaS sites that self-rank #1 without evidence.
- **IndexNow as a replacement for sitemap/GSC**: for Google always use XML sitemap + GSC + internal linking. IndexNow is a complement for Bing/LLMs and time-sensitive content.

## Key Takeaways
1. INP is the 2026 bottleneck (43% of sites fail it): hunt down post-load blocking JS.
2. Experience is the dominant E-E-A-T signal since Mar 2026.
3. No special markup is needed for AI Overviews: classic SEO made more rigorous.
4. AI Overviews cite specialist sources beyond the first page → opportunity for niches.

## Connects To
- **Ch 16** (Exec): CWV deep-dive, CrUX, Lighthouse from the Chrome team.
- **Ch 2/5** (GEO): heading-as-question and schema for LLM citations.
- **Ch 20** (Exec): "AI Search is still SEO" — official guide May 2026.
