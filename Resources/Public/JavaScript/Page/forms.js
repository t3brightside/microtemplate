$(document).ready(function() {
/* html5 based validation CSS classes & disable send button after submit*/
    $('.frame-type-form_formframework select, .frame-type-form_formframework input, .frame-type-form_formframework textarea').on('blur', function() {
        if (!$(this).val()) {} else {
            if ($(this).is(':invalid')) {
                $(this).addClass('error')
            }
            if ($(this).is(':valid') && $(this).hasClass('error')) {
                $(this).removeClass('error');
                $(this).addClass('valid');
            }
            if ($(this).is(':valid')) {
                $(this).addClass('valid');
            }
        }
    });

    $('.frame-type-form_formframework form button[type="submit"]').click(function() {
        if (!$(this).parents('form')[0].checkValidity()) {
            $(this).closest('form').find('input,textarea,select').each(function() {
                if ($(this).is(':invalid')) {
                    $(this).addClass('error')
                }
            });
        } else {
            $(this).hide();
            $(this).after( "<button disabled class='btn'>Sending - please wait...</button>" );
        }
    });
});
