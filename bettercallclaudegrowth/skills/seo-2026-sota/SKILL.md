---
name: seo-2026-sota
description: "Knowledge base on SEO/GEO 2026 (trilogy 'SEO 2026 — Lo Stato dell'Arte', 'GEO 2026 — Generative Engine Optimization', 'SOTA 2026 Executive'). Use it to apply frameworks on Google technical SEO, Core Web Vitals, E-E-A-T, schema.org, AI Overviews, LLM optimization (ChatGPT/Claude/Gemini/Perplexity), GEO distribution, official Google sources/APIs/standards — studying the documents or referencing their concepts."
allowed-tools:
  - Read
  - Grep
argument-hint: [topic, framework, or chapter number e.g. ch13]
---

# SEO / GEO 2026 — Lo Stato dell'Arte
**Sources**: trilogy "SEO 2026 — Lo Stato dell'Arte" + "GEO 2026 — Generative Engine Optimization" + "SOTA 2026 Executive" (fact-checked ed., May 2026) | **Chapters**: 20 (summary of 121 sub-chapters) | **Generated**: 2026-06-07

## How to use this skill

- **Without arguments** — loads the core frameworks below as reference.
- **With a topic** — ask about `core web vitals`, `schema`, `AI Overviews`, `IndexNow`, `Reddit GEO`, `NavBoost`: finds and reads the right chapter.
- **With a chapter** — ask `ch13`: loads that file.
- **Browse** — ask "what chapters do you have?" for the full index.

When you ask about a topic not covered in the Core Frameworks below, the relevant chapter is read before responding.

---

## Core Frameworks & Mental Models

### The central thesis: "SEO doesn't die, it splits in two"
Two parallel programs with partly distinct levers:
- **Classic SEO** (Google) — readable site, authority, content for people and crawlers.
- **GEO** (generative engines) — readable and **citable** site by LLMs, which have their own rules and weights.

The real overlap between the two is **low (8-12%)**, not the "63%" of popular narrative. Treat them as distinct disciplines that reinforce each other only in certain segments (unique content, schema, E-E-A-T, proprietary data). See **ch04**.

### The ToFu → BoFu pivot (GEO)
With zero-click (58.5% US, 83% with AIO) and the collapse of organic CTR (−58/−61%), shift budget to the **4 BoFu formats** that LLMs read to recommend: vertical listicles, "X vs Y" comparisons, choice guides with a matrix, "alternatives to [competitor]" pages. See **ch01**.

### Heading-as-question + atomic answer
H2/H3 = real question; first sentence below = standalone answer 1-2 lines (≤100 chars for Gemini); detail below. This is the pattern that AIO and LLMs extract as a citation. Works for both SEO and GEO. See **ch02, ch13**.

### Trust transfer
A recommendation from an LLM is processed as **editorial advice**, not advertising. Appearing as the top choice in an AI response is more like being cited by the NYT than buying a Google Ad: you don't pay the engine for it, you pay in editorial work. See **ch01**.

### GEO allocation by model
Don't treat "LLMs" as a single entity. Map **customers → models → channels**: ChatGPT=Wikipedia+G2/Capterra (3×); Claude=technical docs+GitHub+papers; Gemini/AIO=YouTube+schema+recency (Reddit 0.1%); Perplexity=Reddit. Only Gemini/AIO gives measurable feedback in GSC. See **ch05**.

### Core Web Vitals 2026
LCP ≤2.5s · INP ≤200ms · CLS ≤0.1 (p75, 28 days on CrUX). INP replaced FID (Mar 2024) and is the bottleneck: 43% of sites fail it due to post-load blocking JS. CWV are now the **minimum condition to be selected as a source by an AIO**. See **ch13, ch16**.

### E-E-A-T with Experience dominant (Core Update Mar 2026)
First-hand experience (specific details, original data, own photos, "How we tested", author credentials with Schema Person+sameAs) outperforms "perfect" but generic pages. E-E-A-T is not a direct dial: it is the raters' lens (SQRG) that algorithms approximate. See **ch12, ch13, ch20**.

### "AI Search is still SEO" (Google official, May 2026)
For Google's AI Overviews you do NOT need special markup, do NOT need llms.txt, do NOT need artificial chunking: you need classic SEO made more rigorous + **non-commodity** content. Note: this applies to Google's AIO; external LLMs (ChatGPT/Claude/Perplexity) have different mechanics (see tension in ch04 vs ch20). See **ch20**.

### The 80/20 GEO rule
The 20% that delivers 80%: 3-5 BoFu listicles · G2+Capterra (20-30 reviews, 4.3+) · 3-5 long-form YouTube videos · 2-3 authentic subreddits · schema Article+Author+Organization. Black hat tactics (review farms, astroturfing) deliver short-term results with high reputational risk. See **ch06**.

### Click signals are real (antitrust + 2024 leak)
NavBoost (re-ranking on clicks, 13 months), Glue, Tangram, SiteAuthority, NSR are confirmed. "Clicks don't matter" is demonstrably false → measuring CTR and dwell has strategic value. The leak provides the **vocabulary** to name what you observe in the SERPs. See **ch20**.

### Verify numbers before deciding
The direction of industry GEO insights is right, the proportions are not: "17× conversion" → 4.4× median; "63% overlap" → inverted (8-12%); "70% ChatGPT" → 65-87% in erosion. Revalidate with Semrush/Ahrefs/Profound/Similarweb before committing budget. See **ch01, ch04**.

---

## Chapter Index

