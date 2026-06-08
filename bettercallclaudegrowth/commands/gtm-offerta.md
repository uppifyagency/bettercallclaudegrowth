---
description: Costruisce una Grand Slam Offer (promessa, prezzo, bonus, garanzia, scarsita/urgenza, nome) per l'offerta o il prodotto indicato.
argument-hint: prodotto/servizio + mercato/avatar target (es. "consulenza ricambi auto per officine indipendenti")
---

# /gtm-offerta - Grand Slam Offer in stile Hormozi

Questo comando applica la skill `hormozi-offers`. Rispetta `userConfig.output_language` (IT di default), `userConfig.settore`, `userConfig.brand_voice` e `userConfig.default_channel`.

Input utente: $ARGUMENTS

## Passi

1. **Carica la skill.** Richiama per nome la skill `hormozi-offers` (si attiva dalla sua description; non usare path di file) e applicane i framework, approfondendo con cheatsheet/patterns quando servono. NON copiare il contenuto del libro: usalo solo come guida operativa.

2. **Inquadra il mercato.** Valuta brevemente l'input contro la **Starving Crowd** (Pain, Purchasing Power, Easy to Target, Growing) per ancorare l'offerta a un avatar reale nel `settore`.

3. **Applica la Value Equation.** Per l'offerta in $ARGUMENTS lavora i quattro driver: alza **Dream Outcome** e **Perceived Likelihood**, abbassa **Time Delay** ed **Effort & Sacrifice**. Tieni questi driver come bussola di ogni elemento successivo. Per un punteggio oggettivo e la leva più debole, esegui: `node "${CLAUDE_PLUGIN_ROOT}/scripts/value-equation-score.js" --dream <1-10> --likelihood <1-10> --time <1-10> --effort <1-10>` (time/effort: 10 = molto alto).

4. **Componi la Grand Slam Offer** e restituisci la scheda strutturata:
   - **Promessa** — Dream Outcome specifico e legato allo status dell'avatar.
   - **Prezzo** — premium price con razionale (price-to-value); mai sconti.
   - **Bonus** — 3-5 bonus, ognuno con nome, problema risolto e valore ancorato.
   - **Garanzia** — scegli e motiva il tipo (incondizionata/condizionata/anti-garanzia/implicita); puoi impilarle.
   - **Scarsita/Urgenza** — leve oneste su offerta limitata e/o deadline.
   - **Nome** — applica la formula **MAGIC** (3-5 componenti) per un nome breve e magnetico.

5. **Allinea voce e canale.** Adatta tono e formato a `brand_voice` e al `default_channel` indicato nella configurazione.

6. **Red-team finale.** Invoca l'agent `gtm-critic` per stressare la scheda offerta (promessa credibile? prezzo difendibile? garanzia rischiosa? scarsita onesta?), poi integra i fix proposti nella versione finale.
