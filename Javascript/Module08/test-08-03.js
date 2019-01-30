'use strict'

// ЛЕПИМ фиксированное меню при прокрутке!!!

// 1) При скролі сайту на велечину хедера фбо більше меню стає фіксованим
// 2) При скролі сайту меньше ніж висота хедера меню стає на почвткову позицію

// клас fixed-nav

const nav = document.querySelector('.nav');
const length = document.querySelector('.header').clientHeight;


const header = document.querySelector('.header');


window.addEventListener('scroll', navigation);

function navigation() {
    if(pageYOffset > length){
        nav.classList.add('fixed-nav');
    }else{
        nav.classList.remove('fixed-nav')
    }
};



