    /*
    smooth scroll to anchor links
    */
    var currentHref = window.location.href;
    $('a[href*="#c"]:not([href="#c"])').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 44
        }, 800);
    });

$(document).ready(function() {
    /* html5 based validation class */
    $("form .btn").click( function(){
        $("select, input, textarea").each(function(){
            if($(this).is(":invalid")) {
                $(this).addClass("error")
            }
        })
    });
    $('select, input, textarea').on('blur', function(){
        if($(this).is(":valid") && $(this).hasClass('error')) {
            $(this).removeClass("error")
        }
    });

/* unmute and clear BG video on click */
    $(".sound").click( function(){
        if( $(this).siblings('.bg-video').prop('muted') ) {
            $(this).siblings('.bg-video').prop('muted', false);
        } else {
            $(this).siblings('.bg-video').prop('muted', true);
        }
        $("#header").fadeToggle();
        $(this).toggleClass('active');
        $(this).siblings('.contentWidth, .overlay').fadeToggle();
    });
});

/* unmute and clear BG video on scroll down */
    var position = $(window).scrollTop();
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        if ((scroll > position) && (scroll > 245)) {
            if( $('.sound').hasClass('active'))
            {
                $('#header').fadeToggle();
                $('.sound').siblings('.contentWidth, .overlay').fadeToggle();
                $('.sound').siblings('.bg-video').prop('muted', true);
                $('.sound').removeClass('active');
            }
        }
        else { }
        position = scroll;
    });
