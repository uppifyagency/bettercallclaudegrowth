---
description: Concierge GTM. Descrivi la tua situazione e ti dice da dove partire: la singola skill giusta o la sequenza ordinata di command da eseguire, calibrata sul tuo archetipo (coaching, B2B SaaS, B2C, locale, azienda avviata) e stadio (micro-lancio, scaling, established). Punto d'ingresso consigliato se non sai da dove iniziare.
argument-hint: descrivi la tua situazione (es. "lancio un coaching di nutrizione, parto da zero" oppure "ho un SaaS B2B HR, 50 trial/mese, voglio crescere")
---

# /gtm-buddy — da dove parto?

Il punto d'ingresso del plugin quando **non sai quale command usare**. Descrivi la tua situazione e ricevi un percorso su misura: una skill singola o la sequenza giusta.

Input utente: $ARGUMENTS

## Cosa fare

1. **Classifica e instrada.** Lancia l'agent **gtm-buddy** passandogli `$ARGUMENTS` e l'intera `userConfig`. L'agent legge `playbooks/_index.md` + il playbook dell'archetipo, classifica **archetipo × stadio** (facendo al massimo 1 domanda di disambiguazione se serve) e restituisce la raccomandazione nel formato: Situazione · Cosa fai adesso (skill singola o sequenza ordinata) · Perché · Canale primario + enfasi/cosa saltare · Prima azione.

2. **Presenta la raccomandazione** all'utente così com'è, e chiudi con la scelta:
   - **«Eseguo io la sequenza in automatico»**, oppure
   - **«Lancio un singolo passo»**, oppure
   - **«Pipeline completa orchestrata»** (`/gtm`).

3. **Esecuzione** — la fa il **thread principale**, non l'agent `gtm-buddy` (che è un router read-only e non scrive deliverable). Tre vie:
   - **Auto-esecuzione completa / «fai tutto tu»** → delega a **`/gtm $ARGUMENTS`**. L'agent `gtm-orchestrator` (che ha Write e Bash) esegue le fasi con contesto cumulativo, i checkpoint `gtm-critic`, il **GTM Readiness Score** calcolato con gli script deterministici, e scrive `gtm-plan.md`. È la via consigliata per l'esecuzione automatica end-to-end.
   - **Sottosequenza su misura** (non l'intera pipeline, es. solo `gtm-jobs → gtm-offerta → gtm-copy`) → il thread principale lancia in ordine i singoli `/gtm-*` raccomandati, portando avanti il contesto di passo in passo e invocando `gtm-critic` ai checkpoint del playbook. Per lo score di una sottosequenza usa `node "${CLAUDE_PLUGIN_ROOT}/scripts/gtm-readiness-score.js" …`.
   - **Un solo passo** → conferma il command singolo (es. `/gtm-offerta …`) e fermati.

## Principio
gtm-buddy **non sostituisce** i command specialisti né l'orchestratore: li **coordina**. Per situazioni a 0 o disordinate è il modo più affidabile per non sbagliare percorso. Non imporre mai la pipeline da 7 fasi a chi è in micro-lancio: dai il percorso più corto che funziona.
