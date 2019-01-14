'use strict';

/* 01
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(); // 4

// console.log(users[]); // Poly
// console.log(users[]); // Chelsey
// console.log(users[]); // Mango
// console.log(users[]); // Ajax


//Решение
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length);

// console.log(users[1]);
// console.log(users[3]);
// console.log(users[0]);
// console.log(users[2]);

//================================================



/* 02
Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить из конца массив последний элемент
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива любое имя
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// // Добавить в конец массива два любых имени за одну операцию
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]


//Решение 1) через shift/unshift; pop/push

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// users.shift();
// console.log(users);

// users.pop();
// console.log(users);

// users.unshift('Milana');
// console.log(users);

// users.push('Nikita, Sergey');
// console.log(users);


//Решение 2) через slice(только скопировать в новую переменную)затем shift and push

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// console.log(users);

// let fix = users.slice(1);
// console.log(fix);

// fix = fix.slice(0,2);
// console.log(fix);

// fix.unshift('Milana');
// console.log(fix);

// fix.push('Pavel', 'Artyom');
// console.log(fix);


//Решение 3) через splice

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// console.log(users);

// users.splice(0,1);
// console.log(users);

// users.splice(2,1);
// console.log(users);

// users.splice(0,0,'Milana');
// console.log(users);

// users.splice(3,0, 'Pavel', 'Valera');
// console.log(users);



//==================================================================


/* 03 через for of
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string = prompt('Введи строку: ');
// let arr = string.split(' ');


// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr
// for(const idx of arr){
//   console.log(arr.indexOf(idx));
// }

// // Используя цикл, вывести в консоль все элементы массива arr
// for(const elem of arr){
// console.log(elem);
// }
// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for(const idx of arr){
//   const mainIdx = arr.indexOf(idx);
//   const mainEl = idx;
//   console.log(`Под индексом: ${mainIdx} - элемент массива: ${mainEl}`);
// }


  
// =========

//  второй вариант через for

// let string = prompt('Введи строку: ');
// let arr = string.split(' ');


// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr
// for(let i = 0; i < arr.length; i++){
//   console.log(i);
// }
// // Используя цикл, вывести в консоль все элементы массива arr
// for(let i = 0; i < arr.length; i++){
//    console.log(arr[i]);
   
// }
// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for(let i = 0; i < arr.length; i++){
//   console.log('Под индексом: ', i, 'Элемент: ', arr[i]);
  
// }


// ===========================================================================

/* 04
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let num = 0;
// do{
//   num = Number(prompt('Введи число больше 100: '));
  
// }while(num < 100 || num === 100);
// console.log(num);


// ===========================================================================
/* 05
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

// let num = 'Fizz';

// for(let i = 1; i <= max;  i++){
  
//   if(i % 3 ===0 && i % 5 === 0){
//     console.log(`${i} - FizzBuzz`);
    
//   }else if(i % 3 === 0){
//     console.log(`${i} - Fizz`);

//   }else if(i % 5 === 0){
//     console.log(`${i} - Buzz`);

//   }else{
//     console.log(i);
    
//   }   
    
// }

// ===========================================================================

/* 06
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// через for ========

// for( let i = 0; i < numbers.length; i++){
//     if( numbers[i] > num ){
//       newArray.push(numbers[i]);
//     }
// }
// console.log(numbers);

// console.log(newArray);

// через for of ========

// for(const biggest of numbers){
//   if(biggest > num){
//     newArray.push(biggest);
//   } 
// }
// console.log(numbers);
// console.log(newArray);

// ===========================================================================

/* 07
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// Через for =======
// const string = "May the force be with you";
// let longestWord = "";
// const arr = string.split(' ');
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
   
//     if(longestWord.length < arr[i].length){
//       longestWord = arr[i];
//     } 
// }
// console.log(longestWord); // 'force'

// Через for of ======
// const string = "May the force be with you";
// let longestWord = "";

// const arr = string.split(' ');
//   console.log(arr);
  
// for(let search of arr){
//     if(longestWord.length < search.length){
//       longestWord = search;
//     } 
// }

// console.log(longestWord);



// ===========================================================================
/* 08
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// let arr = [];
// let input;
// let summ = 0;
// do{
//   input = prompt('Вводи число: ');
//   if(input === null || input === '' || isNaN(input) ){   // Почему не работает просто input === false тогда break??
//     break;
//   }
//   arr.push(Number(input));
  
// }while(true);

// for(let i = 0; i < arr.length; i++){
//    summ = summ + arr[i];
// }

// console.log(arr);

// console.log(`Сумма всех значений массива: ${summ}`);

// ===========================================================================


/* 09
  ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41];
// const min = 12;
// const max = 41;

// const userInput = Number(prompt(`Введи число от ${min} до ${max}`));
// const isValid = userInput !==null && !Number.isNaN(userInput); //Null не срабатывает на cancel


// if(isValid){
//   for(let i = 0; i < numbers.length; i++){
//     if(userInput === numbers[i]){
//       alert('Поздравляем, Вы угадали!');
//       break;
//     }else{
//       alert('Сожалеем, Вы не угадали!')
//       break;
//     }
//   }

// }else{
//   alert('Некорректный ввод');
// }








// ===========================================================================
 