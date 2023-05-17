'use strict';

console.log('problems?');

let typed = new Typed('#typed', {
  typeSpeed: 170,
  backSpeed: 50,
  startDelay: 500,
  loop: true,
  stringsElement: '#typed-strings',
});

const lightIsactive = localStorage.getItem('lightIsactive');
const html = document.querySelector('html');

if (lightIsactive == 'true') {
  VANTA.FOG({
    el: '#wrapper',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0xa7ff,
    midtoneColor: 0xff00f0,
    lowlightColor: 0xffffff,
    baseColor: 0xffffff,
  });
  if (html.classList.contains('light')) {
    html.classList.replace('dark', 'light');
  } else {
    html.classList.replace('light', 'dark');
  }
} else {
  VANTA.FOG({
    el: '#wrapper',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0x0,
    midtoneColor: 0xb200ff,
    lowlightColor: 0xd6ff00,
    baseColor: 0x0,
  });
  html.classList.remove('light');
  html.classList.add('light');
}

const openBtn = document.getElementById('ob');
const menu = document.querySelector('.navigation_bar');

openBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
menu.addEventListener('change', function () {
  if (menu.classList.contains('active')) {
    openBtn.classList.toggle('active');
  } else {
    openBtn.classList.remove('active');
  }
});

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(menu);

  if (!withinBoundaries) {
    menu.classList.remove('active');
  }
});

const aboutMenu = document.querySelector('.list_of_themes_explanations');
const aboutButton = document.querySelector('.moreinfo_button');

aboutButton.addEventListener('click', animation);
function animation() {
  aboutMenu.classList.toggle('active');
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) {
    menu.classList.remove('active');
    aboutMenu.classList.remove('active');
  }
});

document.addEventListener('click', (e) => {
  const withinBoundariess = e.composedPath().includes(aboutButton);

  if (!withinBoundariess) {
    aboutMenu.classList.remove('active');
  }
});
