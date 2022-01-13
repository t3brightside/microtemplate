// smooth scroll to anchor

(function($) {
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        headerHeight = 52;
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - headerHeight
          }, 600);
          return false;
        }
      }
    });
  });
})(jQuery);
