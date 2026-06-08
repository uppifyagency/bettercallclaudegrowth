# bettercallclaudegrowth (plugin)

Claude Code plugin for **go-to-market**. See the [repo README](../README.md) for the full overview and installation.

## Where to start

If you don't know which command to use, start with **`/gtm-buddy <describe your situation>`**: it classifies your case (archetype × stage) and routes you to the right skill or the right sequence, and it can even run it for you.

## Commands

| Command | What it does | Skill |
|---|---|---|
| `/gtm-buddy` | Router/concierge: from your situation it recommends a single skill or a sequence, and can run it | (router, reads `playbooks/`) |
| `/gtm` | Adaptive GTM pipeline (Phase 0 archetype/stage + 7 phases) → `gtm-plan.md` with GTM Readiness Score | all, via `gtm-orchestrator` |
| `/gtm-jobs` | Jobs to Be Done: job, forces of progress, Big/Little Hire | christensen-jobs |
| `/gtm-positioning` | ICP + positioning + Personal Monopoly | butcher-productize, doing-content-right |
| `/gtm-offer` | Grand Slam Offer (Value Equation) | hormozi-offers |
| `/gtm-leads` | Lead gen plan (Core Four) + lead magnet | hormozi-leads |
| `/gtm-content` | Content strategy + calendar | doing-content-right |
| `/gtm-copy` | Persuasive copy (SUCKS) | drew-sucks-framework |
| `/gtm-email` | Email automation workflow | advanced-email-marketing |
| `/gtm-seo` | SEO/GEO 2026 plan | seo-2026-sota |
| `/gtm-instagram` | Meta/Instagram campaign setup | instagram-performance-marketing |

Each specialist closes with an **optional red-team** via `gtm-critic`.

## Agents

- **`gtm-buddy`** — concierge/router: classifies archetype (coaching, B2B SaaS, B2C/e-commerce, local, established business with no marketing) × stage (micro-launch, scaling, established) and routes to the right skill or sequence. Read-only.
- **`gtm-orchestrator`** — runs the adaptive pipeline: Phase 0 classification, 7 phases calibrated on the playbook, cumulative context, PERCEIVE-ANALYZE-VALIDATE-ACT synthesis with falsifiability, **GTM Readiness Score 0-100**; produces `gtm-plan.md`. Invokes `gtm-critic` at checkpoints.
- **`gtm-critic`** — adversarial reviewer: red-teams the offer (Value Equation in reverse), funnel, positioning and copy (SUCKS audit). Returns classified weaknesses + fixes, in `output_language`.

## Playbooks (`playbooks/`)

Routing matrix + playbooks by archetype and stage: `_index.md` (the selection logic read by gtm-buddy and gtm-orchestrator), `coaching-services.md`, `b2b-saas.md`, `b2c-product.md`, `local-service.md`, `established-no-marketing.md`, `micro-launch.md`. They define the sequence, primary channel, emphasis, what to skip and north-star KPIs for each case.

## Deterministic scripts (`scripts/`)

Zero-dependency Node tools for the calculations that shouldn't be left to guesswork:
- `cfa-calculator.js` — LTGP:CAC, payback and Client-Financed Acquisition (Hormozi).
- `value-equation-score.js` — 0-100 offer score + weakest lever.
- `gtm-readiness-score.js` — GTM Readiness Score 0-100 from the 7 (or n) phases.
- `gtm-plan-lint.js` — checks that a `gtm-plan.md` has all the expected sections.

Each one has `--selftest` (run in CI by `validate-content.js`).

## Skills

Each skill is a self-contained knowledge base (`SKILL.md` + `cheatsheet.md` + `glossary.md` + `patterns.md` + `chapters/`). The commands call them **by name** (auto-activation via `description`), not by file path — the knowledge lives only here, the commands are thin orchestration.
