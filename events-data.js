/* Événements de l'industrie à venir — référence partagée par toutes les éditions.
   Contrairement à REPORTS (filtré sur le mois couvert par l'édition), EVENTS est
   prospectif : chaque édition affiche les événements dont la date de début tombe dans son
   mois de PARUTION ou le mois suivant (ex. édition parue en août → événements d'août et de
   septembre) — pas la période couverte par les signaux, qui est le mois précédent.
   Inclut aussi bien les grands congrès/salons que les activités de réseautage récurrentes
   (tournois de golf) des associations, qui génèrent souvent plus de visibilité terrain que
   les congrès pour Fransyl.
   Chaque entrée porte un startDate ISO (AAAA-MM-JJ) — la date de début réelle de
   l'événement — utilisé par renderEvents() de chaque édition. title/summary/freq/date
   sont bilingues ({fr,en}).
   Voir /workspaces/veille/evenements-industrie.md pour la fiche de maintenance. */

const EVENTS = [
  {geo:"an", country:"Canada", org:"AMCQ", freq:{fr:"Annuel, mi-août — activité de réseautage (golf)", en:"Annual, mid-August — networking event (golf)"},
   title:{fr:"Tournoi de golf annuel de l'AMCQ (42ᵉ édition)", en:"AMCQ Annual Golf Tournament (42nd edition)"},
   summary:{fr:"Tournoi de golf des experts Maîtres Couvreurs, au Club de golf Le Versant à Terrebonne.", en:"The Maîtres Couvreurs experts' golf tournament, at Club de golf Le Versant in Terrebonne."},
   src:"AMCQ", date:{fr:"13 août 2026", en:"August 13, 2026"}, startDate:"2026-08-13", url:"https://amcq.qc.ca/"},

  {geo:"an", country:"Canada", org:"CRCA", freq:{fr:"Annuel, mi-septembre — activité de réseautage (golf)", en:"Annual, mid-September — networking event (golf)"},
   title:{fr:"Tournoi de golf annuel de la CRCA", en:"CRCA Annual Golf Tournament"},
   summary:{fr:"Tournoi de golf de la Canadian Roofing Contractors Association, au Falcon Ridge Golf Club à Ottawa (ON). À ne pas confondre avec le « CRCA » de la Chicago Roofing Contractors Association (organisation américaine distincte, même acronyme).",
            en:"The Canadian Roofing Contractors Association's golf tournament, at Falcon Ridge Golf Club in Ottawa (ON). Not to be confused with the Chicago Roofing Contractors Association's \"CRCA\" (a distinct U.S. organization, same acronym)."},
   src:"CRCA", date:{fr:"15 septembre 2026", en:"September 15, 2026"}, startDate:"2026-09-15", url:"https://roofingcanada.com/canadian-roofing-events/crca-annual-golf-tournament/"},

  {geo:"an", country:"Canada", org:"ACRGTQ", freq:{fr:"Annuel, mi-juillet — activité de réseautage (cyclo-golf)", en:"Annual, mid-July — networking event (cyclo-golf)"},
   title:{fr:"Cyclo-Golf ACRGTQ", en:"ACRGTQ Cyclo-Golf"},
   summary:{fr:"Activité de réseautage combinant vélo et golf, au Club de golf Le Mirage à Terrebonne. Repérée par recherche publique — événement distinct du « Cyclo-Golf ACQ Québec » ci-dessous malgré le nom similaire.",
            en:"A networking event combining cycling and golf, at Club de golf Le Mirage in Terrebonne. Identified via public research — distinct from the \"Cyclo-Golf ACQ Québec\" event below despite the similar name."},
   src:"ACRGTQ", date:{fr:"14 juillet 2026", en:"July 14, 2026"}, startDate:"2026-07-14", url:"https://www.acrgtq.qc.ca/evenements/activites-estivales/cyclo-golf-2026/"},

  {geo:"an", country:"Canada", org:"ACQ Québec", freq:{fr:"Annuel, mi-septembre — activité de réseautage (cyclo-golf)", en:"Annual, mid-September — networking event (cyclo-golf)"},
   title:{fr:"Cyclo-Golf ACQ Québec", en:"ACQ Québec Cyclo-Golf"},
   summary:{fr:"Activité de réseautage combinant vélo et golf de l'ACQ, région de Québec.", en:"ACQ's networking event combining cycling and golf, Quebec City region."},
   src:"ACQ Québec", date:{fr:"10 septembre 2026", en:"September 10, 2026"}, startDate:"2026-09-10", url:"https://www.acq.org/"},

  {geo:"an", country:"Canada", org:"TGAQ", freq:{fr:"Annuel, fin septembre — activité de réseautage (golf)", en:"Annual, late September — networking event (golf)"},
   title:{fr:"Golf des architectes (TGAQ)", en:"Architects' Golf Tournament (TGAQ)"},
   summary:{fr:"Tournoi de golf annuel du Tournoi de golf des architectes du Québec (TGAQ).", en:"The Quebec Architects' Golf Tournament (TGAQ), held annually."},
   src:"TGAQ", date:{fr:"22 septembre 2026", en:"September 22, 2026"}, startDate:"2026-09-22", url:""},

  {geo:"an", country:"Canada", org:"L'Atelier Architectes", freq:{fr:"Annuel, fin août — activité de réseautage (volleyball)", en:"Annual, late August — networking event (volleyball)"},
   title:{fr:"Tournoi de volleyball de L'Atelier Architectes", en:"L'Atelier Architectes Volleyball Tournament"},
   summary:{fr:"Tournoi de volleyball annuel réunissant firmes d'architecture et d'ingénierie et leurs partenaires.", en:"An annual volleyball tournament bringing together architecture and engineering firms and their partners."},
   src:"L'Atelier Architectes", date:{fr:"28 août 2026", en:"August 28, 2026"}, startDate:"2026-08-28", url:""},

  {geo:"an", country:"Canada", org:"TLA Architectes", freq:{fr:"Annuel, fin août — activité caritative (course/marche)", en:"Annual, late August — charity event (run/walk)"},
   title:{fr:"Défi TLAPB (12ᵉ édition)", en:"Défi TLAPB (12th edition)"},
   summary:{fr:"Course et marche caritative (5-10 km) au profit de TLA Porte-Bonheur, propulsée par TLA Architectes. Événement communautaire, pas spécifique à la construction.",
            en:"A charity run and walk (5-10 km) benefiting TLA Porte-Bonheur, powered by TLA Architectes. A community event, not construction-specific."},
   src:"Défi TLAPB", date:{fr:"21 août 2026", en:"August 21, 2026"}, startDate:"2026-08-21", url:"https://www.defitlapb.com/"},

  {geo:"an", country:"Canada", org:"APCHQ Québec", freq:{fr:"Annuel, début février", en:"Annual, early February"},
   title:{fr:"Expo habitat Québec", en:"Expo habitat Québec"},
   summary:{fr:"Salon grand public habitation/rénovation organisé par l'APCHQ – Région de Québec, à ExpoCité.", en:"A public home/renovation show organized by APCHQ – Québec Region, at ExpoCité."},
   src:"Expo habitat Québec", date:{fr:"5–8 février 2026", en:"February 5–8, 2026"}, startDate:"2026-02-05", url:"https://expohabitatquebec.com/"},

  {geo:"an", country:"Canada", org:"The Buildings Show", freq:{fr:"Annuel, début décembre", en:"Annual, early December"},
   title:{fr:"The Buildings Show / Construct Canada", en:"The Buildings Show / Construct Canada"},
   summary:{fr:"Plus grand salon de la construction au Canada (18 000+ professionnels), au Metro Toronto Convention Centre.", en:"Canada's largest construction trade show (18,000+ professionals), at the Metro Toronto Convention Centre."},
   src:"The Buildings Show", date:{fr:"2–4 décembre 2026", en:"December 2–4, 2026"}, startDate:"2026-12-02", url:"https://informaconnect.com/the-buildings-show/construct-canada/"},

  {geo:"an", country:"Canada", org:"AMCQ", freq:{fr:"Annuel, début février", en:"Annual, early February"},
   title:{fr:"Congrès et AGA de l'AMCQ (60ᵉ édition)", en:"AMCQ Convention & AGM (60th edition)"},
   summary:{fr:"Rassemblement annuel de l'Association des maîtres couvreurs du Québec — conférences, AGA et réseautage pour les installateurs de toiture du Québec.",
            en:"The Association des maîtres couvreurs du Québec's annual gathering — conferences, AGM and networking for Quebec roofing installers."},
   src:"AMCQ", date:{fr:"début février 2027 (date exacte à confirmer)", en:"early February 2027 (exact date to be confirmed)"}, startDate:"2027-02-04", url:"https://amcq.qc.ca/"},

  {geo:"an", country:"Canada", org:"CEGQ", freq:{fr:"Annuel, mi-février", en:"Annual, mid-February"},
   title:{fr:"Congrès annuel de la CEGQ", en:"CEGQ Annual Convention"},
   summary:{fr:"Plus grand rassemblement d'entrepreneurs généraux au Québec — programmation technique, légale et gestion de projet.", en:"Quebec's largest gathering of general contractors — technical, legal, and project-management programming."},
   src:"CEGQ", date:{fr:"mi-février 2027 (date exacte à confirmer)", en:"mid-February 2027 (exact date to be confirmed)"}, startDate:"2027-02-11", url:"https://www.cegq.com/fr/"},

  {geo:"an", country:"É.-U.", org:"NERCA", freq:{fr:"Annuel, début/mi-février", en:"Annual, early/mid-February"},
   title:{fr:"Congrès annuel et salon NERCA (Northeast Roofing Contractors Association)", en:"NERCA Annual Convention & Trade Show (Northeast Roofing Contractors Association)"},
   summary:{fr:"Un des plus grands salons régionaux de toiture aux É.-U. (nord-est) — éducation, réseautage et salon commercial.", en:"One of the largest regional roofing trade shows in the U.S. (northeast) — education, networking and trade show."},
   src:"NERCA", date:{fr:"début février 2027 (date exacte à confirmer)", en:"early February 2027 (exact date to be confirmed)"}, startDate:"2027-02-10", url:"https://nerca.org/"},

  {geo:"an", country:"Canada", org:"IIBEC", freq:{fr:"Annuel, mars", en:"Annual, March"},
   title:{fr:"IIBEC International Convention & Trade Show", en:"IIBEC International Convention & Trade Show"},
   summary:{fr:"Convention internationale de l'IIBEC (consultants en enveloppe du bâtiment) — sessions techniques et salon commercial.", en:"IIBEC's international convention (building enclosure consultants) — technical sessions and trade show."},
   src:"IIBEC", date:{fr:"mars 2027 (date exacte à confirmer)", en:"March 2027 (exact date to be confirmed)"}, startDate:"2027-03-12", url:"https://iibec.org/"},

  {geo:"an", country:"Canada", org:"CRCA", freq:{fr:"Annuel, fin mai", en:"Annual, late May"},
   title:{fr:"Congrès national et AGA de la CRCA", en:"CRCA National Convention & AGM"},
   summary:{fr:"Congrès national de la Canadian Roofing Contractors Association — vitrine pancanadienne toiture commerciale, exposition et sessions de formation.", en:"The Canadian Roofing Contractors Association's national convention — a pan-Canadian showcase for commercial roofing, with an exhibition and training sessions."},
   src:"CRCA", date:{fr:"fin mai 2027 (date exacte à confirmer)", en:"late May 2027 (exact date to be confirmed)"}, startDate:"2027-05-28", url:"https://roofingcanada.com/"},

  {geo:"an", country:"Canada", org:"ACQ", freq:{fr:"Annuel, fin avril / début mai", en:"Annual, late April / early May"},
   title:{fr:"Congrès de l'ACQ", en:"ACQ Convention"},
   summary:{fr:"Plus de 500 entrepreneurs et acteurs clés de l'industrie de la construction du Québec réunis — conférences et réseautage.", en:"More than 500 contractors and key players in Quebec's construction industry gather — conferences and networking."},
   src:"ACQ", date:{fr:"fin avril 2027 (date exacte à confirmer)", en:"late April 2027 (exact date to be confirmed)"}, startDate:"2027-04-30", url:"https://www.acq.org/"},

  {geo:"an", country:"Canada", org:"Contech Québec", freq:{fr:"Annuel, mi-/fin octobre", en:"Annual, mid/late October"},
   title:{fr:"Salon Contech Québec", en:"Contech Québec Trade Show"},
   summary:{fr:"Salon professionnel de la construction, ville de Québec.", en:"A professional construction trade show, Quebec City."},
   src:"Expo Contech", date:{fr:"22 octobre 2026", en:"October 22, 2026"}, startDate:"2026-10-22", url:"https://quebec.expocontech.ca/"},

  {geo:"an", country:"Canada", org:"Contech Montréal", freq:{fr:"Annuel, mi-novembre", en:"Annual, mid-November"},
   title:{fr:"Salon Contech Montréal", en:"Contech Montréal Trade Show"},
   summary:{fr:"Salon professionnel de la construction, grande région métropolitaine de Montréal.", en:"A professional construction trade show, Greater Montreal area."},
   src:"Expo Contech", date:{fr:"12 novembre 2026", en:"November 12, 2026"}, startDate:"2026-11-12", url:"https://montreal.expocontech.ca/"}
];
