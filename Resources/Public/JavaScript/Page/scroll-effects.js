var $window = $(window);
var $effectMe = $('.frame');

$window.scroll(function () {
    var bottom_of_window = $window.scrollTop() + $window.height();
    $effectMe.each(function (i) {
        var $elm = $effectMe.eq(i);
        var top_of_object = $elm.offset().top + 150;
        if (bottom_of_window > top_of_object) {
            if (!$elm.hasClass('in-viewport')) {
                $elm.addClass('in-viewport');
                $elm.velocity('transition.slideUpIn', { stagger: 10 }).delay(1000);
            }
        } else {
            $elm.removeClass('in-viewport');
        }
    }); 
});
