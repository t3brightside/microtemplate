$(window).scroll(function() {
  /* Set #header to .scrolled */
  var scroll = $(window).scrollTop();
  if (scroll >= 45) {
    $("#header").addClass("scrolled");
    $("#header").addClass("force-bg");
  } else {
    $("#header").removeClass("scrolled");
    if (!$('#menu').hasClass("open") && !$('.hmbrgr').hasClass("open")) {
      $("#header").removeClass("force-bg");
    }
  }
});

/* Keep scroll position after post-back / postback / refresh. */
(function($) {
  window.onbeforeunload = function(e) {
    window.name += ' [' + $(window).scrollTop().toString() + '[' + $(window).scrollLeft().toString();
  };
  $.maintainscroll = function() {
    if (window.name.indexOf('[') > 0) {
      var parts = window.name.split('[');
      window.name = $.trim(parts[0]);
      window.scrollTo(parseInt(parts[parts.length - 1]), parseInt(parts[parts.length - 2]));
    }
  };
  $.maintainscroll();
})(jQuery);
