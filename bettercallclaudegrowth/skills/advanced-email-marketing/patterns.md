# Pattern & Tecniche — AEMA

Tecniche concrete, flussi pronti, sequenze e best practice del libro. Ogni pattern include quando usarlo, come costruirlo e le insidie principali.

---

## Welcome Series (Onboarding)
**Quando**: nuovo iscritto da qualsiasi canale (newsletter, pop-up, landing, acquisto).
**Come**: 4–7 email | abbina un flusso a ogni canale di acquisizione | includi almeno un'email plain-text "personale" dal founder/CEO (giorno 2, orario lavorativo) | usa la **Soap Opera Sequence** (ogni email finisce con uno spoiler) | aggiungi tag "Automation Completata" a fine flow.
**Regola**: escludi chi è in onboarding dalle newsletter standard (Smart Sending o segmento esplicito).

---

## Drip Campaign (Nurturing B2B/B2C)
**Quando**: lead gen servizi/formazione; obiettivo: portare il lead a prenotare una call o a comprare.
**Come**: 4–7 email in 10–15 giorni | email #1 valore immediato | email #2 plain-text "dal CEO" (rimuove il freno) | alternare email HTML e plain-text | CRM: al termine assegna score e tag, poi task al sales se Prospects.
**Caso reale** (Accademia della Pubblicità): 7 email in 12 giorni → conversioni significative.

---

## Funneling Flow
**Quando**: campagne newsletter o flussi lunghi dove l'open rate cala.
**Come**: dopo N email obbligate (es. 3), la successiva va solo a chi ha aperto almeno una delle precedenti → continua a restringere ad ogni step.
**Dati reali** (Business School): senza funneling 75%→39%→30%→26%→20%; con funneling dalla 4ª email: 48,5%→62,1%→77,8%.

---

## Abandoned Cart Recovery
**Quando**: checkout avviato ma non completato.
**Come**: max 2 email — email #1 dopo 1h (reminder, nessuno sconto) | email #2 dopo 24h (leva scadenza o sconto, coupon dinamico unico) | raramente oltre 7gg.
**Nota**: non aggiungere sconto subito nell'email #1, si deprezza il prodotto.

---

## Browse Abandonment
**Quando**: utente visita pagina prodotto/categoria ma non aggiunge al carrello.
**Come**: 1–2 email | finestra breve (1–2h dopo visita) | mostra il prodotto visto | GDPR: verificare consenso tracciamento comportamentale.

---

## Post-Purchase Series
**Quando**: dopo ogni acquisto.
**Come**: email #1 conferma + ringraziamento | email #2 come/how-to uso prodotto | email #3 richiesta recensione (timing: 5–10gg dopo consegna) | email #4 coupon o up/cross-sell | **flusso diverso** per cliente nuovo vs ricorrente.
**Replenishment**: per prodotti consumabili (es. 90gg) → flow a 80gg con "sta finendo?"; repeat-buyer spende ~3x.

---

## Winback Flow
**Quando**: cliente inattivo da X giorni (definisci soglia in base al tuo storico acquisti).
**Come**: 2 email — email #1 a ~120gg (re-engagement, offerta o valore) | email #2 a +15gg (ultima chance, tono urgente) | chi non apre → Sunset.
**Caso Lombardi** (+57% fatturato in 2 mesi): 5 automazioni "banali" incluso winback + ringraziamento per cluster di acquisto.

---

## Sunset Flow
**Quando**: contatto non apre da X mesi (soglia da calibrare sul proprio ritmo di invio).
**Come**: 1 email di "sei ancora qui?" con link di conferma interesse | chi non risponde → archiviato (non pagato nella maggior parte dei piani).
**Benefici**: metriche di apertura migliori + costi piano inferiori.

---

## Bait & Hook (raccolta data mancante)
**Quando**: manca una data chiave (compleanno, data acquisto, anniversario).
**Come**: email che promette un vantaggio esclusivo per chi inserisce il dato → link a Typeform o form interno → dati aggiornati in anagrafica → trigger attivato alla data.
**Caso Balique®**: raccolta compleanni con questo metodo, poi flow compleanno ad alto open rate.

---

## Newsletter Always-On con nome proprio
**Come**: dai un nome alla tua newsletter (es. "Always-On!") + landing dedicata → testa "Iscriviti alla newsletter" vs "Iscriviti ora a [Nome]!".
**Caso reale**: la versione con nome = iscrizioni costanti; la versione generica = quasi zero.
**Ricicla le evergreen**: le email non promozionali sempreverdi vanno reinviate ai nuovi iscritti via automation (→ newsletter ha valore retroattivo).

---

## Segmentazione per cluster di acquisto (Winback coupon)
**Come**: segmenta per numero di acquisti → coupon diversi:
- 3+ acquisti → 10% sempre (nessun coupon aggiuntivo necessario)
- 2 acquisti → 15% valido 30gg
- 1 acquisto → 20% valido 30gg
- 0 acquisti → 50% valido 24h (massima urgenza per primo acquisto)

---

## Date Flow (compleanni, anniversari, ricorrenze)
**Come**: raccogli data → flow si attiva N giorni prima (pre: es. regalo/preparazione) o il giorno stesso (compleanno: alta apertura) | email post-evento (recensione, assistenza).
**Pre-event**: abbonamento in scadenza, viaggio imminente, prodotto in esaurimento (Replenishment).
**Post-event**: "com'è andata?", survey, seconda opportunità.

---

## Coupon Dinamico e Unico (best practice)
**Regola**: nei flussi personalizzati usa sempre coupon unici per contatto (non condivisibili) + countdown timer (Mailtimer.io).
**Quando usare statici**: saldi generali, BFCM, welcome series con tasso iscrizione molto alto (volume).
**Motivo**: coupon statici si diffondono fuori dal contatto → erosione margini.

---

## Framework Lead Generation (scenario completo)
1. **Welcome Flow** (post-acquisition): presentazione brand + valore.
2. **Drip Campaign** (nurturing): 4–7 email, email plain-text "personale", SOS.
3. **Follow-Up** (reminder): scadenza offerta, recensioni, referral.
4. **CRM**: funneling su score/attributi, task al sales per Prospects.

---

## Framework E-commerce (scenario completo)
1. **Welcome Series** ← iscrizione newsletter (sconto benvenuto + reminder 4h + ultima chance 8h, poi 7 email a 3gg).
2. **Shopping Flow**: Browse Abandonment → Abandoned Cart → Post-Purchase → Replenishment → Back in Stock / Price Drop.
3. **Up & Cross Selling**: bundle/set, travel size, garanzie; per categoria/brand.
4. **CDP**: Bait & Hook compleanni, Winback, ricorrenze, soglie RFM.
5. **Sunset Flow**: lista pulita, metriche migliori, costi ridotti.

---

## Advertising integrato (remarketing + lookalike)
**Remarketing**: esporta segmenti email (inattivi, cliccato-non-comprato, RFM specifici) → Custom Audience su Meta/Google → messaggi coerenti con il flusso email attivo.
**Lookalike**: usa Champions o clienti con LTV alto come seed → acquisizione qualitativa.
**Exclusion**: escludi clienti attivi dalle campagne di acquisizione fredda.
**Full-funnel sync**: chi è in Winback email vede anche un ad "Bentornato/a" su Meta.
