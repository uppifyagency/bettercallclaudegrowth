---
name: advanced-email-marketing
description: "Knowledge base da \"AEMA — Email Marketing Automation avanzata\" di Alessandro Frangioni (ROADS®) e contributori. Usala per progettare strategie di email marketing automation: customer journey, trigger, segmentazione RFM, workflow, welcome/drip/abbandono carrello/winback, deliverability, GDPR, A/B test, AI e integrazione advertising."
allowed-tools:
  - Read
  - Grep
argument-hint: [argomento o capitolo, es. segmentazione | welcome series | RFM | deliverability | ch06]
---

# AEMA — Email Marketing Automation avanzata
**Autore**: Alessandro Frangioni (agenzia ROADS®) + 20 contributori | **Pagine**: ~237 | **Capitoli**: 10 | **Generato**: 2026-06-05

## Come usare questa skill

- **Senza argomenti** — carica i framework core qui sotto per progettare una strategia.
- **Con un argomento** — chiedi di `segmentazione`, `welcome series`, `RFM`, `carrello abbandonato`, `GDPR`…: leggo il capitolo giusto prima di rispondere.
- **Con un capitolo** — chiedi `ch06`; carico quel file.
- **Sfoglia** — "quali capitoli hai?" per l'indice completo.

Quando chiedi un tema non nei Framework Core qui sotto, leggo il capitolo rilevante prima di rispondere.

---

## Principio fondante

