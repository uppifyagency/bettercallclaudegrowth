---
description: Progetta un workflow di email automation (obiettivo+KPI, segmento, trigger, delay, if/then, sequenza) a partire dall'input.
argument-hint: "<flusso o obiettivo, es. welcome series | carrello abbandonato | winback VIP | drip lead-gen> [+ contesto cliente/settore]"
---

# /gtm-email - Workflow di email automation

Questo comando applica la skill `advanced-email-marketing`.

Rispetta sempre `userConfig.output_language` (IT default), `userConfig.settore`, `userConfig.brand_voice` e `userConfig.default_channel`.

## Passi

1. **Carica la skill.** Richiama per nome la skill `advanced-email-marketing` (si attiva dalla sua description; non usare path di file) e applicane i framework, approfondendo con cheatsheet, patterns e il capitolo pertinente (RFM, segmenti avanzati, flusso specifico) quando servono. NON copiare il contenuto dei libri: usalo solo per ragionare.

2. **Inquadra l'input.** Analizza `$ARGUMENTS` e il `settore` per capire scenario (lead-gen vs e-commerce), obiettivo del flusso e pubblico. Se mancano dati essenziali (ciclo prodotto, lunghezza desiderata, esclusioni), fai 1-2 domande mirate prima di procedere.

3. **Applica i framework.** Lavora nell'ordine della **grammatica del workflow**: parti dal **customer journey** e scegli tra gli **8 trigger** quello di attivazione corretto. Definisci il **segmento** (via **segmentazione RFM** per e-commerce o scoring per lead-gen) e gli esclusi. Imposta delay, **if/then** e ramificazioni. Modella il flusso giusto tra **welcome / drip / carrello abbandonato / winback** (e relativo Sunset). Verifica **deliverability**, conformità **GDPR** e prevedi almeno un **A/B test** su oggetto o timing.

4. **Produci l'output strutturato** nel `brand_voice`:
   - **Obiettivo + KPI** (e chi ESCLUDERE)
   - **Segmento** (definizione + verifica corposità)
   - **Trigger / Enrollment** (condizione esatta con AND/OR/NOT, ingresso una volta sola o always-on)
   - **Sequenza email**: per ciascuna -> delay, ramo if/then, oggetto + preview text, angolo del contenuto, CTA
   - **Note operative**: deliverability, GDPR/consenso, coupon dinamico vs statico, A/B test previsto

Chiudi con la checklist pre-lancio della skill come verifica finale prima dell'attivazione.

> **Red-team (opzionale).** Invoca l'agent `gtm-critic` per stressare il flusso (coerenza messaggio offerta↔email, frizioni e punti di fuga, deliverability/GDPR, trigger corretto), poi integra i fix.
