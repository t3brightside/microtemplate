// smooth scroll to anchor links
var currentHref = window.location.href;
$('a[href*="#c"]:not([href="#c"])').on('click', function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 44
  }, 800);
});
