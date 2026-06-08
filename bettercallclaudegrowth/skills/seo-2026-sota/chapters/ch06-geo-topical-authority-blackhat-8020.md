# Capitolo 6: Topical authority GEO, black hat e la regola dell'80/20

## Core Idea
I modelli generativi premiano la profondità su un verticale, non l'ampiezza generica. Il 20% del lavoro che genera l'80% del risultato è chiaro e ripetibile; le tattiche black hat danno risultati di breve durata con rischio reputazionale alto.

## Frameworks Introdotti
- **Topical authority GEO (più stretta della SEO)**: un sito con 50 articoli su un singolo verticale è citato più spesso di uno con 500 articoli su 20 verticali — anche con meno traffico organico.
- **Internal linking col tool Claude**: esporta URL+titoli dal CMS → carica a Claude → "proponi una matrice di link interni per costruire topical authority sul verticale [X]: URL sorgente, destinazione, anchor, frase di contesto" → Claude restituisce 50-200 link → implementa (Link Whisper/Yoast o manuale).
- **Regola 80/20 GEO** (il 20% che genera l'80%):
  1. 3-5 listicoli BoFu di qualità sostanziale (4-6 settimane).
  2. Profili G2 + Capterra completi con 20-30 recensioni reali (8-12 ore + 2-3 settimane outreach).
  3. 3-5 video YouTube long-form sui prompt-target (3-4 settimane).
  4. Presenza autentica su 2-3 subreddit (continuo, 30 min/settimana).
  5. Schema Article+Author+Organization implementato bene (1-2 giorni una tantum).

## Architettura cluster GEO-friendly (esempio)
```
/strumenti-marketing/                              ← pillar
├─ /strumenti-marketing/seo-tool/                  ← spoke (listicolo BoFu)
├─ /strumenti-marketing/seo-tool/ahrefs-vs-semrush/  ← sub-spoke (comparativa)
├─ /strumenti-marketing/seo-tool/ahrefs-alternative/ ← sub-spoke
└─ /strumenti-marketing/email-marketing/           ← spoke
```

## Anti-patterns (black hat — riconoscerle, non usarle)
- **Review farm di dominio** (NomeSaaSReviews.com): funziona 2-6 mesi, poi Google declassa e gli LLM ricalibrano. Costo opportunità + reputational damage + dipendenza algoritmica + effetto domino sul dominio principale (WHOIS linkati).
- **Astroturfing Reddit**: rilevato da moderatori, ban del brand dal subreddit, talvolta site-wide.
- **Wikipedia editing aggressivo**: la community rileva e banna account corporate; violazione delle linee guida.

## Mental Models
- "Tutto il resto — review farms, astroturfing, prompt injection, manipolazione Wikipedia — è il 20% di risultato che costa l'80% di tempo e introduce rischio reputazionale." Sconsigliato per business che vogliono durare oltre 12 mesi.
- La regola di Tanya fact-checked: la direzione degli insight di settore è giusta, le proporzioni numeriche vanno verificate con fonti primarie.

## Key Takeaways
1. Profondità verticale > ampiezza generica per le citazioni LLM.
2. L'internal linking denso crea una mappa semantica leggibile dal modello.
3. Concentra le risorse sui 5 asset durevoli dell'80/20.
4. Le scorciatoie black hat pagano poco e durano meno; il rischio è asimmetrico.

## Connects To
- **Ch 9** (SEO): hub & spoke e topical clusters lato Google.
- **Ch 2**: gli step operativi che alimentano questi asset.
- **Ch 20** (Exec): site reputation abuse / parasite SEO nelle policy antispam.
