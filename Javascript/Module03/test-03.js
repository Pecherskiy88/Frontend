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

// function addTwoNumbers() { // function declaration, можем вызвать перед созданием
//     console.log((10+11));
   
// };
// addTwoNumbers();


// let addThreeNumbers = function () { // funcxtion expresion, вызов только после создания.
//     console.log(10+12+22);
// };

// addThreeNumbers();
// addTwoNumbers();
//==============================

// function addTwoMumbers() {
    
//    return 5 + 6;
// };
// console.log(addTwoMumbers());
 

//==============================
// function sumOfArray () {
//     let arr = [];
//     let total = 0;
//     for (let i = 0; i < 5; i++){
//         let number = prompt();
//         arr.push(Number(number));
//     }
//     for (let el of arr) {
//         total += el;
//     }
//     return total;
// };
// console.log(sumOfArray());
 
//==============================
// const convert = function(year) {
//     let centure = Math.floor( year / 100) +1;
//     return centure;
// };
// console.log(convert(2000));
// console.log(convert(1988));
// console.log(convert(1630));

//==============================
// const leapYear = function(year) {
//     // let message = '';
//     // if(year % 4 === 0) {
//     //     message = 'Высокосный!';
//     // }else{
//     //     message = 'Обычный';
//     // }

//     //=== тернарник

//    return year % 4 ===0 ? 'Yes' : 'no';
// };

// console.log(leapYear(2018));
// console.log(leapYear(1600));
// console.log(leapYear(2000));
// console.log(leapYear(1604));


//==============================!

// Написати ф-ю convertToRem(px) яка приймає строку і повертає значення в rem
// const convertToRem = function(px) {
//     let num = Number.parseInt(px);
//     let rem = num / 16;
//     return rem + 'rem';
// }

// console.log(convertToRem('16px')); // 1rem
// console.log(convertToRem('24px')); // 1,5rem
// console.log(convertToRem('0px')); // 0rem



// =============================== #3 ===================================!


// Написати ф-ю convertToPrc(container, block) яка приймає розміри контейнера та розміри блока в форматі строк і повертає значення блока в %. Якщо результат дробовий округлювати до двох знаків після коми.

// function convertToPrc(container, block) {
//     let cont = Number.parseFloat(container);
//     let blc = Number.parseFloat(block);
//     let prc = blc / cont * 100;
    
//     if(prc % 2 !==0){
//         return prc.toFixed(2) + '%';
//     }
    
//     return prc + '%';
// }
// console.log(convertToPrc('1000px', '100px')); //10%
// console.log(convertToPrc('950px', '150px')); // 15.79%




// =============================== #4 ===================================!

// Написати ф-ю pxConvertor(from, to, block, container)  яка приймає параметри:
//  from - одиниці з яких конвертувати, 
//  to - одиниці в які конвертувати, 
//  block - розміри блока для конвертації, 
//  container - розмір контейнера. Всі параметри це строки. Ф-я повертає результат або % або rem.

//  
//    console.log(pxConvertor('px', 'rem', 16)); // 1rem
//    console.log(pxConvertor('px', 'rem', 24)); // 1.5rem
//    console.log(pxConvertor('px','%', '100px', '1000px')); //10%
//    console.log(pxConvertor('px', '%', '150px', '950px')); // 15.79%


// =============================== #5 ===================================!


// Написати ф-ю convertFromKmToMetric(km). Ця функція приймає відстань в кілометрах і перетворює її в м, дм, см. Ф-я повертає масив конвертованих даних.

// const convertFromKm = function(km) {
//     let sm = km * 100000;
//     let dm = km * 10000;
//     let m = km * 1000;
//     return [`cm: ${sm}, dm: ${dm}, m: ${m}`]

// };

// console.log(convertFromKm(1)); // [cm: 100000, dm: 10000, m: 1000]
// console.log(convertFromKm(1.5)); // [cm: 150000, dm: 15000, m: 1500]
// console.log(convertFromKm(3)); // [cm: 300000, dm: 30000, m: 3000]


