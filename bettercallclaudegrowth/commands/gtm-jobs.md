---
description: Scopre i Jobs to Be Done del cliente (progresso + circostanza, dimensioni funzionale/sociale/emotiva), le Forze del Progresso e il rischio Big/Little Hire — la base demand-side che precede posizionamento e offerta.
argument-hint: prodotto/servizio + cliente e situazione d'uso (es. "guide di viaggio digitali per turisti in Italia")
---

# /gtm-jobs - Jobs to Be Done in stile Christensen

Questo comando applica la skill `christensen-jobs` (Jobs Theory da *Competing Against Luck*). È il livello **demand-side a monte**: definisce *quale progresso* il cliente cerca, non *cosa vendi*. I suoi output vincolano posizionamento, offerta e copy. Rispetta `userConfig.output_language` (IT di default), `userConfig.settore`, `userConfig.brand_voice` e `userConfig.default_channel`.

Input utente: $ARGUMENTS

## Passi

1. **Carica la skill.** Richiama per nome la skill `christensen-jobs` (si attiva dalla sua description; non usare path di file) e applicane i framework, approfondendo con cheatsheet/patterns quando servono. NON copiare il contenuto del libro: usalo solo come lente operativa.

2. **Definisci il/i Job.** Per $ARGUMENTS scrivi il lavoro come frase — *"Quando [circostanza], aiutami a [progresso, verbo], così posso [scopo profondo]"* — usando **verbi e nomi**, mai aggettivi. Verifica il livello di astrazione (abbastanza ampio da vedere il vero set competitivo, abbastanza stretto da guidare il design). Se le circostanze sono diverse, isola **lavori distinti** (il "Milk Shake Dilemma"): stesso prodotto, lavori diversi → messaggi e tier diversi.

3. **Mappa le tre dimensioni.** Per ogni lavoro esplicita le componenti **funzionale, sociale ed emotiva**. Segnala dove il sociale/emotivo è sottopesato: di solito è lì che si vince ed è lì che i competitor generici (Google, AI, commodity) non possono seguire.

4. **Individua la circostanza e il momento di lotta.** Definisci il **trigger** (evento scatenante) e la finestra temporale. Questo è ciò che il targeting e i form devono leggere — non il demografico.

5. **Inquadra il campo competitivo reale.** Includi sempre la **nonconsumption** ("competere con nulla" / il fai-da-te) e i **workaround/compensating behaviors**. Cosa "licenzia" il cliente per "assumere" la tua soluzione?

6. **Analizza le Forze del Progresso.** Mappa le quattro forze: **Push** della situazione + **Pull** della soluzione (spingono) vs **Abitudine** del presente + **Ansia** (di scegliere + di usare) che frenano. Lo switch avviene solo se push+pull > abitudine+ansia. Indica il **vincolo binding** e la leva più economica (spesso ridurre ansia/abitudine, non aggiungere feature).

7. **Big Hire / Little Hire.** Distingui l'acquisto (Big Hire) dall'uso reale ricorrente (Little Hire). Evidenzia il rischio "comprato e mai usato" e come progettare l'esperienza perché il prodotto venga *effettivamente usato* (è ciò che genera recensioni e referral).

8. **Job Spec → Résumé.** Sintetizza lo **spec del lavoro** (dimensioni, trade-off, set competitivo, ostacoli/ansie da rimuovere) come ponte verso l'offerta: cosa deve "avere nel curriculum" il prodotto per essere assunto.

9. **Output strutturato.** Restituisci in sezioni distinte: (a) il/i Job definiti, (b) le tre dimensioni, (c) circostanza e trigger, (d) campo competitivo + nonconsumption, (e) Forze del Progresso con il vincolo binding, (f) Big/Little Hire, (g) Job Spec per l'offerta. Allinea tono a `brand_voice`.

10. **Red-team finale.** Invoca l'agent `gtm-critic` per stressare l'analisi (lavoro al livello di astrazione sbagliato? job definito con aggettivi invece che verbi? sociale/emotivo ignorato? nonconsumption dimenticata? forze opposte non affrontate?), poi integra i fix nella versione finale.

> **Aggancio al funnel:** questo è il passo 0 del go-to-market. Il/i Job definiti qui alimentano `/gtm-posizionamento` (il frame competitivo nasce dal lavoro), `/gtm-offerta` (il Job Spec diventa il value stack) e `/gtm-copy` (l'hero risponde a una forza, non a una feature).
