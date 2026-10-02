(function(){
  var KEY = 'fransyl_veille_lang';

  function getLang(){
    var saved = localStorage.getItem(KEY);
    return (saved === 'en') ? 'en' : 'fr';
  }

  function apply(lang){
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'fr');
    document.documentElement.setAttribute('data-lang', lang);
  }

  apply(getLang());

  function syncButton(){
    var btn = document.getElementById('lang-toggle');
    if(!btn) return;
    var lang = getLang();
    btn.textContent = lang === 'fr' ? 'EN' : 'FR';
    var label = lang === 'fr' ? 'Switch to English' : 'Passer en français';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }

  window.toggleLang = function(){
    var next = getLang() === 'fr' ? 'en' : 'fr';
    localStorage.setItem(KEY, next);
    apply(next);
    syncButton();
    if (typeof window.onLangChange === 'function') window.onLangChange(next);
  };

  document.addEventListener('DOMContentLoaded', syncButton);
})();
