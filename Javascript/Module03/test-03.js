'use strict';

// const add = function (a,b,c){
//     return a + b + c;
// };

// const result = add(1,2,3);
// console.log(result);
// console.log(add(5,10,15));




// function add (a,b,c){
//     return a + b + c
// }
// const result = add(5,6,7);
// console.log(result);




// add(1,2,3);
// print('text');

// function add (a,b,c){
//     return a + b + c;   
// }


// function print (str) {
//     console.log(str); 
// }




// const showTestDays = function(name = 'Пользователь', days = 30){
//     return `Имя - ${name}, использовано ${days} тестовых дня(ей)`;
// }
// console.log(showTestDays('Екатерина', 10));




// const sum = function(){
//     const max = arguments.length;
//     let total = 0;

//     for(let i = 0; i < max; i++){
//         total = total + arguments[i];
//     }
//     return total;
   
// }


// console.log(`sum = ${sum(1,2,3,4,5)}`);





// const multiply = function(x, y){  // фунциональное выражение
//     console.log('x: ', x);
//     console.log('y: ', y);
//     console.log('inside multiply fn'); 
    
//     const result = x * y;
//     return result;
// };

// console.log(multiply);


// const z = multiply(10,30);

// console.log(z);




// Пример от Репеты
// const findNumbers = function(arr, value){
//     const numbers = []
//     for(let item of arr){
//         if(item > value){
//             numbers.push(item);
//         }
//     }

//     return numbers
// };


// const arr1 = [12,5,46,78];
// const newArr1 = findNumbers(arr1, 15);
// console.log(newArr1);


// const arr2 = [17,15,146,278,890];
// const newArr2 = findNumbers(arr2, 50);
// console.log(newArr2);




// Обьявление функции
// console.log(multiply(2,3));

// function multiply(x, y){
    
//     const result = x * y;
//     return result;
// };




// const test = function(name = 'Milana', age = 30){
//     return `name - ${name}, age - ${age}`
// }
// console.log(test('Zeka', 15));






// const pow = function (base, exponent){
//     return Math.pow(base, exponent);
// };

// console.log(`2**10 = ${pow(2,10)}`);



// const summ = function(){
//     const max = arguments.length;
//     let total = 0;

//     for(let i = 0; i < max; i++){
//         total = total + arguments[i];
//     }
//     return total;
// }
// console.log(`summ = ${summ(1, 2, 3, 4, 5)}`);




// преобразовать в массив
// const summ = function(){
//     const args = Array.from(arguments);

//     return args;
// }
// console.log(summ(1,2,3,4,5));






// const multiply = function(a,b) {
//     return a * b;
// };

// const square = function(x) {
//     const result = multiply(x.x);
//     return result;
// };

// const printSquare = function (n){
//     const result = square(n);
//     console.log(result);
    
// };
// printSquare(4);



// const fnA = function() {
//     console.log('a');
    
// };
// const fnB = function() {
//     console.log('b');
    
// };
// const fnC = function() {
//     fnA();
//     fnB();
//     console.log('c');
    
// };

// fnC();



// const a = 10;
// const b = 10;

// const add = function() {
//     const a = 5;
//     return a + b;
// };

// console.log(add());





// Пример от Репеты:

// const findLargestNumber = function(arr){
//     let largestNumber = arr[0];
//     for(let i = 1, max = arr.length; i < max; i ++){
//         const elem = arr[i];
//         if(largestNumber < elem){
//             largestNumber = elem;
//         }
//     }

//     return largestNumber
// };

// const numbers = [2,6,34,4,7,12,56];
// const result = findLargestNumber(numbers);
// console.log(result);




// const transformArray = function(arr){
//     const newArr = [];

//     for (let item of arr) {
//         newArr.push(Number(item));
//     }
//     return newArr;
// };

// const getUserInput = function() {
//     const input = prompt('Введи числа через запятую');
//     if(input === null){
//         return;
//     }

//     const arr = input.split(',');
//     const transformedArr = transformArray(arr);
//     console.log(transformedArr);
    
//     return transformedArr;
// };


// const userInput = getUserInput();
// console.log(userInput);

// const num = findLargestNumber(userInput);
// console.log(num);

//==============================















