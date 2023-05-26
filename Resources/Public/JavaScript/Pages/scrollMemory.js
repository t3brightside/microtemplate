
/* remember window scroll position */
window.onbeforeunload = function (e) {
  window.name += ' [' + window.scrollY.toString() + '[' + window.scrollX.toString();
  document.querySelector('html').style.cssText = '';
};

if (window.name.indexOf('[') > 0) {
  let parts = window.name.split('[');
  window.scrollTo(parseInt(parts[parts.length - 1]), parseInt(parts[parts.length - 2]));
  document.querySelector('html').style.cssText = 'scroll-behavior: smooth';
}
