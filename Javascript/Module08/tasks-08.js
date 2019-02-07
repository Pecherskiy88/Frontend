'use strict'
/*01
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// const btn = document.querySelector('.button');
// btn.addEventListener('click', fnCount);
// let num = 0;

// function fnCount(e){
//     num++;
//     btn.textContent = num;
// };
//===========================02=================================
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
  
*/
// let inputs = document.querySelectorAll('input');

// const btn = document.querySelector('button');
// btn.addEventListener('click', fnClick);


// let result = document.querySelector('.result');

// function fnClick(){
//   let sum = 0;
//   for(let item of inputs){
//   sum += Number.parseInt(item.value)
  
//   }
// return result.textContent = sum 
// };

//===========================03=================================
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/
// const btnSub = document.querySelector('button[data-action = "sub"]');

// const btnAdd = document.querySelector('button[data-action = "add"]');

// let result = document.querySelector('span');



//=====обычный метод=========
// let sum = 0;

// function fnResult(e){
//   if(e.target === btnAdd){
//     sum += 1;

//   }else if(e.target === btnSub){
//     sum -= 1;
//   }
//   return result.textContent = sum;

// };



//==========Переделать на класс===========

// function update (value) {
//   result.textContent = value;
// }

// class Counter{
//   constructor(onChange) {
//     this.value = 0;
//     this.onChange = onChange;
//     onChange(this.value);
//     this.inc = this.inc.bind(this);
//     this.dec = this.dec.bind(this);
//   }

//   inc() {
//     this.value++;
//     this.onChange(this.value)
//   }

//   dec() {
//     this.value--
//     this.onChange(this.value)

//   }
// }

// let counter =  new Counter(update);


// btnSub.addEventListener('click', counter.dec);
// btnAdd.addEventListener('click', counter.inc);


//===========================04=================================
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// const form = document.querySelector('.question-form');
// let input = document.querySelectorAll('input');
// let result = document.querySelector('.result');
// input = Array.from(input);

// form.addEventListener('submit', fnRead);

// function fnRead(e){
//   e.preventDefault();
//   let find = input.find(el => el.checked);  
//   find = find.value;
//   result.textContent = `Result: ${find}`;
// }
//===========================05=================================
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// const ul = document.querySelector('.images');
// ul.addEventListener('click', fnClick);

// function fnClick(e) {
//   alert(`${e.target.src}`)

// }
//===========================06=================================
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// const ul = document.querySelector('.list');

// ul.addEventListener('click', fnDel);

// function fnDel(e){
// if(e.target.dataset.action==='delete'){
//   e.target.closest('li').remove();
// }
// }
//===========================07=================================
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
// const div = document.querySelector('.input-list');


// div.addEventListener('focusout', fnInput);

// function fnInput(e){
//   console.log(e.target.value.length);
  
//   if(e.target.dataset.length <= e.target.value.length){
//     e.target.classList.add('valid')
    
//   }else{
//     e.target.classList.add('invalid')
//   }
// }

//===========================08=================================
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
// const message = document.querySelector('.message');
// const input = document.querySelector('.input');
// const repeat = document.querySelector('.input-value');
// console.log(repeat);

// input.addEventListener('focusin', fnWrite);
// input.addEventListener('focusout', fnDel);

// function fnWrite() {
//    message.textContent = "Input is in focus!";
  
// }
// function fnDel(){
//   message.textContent = '';
//   repeat.textContent = `Current input value: ${input.value}`;
//   input.value = null;
// }
//===========================09=================================
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// const BtnOpen = document.querySelector('.btn');
// const div = document.querySelector('.js-modal-backdrop');
// const BtnClose = document.querySelector('.close-btn');

// BtnOpen.addEventListener('click', fnOpenModal);

// div.addEventListener('click', fnCloseModal);

// function fnOpenModal(){
//   div.classList.remove('modal-hidden');
// }
// function fnCloseModal(e) {
//   if(e.target === div || e.target === BtnClose){
//     div.classList.add('modal-hidden');
//   }
// }

//===========================10=================================
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const ul = document.querySelector('.menu');
const li = [...document.querySelectorAll('.menu-item')];
ul.firstElementChild.classList.add('active');
ul.addEventListener('click', fnActive);

function fnActive(e) {
 li.forEach(el => el.classList.remove('active'));

 e.target.closest('li').classList.add('active')
 
}









