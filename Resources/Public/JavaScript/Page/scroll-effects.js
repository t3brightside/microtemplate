/***
	Set .in-viewport class to every .frame to create fade in effect with CSS
***/

	var $window = $(window);
	var $effectMe = $('.frame');
	var $windowHeight = $window.height();
	$window.scroll(function () {
	  var bottom_of_window = $window.scrollTop() + $windowHeight;
	  $effectMe.each(function (i) {
	    var $elm = $effectMe.eq(i);
	    var top_of_object = $elm.offset().top + 150;
	    if (bottom_of_window > top_of_object) {
	      if (!$elm.hasClass('in-viewport')) {
	        $elm.addClass('in-viewport');
	      }
	    } else {
	      $elm.removeClass('in-viewport');
	    }
	  }); 
	});
