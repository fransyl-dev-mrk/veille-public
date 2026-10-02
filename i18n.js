/* Dictionnaire FR/EN partagé pour le texte statique répété sur toutes les pages
   (rail, footer, libellés d'axes/géo, messages vides). Les signaux/rapports/
   événements eux-mêmes sont bilingues directement dans leurs données (DATA/
   REPORTS/EVENTS, voir /format-bulletin.md du dépôt veille) — ce fichier ne
   couvre que le chrome d'interface. Marquer un élément statique avec
   data-i18n="cle" puis appeler applyI18n() (fait automatiquement au chargement
   et à chaque bascule de langue via lang.js). */

const I18N = {
  fr: {
    methodologie: "Méthodologie & sources",
    suggestion: "Proposer un ajout",
    back: "← Toutes les éditions",
    tousLesSignaux: "Tous les signaux",
    competiteurs: "Compétiteurs",
    environnementAffaires: "Environnement d'affaires",
    environnementTechno: "Environnement technologique",
    axes: "Axes",
    geographie: "Géographie",
    toutes: "Toutes",
    ameriqueDuNord: "Amérique du Nord",
    international: "International",
    synthese: "Synthèse",
    briefingTitle: "Ce qu'il faut retenir avant de lire les signaux",
    watchTitle: "À surveiller — prochaines semaines",
    opportunites: "Opportunités",
    risques: "Risques",
    detailSignaux: "Détail des signaux",
    rapportsEtudes: "Rapports & études à surveiller",
    evenementsIndustrie: "Événements de l'industrie à venir",
    signaux: "signaux",
    footer: "Diffusion restreinte — usage interne uniquement.",
    aucunSignal: "Aucun signal pour cette sélection.",
    gateBrand: "Fransyl — Veille stratégique",
    gateSub: "Contenu à diffusion restreinte. Entrez le mot de passe fourni pour y accéder.",
    gateLabel: "Mot de passe",
    gateBtn: "Accéder à la veille",
    gateError: "Mot de passe incorrect.",
    gatePlaceholder: "••••••••••••",
    homeH1: "Groupe Fransyl",
    homeSub: "Veille stratégique — éditions mensuelles",
    insightLabel: "Insight Fransyl"
  },
  en: {
    methodologie: "Methodology & sources",
    suggestion: "Suggest an addition",
    back: "← All editions",
    tousLesSignaux: "All signals",
    competiteurs: "Competitors",
    environnementAffaires: "Business environment",
    environnementTechno: "Technology environment",
    axes: "Axes",
    geographie: "Geography",
    toutes: "All",
    ameriqueDuNord: "North America",
    international: "International",
    synthese: "Summary",
    briefingTitle: "Key takeaways before reading the signals",
    watchTitle: "To watch — coming weeks",
    opportunites: "Opportunities",
    risques: "Risks",
    detailSignaux: "Signal detail",
    rapportsEtudes: "Reports & studies to watch",
    evenementsIndustrie: "Upcoming industry events",
    signaux: "signals",
    footer: "Restricted distribution — internal use only.",
    aucunSignal: "No signal for this selection.",
    gateBrand: "Fransyl — Strategic intelligence",
    gateSub: "Restricted-access content. Enter the provided password to continue.",
    gateLabel: "Password",
    gateBtn: "Access the briefing",
    gateError: "Incorrect password.",
    gatePlaceholder: "••••••••••••",
    homeH1: "Groupe Fransyl",
    homeSub: "Strategic intelligence — monthly editions",
    insightLabel: "Fransyl insight"
  }
};

function applyI18n(){
  var lang = document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'fr';
  var dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
    el.getAttribute('data-i18n-attr').split(',').forEach(function(pair){
      var parts = pair.split(':');
      var attr = parts[0], key = parts[1];
      if(dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });
  });
}

document.addEventListener('DOMContentLoaded', applyI18n);
