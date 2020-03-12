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

//power off for phones
var visible = true;

function showFun1() {
  if(visible) {
      document.getElementById('display-1').style.visibility = 'hidden';
      visible = false;
  } else {
      document.getElementById('display-1').style.visibility = 'visible';
      visible = true;
  }
}

function showFun2() {
if(visible) {
    document.getElementById('display-2').style.visibility = 'hidden';
    visible = false;
} else {
    document.getElementById('display-2').style.visibility = 'visible';
    visible = true;
}
}
