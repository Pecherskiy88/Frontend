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
const btnSub = document.querySelector('button[data-action = "sub"]');

const btnAdd = document.querySelector('button[data-action = "add"]');

let result = document.querySelector('span');


btnSub.addEventListener('click', fnResult);
btnAdd.addEventListener('click', fnResult);
let sum = 0;

function fnResult(e){
  if(e.target === btnAdd){
    sum += 1;

  }else if(e.target === btnSub){
    sum -= 1;
  }
  return result.textContent = sum;

};

//==========Переделать на класс===========




















//===========================03=================================



