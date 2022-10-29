function addScrolledToHeader(el){
  let sp = window.scrollY;
  if (sp >= 45) {
    header.classList.add('scrolled');
    header.classList.add('force-bg');
  } else {
    header.classList.remove('scrolled');
    if (!menu.classList.contains('open')) {
      header.classList.remove('force-bg');
    }
  }
}

addScrolledToHeader(header);
window.addEventListener('scroll', function() {
  addScrolledToHeader(header);
});

/* remember scroll position */
window.onbeforeunload = function(e) {
  window.name += ' [' + window.scrollY.toString() + '[' + window.scrollX.toString();
  document.querySelector('html').style.cssText = '';
};

if (window.name.indexOf('[') > 0) {
  let parts = window.name.split('[');
  window.scrollTo(parseInt(parts[parts.length - 1]), parseInt(parts[parts.length - 2]));
  document.querySelector('html').style.cssText = 'scroll-behavior: smooth';
}
