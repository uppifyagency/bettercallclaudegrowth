---
description: Genera un piano di lead generation con Core Four prioritizzato e design del lead magnet per il tuo settore.
argument-hint: [offerta/prodotto + ICP + canale o budget, es. "corso B2B per HR, budget 500/mese"]
---

# /gtm-leads - Piano di lead generation con Core Four e lead magnet

Questo comando applica la skill **hormozi-leads**. Rispetta `userConfig.output_language` (IT di default), `userConfig.settore`, `userConfig.brand_voice` e `userConfig.default_channel`.

Input dell'utente: `$ARGUMENTS`

## Passi

1. **Carica la skill.** Richiama per nome la skill `hormozi-leads` (si attiva dalla sua description; non usare path di file) e applicane i framework, approfondendo con cheatsheet, patterns e il capitolo pertinente (lead magnet, cold outreach, math di acquisizione, referral, affiliati) quando servono. Non copiare il contenuto del libro: usalo solo per ragionare.

2. **Inquadra l'obiettivo.** Estrai da `$ARGUMENTS` offerta/core offer, ICP e vincoli (canale, budget, risorse). Adatta tutto a `userConfig.settore` e al `userConfig.default_channel`.

3. **Prioritizza il Core Four.** Valuta i quattro metodi — **warm outreach**, **cold outreach**, **content** (post free content), **paid ads** — rispetto a risorse, budget e maturità dell'attività. Assegna una priorità (ora / poi / dopo) seguendo la logica del Roadmap e della Rule of 100. Per ogni metodo scelto indica azione concreta, volume target e prima mossa.

4. **Progetta il Lead Magnet.** Usa il framework **Lead Magnet** (i 3 tipi e i 7 step) per disegnare un'offerta gratuita/a basso costo che risolve un problema stretto del settore e rivela il problema più grande che la core offer risolve. Definisci tipo, nome testabile, modalità di consumo e CTA.

5. **Aggiungi la leva di crescita.** Indica come innescare **referral** (ask sistematico, target di quota) e/o **affiliati**, e annota il vincolo economico **Client-Financed Acquisition** (recupero CAC entro 30 giorni, LTGP:CAC ≥ 3:1) come guardrail per scalare i paid ads. Se hai i numeri, verificalo con: `node "${CLAUDE_PLUGIN_ROOT}/scripts/cfa-calculator.js" --ltgp <n> --cac <n> [--cash30 <n>] [--monthly-gp <n>]`.

6. **Produci l'output strutturato:**
   - Sintesi: offerta, ICP, vincoli.
   - Tabella Core Four prioritizzato (metodo, priorità, azione, volume, prima mossa).
   - Scheda Lead Magnet (tipo, problema stretto, nome, consumo, CTA).
   - Leva referral/affiliati + nota su CAC e LTGP:CAC.
   - Primo passo operativo per i prossimi 7 giorni.

> **Red-team (opzionale).** Per un piano ad alto impatto, invoca l'agent `gtm-critic` per stressare il piano lead (Core Four davvero credibile o "posta e prega"? lead magnet abbastanza stretto? math CAC/LTGP:CAC sostenibile?), poi integra i fix.
