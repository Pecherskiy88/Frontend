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
  id: null
};
startBtn.addEventListener('click', fnInterval);

function fnInterval() {
    timer.startTime = Date.now();
    setInterval(startTime, 10000);

}


function startTime() {
 
    let nowTime = Date.now();
    timer.deltaTime = Math.floor((nowTime/1000) - (timer.startTime/1000));
    clockface.textContent = timer.deltaTime;
}

startTime();


//=====================================================================
/*
* Вспомогательные функции
*/

/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateClockface(elem, time) {
  // Используйте функцию getFormattedTime из задания #1
  // elem.textContent = getFormattedTime(time);
}

/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}

    

//==================КОЗИЙ СПОСОБ!:)==========================
// let minute = 0;
// let second = 0;
// let milisecond = 0;
// let interval;
// startBtn.addEventListener('click', fnInterval);
// function fnInterval(){
//     interval = setInterval(startTime, 0.5);
// }

// function startTime() {
//     if(milisecond < 1000){
//         milisecond += 1;
//         clockface.textContent = `${minute}:${second}.${milisecond}`
//     }else if(milisecond === 1000){
//         milisecond = 0;
//         milisecond += 1;
//     }

//     if(milisecond === 1000 && second < 60){
//         second += 1;
//         clockface.textContent = `${minute}:${second}.${milisecond}`
//     }else if(second === 60){
//         second = 0;
//         second += 1;
//     }
//     if(second === 60 && minute < 60){
//         minute +=1;
//         clockface.textContent = `${minute}:${second}.${milisecond}`
//     }
 
  
    
// }




