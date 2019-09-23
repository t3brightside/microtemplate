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
        $("form .btn").click(function() {
            $("select, input, textarea").each(function() {
                if ($(this).is(":invalid")) {
                    $(this).addClass("error")
                }
            })
        });
        $('select, input, textarea').on('blur', function() {
            if (!$(this).val()) {} else {
                if ($(this).is(":invalid")) {
                    $(this).addClass("error")
                }
                if ($(this).is(":valid") && $(this).hasClass('error')) {
                    $(this).removeClass("error");
                    $(this).addClass("valid");
                }
                if ($(this).is(":valid")) {
                    $(this).addClass("valid");
                }
            }
        });
    });
