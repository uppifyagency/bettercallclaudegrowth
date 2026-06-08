---
description: Adaptive end-to-end GTM pipeline (classifies archetype/stage, positioning, offer, leads, content, channels, email, KPIs), with GTM Readiness Score and adversarial review. Produces gtm-plan.md. If you don't know where to start, use /gtm-buddy first.
argument-hint: describe the business — product, target, goal and (if you know it) archetype/stage (e.g. "B2B SaaS for managing spare parts for workshops, 50 trials/month, growing")
---

# /gtm - Adaptive Go-To-Market pipeline

This command does NOT apply a single skill: it starts the end-to-end GTM pipeline by delegating to the **gtm-orchestrator** agent. Always respect `userConfig` (`output_language` IT default, `archetype`, `stage`, `industry`, `brand_voice`, `default_channel`).

> Not sure whether you need the full pipeline or a single step? Use **`/gtm-buddy <situation>`**: it classifies your case and routes you (single skill or sequence), then can launch this pipeline for you.

## What to do

1. Launch the **gtm-orchestrator** agent, passing it `$ARGUMENTS` (product, target, goal) and the entire `userConfig`.
2. The orchestrator runs **Phase 0** (classifies archetype × stage by reading `playbooks/_index.md` + the relevant playbook) and **calibrates** the phases accordingly: short path for `micro-launch`, full for `scaling`, with an initial audit for `established`.
3. It runs the active phases in sequence, **calling by name** the relevant skill(s) (auto-activation), maintaining the **cumulative context**.
4. At the CHECKPOINTs it invokes the **gtm-critic** agent for the red-team and integrates the findings.
5. It applies the **PERCEIVE → ANALYZE → VALIDATE → ACT** synthesis with falsifiability conditions and computes the **GTM Readiness Score (0-100)**.
6. It consolidates everything into the final deliverable `gtm-plan.md`.

## The 7 phases (default; the playbook modulates them by archetype/stage)

1. **JOBS, POSITIONING & ICP** -> `christensen-jobs` (demand-side) → `butcher-productize` + `doing-content-right`
2. **OFFER** -> `hormozi-offers`  · CHECKPOINT **gtm-critic**: offer red-team
3. **LEAD GENERATION** -> `hormozi-leads` (Core Four prioritized according to the playbook)
4. **CONTENT & COPY** -> `doing-content-right` + `drew-sucks-framework`
5. **CHANNELS** -> `seo-2026-sota` | `instagram-performance-marketing` — primary channel from the archetype's **playbook**; if `userConfig.default_channel` ≠ `auto`, respect it; the other channels in summary
6. **EMAIL & NURTURING** -> `advanced-email-marketing`
7. **MEASUREMENT & ITERATION** -> the playbook's north-star KPI + loop  · CHECKPOINT **gtm-critic**: funnel red-team (+ SUCKS copy audit from phase 4)

> In `micro-launch` you run the **short version** (Jobs → Offer → 1 organic channel → Measurement) with a single checkpoint on the offer.

## Deliverable

Write `gtm-plan.md` in the user's working directory: header (archetype × stage), one section per active phase, the gtm-critic checkpoint findings, the PERCEIVE-ANALYZE-VALIDATE-ACT synthesis with falsifiability, the **GTM Readiness Score** with the next priority, and the KPI dashboard with the iteration loop.
