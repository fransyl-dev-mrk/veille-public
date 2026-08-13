/* Rapports & études sectorielles — référence partagée par toutes les éditions.
   Contrairement à DATA (signaux du mois, propre à chaque édition), REPORTS est
   une liste vivante mise à jour au fil des parutions, pas un instantané mensuel.
   Voir /workspaces/veille/rapports-etudes.md pour la fiche de maintenance. */

const REPORTS = [
  {geo:"an", country:"Canada", org:"Pomerleau", author:"Jean-François Perras et Sean Boyer",
   freq:"Trimestriel", title:"Radar économique Pomerleau",
   summary:"Édition T3 2025 : prix de construction en hausse de 7,50 % au Québec et 5,15 % à Montréal, contre une moyenne nationale de 4,20 %. Secteur industriel en fort recul (-18,19 %), commercial en légère hausse (+2,55 %).",
   insight:"Radar de référence pour ancrer les arguments de prix de Fransyl dans le contexte réel du marché québécois — la divergence Québec/national confirme une pression de coûts régionale à anticiper dans les négociations distributeurs.",
   src:"Pomerleau", date:"T3 2025 (déc. 2025)", url:"https://pomerleau.ca/en/insights/article/actualite/pomerleau-economic-radar-q3"},

  {geo:"an", country:"Canada", org:"SCHL / CMHC", author:"",
   freq:"Annuel (mise à jour mi-année)", title:"Perspectives du marché de l'habitation",
   summary:"Activité du marché attendue modérée en 2026 : demande sous la moyenne historique, prix en baisse avant une reprise modeste en 2027-2028. Mises en chantier en déclin jusqu'en 2028, condos particulièrement faibles.",
   insight:"Le ralentissement soutenu du neuf prévu par la SCHL renforce l'intérêt stratégique du marché de la réfection pour Fransyl, moins sensible au cycle des mises en chantier.",
   src:"SCHL / CMHC", date:"2026", url:"https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/housing-market/housing-market-outlook"},

  {geo:"an", country:"Canada", org:"APCHQ", author:"",
   freq:"Semestriel", title:"Prévisions résidentielles",
   summary:"Édition 2026-2027 : 62 000 mises en chantier prévues au Québec en 2026 (+4 % vs 2025), locatif +5 %, unifamilial +8 % mais fragile, rénovation +8 % après un bond de 30 % en 2025.",
   insight:"Croissance concentrée en locatif et rénovation plutôt qu'en unifamilial neuf — appuie la priorisation des segments réfection/multirésidentiel pour les gammes d'isolation Fransyl au Québec.",
   src:"APCHQ", date:"2026", url:"https://www.apchq.com/actualites/previsions-2026-2027-apchq/"},

  {geo:"an", country:"É.-U.", org:"Dodge Construction Network", author:"",
   freq:"Mensuel", title:"Dodge Momentum Index",
   summary:"Indice en hausse de 6,9 % en juillet 2026, à 291,7, porté par la planification institutionnelle (+13,1 %) et les centres de données; commercial +4,1 %.",
   insight:"Signal avancé de mises en chantier futures aux É.-U. — la vigueur institutionnelle/centres de données pointe vers une demande soutenue d'enveloppe et d'isolation commerciale à moyen terme.",
   src:"Dodge Construction Network", date:"juillet 2026", url:"https://www.construction.com/dodge-momentum-index-improves-7-in-july/"},

  {geo:"an", country:"É.-U.", org:"NAHB / Wells Fargo", author:"",
   freq:"Mensuel", title:"Housing Market Index",
   summary:"Confiance des constructeurs en baisse de 2 points à 34 en juillet 2026; toutes les composantes (ventes actuelles, attentes, trafic acheteurs) en recul, la plupart des régions sous le seuil de 50.",
   insight:"Faiblesse persistante du neuf résidentiel américain — marché US restreint pour Fransyl (Lexgoshop), mais confirme l'intérêt de prioriser les segments non résidentiels et la réfection plutôt que le résidentiel neuf.",
   src:"NAHB", date:"juillet 2026", url:"https://www.nahb.org/news-and-economics/press-releases/2026/07/builder-sentiment-stays-weak-as-affordability-concerns-persist"},

  {geo:"an", country:"É.-U.", org:"AIA / Deltek", author:"",
   freq:"Mensuel", title:"Architecture Billings Index",
   summary:"Indice à 47,3 en juin 2026 — 41e mois consécutif sous le seuil de croissance (50); commercial/industriel à 46,7, institutionnel à 47,4.",
   insight:"Indicateur avancé (9-12 mois) des mises en chantier non résidentielles américaines — une remontée durable au-dessus de 50 serait un signal précoce à surveiller pour anticiper la demande future de toiture/enveloppe commerciale US.",
   src:"AIA", date:"juin 2026", url:"https://www.aia.org/resource-center/abi-june-2026-billings-remain-weak-architecture-firms"},

  {geo:"intl", country:"International", org:"Turner & Townsend", author:"",
   freq:"Annuel", title:"Global Construction Market Intelligence",
   summary:"Inflation mondiale des coûts de construction attendue à 4,5 % en 2026 (contre 4,2 % en 2025); la disponibilité de main-d'œuvre devient le principal moteur des hausses de coûts. Secteurs tech (centres de données) en forte accélération, résidentiel/commercial traditionnel plus lents.",
   insight:"Confirme une pression de coûts structurelle (main-d'œuvre) plutôt que conjoncturelle à l'international — utile pour contextualiser les hausses de prix des fournisseurs/compétiteurs de Fransyl comme tendance de fond, pas un cas isolé.",
   src:"Turner & Townsend", date:"2026", url:"https://www.turnerandtownsend.com/insights/global-construction-market-intelligence-2026/"},

  {geo:"intl", country:"International", org:"RICS", author:"",
   freq:"Trimestriel", title:"Global Construction Monitor",
   summary:"Indice de sentiment mondial en légère hausse (+7 à +8) au T1 2026; projections de coûts matériaux à 12 mois en hausse générale. Au T2 2026, 67 % des répondants citent les contraintes financières comme frein à l'activité.",
   insight:"Sentiment mondial fragile mais stable — les contraintes de financement citées comme frein dominant renforcent la valeur des arguments prix/délai de livraison de Fransyl face à des projets internationaux hésitants.",
   src:"RICS", date:"T1-T2 2026", url:"https://www.rics.org/content/dam/ricsglobal/documents/market-surveys/Q1-2026-GCM.pdf"},

  {geo:"intl", country:"International", org:"Arcadis", author:"",
   freq:"Annuel", title:"International Construction Costs Report",
   summary:"Genève conserve la première place des marchés de construction les plus chers au monde en 2026, devant Londres et Zurich. Le rapport élargit son analyse au-delà du coût pour inclure la capacité de livraison et la confiance des investisseurs, sur 100 villes.",
   insight:"Baromètre utile pour situer le Canada/Québec dans le contexte international des coûts de construction lors de discussions avec des clients ou partenaires internationaux de Fransyl.",
   src:"Arcadis", date:"juillet 2026", url:"https://www.arcadis.com/en/insights/international-construction-costs-2026/"}
];
