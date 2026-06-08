# Capitolo 5: Customer Journey & gli 8 trigger

## Idea centrale
Si progetta la strategia **partendo dal Customer Journey**: si smonta il percorso d'acquisto e si individuano i primi trigger per le automazioni. Da ogni trigger nascono sia i flussi sia i segmenti dinamici.

## Framework introdotti
- **Customer Journey Map (e-commerce)** → flussi base applicabili a quasi tutti gli store: welcome series, newsletter (promo/news/storia brand), recupero visitatori, recupero carrelli/checkout, post-purchase series (thank you, recensioni, how-to, coupon).
- **Gli 8 trigger di attivazione/segmentazione**:
  1. **Acquisizione del lead** → onboarding/welcome series; abbina un flusso a ogni canale.
  2. **Interazioni con l'email** → manutenzione audience (inattivi) + individuare gli attivi; segmenti: ha aperto le ultime X, ha cliccato email specifiche, ha concluso il flusso.
  3. **Eventi/date** → compleanno (alti open rate; idee oltre lo sconto: gift box, bonus, campioni, **tecnica Bait & Hook** sul LTV), anniversari iscrizione, data primo acquisto.
  4. **Attributi assegnati al contatto** → logica Trigger/Condizione/Azione (es. "dopo 3gg dall'apertura, SE attributo 'Call prenotata'=No → reminder").
  5. **Comportamenti sul sito** → pagina pricing = fase di valutazione; **Price Drop** a chi ha visto/aggiunto al carrello (limitato dal GDPR).
  6. **Shopping experience** → carrello/back-in-stock, wishlist, up/cross-selling, post-purchase; flussi diversi per cliente nuovo vs ricorrente.
  7. **CRM** → stato avanzamento lead, probabilità conversione, **score**; manutenzione lista e individuazione dei "best in town".
  8. **CDP** → sincronizza email/shop; eventi Shopify (ordini, importo, checkout iniziato, rimborsi); abilita la **matrice RFM**.
- **Matrice RFM (Recency, Frequency, Monetary)**: segmenta per importo speso, n° ordini, regolarità d'acquisto. Ogni cliente cambia cluster nel tempo (oggi Champion, domani At Risk). → dettaglio in ch07.

## Concetti chiave
- **LTV (LifeTime Value)** e **Expected Date Of Next Order**: dato predittivo (ML) che stima la data del prossimo ordine → trigger per riacquisto.
- **Churn**: ex-clienti che smettono di acquistare → recupero con **Winback**.
- **Replenishment**: riacquisto di consumabili (es. trattamento da 90gg → flow a 80gg).
- **Zero/First-party data**: dati dati intenzionalmente dall'utente, base affidabile dei segmenti.
- **WIIFM / per stage del funnel (Neha Divanji)**: Awareness → *What's In It For Me? / Why us? / elevator pitch*; Consideration → confronto con concorrenti + press mentions; Purchase → recensioni/rating + UGC; Onboarding → rinforza la scelta; Loyalty/Advocacy → referral, ambassador, lookalike.

## Modelli mentali
- Lavora in **full-funnel**: la conversione d'acquisto non è l'unica metrica; far avanzare le persone verso la *conversione successiva*, post-vendita incluso (retention).
- "Siamo noi a dettare le regole del gioco" su CDP/RFM: stabilisci dove e quando intervenire.

## Anti-pattern
- Considerare l'acquisto come unica metrica → ignori i micro-trigger che lo abilitano.
- Voler montare "l'intero castello" alla prima versione → procedi step-by-step.

## Takeaway
1. Parti dal customer journey: smonta il percorso, individua i primi trigger.
2. Usa gli 8 trigger come menu di flussi e segmenti.
3. Sfrutta RFM, LTV ed Expected Date Of Next Order per anticipare il riacquisto.
4. Mappa i contenuti al funnel stage (WIIFM, social proof, ecc.).

## Collegamenti
- **Ch 6**: come i trigger diventano workflow.
- **Ch 7**: RFM e segmenti in dettaglio.
- **Ch 9**: i flussi per scenario (shopping, date, winback).
