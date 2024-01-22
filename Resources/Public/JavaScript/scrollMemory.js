// Remember window scroll position
// Generate a unique key for the current page in the current tab
function getPageKey() {
  return 'scrollPosition_' + window.location.href;
}

// Remember window scroll position
window.addEventListener('beforeunload', function () {
  const pageKey = getPageKey();
  sessionStorage.setItem(pageKey, JSON.stringify({ x: window.scrollX, y: window.scrollY }));
  document.querySelector('html').style.cssText = '';
});

// Check if there is a stored scroll position for the current page in the current tab
const pageKey = getPageKey();
const storedScrollPosition = sessionStorage.getItem(pageKey);

if (storedScrollPosition) {
  const { x, y } = JSON.parse(storedScrollPosition);
  window.scrollTo(x, y);
  document.querySelector('html').style.cssText = 'scroll-behavior: smooth';
}
