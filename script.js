const BUTTONS = document.getElementById('porfolio-buttons');
const IMAGES = document.getElementById('examples')
var visible = true;

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

function RESET() {
  const email = document.getElementById("mail");
  const login = document.getElementById("input-1-area");
  if (login.value == '') {
    return false;
  }
  if (!login.validity.valid) {
    return false;
  }
  if (mail.value == '') {
    return false;
  }
  if (email.validity.typeMismatch) {
    return false;
  }
  if (login.value !== '' && mail.value !== '') {
    let subject = document.querySelector('#subject').value;
    subject = subject === '' ? 'Without subject' : 'Subject: ' + subject;
    let description = document.querySelector('#describe-area').value;
    description = description === '' ? 'Without description' : 'Description: ' + description;
    let message = 'The letter was sent \n'+subject+'\n'+description;
    alert(message);
    event.preventDefault();
    document.myForm.reset();
  }
}

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

//header scroll action

document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const CURRENTPOS = window.scrollY;
  const SECTIONS = document.querySelectorAll('#top, #services-marker, #portfolio-marker, #about-marker, #contact-marker');
  const LINKS = document.querySelectorAll('#menu a');

  SECTIONS.forEach((el) => {
    if (el.offsetTop <= CURRENTPOS && (el.offsetTop + el.offsetHeight) > CURRENTPOS || (el.offsetTop - 150) < CURRENTPOS) {
      LINKS.forEach((a) => {
       a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
         a.classList.add('active');
       }
    })
  }
});
}
