$(document).ready(function() {
// add remove mobile class on page resize
  var lastWidth = $(window).width();
  $(window).resize(function() {
    if ($(window).width() != lastWidth) {
      if ($(window).width() < 1100) {
        $('#menu').removeClass('mobile');
        $('#menu').hide();
        $('.hmbrgr').removeClass('open');
        if (!$('#header').hasClass("scrolled")) {
          $(".header-bg").removeClass("show");
        }
      }
      if ($(window).width() > 1100) {
        $('#menu').show();
        if (!$('#header').hasClass("scrolled")) {
          $(".header-bg").removeClass("show");
        }
      }
      lastWidth = $(window).width();
    }
  });
// open-close mobile menu with the hamburger
  $('.hmbrgr').click(function() {
    $('#menu').slideToggle();
    $('#menu').toggleClass('mobile');
    $('.hmbrgr').toggleClass('open');
    $('.header-bg').addClass('show');
    if (!$('#header').hasClass("scrolled")) {
      if (!$(this).hasClass("open")) {
        $(".header-bg").removeClass("show");
      }
    }
  });
// close menu if clicking menu links
  $('#menu a').on('click', function(e) {
    $('#menu.mobile').slideUp();
    $('.hmbrgr').removeClass('open');
    $('#menu').removeClass('mobile');
  });
// close menu if clicking logo
  $('#logo').on('click', function(e) {
    $('#menu.mobile').slideUp();
    $('#menu').removeClass('mobile');
    $('.hmbrgr').removeClass('open');
    $(".header-bg").removeClass("show");
  });
// close menu if clicking outside menu container
  $('#content, #footer').on('click', function(e) {
    $('#menu.mobile').slideUp();
    $('#menu').removeClass('mobile');
    $('.hmbrgr').removeClass('open');
    if (!$('#header').hasClass("scrolled")) {
      $(".header-bg").removeClass("show");
    }
  });
});
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
      if (jQuery(this).offset().top < fromTop)
        return this;
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