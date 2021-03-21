$(document).ready(function() {
    // add remove mobile class on page resize
    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            if ($(window).width() < 1100) {
                $('#sectionmenu').removeClass('mobile');
                $('#languagemenu').removeClass('mobile');
                $('#sectionmenu').hide();
                $('.hmbrgr').removeClass('open');
                if (!$('#header').hasClass("scrolled")) {
                    $("#header").removeClass("force-bg");
                }
            }
            if ($(window).width() > 1100) {
                $('#sectionmenu').show();
                if (!$('#header').hasClass("scrolled")) {
                    $("#header").removeClass("force-bg");
                }
            }
            lastWidth = $(window).width();
        }
    });
    // open-close mobile menu with the hamburger
    $('.hmbrgr').click(function() {
        $('#sectionmenu').slideToggle();
        $('#sectionmenu').toggleClass('mobile');
        $('#languagemenu').toggleClass('mobile');
        $('.hmbrgr').toggleClass('open');
        $('#header').addClass('force-bg');
        if (!$('#header').hasClass("scrolled")) {
            if (!$(this).hasClass("open")) {
                $("#header").removeClass("force-bg");
            }
        }
    });
    // close menu if clicking menu links
    $('#sectionmenu a, #languagemenu a').on('click', function(e) {
        $('#sectionmenu.mobile').slideUp();
        $('.hmbrgr').removeClass('open');
        $('#sectionmenu').removeClass('mobile');
        $('#languagemenu').removeClass('mobile');
    });
    // close menu if clicking logo
    $('#logo').on('click', function(e) {
        $('#sectionmenu.mobile').slideUp();
        $('#sectionmenu').removeClass('mobile');
        $('#languagemenu').removeClass('mobile');
        $('.hmbrgr').removeClass('open');
        $("#header").removeClass("force-bg");
    });
    // close menu if clicking outside menu container
    $('#content, #footer').on('click', function(e) {
        $('#sectionmenu.mobile').slideUp();
        $('#sectionmenu').removeClass('mobile');
        $('#languagemenu').removeClass('mobile');
        $('.hmbrgr').removeClass('open');
        if (!$('#header').hasClass("scrolled")) {
            $("#header").removeClass("force-bg");
        }
    });
});
// set active menu item by scrolling to a section
$(window).ready(function(jQuery) {
    $(window).scrollTop($(window).scrollTop() + 1);
    var topMenu = jQuery("#sectionmenu"),
        offset = 70,
        menuItems = topMenu.find('a[href*="#"]'),
        scrollItems = menuItems.map(function() {
            var href = jQuery(this).attr("href"),
                id = href.substring(href.indexOf('#')),
                item = jQuery(id);
            if (item.length) {
                return item;
            }
        });
    $(window).scroll(function() {
        var fromTop = jQuery(this).scrollTop() + offset;
        var cur = scrollItems.map(function() {
            if (jQuery(this).offset().top < fromTop) return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        menuItems.parent().removeClass("active");
        if (id) {
            menuItems.parent().end().filter("[href$='#" + id + "']").parent().addClass("active");
            var text = menuItems.parent().end().filter("[href$='#" + id + "']").text();
            document.title = text + ' ' + pageTitleSufix;
        } else {
          document.title = pageTitle + ' ' + pageTitleSufix;
        }
    });

    function checkVisible(elm, eval) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();
        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }
});