> **Strategia → poi piattaforma. Profilazione → poi automazione.** Non scegliere il tool prima della strategia (errore #1: si usa ~10% del potenziale). E **"Fare newsletter ≠ fare marketing automation"** (errore #2). Non fare MA significa lasciare sul tavolo **~70% delle entrate possibili**; l'email resta il canale col ROI più alto.

L'email marketing oggi è un pezzo del puzzle della marketing automation, integrato con e-commerce, sito, landing, SMS, push, **CRM e CDP**. La casella di posta è un luogo intimo: l'accesso è una concessione di fiducia — non bruciarla con offerte a tutti.

## I 3 pilastri della strategia (framework Matteuzzi → ch01)
1. **Analisi** — 4 aree: interna, della domanda, della concorrenza, delle tendenze. "Le analisi del sangue" prima di ogni piano.
2. **Pianificazione** — 5 punti (stile OKR): **obiettivi** (max 3, trimestrali) → **risultati chiave** (max 3 per obiettivo) → **tattiche** (il *come*, ancorato al customer journey) → **KPI** (anticipatori vs risultati-chiave ritardatari) → **action list** (chi-cosa-entro quando).
3. **Esecuzione** — la cosa più importante sono i **test**.

## Gli 8 trigger di attivazione/segmentazione (→ ch05)
Acquisizione lead · Interazioni con l'email · Eventi/date · Attributi del contatto · Comportamenti sul sito · Shopping experience · CRM · CDP. Da ogni trigger nascono sia automazioni sia segmenti dinamici.

## La grammatica del workflow (framework De Portu → ch06)
Prima di disegnare: **Obiettivo + KPI** (e chi ESCLUDERE) → **Segmento** (verifica che sia abbastanza corposo: a ogni step si assottiglia) → **Trigger/Enrollment** (con booleani **AND/OR/NOT**) → **Delay** → **If/then** (i percorsi si diramano) → **Tempo** (always-on? ingresso una volta sola?). Usa zero-party data quando puoi.

## Segmentazione: i due motori (→ ch07)
- **Lead gen → scoring CRM**: email aperta 5pt, cliccata 15, visita sito 20, call/meet 50, workflow completato 20, preventivo 100 → soglie: >100 Prospects, 50-100 Qualified, 20-50 Warm, <20 New/Cold.
- **E-commerce → matrice RFM** (Recency, Frequency, Monetary) → 11 cluster: Champions, Loyal, Potential Loyalist, New, Promising, Needs Attention, About To Sleep, At Risk, Can't Lose Them, Hibernating, Lost. Più segmenti avanzati: Deal Hunter, Last-Minute Shopper, VIP, Window Shopper, Impulse Buyer, Missed. Dimensioni extra: Brand/Category/Product/Context/AOV.

## I flussi di automation che servono quasi sempre (→ ch06, ch09)
- **Welcome series / Onboarding** (Soap Opera Sequence: spoiler verso la prossima email).
- **Drip campaign** (lead gen/servizi: nurturing verso conversione, + email plain-text "dal founder").
- **Funneling Flow** — dopo N email obbligate, prosegui solo su chi apre/clicca → l'open rate *risale* (caso reale: dalla 4ª email 26%→48%, poi 62%, 78%).
- **Shopping Flow**: browse abandonment, carrello abbandonato (2 email: reminder + scadenza/sconto), post-acquisto, **Replenishment** (repeat-buyer spende 3x; flow a ~80gg su prodotto da 90gg), Back-in-Stock / Price Drop / Availability Drop.
- **Date Flow**: compleanni (tecnica Bait & Hook), anniversari, Expected Date Of Next Order.
- **Winback/Churn** (2 email, es. 120 + 15gg) → **Sunset Flow** (archivia inattivi: migliora metriche e abbassa i costi del piano).

## Regole ad alto impatto
- **Coupon dinamici e unici** (personalizzati + temporizzati con countdown), mai statici nei flussi personalizzati.
- **Evita la sovrapposizione di email**: usa Smart Sending / segmento "in onboarding escluso dalle newsletter".
- **Deliverability prima di tutto**: autentica dominio (DNS), mittenti diversi (personale + aziendale), combina HTML e plain-text.
- **GDPR**: consenso libero/esplicito/separato per il marketing, salvato; double opt-in; minimizzazione (nome + email bastano); il *soft spam* è l'eccezione (stesso cliente, prodotti analoghi).
- **L'umano resta**: il successo nasce dalla combinazione marketer + automation. Parti dalle basi, una/due automazioni alla volta.

---

## Indice dei capitoli

| # | Titolo | Framework chiave |
|---|--------|------------------|
| [ch01](chapters/ch01-strategia-fondamenti.md) | Strategia & fondamenti | 3 pilastri, OKR marketing, lead nurturing, asset intangibili, CRM/CDP |
| [ch02](chapters/ch02-acquisizione-lead.md) | Acquisizione contatti & lead gen | Qualità vs quantità, lead magnet, affiliate, no-liste-comprate |
| [ch03](chapters/ch03-setup-deliverability-gdpr.md) | Setup, deliverability & GDPR | Auth dominio, template S/M/L, organizzazione liste, consenso/soft spam |
| [ch04](chapters/ch04-email-perfetta.md) | L'email perfetta | Contenuti dinamici IF/ELSE, oggetto+preview, angles, A/B, timing |
| [ch05](chapters/ch05-customer-journey-trigger.md) | Customer journey & 8 trigger | Customer journey map, full-funnel, RFM/LTV, Expected Date Next Order |
| [ch06](chapters/ch06-grammatica-workflow-flussi.md) | Grammatica del workflow & flussi | 6 elementi del workflow, newsletter/spin-off/onboarding/drip |
| [ch07](chapters/ch07-segmentazione.md) | Segmentazione | Scoring lead-gen, RFM 11 cluster, segmenti avanzati, Conversific |
| [ch08](chapters/ch08-tracciamento-dati.md) | Tracciamento & analisi dati | GA4, UTM/API, server-side, KPI |
| [ch09](chapters/ch09-framework-automation.md) | Framework di automation | Trigger/Funneling/Date Flow, framework lead-gen & e-commerce |
| [ch10](chapters/ch10-ai-advertising.md) | AI & advertising nella MA | AI test vs A/B, cookieless/ATT, first-party, remarketing, lookalike |

## Indice per argomento

- **A/B testing / AI test** → ch04, ch10
- **Abbandono carrello (Abandoned Cart)** → ch09
- **Advertising / remarketing / lookalike** → ch10
- **Affiliate marketing** → ch02
- **AI / machine learning** → ch10
- **Asset intangibili** → ch01
- **Bait & Hook** → ch05, ch09
- **Coupon dinamici** → ch09
- **CRM / CDP** → ch01, ch05, ch06, ch07
- **Customer journey** → ch01, ch05
- **Deliverability / autenticazione dominio** → ch03
- **Drip campaign** → ch06, ch09
- **Funneling Flow** → ch09
- **GDPR / consenso / soft spam / double opt-in** → ch03
- **Lead magnet / lead nurturing** → ch01, ch02
- **Oggetto / preview text / angles** → ch04
- **OKR marketing (obiettivi/risultati chiave/tattiche)** → ch01
- **Post-purchase** → ch06, ch09
- **Replenishment / Expected Date Of Next Order** → ch05, ch09
- **RFM (11 cluster)** → ch05, ch07
- **Scoring lead-gen** → ch07
- **Segmenti avanzati (Deal Hunter, VIP…)** → ch07
- **Send Time Optimization / Smart Sending** → ch04, ch06
- **Soap Opera Sequence (SOS)** → ch06
- **Template S/M/L / skin stagionali** → ch03
- **Tracciamento server-side / GA4** → ch08
- **Welcome series / onboarding** → ch06, ch09
- **Winback / Sunset Flow** → ch09

## File di supporto

- [glossary.md](glossary.md) — termini chiave con definizioni
- [patterns.md](patterns.md) — tecniche e flussi pronti all'uso
- [cheatsheet.md](cheatsheet.md) — tabelle rapide: trigger, RFM, scoring, timing

---

## Scope & limiti

Copre la metodologia del libro (platform-agnostic). Non è la documentazione di una piattaforma specifica (Klaviyo, Mailchimp, ActiveCampaign, Brevo…): verifica sintassi e funzioni nel tool che usi e fai test prima di inviare. Conversion/dati citati sono casi del libro, non garanzie.
