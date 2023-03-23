function mVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--mvh', `${vh}px`);
}
window.addEventListener('load', mVh);
window.addEventListener('resize', function() {
  mVh();
});

menu.addEventListener("click", function (event) {
  if (event.target.matches("a")) {
    hmbrgr.classList.remove('open');
    hmbrgr.setAttribute("aria-expanded", "false");
    menu.classList.remove('open');
    menuLinks.forEach(link => {
      link.setAttribute('tabindex', '-1');
    });
  }
});

const sectionMenu = document.querySelector("#section-menu");
const menuItems = sectionMenu.querySelectorAll('a[href*="#"]');
const scrollItems = Array.from(menuItems).map(item => {
  const href = item.getAttribute("href");
  const id = href.substring(href.indexOf('#'));
  return document.querySelector(id);
});

function updateMenu() {
  const fromTop = window.scrollY + 70;
  const cur = scrollItems.filter(item => item.offsetTop < fromTop);
  const id = cur[cur.length - 1]?.id || "";
  menuItems.forEach(item => {
    item.classList.remove("act");
    if (id && item.getAttribute("href").endsWith(id)) {
      item.classList.add("act");
    }
  });
}

function onScroll() {
  window.requestAnimationFrame(updateMenu);
}
window.addEventListener("scroll", onScroll);

document.addEventListener("DOMContentLoaded", () => {
  window.scrollBy(0, 1);

});
