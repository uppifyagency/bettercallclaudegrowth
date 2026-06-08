---
description: Generates a 2026 SEO/GEO plan (technical + content + distribution across generative engines) starting from site, industry, and goal.
argument-hint: <domain or page> + industry/ICP + goal (e.g. "acme.it, B2B SaaS HR, +pipeline from AI Overviews")
---

# /gtm-seo - 2026 SEO + GEO Plan

This command applies the `seo-2026-sota` skill (folder in `skills/`). Respect `userConfig`: write in `output_language` (IT default), tune everything to `userConfig.industry`, use `userConfig.brand_voice` in copy suggestions and `userConfig.default_channel` to prioritize distribution.

## Steps

1. **Load the skill.** Invoke the `seo-2026-sota` skill by name (it activates from its description; do not use file paths): start from its index, use the cheatsheet for verified thresholds and numbers, and dig into the patterns and the chapter from the Topic Index (CWV, schema, AIO, IndexNow, per-model distribution) when needed. DO NOT copy the books' text: extract only what you need to decide.

2. **Frame the input.** From `$ARGUMENTS`, derive the domain/pages, industry/ICP, and goal. Keep the two programs separate: **classic SEO (Google)** and **GEO (generative engines)** — the real overlap is low, do not treat them as a single lever.

3. **Technical SEO.** Assess on **Google technical SEO** and **Core Web Vitals** (LCP/INP/CLS against the cheatsheet's p75 thresholds), plus **schema.org** (Article+Author+Organization) and **E-E-A-T** with Experience dominant. Indicate the priority fixes and the official tools/APIs to use for measurement.

4. **Content.** Set up content to be selectable by **AI Overviews** and by LLMs: heading-as-question + atomic answer pattern, and a ToFu→BoFu pivot across the 4 BoFu formats. Tie the topics to the industry and to the ICP's intent.

5. **GEO distribution.** Apply **GEO (optimization for LLMs: ChatGPT/Claude/Gemini/Perplexity)** by mapping ICP → models → channels with the per-model levers and the 80/20 rule. Prioritize consistently with `userConfig.default_channel`.

6. **Output — 2026 SEO/GEO Plan.** Produce a structured plan:
   - **Summary** (1 paragraph: where to act first and why)
   - **Technical SEO** — prioritized CWV/schema/E-E-A-T fixes (impact × effort) with metric and tool
   - **Content** — clusters and BoFu pages, heading-as-question format, ICP intent
   - **GEO distribution** — model → source/channel → action table, with quick wins
   - **30/60/90-day roadmap** and **KPIs** (SEO and GEO kept separate)

Close by reminding to re-validate figures, URLs, and best practices against primary sources before committing budget; flag where project-specific data not derivable from `$ARGUMENTS` is needed.

> **Red-team (optional).** Invoke the `gtm-critic` agent to stress-test the plan (priorities realistic by impact×effort? SEO and GEO kept distinct? claims/numbers verified? quick wins genuinely achievable?), then integrate the fixes.
