
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

// set active menu item by scrolling to a section
$(window).ready(function(jQuery) {
  $(window).scrollTop($(window).scrollTop() + 1);
  var topMenu = jQuery("#menu"),
    offset = 70,
    menuItems = topMenu.find('a[href*="#"]'),
    scrollItems = menuItems.map(function() {
      var href = jQuery(this).attr("href"),
        id = href.substring(href.indexOf('#')),
        item = jQuery(id);
      if (item.length) {
        return item;
      }
    });
  $(window).scroll(function() {
    var fromTop = jQuery(this).scrollTop() + offset;
    var cur = scrollItems.map(function() {
      if (jQuery(this).offset().top < fromTop) return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    menuItems.parent().removeClass("active");
    if (id) {
      menuItems.parent().end().filter("[href$='#" + id + "']").parent().addClass("active");
    }
  });

  function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
      scrolltop = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top,
      elementHeight = $(elm).height();
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
  }
});
