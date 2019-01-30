'use strict'

// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути //mouseover
// 3) Нова позиція кнопок має бути випадковою// Math.randonm
// 4) Кнопки не повинні виїжати за межі екрану //
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія можна двома способами:
// 7.1) event
// 7.2) this
// 8) Корисні команди:
// window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter



const container = document.querySelector('.container');

container.addEventListener('mouseover', run);

let btn = document.querySelector('.btn');
let btnW = btn.clientWidth;
let btnH = btn.clientHeight;
console.log(btnH);






function run(e){
    let random1 = Math.random() * (window.innerWidth - btnW);
    let random2 = Math.random() * (window.innerHeight - btnH);
    e.target.style.left= `${random1}px`;
    e.target.style.top = `${random2}px`;
}





