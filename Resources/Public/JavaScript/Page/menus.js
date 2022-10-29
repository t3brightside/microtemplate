function removeMenuClasses() {
  hmbrgr.classList.remove('open');
  menu.classList.remove('open');
  header.classList.remove('force-bg');
}

hmbrgr.addEventListener('click', function() {
  hmbrgr.classList.toggle('open');
  menu.classList.toggle('open');
  header.classList.toggle('force-bg');
}, false);

const menuLinks = menu.querySelectorAll("a");
menuLinks.forEach(link => {
  link.addEventListener("click", function() {
    removeMenuClasses();
  });
});

logo.addEventListener('click', function() {
  removeMenuClasses();
}, false);

const callback = (entries, observer) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const el = document.body.querySelector('#menu a[href*="#' + id + '"]');
    const active = document.querySelectorAll('#menu .active');
    const count = active.length;
    if (entry.isIntersecting) {
      if (el) {
      el.parentNode.classList.add('active');
    }
      active.forEach(i => {
        if (i != el) {
          i.classList.remove('active');
        }
      });

    }
  });
};
const sections2 = document.querySelectorAll('.c-section');
const options = {
  threshold: 0.48
};
const observer = new IntersectionObserver(callback, options);
sections2.forEach(section2 => {
  observer.observe(section2);
});
