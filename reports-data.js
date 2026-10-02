/* Rapports & études sectorielles — référence partagée par toutes les éditions.
   Contrairement à DATA (signaux du mois, propre à chaque édition), REPORTS est
   une liste vivante mise à jour au fil des parutions, pas un instantané mensuel.
   Chaque entrée porte un pubDate ISO (AAAA-MM-JJ) — la date réelle de parution
   du rapport — utilisé par renderReports() de chaque édition pour n'afficher que
   les rapports publiés durant le mois couvert par cette édition.
   title/summary/insight/date/freq sont bilingues ({fr,en}) — voir
   /home/user/veille/format-bulletin.md pour la convention de rédaction bilingue.
   Voir /workspaces/veille/rapports-etudes.md pour la fiche de maintenance. */

const REPORTS = [
  {geo:"an", country:"Canada", org:"Pomerleau", author:"Sean Boyer et Jean-François Perras",
   freq:{fr:"Trimestriel", en:"Quarterly"}, title:{fr:"Radar économique Pomerleau", en:"Pomerleau Economic Radar"},
   summary:{fr:"Édition T1 2026 (publiée le 10 juillet 2026) : le PIB de la construction recule de 1,38 % au trimestre pendant que le PIB canadien progresse de 0,14 %. Les prix de la construction non résidentielle augmentent de 0,55 % au trimestre (+3,56 % sur un an), avec des pressions plus marquées au Québec (+6,86 % sur un an) et à Montréal (+4,20 %). Les permis de bâtir rebondissent légèrement (+0,47 % trimestriel) mais restent en baisse de 1,31 % sur un an.",
            en:"Q1 2026 edition (published July 10, 2026): construction GDP fell 1.38% quarter over quarter while Canadian GDP grew 0.14%. Non-residential construction prices rose 0.55% quarter over quarter (+3.56% year over year), with sharper pressure in Quebec (+6.86% year over year) and Montreal (+4.20%). Building permits rebounded slightly (+0.47% quarterly) but remain down 1.31% year over year."},
   insight:{fr:"Le recul du PIB de la construction conjugué à des prix toujours parmi les plus élevés au pays au Québec confirme la pression de coûts régionale déjà notée — ce mélange de demande ralentie et de coûts encore hauts renforce l'intérêt pour Fransyl de prioriser la réfection et les segments non résidentiels, plus résilients que le résidentiel neuf.",
            en:"The decline in construction GDP combined with prices still among the highest in the country in Quebec confirms the regional cost pressure already noted — this mix of slowing demand and still-high costs reinforces the case for Fransyl to prioritize re-roofing and non-residential segments, more resilient than new residential."},
   src:"Pomerleau", date:{fr:"T1 2026 (10 juillet 2026)", en:"Q1 2026 (July 10, 2026)"}, pubDate:"2026-07-10", url:"https://www.linkedin.com/posts/pomerleau-inc._radar-%C3%A9conomique-pomerleau-activity-7483571332794961920-xMNc/"},

  {geo:"an", country:"Canada", org:"Pomerleau", author:"",
   freq:{fr:"Annuel", en:"Annual"}, title:{fr:"Rapport de développement durable 2025", en:"2025 Sustainability Report"},
   summary:{fr:"Publié le 9 juin 2026 pour le 60ᵉ anniversaire de l'entreprise : réduction de 6 % de l'intensité des émissions GES (portées 1 et 2) vs 2024, 79 % des déchets détournés de l'enfouissement, réemploi de 80 000 tonnes de béton au port de Trois-Rivières, approvisionnement auprès d'entreprises autochtones porté à 87,3 M$.",
            en:"Published June 9, 2026 for the company's 60th anniversary: a 6% reduction in GHG emissions intensity (Scopes 1 and 2) vs. 2024, 79% of waste diverted from landfill, reuse of 80,000 tonnes of concrete at the Port of Trois-Rivières, and procurement from Indigenous businesses raised to $87.3M."},
   insight:{fr:"Illustre la montée des exigences ESG et d'économie circulaire chez les grands entrepreneurs généraux clients/partenaires de Fransyl — un signal pour anticiper des demandes similaires de traçabilité et de contenu recyclé sur les gammes EPS/isolation.",
            en:"Illustrates rising ESG and circular-economy requirements among major general contractors who are Fransyl clients/partners — a signal to anticipate similar traceability and recycled-content requests on EPS/insulation product lines."},
   src:"Pomerleau", date:{fr:"9 juin 2026", en:"June 9, 2026"}, pubDate:"2026-06-09", url:"https://pomerleau.ca/fr/actualites/article/esg/pomerleau-devoile-son-rapport-de-developpement-durable-2025"},

  {geo:"an", country:"Canada", org:"SCHL / CMHC", author:"",
   freq:{fr:"Annuel (mise à jour mi-année)", en:"Annual (mid-year update)"}, title:{fr:"Perspectives du marché de l'habitation", en:"Housing Market Outlook"},
   summary:{fr:"Activité du marché attendue modérée en 2026 : demande sous la moyenne historique, prix en baisse avant une reprise modeste en 2027-2028. Mises en chantier en déclin jusqu'en 2028, condos particulièrement faibles.",
            en:"Market activity expected to be moderate in 2026: demand below the historical average, prices declining before a modest recovery in 2027-2028. Housing starts declining through 2028, with condos particularly weak."},
   insight:{fr:"Le ralentissement soutenu du neuf prévu par la SCHL renforce l'intérêt stratégique du marché de la réfection pour Fransyl, moins sensible au cycle des mises en chantier.",
            en:"CMHC's forecast of a sustained new-build slowdown reinforces the strategic case for the re-roofing market for Fransyl, which is less sensitive to the housing-starts cycle."},
   src:"SCHL / CMHC", date:{fr:"2026", en:"2026"}, pubDate:"2026-07-22", url:"https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/housing-market/housing-market-outlook"},

  {geo:"an", country:"Canada", org:"APCHQ", author:"",
   freq:{fr:"Semestriel", en:"Semi-annual"}, title:{fr:"Prévisions résidentielles", en:"Residential Forecasts"},
   summary:{fr:"Édition 2026-2027 : 62 000 mises en chantier prévues au Québec en 2026 (+4 % vs 2025), locatif +5 %, unifamilial +8 % mais fragile, rénovation +8 % après un bond de 30 % en 2025.",
            en:"2026-2027 edition: 62,000 housing starts forecast in Quebec in 2026 (+4% vs. 2025), rental +5%, single-family +8% but fragile, renovation +8% after a 30% jump in 2025."},
   insight:{fr:"Croissance concentrée en locatif et rénovation plutôt qu'en unifamilial neuf — appuie la priorisation des segments réfection/multirésidentiel pour les gammes d'isolation Fransyl au Québec.",
            en:"Growth concentrated in rental and renovation rather than new single-family — supports prioritizing re-roofing/multi-residential segments for Fransyl's insulation lines in Quebec."},
   src:"APCHQ", date:{fr:"2026", en:"2026"}, pubDate:"2026-02-11", url:"https://www.apchq.com/actualites/previsions-2026-2027-apchq/"},

  {geo:"an", country:"É.-U.", org:"Dodge Construction Network", author:"",
   freq:{fr:"Mensuel", en:"Monthly"}, title:{fr:"Dodge Momentum Index", en:"Dodge Momentum Index"},
   summary:{fr:"Indice en hausse de 6,9 % en juillet 2026, à 291,7, porté par la planification institutionnelle (+13,1 %) et les centres de données; commercial +4,1 %.",
            en:"Index up 6.9% in July 2026, to 291.7, driven by institutional planning (+13.1%) and data centers; commercial +4.1%."},
   insight:{fr:"Signal avancé de mises en chantier futures aux É.-U. — la vigueur institutionnelle/centres de données pointe vers une demande soutenue d'enveloppe et d'isolation commerciale à moyen terme.",
            en:"A leading indicator of future U.S. construction starts — institutional/data-center strength points to sustained medium-term demand for commercial envelope and insulation."},
   src:"Dodge Construction Network", date:{fr:"juillet 2026", en:"July 2026"}, pubDate:"2026-08-06", url:"https://www.construction.com/dodge-momentum-index-improves-7-in-july/"},

  {geo:"an", country:"É.-U.", org:"NAHB / Wells Fargo", author:"",
   freq:{fr:"Mensuel", en:"Monthly"}, title:{fr:"Housing Market Index", en:"Housing Market Index"},
   summary:{fr:"Confiance des constructeurs en baisse de 2 points à 34 en juillet 2026; toutes les composantes (ventes actuelles, attentes, trafic acheteurs) en recul, la plupart des régions sous le seuil de 50.",
            en:"Builder confidence fell 2 points to 34 in July 2026; all components (current sales, expectations, buyer traffic) declined, with most regions below the 50 threshold."},
   insight:{fr:"Faiblesse persistante du neuf résidentiel américain — marché US restreint pour Fransyl (Lexgoshop), mais confirme l'intérêt de prioriser les segments non résidentiels et la réfection plutôt que le résidentiel neuf.",
            en:"Persistent weakness in new U.S. residential — a limited market for Fransyl (Lexgoshop), but confirms the case for prioritizing non-residential segments and re-roofing over new residential."},
   src:"NAHB", date:{fr:"juillet 2026", en:"July 2026"}, pubDate:"2026-07-16", url:"https://www.nahb.org/news-and-economics/press-releases/2026/07/builder-sentiment-stays-weak-as-affordability-concerns-persist"},

  {geo:"an", country:"É.-U.", org:"NAHB / Wells Fargo", author:"",
   freq:{fr:"Mensuel", en:"Monthly"}, title:{fr:"Housing Market Index", en:"Housing Market Index"},
   summary:{fr:"Confiance des constructeurs en légère hausse à 35 en août 2026 (vs 34 en juillet); 35 % des constructeurs ont dû réduire leurs prix (baisse moyenne de 6 %) — 16e mois consécutif sous le seuil de 40 et avec au moins 30 % des constructeurs en réduction de prix.",
            en:"Builder confidence rose slightly to 35 in August 2026 (vs. 34 in July); 35% of builders had to cut prices (average 6% cut) — the 16th consecutive month below the 40 threshold and with at least 30% of builders cutting prices."},
   insight:{fr:"Faiblesse persistante du neuf résidentiel américain, avec un marché du Midwest relativement plus résilient — marché US restreint pour Fransyl (Lexgoshop), mais confirme l'intérêt de prioriser les segments non résidentiels et la réfection plutôt que le résidentiel neuf.",
            en:"Persistent weakness in new U.S. residential, with the Midwest market relatively more resilient — a limited market for Fransyl (Lexgoshop), but confirms the case for prioritizing non-residential segments and re-roofing over new residential."},
   src:"NAHB", date:{fr:"août 2026", en:"August 2026"}, pubDate:"2026-08-17", url:"https://www.nahb.org/news-and-economics/press-releases/2026/08/affordability-pressures-keep-builder-confidence-low"},

  {geo:"an", country:"É.-U.", org:"NAHB / Wells Fargo", author:"",
   freq:{fr:"Mensuel", en:"Monthly"}, title:{fr:"Housing Market Index", en:"Housing Market Index"},
   summary:{fr:"Confiance des constructeurs en baisse de 3 points à 32 en septembre 2026, son plus bas niveau en un an; conditions de vente actuelles à 35, attentes à six mois à 37, achalandage stable à 23. La part des constructeurs qui réduisent leurs prix passe à 38 % (35 % en août), avec une baisse moyenne de 6 %. Hausse des taux hypothécaires, pénurie de main-d'œuvre et coûts des matériaux sont en cause.",
            en:"Builder confidence fell 3 points to 32 in September 2026, its lowest level in a year; current sales conditions at 35, six-month expectations at 37, traffic steady at 23. The share of builders cutting prices rose to 38% (35% in August), with an average 6% cut. Higher mortgage rates, a labour shortage, and material costs are cited as causes."},
   insight:{fr:"Faiblesse accrue du neuf résidentiel américain, aggravée par les coûts de matériaux et de main-d'œuvre — marché US restreint pour Fransyl (Lexgoshop), mais cohérent avec la priorité donnée aux segments non résidentiels et à la réfection.",
            en:"Increased weakness in new U.S. residential, compounded by material and labour costs — a limited market for Fransyl (Lexgoshop), but consistent with the priority given to non-residential segments and re-roofing."},
   src:"NAHB", date:{fr:"septembre 2026", en:"September 2026"}, pubDate:"2026-09-16", url:"https://www.nahb.org/news-and-economics/press-releases/2026/09/builder-sentiment-falls-on-higher-interest-rates-and-costs"},

  {geo:"an", country:"É.-U.", org:"AIA / Deltek", author:"",
   freq:{fr:"Mensuel", en:"Monthly"}, title:{fr:"Architecture Billings Index", en:"Architecture Billings Index"},
   summary:{fr:"Indice à 47,3 en juin 2026 — 41e mois consécutif sous le seuil de croissance (50); commercial/industriel à 46,7, institutionnel à 47,4.",
            en:"Index at 47.3 in June 2026 — the 41st consecutive month below the growth threshold (50); commercial/industrial at 46.7, institutional at 47.4."},
   insight:{fr:"Indicateur avancé (9-12 mois) des mises en chantier non résidentielles américaines — une remontée durable au-dessus de 50 serait un signal précoce à surveiller pour anticiper la demande future de toiture/enveloppe commerciale US.",
            en:"A 9-12 month leading indicator of U.S. non-residential construction starts — a durable rebound above 50 would be an early signal to watch for anticipating future U.S. commercial roofing/envelope demand."},
   src:"AIA", date:{fr:"juin 2026", en:"June 2026"}, pubDate:"2026-07-22", url:"https://www.aia.org/resource-center/abi-june-2026-billings-remain-weak-architecture-firms"},

  {geo:"an", country:"É.-U.", org:"AIA / Deltek", author:"",
   freq:{fr:"Mensuel", en:"Monthly"}, title:{fr:"Architecture Billings Index", en:"Architecture Billings Index"},
   summary:{fr:"Indice à 46,6 en juillet 2026, en recul par rapport à 47,3 en juin — la plus longue période de ralentissement de l'histoire de l'indice se prolonge à près de 3 ans et demi; commercial/industriel à 46,7, institutionnel à 47,4, multirésidentiel à 48,4.",
            en:"Index at 46.6 in July 2026, down from 47.3 in June — the longest slowdown in the index's history now extends to nearly three and a half years; commercial/industrial at 46.7, institutional at 47.4, multifamily at 48.4."},
   insight:{fr:"Indicateur avancé (9-12 mois) des mises en chantier non résidentielles américaines — le ralentissement qui se prolonge confirme l'intérêt de prioriser la réfection plutôt que le neuf pour les segments US où Fransyl est exposé (Lexgoshop).",
            en:"A 9-12 month leading indicator of U.S. non-residential construction starts — the extending slowdown confirms the case for prioritizing re-roofing over new construction in the U.S. segments where Fransyl is exposed (Lexgoshop)."},
   src:"AIA", date:{fr:"juillet 2026", en:"July 2026"}, pubDate:"2026-08-19", url:"https://www.aia.org/about-aia/press/architecture-firm-billings-remained-soft-july"},

  {geo:"an", country:"É.-U.", org:"AIA / Deltek", author:"",
   freq:{fr:"Mensuel", en:"Monthly"}, title:{fr:"Architecture Billings Index", en:"Architecture Billings Index"},
   summary:{fr:"Indice à 47,2 en août 2026, en légère hausse par rapport à 46,6 en juillet mais toujours sous le seuil de 50 : la majorité des cabinets voient encore des conditions faibles. Commercial/industriel à 50,4, multirésidentiel à 47,8, institutionnel à 47,0; Midwest à 50,7 et Nord-Est à 40,7. Indice des demandes de projets à 50,8, des contrats de conception à 48,3.",
            en:"Index at 47.2 in August 2026, up slightly from 46.6 in July but still below the 50 threshold: most firms still see weak conditions. Commercial/industrial at 50.4, multifamily at 47.8, institutional at 47.0; Midwest at 50.7 and Northeast at 40.7. Project inquiries index at 50.8, design contracts at 48.3."},
   insight:{fr:"Indicateur avancé (9-12 mois) des mises en chantier non résidentielles américaines — stabilisation légère mais sans reprise franche, ce qui confirme l'intérêt de prioriser la réfection plutôt que le neuf pour les segments US où Fransyl est présent.",
            en:"A 9-12 month leading indicator of U.S. non-residential construction starts — a slight stabilization but no clear recovery, confirming the case for prioritizing re-roofing over new construction in the U.S. segments where Fransyl is present."},
   src:"AIA", date:{fr:"août 2026", en:"August 2026"}, pubDate:"2026-09-24", url:"https://www.aia.org/resource-center/abi-august-2026-architecture-firm-billings-continue-decline"},

  {geo:"intl", country:"International", org:"Turner & Townsend", author:"",
   freq:{fr:"Annuel", en:"Annual"}, title:{fr:"Global Construction Market Intelligence", en:"Global Construction Market Intelligence"},
   summary:{fr:"Inflation mondiale des coûts de construction attendue à 4,5 % en 2026 (contre 4,2 % en 2025); la disponibilité de main-d'œuvre devient le principal moteur des hausses de coûts. Secteurs tech (centres de données) en forte accélération, résidentiel/commercial traditionnel plus lents.",
            en:"Global construction cost inflation expected at 4.5% in 2026 (vs. 4.2% in 2025); labour availability is becoming the main driver of cost increases. Tech sectors (data centers) accelerating sharply, traditional residential/commercial slower."},
   insight:{fr:"Confirme une pression de coûts structurelle (main-d'œuvre) plutôt que conjoncturelle à l'international — utile pour contextualiser les hausses de prix des fournisseurs/compétiteurs de Fransyl comme tendance de fond, pas un cas isolé.",
            en:"Confirms structural (labour-driven) rather than cyclical cost pressure internationally — useful for framing Fransyl suppliers'/competitors' price increases as an underlying trend rather than an isolated case."},
   src:"Turner & Townsend", date:{fr:"2026", en:"2026"}, pubDate:"2026-07-08", url:"https://www.turnerandtownsend.com/insights/global-construction-market-intelligence-2026/"},

  {geo:"intl", country:"International", org:"RICS", author:"",
   freq:{fr:"Trimestriel", en:"Quarterly"}, title:{fr:"Global Construction Monitor", en:"Global Construction Monitor"},
   summary:{fr:"Indice de sentiment mondial en légère hausse (+7 à +8) au T1 2026; projections de coûts matériaux à 12 mois en hausse générale. Au T2 2026, 67 % des répondants citent les contraintes financières comme frein à l'activité.",
            en:"Global sentiment index up slightly (+7 to +8) in Q1 2026; 12-month materials cost projections broadly rising. In Q2 2026, 67% of respondents cited financial constraints as a brake on activity."},
   insight:{fr:"Sentiment mondial fragile mais stable — les contraintes de financement citées comme frein dominant renforcent la valeur des arguments prix/délai de livraison de Fransyl face à des projets internationaux hésitants.",
            en:"Fragile but stable global sentiment — financing constraints cited as the dominant brake reinforce the value of Fransyl's price/lead-time arguments against hesitant international projects."},
   src:"RICS", date:{fr:"T1-T2 2026", en:"Q1-Q2 2026"}, pubDate:"2026-05-18", url:"https://www.rics.org/content/dam/ricsglobal/documents/market-surveys/Q1-2026-GCM.pdf"},

  {geo:"intl", country:"International", org:"Arcadis", author:"",
   freq:{fr:"Annuel", en:"Annual"}, title:{fr:"International Construction Costs Report", en:"International Construction Costs Report"},
   summary:{fr:"Genève conserve la première place des marchés de construction les plus chers au monde en 2026, devant Londres et Zurich. Le rapport élargit son analyse au-delà du coût pour inclure la capacité de livraison et la confiance des investisseurs, sur 100 villes.",
            en:"Geneva retains the top spot among the world's most expensive construction markets in 2026, ahead of London and Zurich. The report broadens its analysis beyond cost to include delivery capacity and investor confidence, across 100 cities."},
   insight:{fr:"Baromètre utile pour situer le Canada/Québec dans le contexte international des coûts de construction lors de discussions avec des clients ou partenaires internationaux de Fransyl.",
            en:"A useful benchmark for positioning Canada/Quebec within the international construction-cost context during discussions with Fransyl's international clients or partners."},
   src:"Arcadis", date:{fr:"juillet 2026", en:"July 2026"}, pubDate:"2026-07-13", url:"https://www.arcadis.com/en/insights/international-construction-costs-2026/"}
];
