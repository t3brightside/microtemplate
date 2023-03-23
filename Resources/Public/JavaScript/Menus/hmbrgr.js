const hmbrgr = document.getElementById('hmbrgr');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');

hmbrgr.addEventListener('click', () => {
  hmbrgr.classList.toggle('open');
  menu.classList.toggle('open');
  if(hmbrgr.classList.contains('open')) {
    hmbrgr.setAttribute("aria-expanded", "true");
    menuLinks.forEach(link => {
      link.setAttribute('tabindex', '0');
    });
  } else {
    hmbrgr.setAttribute("aria-expanded", "false");
    menuLinks.forEach(link => {
      link.setAttribute('tabindex', '-1');
    });
  }
});

hmbrgr.style.display = "block";
