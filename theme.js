(function(){
  var KEY = 'fransyl_veille_theme';

  function effectiveDark(theme){
    return theme === 'dark' || (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  var saved = localStorage.getItem(KEY);
  if(saved === 'dark' || saved === 'light'){
    document.documentElement.setAttribute('data-theme', saved);
  }

  function syncButton(){
    var btn = document.getElementById('theme-toggle');
    if(!btn) return;
    var dark = effectiveDark(localStorage.getItem(KEY));
    btn.textContent = dark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', dark ? 'Passer en mode clair' : 'Passer en mode sombre');
    btn.setAttribute('title', dark ? 'Passer en mode clair' : 'Passer en mode sombre');
  }

  window.toggleTheme = function(){
    var current = localStorage.getItem(KEY);
    var next = effectiveDark(current) ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    document.documentElement.setAttribute('data-theme', next);
    syncButton();
  };

  document.addEventListener('DOMContentLoaded', syncButton);
})();
