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
const timer = {
  startTime: null,
  deltaTime: null,
  id: null,
  pauseTime: null,
  lapTime: [],
};

const startBtn = document.querySelector('.js-start');
const clockface = document.querySelector('.js-time');
const resetBtn = document.querySelector('.js-reset');
const lapBtn = document.querySelector('.js-take-lap');
const ul = document.querySelector('.js-laps');


startBtn.addEventListener('click', activeTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);


function activeTimer() {
  if(startBtn.textContent === 'Start'){
    startTimer();
  }else if(startBtn.textContent === 'Pause'){
    pauseTimer();
  }else if(startBtn.textContent === 'Continue'){
    continueTimer();
  }
}



function startTimer(){
  startBtn.textContent = 'Pause';
  timer.startTime = Date.now();
  timer.id = setInterval(interval, 100);
};

function interval(){
  let currentTime = Date.now();
  timer.deltaTime = currentTime - timer.startTime;
  updateClockface(clockface, timer.deltaTime);
};

function updateClockface(elem, time){
  elem.textContent = getFormattedTime(time);
};

function getFormattedTime(time){
  let ms = Math.floor(time % 1000 / 100);
  let sec = Math.floor(time / 1000 % 60);
  let min = Math.floor(time / 60000 % 60);
  sec < 10 ? sec = '0' + sec : null;
  min < 10 ? min = '0' + min : null;
  return `${min}:${sec}.${ms}`
};

function pauseTimer() {
clearInterval(timer.id);
timer.pauseTime = timer.deltaTime;
startBtn.textContent = 'Continue';
};

function continueTimer(){
  startBtn.textContent = 'Pause';
  timer.startTime = Date.now() - timer.pauseTime;
  timer.id = setInterval(interval, 100);
};

function resetTimer() {
  clearInterval(timer.id);
  startBtn.textContent = 'Start';
  timer.startTime = null;
  timer.deltaTime = null;
  timer.id = null;
  timer.pauseTime = null;
  updateClockface(clockface, timer.deltaTime);
  ul.innerHTML = '';
};

function lapTimer() {
  let li = document.createElement('li');
  ul.append(li);

  timer.lapTime.push(timer.deltaTime);
  li.textContent =  getFormattedTime(timer.deltaTime);
  console.log(timer.lapTime);
}