// =============================== #6 ===================================


//Репета
// const printMessage = function (callback) {
//     const message = callback();
//     console.log(message);
    
// };

// const getMessage = function () {
//     return 'Welcome to the jungle';
// }
// printMessage(getMessage);

//============================================
// РЕПЕТА, ф-ии обратного Вызова


// const showSuccess = () => console.log('SUCCESS');
// const showError = () => console.log('ERRORSUCCESS');
// const showGoodbye = () =>  console.log('GOODBYE');
   
// const getNumber = function(onCancel, onError, onSuccess) {
//     const input = prompt('Давай число от 1 до 5');

//     if(input === null){
//         onCancel();
//         return;
//     }

//     if(input < 1 || input > 5){
//         onError();
//         return;
//     }

//     onSuccess();
    
// };
// getNumber(showGoodbye, showError, showSuccess);


//============================================
//  #1
// Напишите ф-ю которая принимает число и возвращает его зеркальную копию.
// const reverseNumber = function(num) {
    
//    let arr = num.toString();
//    arr = arr.split('');
//    arr.reverse();
//    arr = Number(arr.join(''));
//    return arr;
// };


// console.log(reverseNumber(12)) // 21
// console.log(reverseNumber(567)) // 765
// console.log(reverseNumber(1004)) // 4001

//============================================

// #2
// Напишите ф-ю которая принемает строку и делает из нее строку в стиле capitalize.
// const capitalize = function(str){
//   let arr = str.split(' ');
//     let newArr = [];
 
//   for(let i = 0, max = arr.length; i < max; i++) {
//       newArr.push(arr[i][0].toUpperCase() + arr[i].substr(1));
//   }
  
//   return newArr
  
// }

// console.log(capitalize('write javaScript function')) //Write JavaScript Function
// console.log(capitalize('the quick brown fox')) //The Quick Brown Fox
// console.log(capitalize('go to the editor')) //Go To The Editor
//============================================

// #3
// Напишите ф-ю которая принемает строку и возвращает количество гласных букв в строке
// let countOfVowels = function(str){
//     let newArr = str.toLowerCase().split('');
    
//     let arrGl = ['a', 'e', 'i','o','u'];
//     let summ = '';
//     for(let item of newArr){
//         for(let el of arrGl){
//             if(item === el){
//                 summ = summ+item;
//             }
//         }
//     }
//     return(summ.length)    
// }


// console.log(countOfVowels('The quick brown fox')) // 5
// console.log(countOfVowels('Example string')) // 4 
// console.log(countOfVowels('Go to the editor')) // 6 


//============================================

//#4
// Напишите ф-ю которая принимает строку и букву и возвращает количество этой буквы в строке
// const countLetter = function(str, value) {
//     let summ = '';
//     const arr = str.split('');
//     for(let item of arr){
//         if(item.includes(value)){
//             summ = summ + item;
//         }
//     }
//     return summ.length
// };

// console.log(countLetter('w3school.com', 'o')) // 3
//============================================
// #5 Напишите ф-ю которая переводит rgb цвет в hex цвет

// const convertColor = function(str){
//     let text = str.toString();
//     text = text.substr(4);
//     text = text.slice(0, -1);
//     text = text.split(',');
//     let result = [];
//     for (let item of text){
//        result.push(Number(item).toString(16));
//     }
    
//     return "#" + result.join('');
// }



// // Здесь поможет Number() i toString() 
// console.log(convertColor('rgb(255,255,255)')) // #ffffff
// console.log(convertColor('rgb(0,0,0)')) //#000000
// console.log(convertColor('rgb(66,134,244)')) //#4286f4
//============================================

