const MENU = document.getElementById('menu');
const BUTTONS = document.getElementById('porfolio-buttons');
const IMAGES = document.getElementById('examples')

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
})

BUTTONS.addEventListener('click', (event) => {
  BUTTONS.querySelectorAll('a').forEach(el => el.classList.remove('button-active'));
  event.target.classList.add('button-active');
})

IMAGES.addEventListener('click', (event) => {
  IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('image-active'));
  event.target.classList.add('image-active');
})
