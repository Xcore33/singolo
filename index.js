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

document.querySelector('.submit-form').addEventListener('click', (evt) => {
  evt.preventDefault();
  let NAME = document.querySelector('#input-1-area').value;
  NAME = NAME === '' ? 'No name' : 'Name: ' + NAME;
  let subject = document.querySelector('#subject').value;
  subject = subject === '' ? 'No subject' : 'Subject: ' + subject;
  let description = document.querySelector('#describe-area').value;
  description = description === '' ? 'Empty' : 'Description: ' + description;
  let message = 'Email sent \n'+NAME+'\n'+subject+'\n'+description;
  alert(message);
})

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
