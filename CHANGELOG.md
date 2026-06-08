# Changelog

Tutte le modifiche rilevanti a questo progetto sono documentate qui.
Formato basato su [Keep a Changelog](https://keepachangelog.com/it/1.1.0/);
il progetto aderisce al [Semantic Versioning](https://semver.org/lang/it/).

## [0.3.0] - 2026-06-08

### Aggiunto
- **Router `gtm-buddy`** (agent + command `/gtm-buddy`): concierge in stile buddy che classifica archetipo × stadio e instrada verso la skill singola o la sequenza giusta, con esecuzione automatica opzionale. Punto d'ingresso consigliato.
- **Playbook per archetipo/stadio** in `playbooks/`: `_index.md` (routing matrix), `coaching-services`, `b2b-saas`, `b2c-product`, `local-service`, `established-no-marketing`, `micro-launch`. Definiscono sequenza, canale primario, enfasi, cosa saltare e KPI nord per ogni caso.
- **Pipeline `/gtm` adattiva**: nuova Fase 0 di classificazione archetipo/stadio; le 7 fasi sono calibrate dal playbook (percorso corto per micro-lancio, audit iniziale per aziende avviate).
- **GTM Readiness Score 0-100**: rubrica per fase nell'orchestratore + mappatura severità nel critic; script deterministico `gtm-readiness-score.js`.
- **Sintesi PERCEIVE → ANALYZE → VALIDATE → ACT** con condizioni di falsificabilità per ogni raccomandazione, prima del deliverable.
- **Script deterministici** (Node, zero-dip) in `scripts/`: `cfa-calculator.js` (LTGP:CAC, Client-Financed Acquisition), `value-equation-score.js`, `gtm-readiness-score.js`, `gtm-plan-lint.js`. Ognuno con `--selftest`.
- **Validatore di integrità contenuti** `scripts/validate-content.js`: placeholder residui, integrità referenziale command↔skill, agent referenziati, link dei playbook, selftest degli script, conteggi vs README. Eseguito in CI.
- `userConfig` esteso: `archetipo` e `stadio` (default `auto`); `default_channel` ora ammette `auto`.
- Manifest arricchiti (keywords, author completo, `$schema`); risolti i placeholder `<...>`.

### Modificato
- `gtm-orchestrator` riscritto come orchestratore adattivo con scoring e sintesi.
- `gtm-critic` ora rispetta `userConfig.output_language` (era monolingua inglese) e propone il contributo al GTM Readiness Score.
- Tutti i command/agent richiamano le skill **per nome** (auto-attivazione via `description`): rimossa sia la slash nuda `/skill` (invalida in plugin) sia i path relativi `skills/<nome>/SKILL.md` (si risolvono contro la cwd dell'utente e si rompono). I file bundled non-skill (playbook, script) si leggono via `${CLAUDE_PLUGIN_ROOT}` con Bash; `gtm-orchestrator` e `gtm-buddy` hanno quindi il tool `Bash`. Il validatore `validate-content.js` ora vieta i path `skills/.../SKILL.md` fragili nei body.
- Aggiunto un red-team `gtm-critic` opzionale a tutti gli specialisti che ne erano privi (copertura coerente).
- Totali: 9 skill, **11 comandi** (`/gtm-buddy` + `/gtm` + 9 specialisti), **3 agent**. Versioni allineate a 0.3.0.

## [0.2.0] - 2026-06-08

### Aggiunto
- Skill `christensen-jobs` (Jobs to Be Done da *Competing Against Luck*, Clayton M. Christensen et al.) — il livello **demand-side** a monte del funnel: lavoro del cliente (progresso + circostanza), dimensioni funzionale/sociale/emotiva, Forze del Progresso, Big/Little Hire, job spec → résumé.
- Comando specialista `/gtm-jobs`.
- La pipeline `/gtm` ora apre la Fase 1 con i Jobs to Be Done (`christensen-jobs`) prima di posizionamento/ICP; aggiornato `gtm-orchestrator`.

### Modificato
- Totali: 9 skill, 10 comandi (`/gtm` + 9 specialisti). Versioni allineate a 0.2.0.

## [0.1.0] - 2026-06-08

### Aggiunto
- Struttura plugin Claude Code (marketplace + plugin) installabile via `/plugin marketplace add`.
- 8 skill GTM: `butcher-productize`, `hormozi-offers`, `hormozi-leads`, `doing-content-right`, `drew-sucks-framework`, `advanced-email-marketing`, `seo-2026-sota`, `instagram-performance-marketing`.
- 2 agent: `gtm-orchestrator` (pipeline) e `gtm-critic` (revisione avversariale).
- 9 comandi: `/gtm` (pipeline completa) + 8 comandi specialisti (uno per skill).
- Validatore (`scripts/validate-plugin.js`) e CI GitHub Actions.
