/* add scrolled class to body */
function addScrolled() {
  let sp = window.scrollY;
  if (sp >= 45) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
}

addScrolled();

window.addEventListener('scroll', function () {
  addScrolled();
});

/* smooth scrolling to anchor links */
document.querySelectorAll('a[href*="#"]:not([href="#"])').forEach(trigger => {
  trigger.addEventListener('click', e => {
    e.preventDefault();
    let id = trigger.getAttribute('href').split('#')[1];
    let hash = '#' + id;
    let target = document.querySelector(hash);
    let headerOffset = 0;
    let elementPosition = target.offsetTop;
    let offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      behavior: 'smooth',
      top: offsetPosition
    });
    // Wait for the scrolling to finish before setting focus
    window.addEventListener('scroll', function onScroll() {
      if (window.scrollY === offsetPosition) {
        document.getElementById(id).focus();
        window.removeEventListener('scroll', onScroll);
      }
    });
  });
});

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

