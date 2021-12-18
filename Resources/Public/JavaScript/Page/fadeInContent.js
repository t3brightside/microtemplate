/*
Set .in-viewport class to every .frame to create fade in effect with CSS
*/
var $addTo = $('#content .frame');
$.fn.addRemoveInViewport = function() {
  var $effectMe = $(this);
  var bottom_of_window = $(window).scrollTop() + $(window).height();
  $(this).each(function(i) {
    var $elm = $effectMe.eq(i);
    var top_of_object = $elm.offset().top + 50;
    if (bottom_of_window > top_of_object) {
      if (!$elm.hasClass('in-viewport')) {
        $elm.addClass('in-viewport');
      }
    } else {
      $elm.removeClass('in-viewport');
    }
  });
}

$(window).scroll(function() {
  $addTo.addRemoveInViewport();
});

$(window).on('pageshow', function() {
  $addTo.addRemoveInViewport();
});
