'use strict'
// 1) Скачати картинки
// 2) Наповнити розмітку
// 3) Створити через js модалку + В правому верхньому кутку хрестик на закриття
// 4) В модалці має зявлятися по центру картинка з підписом
// 5) При кліку на оверлей чи хрестик модалка пропадає
// 6) Пункти 3,4,5, активуються при кліку на картинку галереї (делегування).
// 7) Якщо все працює переписати на клас.
// *

// 1) Додати до модалки кнопку превю
// 2) При кліку на неї збоку зявляється панель з міні-картинками
// 3) При кліку на маленьку картинку змінюється картинка в модалці.
// 4) До міні-картинок додається бордер який підсвічує активне зображення.


const gallery = document.querySelector('#gallery');
const body = document.querySelector('body');
const modal = document.createElement('div');
const modalImg = document.createElement('img');

modal.classList.add('modal');
modalImg.classList.add('modal--img');

function fnImg(e) {
    let event = e.target.dataset.big;
   
    
    modalImg.setAttribute('src', `${event}`);
    modal.style.display = 'block';
};

gallery.addEventListener('click', fnImg);

body.append(modal);
modal.append(modalImg);



const close = document.createElement('div');
close.classList.add('close')
close.textContent = 'X';
modal.prepend(close);
console.log(close);

modal.addEventListener('click', fnClose);



close.addEventListener('click', fnClose);

function fnClose() {
    modal.style.display = 'none';
}












