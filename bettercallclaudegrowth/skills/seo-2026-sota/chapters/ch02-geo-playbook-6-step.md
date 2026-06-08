# Chapter 2: The 6-Step GEO Playbook for Bootstrap Founders

## Core Idea
A repeatable weekly operating flow to build visibility in generative engines with 5–10 hours/week: infrastructure → keyword/brief → writing → authority → tracking → iteration.

## Frameworks Introduced
- **Step 1 — CMS Infrastructure (the first-response rule)**: critical content must be in the HTML served on the first response, NOT built afterwards via JavaScript. AI crawlers rarely execute JS (unlike Googlebot). If content only appears after client-side hydration, you are invisible to ChatGPT/Claude/Perplexity.
- **Step 2 — Keyword/brief with LLM**: forget Google search volume — what matters is which question the user will ask an LLM once intent has matured. Flow: extract landing pages → ask Claude for listicles/comparisons/alternatives + 3 prompt-targets each → filter by ICP (5–10 ideas) → generate brief.
- **Step 3 — Writing (3 amplifiers)**: (1) Heading-as-question with a standalone first sentence of 1–2 lines; (2) Structured schema (Article+Author+Organization+FAQPage, ItemList for listicles); (3) Declared originality ("we tested 12 tools for 6 weeks").
- **Step 4 — E-E-A-T Authority for LLMs**: author bio with photo/credentials/sameAs; client logos as **text** (LLMs do not perform OCR); result numbers in the body text; citations from verifiable primary sources.
- **Step 5 — GEO Tracking (4 sources)**: GA4 source/medium, Search Console, AI Visibility tracker (Profound/Otterly/Semrush AI), weekly manual tests.
- **Step 6 — Weekly Iteration**: Mon–Fri cycle (below).

## Mental Models
- The GEO cycle is **weekly, not quarterly** — models retrain, interfaces change, cited sources rotate.
- "Boasting with numbers" works: LLMs (GPT in particular) are training-tuned to extract numerical claims as facts.

## Reference Tables — Recommended CMS 2026
| CMS | Rendering | GEO Pro | Limitation |
|---|---|---|---|
| Ghost | Server-rendered | Sitemap/schema/CWV out-of-box | Limited for complex apps |
| Astro | Static + Islands | Excellent TTFB, zero JS by default | High technical learning curve |
| Next.js (App Router, RSC) | SSR + RSC | Streaming, scalable | Beware of falling back to CSR |
| WordPress + Yoast/RankMath | Server-rendered | SEO maturity, GEO plugins | Performance depends on hosting |

Avoid: vibe-coded full client-side stacks without a static fallback → pre-rendering comes before GEO.

## Quick AI Crawlability Test
- **AI Eyes** Chrome extension: toggle JS off; if less than 70% of the content remains, there is a crawlability problem → pre-rendering is a priority.
- `curl -s https://yoursite.com/page | grep -c '</p>'` — if the count is very low (<5), content is client-side rendered.

## Iteration Cycle (Step 6)
- **Mon**: search your prompt-targets on ChatGPT/Claude/Perplexity/Gemini. Are you cited? Where? Sourced from where?
- **Tue–Wed**: for prompts where you are not cited, analyze who is cited and why (more data, more examples, better schema, presence on Reddit/G2/YouTube).
- **Thu**: update 1–2 pages (often just adding data/FAQ/table is enough).
- **Fri**: publish/republish, notify via Search Console + IndexNow, update dashboard.

## Key Takeaways
1. AI crawlability first, then content: pre-rendering is a prerequisite.
2. Post-publish indexing: Search Console (Google) + IndexNow (Bing/Perplexity) in parallel.
3. Measuring GEO is the real bottleneck: work by approximation combining 4 sources.
4. SEO Gets unifies GSC+GA4 into readable dashboards (useful for 3–10 sites).

## Connects To
- **Ch 13** (SEO): IndexNow (Ch. 25), VideoObject schema, Core Web Vitals.
- **Ch 3**: off-site distribution that feeds authority.
- **Ch 6**: 80/20 rule — which steps deliver the most ROI.
