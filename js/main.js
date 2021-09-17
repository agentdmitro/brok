"use strict";

//burger
var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__contacts');

if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
  });
} //

/*

// modals

const modalBtns = document.querySelectorAll('.modals__btn')
const modalOverlay = document.querySelector('.modals__overlay')
const modalItems = document.querySelectorAll('.modals__item')

modalBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
        const currentModalPath = e.currentTarget.getAttribute('data-modal-path')
        const modalItem = document.querySelector(`[data-modal-target = "${currentModalPath}"]`)

        modalOverlay.classList.add('active')
        modalItem.classList.add('active')

        if(modalItem.classList.contains('active')){
            const modalClose = document.querySelectorAll('.modals__close')

            modalClose.forEach((el) => {
                el.addEventListener('click', () => {
                    modalOverlay.classList.remove('active')
                    modalItem.classList.remove('active')
                })
            })

            modalOverlay.addEventListener('click', (e) => {
                if(e.target != modalItem) {
                    modalOverlay.classList.remove('active')
                    modalItem.classList.remove('active')
                }
            })
        }

    })
})



*/


var swiper = new Swiper('.intro__slider', {
  speed: 600,
  autoplay: {
    delay: 2400,
    disableOnInteraction: false
  },
  pagination: {
    el: ".intro__fract",
    type: "fraction",
    clickable: true
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true
  }
});
var swiper2 = new Swiper(".intro__slider--copy", {
  pagination: {
    el: '.intro__bullet',
    type: "bullets",
    сlickable: true
  },
  allowSlideNext: false,
  allowSlidePrev: false
});
var bullets = document.querySelectorAll('.intro__bullet .swiper-pagination-bullet');
swiper.on('slideChange', function () {
  bullets.forEach(function (el) {
    el.classList.remove('swiper-pagination-bullet-active');
  });
  bullets[swiper.realIndex].classList.add('swiper-pagination-bullet-active');
});
//# sourceMappingURL=main.js.map
