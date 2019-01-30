'use strict'


// let num1 = 0;
// let num2 = 0;
// let result = 0;
// let a = document.querySelector('#a');
// let b = document.querySelector('#b');
// let sum = document.querySelector('#sum');
// let minus = document.querySelector('#minus');
// let mult = document.querySelector('#mult');
// let divide = document.querySelector('#divide');
// let pow = document.querySelector('#pow');





// const startBtn = document.querySelector('.get-Value');
// startBtn.addEventListener('click', fnStart);

// function fnStart(){
//    const input1 = prompt('Введи первое число: ');
//    const input2 = prompt('Введи второй число: ');
//     num1 = Number(input1);
//     num2 = Number(input2);
//     a.textContent = num1;
//     b.textContent = num2;

// };


// const sumBtn = document.querySelector('.sum');
// sumBtn.addEventListener('click', fnSum);

// function fnSum() {
//     result = num1 + num2;
//     sum.textContent = result;
// }

// const minusBtn = document.querySelector('.minus');
// minusBtn.addEventListener('click', fnMinus);

// function fnMinus() {
//     result = num1 - num2;
//     minus.textContent = result;
// }

// const multBtn = document.querySelector('.mult');
// multBtn.addEventListener('click', fnMult);

// function fnMult() {
//     result = num1 * num2;
//     mult.textContent = result;
// }

// const divideBtn = document.querySelector('.divide');
// divideBtn.addEventListener('click', fnDivide);

// function fnDivide() {
//     result = num1 / num2;
//     divide.textContent = result;
// }

// const powBtn = document.querySelector('.pow');
// powBtn.addEventListener('click', fnPow);

// function fnPow() {
//     result = Math.pow(num1, num2);
//     pow.textContent = result;
// }

//====================Переписать на классы========================
//================пэшки=======


let a = document.querySelector('#a');
let b = document.querySelector('#b');
let sum = document.querySelector('#sum');
let minus = document.querySelector('#minus');
let mult = document.querySelector('#mult');
let divide = document.querySelector('#divide');
let pow = document.querySelector('#pow');

//=============Buttons=========
const startBtn = document.querySelector('.get-Value');
const sumBtn = document.querySelector('.sum');
const minusBtn = document.querySelector('.minus');
const multBtn = document.querySelector('.mult');
const divideBtn = document.querySelector('.divide');
const powBtn = document.querySelector('.pow');

class Calculator {
    constructor() {
         
         this.a = null;
         this.b = null;
         this.getValue = this.getValue.bind(this);
         this.sum = this.sum.bind(this);
         this.minus = this.minus.bind(this);
         this.mult = this.mult.bind(this);
         this.divide = this.divide.bind(this);
         this.pow = this.pow.bind(this);
        }

    getValue() {
         console.log(this);
         this.a = Number(prompt('Enter number'));
         this.b = Number(prompt('Enter number'));
         a.textContent = this.a;
         b.textContent = this.b;
    }

    sum() {
         console.log(this);
         sum.textContent = this.a + this.b;
    }
    minus() {
        minus.textContent = this.a - this.b;
    }
    mult() {
        mult.textContent = this.a * this.b;
    }
    divide() {
        divide.textContent = this.a / this.b;
    }
    pow() {
        pow.textContent = Math.pow(this.a, this.b);
    }

}

let machine = new Calculator();

startBtn.addEventListener('click',machine.getValue);
sumBtn.addEventListener('click', machine.sum);
minusBtn.addEventListener('click', machine.minus);
multBtn.addEventListener('click', machine.mult);
divideBtn.addEventListener('click', machine.divide);
powBtn.addEventListener('click', machine.pow);