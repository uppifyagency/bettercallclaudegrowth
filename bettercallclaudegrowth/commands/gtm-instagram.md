---
description: Imposta campagne di conversione Meta/Instagram con struttura, audience, creative e budget per il tuo settore.
argument-hint: [offerta/prodotto + obiettivo + ICP + GEO/budget, es. "corso B2B per HR, lead, Italia+UE, 500/giorno"]
---

# /gtm-instagram - Setup campagne di conversione Meta/Instagram

Questo comando applica la skill **instagram-performance-marketing**. Rispetta `userConfig.output_language` (IT di default), `userConfig.settore`, `userConfig.brand_voice` e `userConfig.default_channel`.

Input dell'utente: `$ARGUMENTS`

## Passi

1. **Carica la skill.** Richiama per nome la skill `instagram-performance-marketing` (si attiva dalla sua description; non usare path di file) e applicane i framework, approfondendo con cheatsheet, patterns e il capitolo pertinente (audience/lookalike, GEO/CPM, creative, ad settings, retargeting, A/B test) quando servono. Non copiare il contenuto del libro: usalo solo per ragionare.

2. **Inquadra l'obiettivo.** Estrai da `$ARGUMENTS` offerta, azione desiderata, ICP e vincoli (GEO, budget, dati first-party disponibili). Adatta tutto a `userConfig.settore` e coordina con `userConfig.default_channel`.

3. **Scegli l'obiettivo campagna.** Applica il framework **obiettivi campagna**: seleziona l'obiettivo che corrisponde all'azione esatta desiderata (conversioni/lead/installazioni) e motiva la scelta sulla scala CPM-per-obiettivo.

4. **Costruisci audience e GEO.** Applica **targeting audience & lookalike** (Custom Audience da dati first-party -> Lookalike a fasce, eventuale supplemento intent-based) e **riduzione GEO/CPM** (set di Paesi ad alta conversione vs mercati emergenti, broad per i test, specifico per il retargeting) per il settore.

5. **Definisci creative e budget.** Applica **ad creative** (video AI/UGC-style, 2-3 varianti orientate al CTR) e **accelerated spend** (front-loading, fase di apprendimento ~50 eventi, lancio sterile a un solo ad set) per impostare struttura di lancio e budget giornaliero.

6. **Aggiungi retargeting e test.** Applica **retargeting** (segmenti via Pixel, frequency cap) e **A/B test** (una variabile, finestra 7-14 giorni) come piano per la fase post-lancio, in coerenza con l'**addestramento dell'algoritmo** (loop CPM -> CPA).

7. **Produci l'output strutturato:**
   - Sintesi: offerta, obiettivo, ICP, vincoli.
   - Struttura campagne (obiettivo, ad set, performance goal, ad settings chiave).
   - Scheda audience + GEO (Custom/Lookalike, fasce, Paesi target).
   - Brief creative (formati, angoli, varianti, CTA).
   - Piano budget e lancio (budget/giorno, soglia learning phase, kill rule).
   - Piano retargeting + A/B test per i prossimi 14 giorni.

> **Red-team (opzionale).** Invoca l'agent `gtm-critic` per stressare il setup (obiettivo campagna ↔ azione desiderata coerenti? offerta e creative allineate? guardrail ROAS/CPA vs margine? budget non scalato troppo presto?), poi integra i fix.
