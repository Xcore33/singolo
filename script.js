const MENU = document.getElementById('menu');
const BUTTONS = document.getElementById('porfolio-buttons');
const IMAGES = document.getElementById('examples')
var visible = true;

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

//form

const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail");
  }
  else {
    document.querySelector('.submit-form').addEventListener('click', (evt) => {
    evt.preventDefault();
    let subject = document.querySelector('#subject').value;
    subject = subject === '' ? 'Without subject' : 'Subject: ' + subject;
    let description = document.querySelector('#describe-area').value;
    description = description === '' ? 'Without description' : 'Description: ' + description;
    let message = 'The letter was sent \n'+subject+'\n'+description;
    alert(message);
    document.myForm.reset();
    })
   }
});




//sort picture

document.querySelectorAll('.portfolio-navigation').forEach( (item)=>{
  item.addEventListener('click', (evt)=>{
    let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
    let arrRandom = [];
    for (let i = 0; i < 12; i++) {
      let numRandom = Math.ceil(Math.random() * arr.length-1);
      arrRandom.push( arr.splice(numRandom, 1) );
    }
    let i = 0;
    document.querySelectorAll('.project-images').forEach( (item) => {
      item.style.order = arrRandom[i];
      i++;
    })
  })
})

//slider

const SLIDER = document.getElementById('phones');
let slides = document.querySelectorAll('.slider-visible-area');
let actualSlide = 0;
let carouselAxis = false;

function carousel() {
  let position = 0;
  let nextSlide = (actualSlide === 0) ? 1 : 0;
  SLIDER.innerHTML = '';
  let elem = slides[nextSlide].cloneNode(true);
  elem.style.left = position*1000 - 1000 + 'px';
  slides[actualSlide].style.left = position*1000 + 'px';
  position += 1;
  slides[nextSlide].style.left = position*1000 + 'px';
  SLIDER.appendChild(elem);
  SLIDER.appendChild(slides[actualSlide]);
  SLIDER.appendChild(slides[nextSlide]);
}

function pushLeft() {
  if (!carouselAxis) {
    carouselAxis = true;
    let slides2 = document.querySelectorAll('.slider-visible-area');
    let position2 = -1;
    for (let i = 0; i < slides2.length; i += 1) {
      slides2[i].style.left = position2*1000 - 1000 +'px';
      position2 += 1;
    }
    actualSlide += 1;
    if (actualSlide >= slides.length) {
      actualSlide = 0;
    }
    if (actualSlide === 1) {
      document.getElementById('slider-picture-box').classList.add('trinity-background');
    } else {
      document.getElementById('slider-picture-box').classList.remove('trinity-background');
    }
  }
}

function pushRight() {
  if (!carouselAxis) {
    carouselAxis = true;
    let slides2 = document.querySelectorAll('.slider-visible-area');
    let position2 = -1;
    for (let i = 0; i < slides2.length; i += 1) {
      slides2[i].style.left = position2*1000 + 1000 +'px';
      position2 += 1;
    }
    actualSlide += 1;
    if (actualSlide >= slides.length) {
      actualSlide = 0;
    }
    if (actualSlide === 1) {
      document.getElementById('slider-picture-box').classList.add('trinity-background');
    } else {
      document.getElementById('slider-picture-box').classList.remove('trinity-background');
    }
  }
}

SLIDER.addEventListener('transitionend', function () {
  carousel();
  carouselAxis = false;
});

document.getElementById('left-button').addEventListener('click', pushLeft);
document.getElementById('right-button').addEventListener('click', pushRight);
carousel();
