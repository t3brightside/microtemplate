$(window).scroll(function() {
	/* Set #header to .scrolled */
	var scroll = $(window).scrollTop();
	if (scroll >= 45) {
		$("#header").addClass("scrolled");
		$("#header").addClass("force-bg");
	} else {
		$("#header").removeClass("scrolled");
		if (!$('#menu').hasClass("mobile") && !$('.hmbrgr').hasClass("open")) {
			$("#header").removeClass("force-bg");
		}
	}

/* play background videos only if in viewport */
	$('.bg-video').each(function() {
	    var top_of_element = $(this).offset().top;
	    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
	    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
	    var top_of_screen = $(window).scrollTop();
	    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
	    	$(this)[0].play();
	    } else {
	    	$(this)[0].pause();
/* bring back hidden menu and content if out of viewport */
			if( $(this).parent().hasClass('active'))
            {
                $('#header').fadeToggle();
                $(this).parent().children('.contentWidth, .overlay').fadeToggle();
                $(this).prop('muted', true);
                $(this).parent().children('.sound').removeClass('active');
				$(this).parent().removeClass('active');
            }
	    }
	});
});

/* hide header and content if sound button is clicked */
$(document).ready(function() {
	$(".sound").click( function(){
        if( $(this).next('.bg-video').prop('muted') ) {
            $(this).next('.bg-video').prop('muted', false);
        } else {
            $(this).next('.bg-video').prop('muted', true);
        }
        $("#header").fadeToggle();
        $(this).toggleClass('active');
		$(this).parent().toggleClass('active');
        $(this).parent().children('.contentWidth, .overlay').fadeToggle();
    });
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
