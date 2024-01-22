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
const anchors = document.getElementsByTagName('a');

for (let i = 0; i < anchors.length; i++) {
  const href = anchors[i].getAttribute('href');
  if (href && href.indexOf('#') !== -1) {
    anchors[i].addEventListener('click', function(event) {
      // Get the target element with the same ID as the anchor link's href
      const targetId = href.substring(href.indexOf('#') + 1);
      const target = document.getElementById(targetId);

      // Check if a target element was found and if it has the "c-popup" class, don't scroll to it
      if (target && !target.classList.contains('c-popup')) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }
}
