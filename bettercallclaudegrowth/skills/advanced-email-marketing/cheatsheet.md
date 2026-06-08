# Cheatsheet rapido — AEMA

---

## Gli 8 trigger (menu di attivazione)

| # | Trigger | Flussi tipici |
|---|---------|---------------|
| 1 | Acquisizione lead | Welcome series, Onboarding |
| 2 | Interazioni email | Funneling Flow, re-engagement |
| 3 | Date/eventi | Compleanno (Bait & Hook), anniversario, replenishment |
| 4 | Attributi contatto | CRM / task sales, reminder call |
| 5 | Comportamenti sito | Browse Abandonment, Price Drop, visita pricing |
| 6 | Shopping experience | Carrello abbandonato, Post-purchase, Back in Stock |
| 7 | CRM | Score soglie, avanzamento funnel lead |
| 8 | CDP | Soglie RFM, ordini Shopify, Winback |

---

## Scoring lead gen CRM (→ ch07)

| Azione | Punti |
|--------|-------|
| Email aperta | 5 |
| Email cliccata | 15 |
| Visita sito | 20 |
| Workflow completato | 20 |
| Call / meeting | 50 |
| Proposta / preventivo inviato | 100 |

**Soglie**: >100 Prospects · 50–100 Qualified · 20–50 Warm · <20 New/Cold

---

## Matrice RFM — 11 cluster (→ ch07)

| Cluster | Recency | Frequency | Monetary | Azione |
|---------|---------|-----------|----------|--------|
| Champions | Alta | Alta | Alta | Premia, fai ambassador/lookalike |
| Loyal Customers | Media | Alta | Media-alta | Mantieni, offerte esclusive |
| Potential Loyalist | Alta | Media | Media | Spingi al secondo acquisto |
| New Customers | Alta | Bassa | Bassa | Onboarding, educa al brand |
| Promising | Alta | Bassa | Bassa | Nurturing leggero |
| Needs Attention | Media | Media | Media | Stimola prima che scada |
| About To Sleep | Bassa | Bassa | Bassa | Offerta + urgenza |
| At Risk | Bassa | Alta | Alta | Winback aggressivo |
| Can't Lose Them | Bassa | Alta | Molto alta | Winback prioritario assoluto |
| Hibernating | Molto bassa | Bassa | Bassa | Ultimo tentativo poi Sunset |
| Lost | Minima | Minima | Minima | Sunset Flow |

---

## 6 elementi della grammatica del workflow (→ ch06)

1. **Obiettivo + KPI** — come misuro? Chi ESCLUDO?
2. **Segmento** — abbastanza corposo? (si assottiglia a ogni step)
3. **Trigger / Enrollment** — condizione esatta + AND/OR/NOT
4. **Delay** — quanto aspetto tra un'azione e l'altra?
5. **If/then** — percorsi condizionali
6. **Tempo** — always-on? Ingresso una sola volta?

---

## Timing indicativo dei flussi principali

| Flusso | Email | Timing |
|--------|-------|--------|
| Welcome series | 4–7 | Giorni 0/1/3/5/7/10/14 |
| Drip campaign lead gen | 4–7 | 12 giorni (caso: 7 email) |
| Abandoned cart | 1–2 | Dopo 1h + 24h |
| Post-purchase | 3–5 | Conferma / how-to (5gg) / recensione (10gg) / up-sell (15gg) |
| Replenishment | 1–2 | ~80% del ciclo prodotto (es. 80gg su 90gg) |
| Winback | 2 | Giorno 120 + giorno 135 |
| Sunset | 1 | Dopo soglia inattività |
| Compleanno | 1–2 | Giorno compleanno + reminder |

---

## Funneling Flow — dati reali

Senza funneling: 75% → 39% → 30% → 26% → 27% → 20%
Con funneling dalla 4ª email (solo chi ha aperto le 3 precedenti):
**48,5% → 62,1% → 77,8%**

---

## Coupon — quando usare dinamico vs statico

| Situazione | Tipo consigliato |
|------------|-----------------|
| Flusso personalizzato (winback, compleanno, post-purchase) | **Dinamico + unico** (countdown) |
| Welcome series generico con alto volume | Statico accettabile |
| BFCM / saldi / offerta pubblica | Statico (ma limita la diffusione) |
| Segmentazione per n° acquisti | **Dinamico** (% diversa per cluster) |

---

## Segmenti avanzati — azione rapida

| Segmento | Trigger | Azione |
|----------|---------|--------|
| Deal Hunter | Ha comprato solo in sconto | Price Drop alert, no full price |
| Last-Minute Shopper | Compra in prossimità deadline | Evidenzia tempi consegna |
| VIP | Alto LTV / frequenza | Accesso anticipato, esclusività |
| Window Shopper | Visita ma non converte | How-to, assistenza, social proof |
| Impulse Buyer | Compra ai lanci | Early access, urgenza |
| Missed | Ordine annullato / rimborsato | Survey + incentivo riacquisto |

---

## Checklist pre-lancio flusso

- [ ] Obiettivo definito e KPI scelto
- [ ] Segmento abbastanza corposo
- [ ] Trigger testato in sandbox
- [ ] Esclusioni configurate (chi NON deve ricevere)
- [ ] Smart Sending attivo (nessuna sovrapposizione)
- [ ] Coupon dinamici (non statici nei flussi personalizzati)
- [ ] Link UTM taggati per GA4
- [ ] Oggetto/preview text testati (A/B o AI test)
- [ ] Versione mobile verificata
- [ ] Sunset Flow collegato a valle
