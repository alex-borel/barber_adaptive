const toggle = document.querySelector('.main-navigation__toggle');
const menu = document.querySelector('.main-navigation');

toggle.addEventListener('click', (event) => {
  event.preventDefault();
  if (menu.classList.contains('main-navigation--closed')) {
    menu.classList.remove('main-navigation--closed');
    menu.classList.add('main-navigation--opened');
  } else {
    menu.classList.remove('main-navigation--opened');
    menu.classList.add('main-navigation--closed');
  }
});


const advantToggles = document.querySelectorAll('.advantages__toggles .slider__toggle');
const advantItem = document.querySelectorAll('.advantages__item');
let activeToggleAdvant = document.querySelector('.advantages__toggles .slider__toggle--active');
let activeAdvant = document.querySelector('.advantages__item--active');

for (let i = 0; i < advantToggles.length; i++) {
  advantToggles[i].addEventListener('click', () => {
    activeToggleAdvant.classList.remove('slider__toggle--active');
    advantToggles[i].classList.add('slider__toggle--active');
    activeToggleAdvant = advantToggles[i];
    activeAdvant.classList.remove('advantages__item--active');
    advantItem[i].classList.add('advantages__item--active');
    activeAdvant = advantItem[i];
  })
};

const revToggles = document.querySelectorAll('.reviews__toggles .slider__toggle');
const revItem = document.querySelectorAll('.reviews__item');
let activeToggleRev = document.querySelector('.reviews__toggles .slider__toggle--active');
let activeRev = document.querySelector('.reviews__item--active');

for (let j = 0; j < revToggles.length; j++) {
  revToggles[j].addEventListener('click', () => {
    activeToggleRev.classList.remove('slider__toggle--active');
    revToggles[j].classList.add('slider__toggle--active');
    activeToggleRev = revToggles[j];
    activeRev.classList.remove('reviews__item--active');
    revItem[j].classList.add('reviews__item--active');
    activeRev = revItem[j];
  })
};

