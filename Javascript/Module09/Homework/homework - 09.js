'use strict';

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/


// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null,
//   pauseTime: null,
//   lapTime: [],
// };

// const startBtn = document.querySelector('.js-start');
// const clockface = document.querySelector('.js-time');
// const resetBtn = document.querySelector('.js-reset');
// const lapBtn = document.querySelector('.js-take-lap');
// const ul = document.querySelector('.js-laps');


// startBtn.addEventListener('click', activeTimer);
// resetBtn.addEventListener('click', resetTimer);
// lapBtn.addEventListener('click', lapTimer);


// function activeTimer() {
//   if(startBtn.textContent === 'Start'){
//     startTimer();
//   }else if(startBtn.textContent === 'Pause'){
//     pauseTimer();
//   }else if(startBtn.textContent === 'Continue'){
//     continueTimer();
//   }
// }



// function startTimer(){
//   startBtn.textContent = 'Pause';
//   timer.startTime = Date.now();
//   timer.id = setInterval(interval, 100);
// };

// function interval(){
//   let currentTime = Date.now();
//   timer.deltaTime = currentTime - timer.startTime;
//   updateClockface(clockface, timer.deltaTime);
// };

// function updateClockface(elem, time){
//   elem.textContent = getFormattedTime(time);
// };

// function getFormattedTime(time){
//   let ms = Math.floor(time % 1000 / 100);
//   let sec = Math.floor(time / 1000 % 60);
//   let min = Math.floor(time / 60000 % 60);
//   sec < 10 ? sec = '0' + sec : null;
//   min < 10 ? min = '0' + min : null;
//   return `${min}:${sec}.${ms}`
// };

// function pauseTimer() {
// clearInterval(timer.id);
// timer.pauseTime = timer.deltaTime;
// startBtn.textContent = 'Continue';
// };

// function continueTimer(){
//   startBtn.textContent = 'Pause';
//   timer.startTime = Date.now() - timer.pauseTime;
//   timer.id = setInterval(interval, 100);
// };

// function resetTimer() {
//   clearInterval(timer.id);
//   startBtn.textContent = 'Start';
//   timer.startTime = null;
//   timer.deltaTime = null;
//   timer.id = null;
//   timer.pauseTime = null;
//   updateClockface(clockface, timer.deltaTime);
//   ul.innerHTML = '';
// };

// function lapTimer() {
//   let li = document.createElement('li');
//   ul.append(li);

//   timer.lapTime.push(timer.deltaTime);
//   li.textContent =  getFormattedTime(timer.deltaTime);
//   console.log(timer.lapTime);
// }
// ===========================на классы==============================


class Stopwatch{
  constructor(obj){
    this.startTime = null;
    this.deltaTime = null;
    this.id = null;
    this.pauseTime = null;
    this.lapTime = [];

    this.root = document.createElement('div');
    obj.append(this.root);
    this.root.innerHTML = `<div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
    </div>
    <ul class="laps js-laps"></ul>`;

    this.startBtn = this.root.querySelector('.js-start');
    this.clockface = this.root.querySelector('.js-time');
    this.resetBtn = this.root.querySelector('.js-reset');
    this.lapBtn = this.root.querySelector('.js-take-lap');
    this.ul = this.root.querySelector('.js-laps');

    this.activeTimer = this.activeTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.interval = this.interval.bind(this);
    this.updateClockface = this.updateClockface.bind(this);
    this.getFormattedTime = this.getFormattedTime.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.continueTimer = this.continueTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.lapTimer = this.lapTimer.bind(this);

    this.startBtn.addEventListener('click', this.activeTimer);
    this.resetBtn.addEventListener('click', this.resetTimer);
    this.lapBtn.addEventListener('click', this.lapTimer);
  }






activeTimer() {
  if(this.startBtn.textContent === 'Start'){
    this.startTimer();
  }else if(this.startBtn.textContent === 'Pause'){
    this.pauseTimer();
  }else if(this.startBtn.textContent === 'Continue'){
    this.continueTimer();
  }
}



startTimer(){
  this.startBtn.textContent = 'Pause';
  this.startTime = Date.now();
  this.id = setInterval(this.interval, 100);
};

interval(){
  let currentTime = Date.now();
  this.deltaTime = currentTime - this.startTime;
  this.updateClockface(this.clockface, this.deltaTime);
};

updateClockface(elem, time){
  elem.textContent = this.getFormattedTime(time);
};

getFormattedTime(time){
  let ms = Math.floor(time % 1000 / 100);
  let sec = Math.floor(time / 1000 % 60);
  let min = Math.floor(time / 60000 % 60);
  sec < 10 ? sec = '0' + sec : null;
  min < 10 ? min = '0' + min : null;
  return `${min}:${sec}.${ms}`
};

pauseTimer() {
clearInterval(this.id);
this.pauseTime = this.deltaTime;
this.startBtn.textContent = 'Continue';
};

continueTimer(){
  this.startBtn.textContent = 'Pause';
  this.startTime = Date.now() - this.pauseTime;
  this.id = setInterval(this.interval, 100);
};

resetTimer() {
  clearInterval(this.id);
  this.startBtn.textContent = 'Start';
  this.startTime = null;
  this.deltaTime = null;
  this.id = null;
  this.pauseTime = null;
  this.updateClockface(this.clockface, this.deltaTime);
  this.ul.innerHTML = '';
};

lapTimer() {
  let li = document.createElement('li');
  this.ul.append(li);
  this.lapTime.push(this.deltaTime);
  li.textContent =  this.getFormattedTime(this.deltaTime);
  console.log(this.lapTime);
};
};

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/
const parentA = document.querySelector('.parrentA');
const parentB = document.querySelector('.parrentB');
const parentC = document.querySelector('.parrentC');

new Stopwatch(parentA);
new Stopwatch(parentB);
new Stopwatch(parentC);