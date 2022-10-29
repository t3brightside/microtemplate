$(document).ready(function() {
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
