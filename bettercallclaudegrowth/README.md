# bettercallclaudegrowth (plugin)

Plugin Claude Code per il **go-to-market**. Vedi il [README del repo](../README.md) per la panoramica completa e l'installazione.

## Da dove partire

Se non sai quale command usare, parti da **`/gtm-buddy <descrivi la tua situazione>`**: classifica il tuo caso (archetipo × stadio) e ti instrada verso la skill giusta o la sequenza giusta, e può anche eseguirla per te.

## Comandi

| Comando | Cosa fa | Skill |
|---|---|---|
| `/gtm-buddy` | Router/concierge: dalla tua situazione consiglia skill singola o sequenza, e può eseguirla | (router, legge `playbooks/`) |
| `/gtm` | Pipeline GTM adattiva (Fase 0 archetipo/stadio + 7 fasi) → `gtm-plan.md` con GTM Readiness Score | tutte, via `gtm-orchestrator` |
| `/gtm-jobs` | Jobs to Be Done: lavoro, forze del progresso, Big/Little Hire | christensen-jobs |
| `/gtm-posizionamento` | ICP + posizionamento + Personal Monopoly | butcher-productize, doing-content-right |
| `/gtm-offerta` | Grand Slam Offer (Value Equation) | hormozi-offers |
| `/gtm-leads` | Piano lead gen (Core Four) + lead magnet | hormozi-leads |
| `/gtm-contenuti` | Strategia contenuti + calendario | doing-content-right |
| `/gtm-copy` | Copy persuasivo (SUCKS) | drew-sucks-framework |
| `/gtm-email` | Workflow di email automation | advanced-email-marketing |
| `/gtm-seo` | Piano SEO/GEO 2026 | seo-2026-sota |
| `/gtm-instagram` | Setup campagne Meta/Instagram | instagram-performance-marketing |

Ogni specialista chiude con un **red-team opzionale** via `gtm-critic`.

## Agent

- **`gtm-buddy`** — concierge/router: classifica archetipo (coaching, B2B SaaS, B2C/e-commerce, locale, azienda avviata senza marketing) × stadio (micro-lancio, scaling, established) e instrada verso la skill o la sequenza giusta. Read-only.
- **`gtm-orchestrator`** — esegue la pipeline adattiva: Fase 0 di classificazione, 7 fasi calibrate sul playbook, contesto cumulativo, sintesi PERCEIVE-ANALYZE-VALIDATE-ACT con falsificabilità, **GTM Readiness Score 0-100**; produce `gtm-plan.md`. Invoca `gtm-critic` ai checkpoint.
- **`gtm-critic`** — revisore avversariale: red-teama offerta (Value Equation al contrario), funnel, posizionamento e copy (audit SUCKS). Restituisce debolezze classificate + fix, in `output_language`.

## Playbook (`playbooks/`)

Routing matrix + playbook per archetipo e stadio: `_index.md` (la logica di scelta letta da gtm-buddy e gtm-orchestrator), `coaching-services.md`, `b2b-saas.md`, `b2c-product.md`, `local-service.md`, `established-no-marketing.md`, `micro-launch.md`. Definiscono sequenza, canale primario, enfasi, cosa saltare e KPI nord per ogni caso.

## Script deterministici (`scripts/`)

Strumenti Node zero-dipendenze per i conti che non vanno lasciati all'intuito:
- `cfa-calculator.js` — LTGP:CAC, payback e Client-Financed Acquisition (Hormozi).
- `value-equation-score.js` — score 0-100 dell'offerta + leva più debole.
- `gtm-readiness-score.js` — GTM Readiness Score 0-100 dalle 7 (o n) fasi.
- `gtm-plan-lint.js` — verifica che un `gtm-plan.md` abbia tutte le sezioni attese.

Ognuno ha `--selftest` (eseguito in CI da `validate-content.js`).

## Skill

Ogni skill è una knowledge base autocontenuta (`SKILL.md` + `cheatsheet.md` + `glossary.md` + `patterns.md` + `chapters/`). I comandi le richiamano **per nome** (auto-attivazione via `description`), non con path di file — la conoscenza vive solo qui, i comandi sono orchestrazione sottile.
