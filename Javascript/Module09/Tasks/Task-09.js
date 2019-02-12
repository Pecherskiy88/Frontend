'use strict'
/* 01
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
  
  Учтите что на кнопку Start могно нажать бесконечное количество раз,
  сделайте так чтобы пока изменение темы запушено, нажатие на кнопку
  Start не имело эффекта.
*/

// const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

// const start = document.querySelector('.js-start');
// const stop = document.querySelector('.js-stop');

// let body = document.querySelector('body');

// let interval;
// let active = false;



// start.addEventListener('click', fnInt);
// stop.addEventListener('click', fnStop);


// function fnColor(){
//     let color = Math.floor(Math.random()*colors.length-1);
//     body.style.backgroundColor = colors[color];
// };

// function fnInt(){
//  if(active === false){
//     interval = setInterval(fnColor, 500);
//     active = true;
//  }
// };
// function fnStop(){
//     clearInterval(interval)
//     active = false;
// };

//=============================02=======================================================

/* 02
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//     let date = new Date(time);

//     let sec = date.getSeconds();
//     sec >= 10 ? sec : sec = `0${sec}`;
   
    

//     let min = date.getMinutes();
//     min >= 10 ? min : min = `0${min}`;

//     let mil = Math.floor(date.getMilliseconds() / 100);
//     return `${min}:${sec}:${mil}`;
    
//   }
  
//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2
   
//=============================03=======================================================

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null,
};

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);


function startTimer() {
timer.startTime = Date.now();
timer.id = setInterval(interval, 100)

};
function stopTimer(){
  clearInterval(timer.id);
}
function interval(){
  let date = Date.now();
  timer.deltaTime = date - timer.startTime;
  updateClockface(clockface, timer.deltaTime);
};

function updateClockface(elem, time){
  elem.textContent = getFormattedTime(time);
};

function getFormattedTime(time){
  let ms = Math.floor(time % 1000 / 100);
  let sec = Math.floor(time / 1000 % 60);
  let min = Math.floor(time / 60000 % 60);
  min < 10 ? min = "0" + min : null;
  sec < 10 ? sec = "0" + sec : null;
  return `${min}:${sec}.${ms}`
};




//=============================04=======================================================


/*
  Напишите скрипт работы магазина со складом товаров.
  
  Есть переменная goodsAmount хранящиая в себе
  текущее количество единиц какого-то товара на складе.
  
  Напишите функцию processOrder(amount), получающую
  кол-во товаров заказанных покупателем, и возвращающую промис.
  
  Для имитации проверки достаточного количества товаров
  на складе используйте setTimeout с delay 500мс.
  
  Если на складе товаров больше либо равно заказанному
  количеству, "верните" строку - "Ваш заказ готов!".
  
  В противном случае - "К сожалению на складе не достаточно товаров!".
  
  Если же пользователь ввел не число, то выдайте ошибку throw new Error("Некорректный ввод!")  
*/

// const DELAY = 1000;

// let goodsAmount = 100;



// function processOrder(amount){
//   const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(typeof amount !== 'number'){
//         throw new Error('Некорректный ввод!');
//       }
//       if(goodsAmount >= amount){
//         resolve('Ваш заказ готов!')
//       }else{
//         reject('К сожалению, на складе недостаточно товара!')
//       }
//     }, DELAY)
//   })
//   return promise;
// }



// // Вызовы функции для проверки
// processOrder(50)
//   .then(result => console.log(result)) // Ваш заказ готов!
//   .catch(err => console.log(err));

// processOrder(50)
//   .then(result => console.log(result)) // Ваш заказ готов!
//   .catch(err => console.log(err));

// processOrder(500)
//   .then(result => console.log(result)) // К сожалению на складе недостаточно товаров!
//   .catch(err => console.log(err));

// processOrder("qwe")
//   .then(result => console.log(result))
//   .catch(err => console.log(err)); // Некоректный ввод!

