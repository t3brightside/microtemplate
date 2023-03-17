const hmbrgr = document.getElementById('hmbrgr');
const menu = document.getElementById('menu');

hmbrgr.addEventListener('click', () => {
  hmbrgr.classList.toggle('open');
  menu.classList.toggle('open');
});

hmbrgr.style.display = "block";
