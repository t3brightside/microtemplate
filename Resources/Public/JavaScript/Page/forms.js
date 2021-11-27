$(document).ready(function() {

  /* Alert icon SVG */
  var alertIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><title>Please overlook the field</title><path d="M503.22,0c33.4,0,62.23,12,86.13,36.11,24.08,24.08,36.12,53.75,36.12,89.36L566,564.43c-6.27,29.33-14.24,48.66-23.56,58-9.5,9.5-22.55,14.08-39.17,14.08-18.82,0-33.4-3.73-43.91-11-10.34-7.29-17.8-27.64-21.87-61.21l-62.74-439c0-35.61,12.55-65.28,37.64-89.36Q449.74.09,503.22,0Z"/><path d="M503.22,749.24c33.4,0,62.23,12,86.13,36.11,24.08,24.08,36.12,53.75,36.12,89.35,0,33.4-12,62.74-36.12,87.66-23.9,25.09-52.73,37.64-86.13,37.64q-53.14,0-90.88-37.64c-25.26-24.92-37.81-54.26-37.81-87.66,0-35.6,12.55-65.27,37.64-89.35S467.62,749.24,503.22,749.24Z"/></svg>';

  /* Add helper to radio buttons & validation icon to the whole group */
  $('input[type="radio"]').after('<i class="helper"></i>');
  $('input[type="radio"]').parent().parent().parent().after('<i class="validation-icon">' + alertIcon + '</i>');
  $('input[type="radio"]').change(function() {
    if ($(this).is(':checked')) {
      $(this).parent().parent().parent().parent().removeClass('error');
      $(this).parent().parent().parent().parent().addClass('valid');
    }
  });

  /* Add helper and validation to other form elements */
  var elements = $('input[type="text"],input[type="email"],input[type="date"],input[type="tel"],input[type="url"],input[type="file"],input[type="checkbox"],textarea,select');
  elements.after('<i class="helper"></i><i class="validation-icon">' + alertIcon + '</i>');
  elements.change(function() {
    if ($(this).parent().hasClass('touched')) {
      if ($(this).is(':invalid')) {
        $(this).parent().addClass('error');
        $(this).parent().removeClass('valid');
      }
      if ($(this).is(':valid') && $(this).parent().hasClass('error')) {
        $(this).parent().removeClass('error');
        $(this).parent().addClass('valid');
      }
      if ($(this).is(':valid')) {
        $(this).parent().removeClass('error');
        $(this).parent().addClass('valid');
      }
    } else {
      if ($(this).val()) {
        if ($(this).is(':invalid')) {
          $(this).parent().removeClass('valid');
          $(this).parent().addClass('error touched');
        }
        if ($(this).is(':valid')) {
          $(this).parent().removeClass('error');
          $(this).parent().addClass('touched');
        }
      }
    }
  });
  $('form button[type="submit"]').click(function() {
    if (!$(this).parents('form')[0].checkValidity()) {
      $(this).parents('form').find('input,textarea,select').each(function() {
        if ($(this).is(':invalid')) {
          $(this).parent().addClass('error touched');
        }
      });
      $(this).parents('form').find('input[type="radio"]').each(function() {
        if ($(this).is(':invalid')) {
          $(this).parent().removeClass('error touched');
          $(this).parent().parent().parent().parent().addClass('error touched');
        }
      });
    } else {
      $(this).hide();
      $(this).after("<button disabled class='btn'>Sending - please wait...</button>");
    }
  });
});