| # | Title | Key Framework |
|---|-------|---------------|
| [ch01](chapters/ch01-geo-fondamenti-fiducia-bofu.md) | GEO: trust transfer, zero-click, BoFu pivot | Trust transfer, 4 BoFu formats |
| [ch02](chapters/ch02-geo-playbook-6-step.md) | GEO Playbook in 6 steps | First response rule, weekly cycle |
| [ch03](chapters/ch03-geo-distribuzione-off-site.md) | GEO off-site distribution | LLM source map, YouTube quick win, 3× B2B |
| [ch04](chapters/ch04-seo-vs-geo-overlap.md) | SEO vs GEO: low overlap | Token-based ranking, 2 parallel programs |
| [ch05](chapters/ch05-ottimizzare-per-modello.md) | Optimizing for each model | Levers for ChatGPT/Claude/Gemini/Perplexity |
| [ch06](chapters/ch06-geo-topical-authority-blackhat-8020.md) | GEO topical authority, black hat, 80/20 | 80/20 rule, internal linking with Claude |
| [ch07](chapters/ch07-seo-fondamenti-come-funziona-google.md) | SEO fundamentals, how Google works | 5 SEO areas, crawling/indexing/serving |
| [ch08](chapters/ch08-far-trovare-indicizzazione-rendering-blocco.md) | Indexing, rendering, blocking | 3 rendering modes, 3 blocking techniques |
| [ch09](chapters/ch09-architettura-url-directory-canonical.md) | URL, directory, canonicalization | Hub & spoke, canonical signal strength |
| [ch10](chapters/ch10-contenuti-utili-link.md) | Useful content and links | Query→entity, 3 rel annotations |
| [ch11](chapters/ch11-aspetto-serp-title-snippet-immagini-video.md) | Title, snippet, images, video | Dynamic snippets, LCP image, VideoObject |
| [ch12](chapters/ch12-promozione-miti-seo.md) | Promotion and SEO myths | Digital PR, E-E-A-T as a lens |
| [ch13](chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md) | State of the art 2026 | CWV, E-E-A-T/HCS, AIO, schema, JS, IndexNow, hreflang |
| [ch14](chapters/ch14-search-console-monitoraggio-triangolazione.md) | Search Console and monitoring | 7-step drop debug, GSC+GA4+Trends triangulation |
| [ch15](chapters/ch15-google-search-central-reference.md) | Google Search Central | Source hierarchy, antispam policy, Starter Guide |
| [ch16](chapters/ch16-webdev-chrome-cwv-crux-lighthouse.md) | web.dev/Chrome: CWV, CrUX, Lighthouse | 4 LCP phases, Lighthouse scoring, CrUX |
| [ch17](chapters/ch17-tool-ufficiali-google.md) | Official Google tools | PSI, Rich Results Test, Schema Validator, GSC |
| [ch18](chapters/ch18-api-ufficiali-google.md) | Official Google APIs | Search Console/Indexing/PSI/CrUX/BigQuery API |
| [ch19](chapters/ch19-open-source-standard-tecnici.md) | Open source and technical standards | web-vitals, lighthouse-ci, robotstxt, RFC 9309/8288 |
| [ch20](chapters/ch20-documenti-interni-persone-frontiera-ai.md) | Internal documents, people, AI frontier | SQRG, NavBoost/leak, AI Optimization Guide, 5 changes 2026 |

## Topic Index

- **AI Overviews / AI Mode** → ch13, ch20 (Google), ch04, ch05 (GEO)
- **Google APIs** → ch18, ch17
- **Antispam / policy** → ch15, ch12, ch13 (parasite SEO)
- **Black hat / review farm** → ch06, ch13
- **BoFu / content formats** → ch01, ch02
- **Canonicalization** → ch09, ch19 (RFC 8288)
- **ChatGPT / Claude / Gemini / Perplexity** → ch05, ch03
- **Core Web Vitals (LCP/INP/CLS)** → ch13, ch16, ch18 (CrUX)
- **CrUX** → ch16, ch18
- **Crawling / Googlebot / AI crawlers** → ch07, ch08, ch20 (Google-Extended)
- **E-E-A-T** → ch13, ch12, ch20 (SQRG)
- **GEO playbook / tracking** → ch02, ch03, ch05, ch06
- **hreflang / internationalization** → ch13
- **IndexNow / Indexing API** → ch13, ch18
- **JavaScript SEO / rendering** → ch08, ch13, ch19 (robotstxt)
- **Keyword research / entities** → ch10, ch02 (GEO)
- **2024 Leak / NavBoost / antitrust** → ch20
- **Lighthouse** → ch16, ch19, ch17
- **SEO myths** → ch12, ch20 (Starter Guide)
- **Google people to follow** → ch20
- **Reddit / YouTube / G2 / Medium** → ch03, ch05
- **robots.txt** → ch08, ch15, ch19 (RFC 9309)
- **Schema.org / structured data** → ch13, ch19, ch17
- **Search Console** → ch14, ch17, ch18
- **SEO vs GEO (overlap)** → ch04
- **Sitemap** → ch08, ch19
- **Title / meta / snippet** → ch11
- **Topical authority / hub & spoke** → ch09, ch06
- **Zero-click / CTR / AI conversion** → ch01, ch04

## Supporting Files

- [glossary.md](glossary.md) — all key terms with definitions and chapter references
- [patterns.md](patterns.md) — all operational techniques (when/how/trade-offs)
- [cheatsheet.md](cheatsheet.md) — threshold tables, verified numbers, limits, stack by role

---

## Scope & Limits

This skill covers the content of the SEO/GEO/SOTA 2026 trilogy (snapshot of May 2026). The SEO/GEO ecosystem evolves in weeks: revalidate figures, URLs, and best practices against primary sources (Google Search Central, web.dev, Semrush/Ahrefs/Profound) before budget decisions or formal presentations. For implementation in your codebase, combine with project-specific tools and with the other available SEO skills (keyword research, schema markup, seo-audit, search-console).
