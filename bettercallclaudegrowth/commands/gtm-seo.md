---
description: Genera un piano SEO/GEO 2026 (tecnico + contenuti + distribuzione sui motori generativi) a partire da sito, settore e obiettivo.
argument-hint: <dominio o pagina> + settore/ICP + obiettivo (es. "acme.it, B2B SaaS HR, +pipeline da AI Overviews")
---

# /gtm-seo - Piano SEO + GEO 2026

Questo comando applica la skill `seo-2026-sota` (cartella in `skills/`). Rispetta `userConfig`: scrivi in `output_language` (IT default), tara tutto su `userConfig.settore`, usa `userConfig.brand_voice` nei suggerimenti di copy e `userConfig.default_channel` per priorizzare la distribuzione.

## Passi

1. **Carica la skill.** Richiama per nome la skill `seo-2026-sota` (si attiva dalla sua description; non usare path di file): parti dal suo indice, usa la cheatsheet per soglie e numeri verificati e approfondisci patterns e il capitolo dal Topic Index (CWV, schema, AIO, IndexNow, distribuzione per modello) quando servono. NON copiare il testo dei libri: estrai solo ciò che serve per decidere.

2. **Inquadra l'input.** Da `$ARGUMENTS` ricava dominio/pagine, settore/ICP e obiettivo. Tieni separati i due programmi: **SEO classica (Google)** e **GEO (motori generativi)** — l'overlap reale è basso, non trattarli come un'unica leva.

3. **SEO tecnica.** Valuta su **SEO tecnica Google** e **Core Web Vitals** (LCP/INP/CLS sulle soglie p75 della cheatsheet), più **schema.org** (Article+Author+Organization) ed **E-E-A-T** con la Experience dominante. Indica i fix prioritari e i tool/API ufficiali da usare per misurare.

4. **Contenuti.** Imposta i contenuti per essere selezionabili da **AI Overviews** e dagli LLM: pattern heading-as-question + risposta atomica, e pivot ToFu→BoFu sui 4 formati BoFu. Lega i topic al settore e all'intento dell'ICP.

5. **Distribuzione GEO.** Applica **GEO (ottimizzazione per LLM: ChatGPT/Claude/Gemini/Perplexity)** mappando ICP → modelli → canali con le leve per modello e la regola 80/20. Priorizza coerentemente con `userConfig.default_channel`.

6. **Output — Piano SEO/GEO 2026.** Produci un piano strutturato:
   - **Sintesi** (1 paragrafo: dove agire prima e perché)
   - **SEO tecnica** — fix CWV/schema/E-E-A-T prioritizzati (impatto × sforzo) con metrica e tool
   - **Contenuti** — cluster e pagine BoFu, formato heading-as-question, intento ICP
   - **Distribuzione GEO** — tabella modello → fonte/canale → azione, con quick win
   - **Roadmap 30/60/90 giorni** e **KPI** (SEO e GEO separati)

Chiudi ricordando di rivalidare cifre, URL e best practice contro le fonti primarie prima di impegnare budget; segnala dove servono dati specifici del progetto non deducibili da `$ARGUMENTS`.

> **Red-team (opzionale).** Invoca l'agent `gtm-critic` per stressare il piano (priorità realistiche per impatto×sforzo? SEO e GEO tenuti distinti? claim/numeri verificati? quick win davvero raggiungibili?), poi integra i fix.
