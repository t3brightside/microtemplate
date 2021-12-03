// smooth scroll to anchor links
//Grab our current Url
(function($) {
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        headerHeight = $('#logo').height() + 26;
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - headerHeight
          }, 800);
          return false;
        }
      }
    });
  });
})(jQuery);