// #6 
// Дан непустой массив целых чисел (X). В этой задаче вам нужно вернуть массив, состоящий только из неуникальных элементов данного массива. Для этого необходимо удалить все уникальные элементы (которые присутствуют в данном массиве только один раз). Для решения этой задачи не меняйте оригинальный порядок элементов. Пример: [1, 2, 3, 1, 3], где 1 и 3 неуникальные элементы и результат будет [1, 3, 1, 3].
// const nonUniqueElements = function(arr) {
//     let newArr = [];
    
//   for(let item of arr){
//       let count = 0;
//         for(let el of arr){
//             if(item === el){
//                 count += 1;
//             }
//         }
//         if(count > 1 ){
//             newArr.push(item);
//         }
//   }
    
    
// return newArr
// }



// console.log(nonUniqueElements([1, 2, 3, 1, 3]));// [1, 3, 1, 3]
// console.log(nonUniqueElements([1, 2, 3, 4, 5]));// []
// console.log(nonUniqueElements([5, 5, 5, 5, 5]));// [5, 5, 5, 5, 5]
// console.log(nonUniqueElements([10, 9, 10, 10, 9, 8]));// [10, 9, 10, 10, 9]



//============================================
// Написати ф-ю cipher яка приймає зашифровану строку і повертає розшифровану. Перетворення строки відбувається за алгоритмом ROT13 який заміняє поточну літеру 13 буквою в абетці після неї. Наприклад A => N; K => X; R => E; U => H;
// Перші 13 літер алфавіту зміщуються вправо. Другі 13 літер зміщується вліво. Використати методи строки: 
// fromCharCode()//  =   букви в юнікод
// charCodeAt()//      = юнікод в букви
// const cipher = function(str) {
//     let alph = 'abcdefghijklmnopqrstuvwxyz';
//     let abc = alph.split('');
//     console.log(abc.length);
//     for(let item of abc.length){
        
//     }
    
    



// }



// console.log(cipher("SERR CVMMN"))  // FREE PIZZA;
// console.log(cipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT"))  // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG;
//============================================
// Пиздеч!!!
// Написати ф - ю яка знаходить в масиві число яке найблище знаходиться до нуля і повертає його.Якщо таких чисел 2(тобто 1 і - 1) тоді повертати додатнє
// function closestToZero (nums) {
//     let posNum = [];
//     for(let el of nums){
//         posNum.push(Math.abs(el));
//     }
//     let min = Math.min(...posNum);
    
//     return !nums.includes(min) ? min * -1 : min
    
// };

// console.log(closestToZero([-5, -3, 1, 2, 3, 5])) // 1
// console.log(closestToZero([-2, 3, 5, 10])) // -2
// console.log(closestToZero([-7, -5, -3, 3, 5, 8])) //3
//=============ВТОРОЙ Вариант
// Написати ф - ю яка знаходить в масиві число яке найблище знаходиться до нуля і повертає його.Якщо таких чисел 2(тобто 1 і - 1) тоді повертати додатнє
// function closestToZero (nums)
// function closestToZero (nums) {
//     let posNum = [];
//     let minNum = Infinity;
//     for (let el of nums){
//       posNum.push(Math.abs(el));
//     }
//     for(let item of posNum){
//       if(minNum > item) {
//         minNum = item;
//       }
//     }
//     return !nums.includes(minNum) ? minNum * -1 : minNum;
//   };
// console.log(closestToZero([-5, -3, 1, 2, 3, 5])) // 1
// console.log(closestToZero([-2, 3, 5, 10])) // -2
// console.log(closestToZero([-7, -5, -3, 3, 5, 8])) //3
//============================================

//Р Е К У Р С И Я   Р Е П Е Т А

// const numbers = [1, [2, [3]], [4, [5, 6]]];

// const flatten = function self(arr) {
//     let flatArr = [];

//     for (let elem of arr) {
//         const isArray = Array.isArray(elem);

//         if (isArray) {
//             flatArr = flatArr.concat(self(elem));
//         } else {
//             flatArr.push(elem)
//         }
//     }
//     return flatArr;
// }

// const flat = flatten(numbers);
// console.log(flat);



//============================================

 
//============================================








