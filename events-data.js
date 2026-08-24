/* Événements de l'industrie à venir — référence partagée par toutes les éditions.
   Contrairement à REPORTS (filtré sur le mois couvert par l'édition), EVENTS est
   prospectif : chaque édition affiche les événements dont la date de début tombe dans son
   mois de PARUTION ou le mois suivant (ex. édition parue en août → événements d'août et de
   septembre) — pas la période couverte par les signaux, qui est le mois précédent.
   Inclut aussi bien les grands congrès/salons que les activités de réseautage récurrentes
   (tournois de golf) des associations, qui génèrent souvent plus de visibilité terrain que
   les congrès pour Fransyl.
   Chaque entrée porte un startDate ISO (AAAA-MM-JJ) — la date de début réelle de
   l'événement — utilisé par renderEvents() de chaque édition.
   Voir /workspaces/veille/evenements-industrie.md pour la fiche de maintenance. */

const EVENTS = [
  {geo:"an", country:"Canada", org:"AMCQ", freq:"Annuel, mi-août — activité de réseautage (golf)",
   title:"Tournoi de golf annuel de l'AMCQ (42ᵉ édition)",
   summary:"Tournoi de golf des experts Maîtres Couvreurs, au Club de golf Le Versant à Terrebonne.",
   src:"AMCQ", date:"13 août 2026", startDate:"2026-08-13", url:"https://amcq.qc.ca/"},

  {geo:"an", country:"Canada", org:"CRCA", freq:"Annuel, mi-septembre — activité de réseautage (golf)",
   title:"Tournoi de golf annuel de la CRCA",
   summary:"Tournoi de golf de la Canadian Roofing Contractors Association, au Falcon Ridge Golf Club à Ottawa (ON). À ne pas confondre avec le « CRCA » de la Chicago Roofing Contractors Association (organisation américaine distincte, même acronyme).",
   src:"CRCA", date:"15 septembre 2026", startDate:"2026-09-15", url:"https://roofingcanada.com/canadian-roofing-events/crca-annual-golf-tournament/"},

  {geo:"an", country:"Canada", org:"ACRGTQ", freq:"Annuel, mi-juillet — activité de réseautage (cyclo-golf)",
   title:"Cyclo-Golf ACRGTQ",
   summary:"Activité de réseautage combinant vélo et golf, au Club de golf Le Mirage à Terrebonne. Repérée par recherche publique — événement distinct du « Cyclo-Golf ACQ Québec » ci-dessous malgré le nom similaire.",
   src:"ACRGTQ", date:"14 juillet 2026", startDate:"2026-07-14", url:"https://www.acrgtq.qc.ca/evenements/activites-estivales/cyclo-golf-2026/"},

  {geo:"an", country:"Canada", org:"ACQ Québec", freq:"Annuel, mi-septembre — activité de réseautage (cyclo-golf)",
   title:"Cyclo-Golf ACQ Québec",
   summary:"Activité de réseautage combinant vélo et golf de l'ACQ, région de Québec.",
   src:"ACQ Québec", date:"10 septembre 2026", startDate:"2026-09-10", url:"https://www.acq.org/"},

  {geo:"an", country:"Canada", org:"TGAQ", freq:"Annuel, fin septembre — activité de réseautage (golf)",
   title:"Golf des architectes (TGAQ)",
   summary:"Tournoi de golf annuel du Tournoi de golf des architectes du Québec (TGAQ).",
   src:"TGAQ", date:"22 septembre 2026", startDate:"2026-09-22", url:""},

  {geo:"an", country:"Canada", org:"L'Atelier Architectes", freq:"Annuel, fin août — activité de réseautage (volleyball)",
   title:"Tournoi de volleyball de L'Atelier Architectes",
   summary:"Tournoi de volleyball annuel réunissant firmes d'architecture et d'ingénierie et leurs partenaires.",
   src:"L'Atelier Architectes", date:"28 août 2026", startDate:"2026-08-28", url:""},

  {geo:"an", country:"Canada", org:"TLA Architectes", freq:"Annuel, fin août — activité caritative (course/marche)",
   title:"Défi TLAPB (12ᵉ édition)",
   summary:"Course et marche caritative (5-10 km) au profit de TLA Porte-Bonheur, propulsée par TLA Architectes. Événement communautaire, pas spécifique à la construction.",
   src:"Défi TLAPB", date:"21 août 2026", startDate:"2026-08-21", url:"https://www.defitlapb.com/"},

  {geo:"an", country:"Canada", org:"APCHQ Québec", freq:"Annuel, début février",
   title:"Expo habitat Québec",
   summary:"Salon grand public habitation/rénovation organisé par l'APCHQ – Région de Québec, à ExpoCité.",
   src:"Expo habitat Québec", date:"5–8 février 2026", startDate:"2026-02-05", url:"https://expohabitatquebec.com/"},

  {geo:"an", country:"Canada", org:"The Buildings Show", freq:"Annuel, début décembre",
   title:"The Buildings Show / Construct Canada",
   summary:"Plus grand salon de la construction au Canada (18 000+ professionnels), au Metro Toronto Convention Centre.",
   src:"The Buildings Show", date:"2–4 décembre 2026", startDate:"2026-12-02", url:"https://informaconnect.com/the-buildings-show/construct-canada/"},

  {geo:"an", country:"Canada", org:"AMCQ", freq:"Annuel, début février",
   title:"Congrès et AGA de l'AMCQ (60ᵉ édition)",
   summary:"Rassemblement annuel de l'Association des maîtres couvreurs du Québec — conférences, AGA et réseautage pour les installateurs de toiture du Québec.",
   src:"AMCQ", date:"début février 2027 (date exacte à confirmer)", startDate:"2027-02-04", url:"https://amcq.qc.ca/"},

  {geo:"an", country:"Canada", org:"CEGQ", freq:"Annuel, mi-février",
   title:"Congrès annuel de la CEGQ",
   summary:"Plus grand rassemblement d'entrepreneurs généraux au Québec — programmation technique, légale et gestion de projet.",
   src:"CEGQ", date:"mi-février 2027 (date exacte à confirmer)", startDate:"2027-02-11", url:"https://www.cegq.com/fr/"},

  {geo:"an", country:"É.-U.", org:"NERCA", freq:"Annuel, début/mi-février",
   title:"Congrès annuel et salon NERCA (Northeast Roofing Contractors Association)",
   summary:"Un des plus grands salons régionaux de toiture aux É.-U. (nord-est) — éducation, réseautage et salon commercial.",
   src:"NERCA", date:"début février 2027 (date exacte à confirmer)", startDate:"2027-02-10", url:"https://nerca.org/"},

  {geo:"an", country:"Canada", org:"IIBEC", freq:"Annuel, mars",
   title:"IIBEC International Convention & Trade Show",
   summary:"Convention internationale de l'IIBEC (consultants en enveloppe du bâtiment) — sessions techniques et salon commercial.",
   src:"IIBEC", date:"mars 2027 (date exacte à confirmer)", startDate:"2027-03-12", url:"https://iibec.org/"},

  {geo:"an", country:"Canada", org:"CRCA", freq:"Annuel, fin mai",
   title:"Congrès national et AGA de la CRCA",
   summary:"Congrès national de la Canadian Roofing Contractors Association — vitrine pancanadienne toiture commerciale, exposition et sessions de formation.",
   src:"CRCA", date:"fin mai 2027 (date exacte à confirmer)", startDate:"2027-05-28", url:"https://roofingcanada.com/"},

  {geo:"an", country:"Canada", org:"ACQ", freq:"Annuel, fin avril / début mai",
   title:"Congrès de l'ACQ",
   summary:"Plus de 500 entrepreneurs et acteurs clés de l'industrie de la construction du Québec réunis — conférences et réseautage.",
   src:"ACQ", date:"fin avril 2027 (date exacte à confirmer)", startDate:"2027-04-30", url:"https://www.acq.org/"},

  {geo:"an", country:"Canada", org:"Contech Québec", freq:"Annuel, mi-/fin octobre",
   title:"Salon Contech Québec",
   summary:"Salon professionnel de la construction, ville de Québec.",
   src:"Expo Contech", date:"22 octobre 2026", startDate:"2026-10-22", url:"https://quebec.expocontech.ca/"},

  {geo:"an", country:"Canada", org:"Contech Montréal", freq:"Annuel, mi-novembre",
   title:"Salon Contech Montréal",
   summary:"Salon professionnel de la construction, grande région métropolitaine de Montréal.",
   src:"Expo Contech", date:"12 novembre 2026", startDate:"2026-11-12", url:"https://montreal.expocontech.ca/"}
];
