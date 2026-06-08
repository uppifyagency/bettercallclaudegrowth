---
description: Pipeline GTM adattiva end-to-end (classifica archetipo/stadio, posizionamento, offerta, lead, contenuti, canali, email, KPI), con GTM Readiness Score e revisione avversariale. Produce gtm-plan.md. Se non sai da dove partire, usa prima /gtm-buddy.
argument-hint: descrivi il business — prodotto, target, obiettivo e (se lo sai) archetipo/stadio (es. "SaaS B2B gestione ricambi per officine, 50 trial/mese, in crescita")
---

# /gtm - Pipeline Go-To-Market adattiva

Questo comando NON applica una singola skill: avvia la pipeline GTM end-to-end delegando all'agent **gtm-orchestrator**. Rispetta sempre `userConfig` (`output_language` IT default, `archetipo`, `stadio`, `settore`, `brand_voice`, `default_channel`).

> Non sai se ti serve la pipeline completa o un singolo passo? Usa **`/gtm-buddy <situazione>`**: classifica il tuo caso e ti instrada (skill singola o sequenza), poi può lanciare questa pipeline per te.

## Cosa fare

1. Lancia l'agent **gtm-orchestrator** passandogli `$ARGUMENTS` (prodotto, target, obiettivo) e l'intera `userConfig`.
2. L'orchestratore esegue la **Fase 0** (classifica archetipo × stadio leggendo `playbooks/_index.md` + il playbook rilevante) e **calibra** le fasi di conseguenza: percorso corto per `micro-launch`, completo per `scaling`, con audit iniziale per `established`.
3. Esegue le fasi attive in sequenza, **richiamando per nome** la/le skill rilevante/i (auto-attivazione), mantenendo il **contesto cumulativo**.
4. Ai CHECKPOINT invoca l'agent **gtm-critic** per il red-team e integra i rilievi.
5. Applica la **sintesi PERCEIVE → ANALYZE → VALIDATE → ACT** con condizioni di falsificabilità e calcola il **GTM Readiness Score (0-100)**.
6. Consolida tutto nel deliverable finale `gtm-plan.md`.

## Le 7 fasi (default; il playbook le modula per archetipo/stadio)

1. **JOBS, POSIZIONAMENTO & ICP** -> `christensen-jobs` (demand-side) → `butcher-productize` + `doing-content-right`
2. **OFFERTA** -> `hormozi-offers`  · CHECKPOINT **gtm-critic**: red-team offerta
3. **LEAD GENERATION** -> `hormozi-leads` (Core Four prioritizzato secondo il playbook)
4. **CONTENUTI & COPY** -> `doing-content-right` + `drew-sucks-framework`
5. **CANALI** -> `seo-2026-sota` | `instagram-performance-marketing` — canale primario dal **playbook** dell'archetipo; se `userConfig.default_channel` ≠ `auto`, rispettalo; gli altri canali in sintesi
6. **EMAIL & NURTURING** -> `advanced-email-marketing`
7. **MISURA & ITERA** -> KPI nord del playbook + loop  · CHECKPOINT **gtm-critic**: red-team funnel (+ audit copy SUCKS della fase 4)

> In `micro-launch` si esegue la **versione corta** (Jobs → Offerta → 1 canale organico → Misura) con un solo checkpoint sull'offerta.

## Deliverable

Scrivi `gtm-plan.md` nella working directory dell'utente: intestazione (archetipo × stadio), una sezione per fase attiva, i rilievi dei checkpoint gtm-critic, la sintesi PERCEIVE-ANALYZE-VALIDATE-ACT con falsificabilità, il **GTM Readiness Score** con la prossima priorità, e la dashboard KPI con il loop di iterazione.
