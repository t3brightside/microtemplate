$(document).ready(function() {
/* html5 based validation CSS classes & disable send button after submit*/
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
    $("form .btn").click(function() {
        if (!$(this).parents('form')[0].checkValidity()) {
            $(this).closest('form').find('input,textarea,select').each(function() {
                if ($(this).is(":invalid")) {
                    $(this).addClass("error")
                }
            });
            $(this).closest('form').reportValidity();
            return false;
        } else {
            $(this).html("Sending - please wait...");
            $(this).click();
            $(this).attr("disabled", true);
        }
    });
});
