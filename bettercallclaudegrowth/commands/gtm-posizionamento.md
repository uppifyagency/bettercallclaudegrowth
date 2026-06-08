---
description: Definisce ICP, statement di posizionamento, Personal Monopoly e angolo differenziante a partire dal tuo input e settore.
argument-hint: chi sei + cosa offri + a chi ti rivolgi (es. "consulente fiscale per e-commerce, target PMI")
---

# /gtm-posizionamento - ICP, Personal Monopoly e angolo differenziante

Questo comando applica le skill **butcher-productize** e **doing-content-right** (nomi cartella esatti in `skills/`).

Lavora in italiano (userConfig.output_language, IT default) e cala ogni output su userConfig.settore, userConfig.brand_voice e userConfig.default_channel.

Input utente: $ARGUMENTS

## Passi

1. **Carica le skill.** Richiama per nome le skill `butcher-productize` e `doing-content-right` (si attivano dalla loro description; non usare path di file) e applicane i framework, approfondendo con cheatsheet/patterns quando servono. Non copiare il contenuto dei libri: usa i framework come lente di lavoro.

2. **Definisci l'ICP.** Applica niche & positioning di **doing-content-right** (niche = targeted, non small) per delimitare il cliente ideale di $ARGUMENTS nel settore: chi è, il dolore più grande, dove già cerca. Sintetizza in un ICP nitido.

3. **Costruisci la Personal Monopoly.** Usa Personal Monopoly e l'Idea Ikigai (**doing-content-right**) insieme alla Productize Yourself e alla Uniqueness Question del Brand Iceberg (**butcher-productize**) per isolare ciò in cui solo questo soggetto è forte e che ama fare. Cita i permissionless mentors come fonte di riferimento, senza spiegarli.

4. **Scrivi lo statement di posizionamento.** Produci il "What for who" one-liner (**doing-content-right**): dolore risolto + differenziatore + audience core, allineato a brand_voice e default_channel.

5. **Estrai l'angolo differenziante.** Tieni presente il metodo 3 step (reps -> processes -> scale) di **butcher-productize** come traiettoria di lungo periodo, e formula l'angolo che rende il posizionamento difendibile e fuori dal "more of the same".

6. **Output strutturato.** Restituisci in sezioni distinte: (a) ICP, (b) Statement di posizionamento, (c) Personal Monopoly, (d) Angolo differenziante.

7. **Red-team finale.** Invoca l'agent **gtm-critic** per stressare ICP, statement, Personal Monopoly e angolo (genericità, niche non difendibile, claim non sostenibili); integra i fix proposti nella versione finale.
