$(document).ready(function() {
  $("select").parent().addClass('select');
});

// smooth scroll to anchor links
$('a[href*="#c"]:not([href="#c"])').on('click', function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 44
  }, 800);
});
