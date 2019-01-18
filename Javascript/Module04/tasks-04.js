'use strict';
//========================================================
/*  01
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = 'happy';

// user.hobby = 'Javascript';

// delete user.premium;

// for(let key in user){
//   // console.log(`${key} : ${user[key]}`);
// }

// const arr = Object.keys(user);

// for(let key of arr){
//   // console.log(key, user[key]);
// }

// const newArr = Object.entries(user);
// for(let mas of newArr){
//  mas = mas.join(':');
//   // console.log(mas);
// }

//========================================================
/* 02
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// }

// let arr = Object.values(tasksCompleted);
// let max = Math.max(...arr);

// for(let keys in tasksCompleted){
//   if (tasksCompleted[keys]===max){
//     console.log(keys);
//   }
// }

//========================================================
/*  03
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// const countProps = function(obj) {
//   let arrValue = Object.values(obj);
//   return arrValue.length;
// }

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

//========================================================

/*  04
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// const isObjectEmpty = obj => Object.keys(obj).length === 0;
// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false

//========================================================
/*  05
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/
// const countTotalSalary = function(salaries) {
//   const arr = Object.values(salaries);
//   let summ = 0;
//   for(let item of arr) {
//     summ += item;
//   }
//   return summ
// };

// // Вызовы функции для проверки
// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330


//========================================================

/*  06
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/
// const getAllPropValues = function(arr, prop){
//   let newArr = [];

//   for(let item of arr){
//     if(item.hasOwnProperty(prop)){
//       newArr.push(item[prop])
//     }
//   }
//   return newArr
// }

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================

