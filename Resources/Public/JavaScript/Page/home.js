
var sp = window.scrollY;
window.addEventListener('scroll', function() {
  sp = window.scrollY;
  if (sp >= 45) {
    header.classList.add('scrolled');
    header.classList.add('force-bg');
  } else {
    header.classList.remove('scrolled');
    if (!menu.classList.contains('open')) {
      header.classList.remove('force-bg');
    }
  }
});

// keep scroll position after post-back / postback / refresh.
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
