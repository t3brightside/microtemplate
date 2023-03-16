const formSubmitButtons = document.querySelectorAll('input[type="submit"], button[type="submit"], input[type="button"], button[type="button"]');

// loop through the buttons and add event listener to each one
formSubmitButtons.forEach(button => {
  button.addEventListener('click', event => {
    // prevent the form from submitting immediately
    if (event.target.form.checkValidity()) {
    // hide the original button and show the new button
      button.style.display = 'none';
      const newButton = document.createElement('button');
      newButton.setAttribute('class', 'btn');
      newButton.disabled = true;
      newButton.textContent = 'Please wait...';
      newButton.classList.add = 'btn';
      button.parentNode.insertBefore(newButton, button);

      // disable clicking
      newButton.disabled = true;
      // enable clicking after 10 seconds
      setTimeout(() => {
        button.style.display = '';
        newButton.parentNode.removeChild(newButton);
      }, 15000);
    }
  });
});
