'use strict';

// ЗАДАЧИ КОНСТРУКТОР

// #1
// *  
//   Напишите код, который бы  с помощью 
//   функции-конструкора User, позволял создавать 
//   объекты пользователя со следующим свойствами:
//     - name - строка (имя)
//     - isActive - буль (активен)
//     - age - число (возраст)
//     - friends - число (кол-во друзей)

//   Имя, активность, возраст и друзей, необходимо передать 
//   как аргументы при вызове конструктора.
  
//   Добавить метод getUserInfo(), которая, выводит строку:
//   `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

//   Создать несколько объектов пользователя User и с помощью 
//   функции getUserInfo вывести строку в консоль.
// */

// const User = function(name, active, age, friends){
//   this.name = name;
//   this.isActive = active;
//   this.age = age;
//   this.friends = friends;
//   this.getUserInfo = function(){
//    console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
//   };
// };


// const test = new User('Petya', true, 27, 10);
// console.log(test);
// const test2 = new User('Olga', false, 50, 0);
// console.log(test2);
// test.getUserInfo();


// ====================================================================


// #2

// /*  
//   Расставьте отсутствующие this в методах объекта store
// */

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);
    
//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);
    
//     this.managers.splice(idx, 1);
    
//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
    
//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

// ====================================================================

// #3

// /*  
//   Расставьте отсутствующие this в конструкторе объектов Account
// */

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;

//     console.log(this.password);
//   };

//   this.getAccountInfo = function() {
//     console.log(`
//       Login: ${this.login}, 
//       Pass: ${this.password}, 
//       Type: ${this.type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc"); // 'asdzxc'

// account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  

// ====================================================================

// Написать ф-ю конструктор Pizza который создает обэкты пиццы.
// Обект должен иметь такие поля:
// 1) Название пиццы // через параметр
// 2) Размер пиццы // чеерз параметр
// 3) набор начинок // масив
// 4) набор соусов // масив
// 5) метод totalPrice который возвращает цену пиццы // размер + начинки + соусы
// 6) метод totalCallories который возвращает суму калорий пиццы // размер + начинки + соусы
// 7) метод addToppings котрый принимает обект начинки и добавляет его а масив начинок если ее нету
// 8) метод addSouces котрый принимает обект соуса и добавляет его а масив соусов если его нету
// 9) метод deleteToppings который удаляет начинку из масива если она там есть
// 10) метод deleteSousess который удаляет соус из масива если он там есть
// Размеры,(sizes) начинки,(topings) соусы (souces) это обекты. 
// sies


// const BIG = {
// price: 80,
// callories: 150
// }
// const SMALL = {
// price: 50,
// callories: 100,
// }
// // topings
// const MEAT = {
// name: 'meat',
// price: 20,
// callories: 85
// }

// const CHEESE = {
// name: 'cheese',
// price: 15,
// callories: 50
// }

// const SALAT = {
// name: 'salat',
// price: 12,
// callories: 5
// }

// const corn = {
// name: 'corn',
// price: 10,
// callories: 5
// }
// // souces
// const SOUSE = {
// name: 'souce',
// price: 8,
// callories: 30
// }

// const mustard = {
// name: 'mustard',
// price: 13,
// callories:10
// }

// const ketchup = {
// name: 'ketchup',
// price: 8,
// callories: 7
// }

// function Pizza(names, size) {
//   this.name = names;
//   this.sizes = size;
//   this.topings = [];
//   this.sauces = [];
//   this.totalPrice = function() {
//     return this.sizes.price + this.topings.reduce((acc, elem) => acc + elem.price, 0) + this.sauces.reduce((acc, elem) => acc + elem.price, 0);
//   };
//   this.totalCallories = function() {
//     return this.sizes.callories + this.topings.reduce((acc, elem) => acc + elem.callories, 0) + this.sauces.reduce((acc, elem) => acc + elem.callories, 0);
    
//   }
//   this.addToppings = function(toping) {
//     if(!this.topings.includes(toping)){
//       this.topings.push(toping)
//     }
//   };
//   this.addSouces = function(sauce) {
//     if(!this.sauces.includes(sauce)) {
//       this.sauces.push(sauce)
//     }
//   };
//   this.deleteTopping = function(toping){
//     let idx = this.topings.indexOf(toping);
//       this.topings.splice(idx,1);
//   };
//   this.deleteSauces = function(sauce){
//     let idx = this.sauces.indexOf(sauce);
//       this.sauces.splice(idx,1);
//   };

// };

// // создвть 2 разных пицы большую и маленькую. Дл каждой из них добавить по одной начинке и соус. Потом вывести цену и калории.
// // Дальше добавить еще по одному соусу и 2 начинки.
// // Потом удалить одну начинку и вывести цену и калории новой пицы

// const order = new Pizza('Cheese', BIG);
// order.addToppings(MEAT);
// order.addToppings(CHEESE);
// order.addToppings(SALAT);

// order.addSouces(mustard);
// order.addSouces(ketchup);
// order.addSouces(SOUSE);

// order.deleteTopping(SALAT);
// order.deleteSauces(mustard);

// console.log(order);
// console.log(order.totalCallories());
// console.log(order.totalPrice());

// const newOrder = new Pizza('Taskana', SMALL);
// newOrder.addToppings(CHEESE);
// newOrder.addSouces(ketchup);

// console.log(newOrder);
// console.log(newOrder.totalCallories());
// console.log(newOrder.totalPrice());

// ====================================================================

// Написати калькулятор за допомогою ф-ї конструктора. Ця ф-я створює обєкт з  методами read(), sum(), mul(), addMethod(name, function);
// Метод read() запитує в користувача числа за допомогою prompt і запамятовує їх.
// Метод read() працює до тих пір поки користувач не натисне Cancel;
// Метод sum() виводить в консоль суму всіх чисел що ввели в процесі роботи метода read().
// Метод console.log(calculator.sum()) // 15() виводить в консоль добуток всіх чисел.
// Метод addMethod(name, function) вчить калькулятор нової операції. 
// параметр name - назва нового метода
// параметр function - код нового метода.
// За допомогою метода addMethod(name, function) додати в калькулятор новий функціонад який буде знаходити різницю всіх введених цифр які отримали при використанні метода read();

// const funct = function(){
//   return this.arr.reduce((acc, elem) => acc - elem);
// };



// function Calculator () {
//   this.arr = [];

//   let userInput;
//   this.read = function(){
//     while(userInput !== null){
//       userInput = prompt('Input number');
//       if(userInput === null){
//         break;
//       }
//       if(userInput === ''){
//         continue;
//       }
//       this.arr.push(Number(userInput));
   
//     }
//     return this.arr
//   };

//   this.sum = function(){
//     return this.arr.reduce((acc, elem) => acc + elem);
//   };
  
//   this.mul = function(){
//     return this.arr.reduce((acc, elem) => acc * elem);
//   };

//   this.addMethod = function(name, funct) {
//     return this[name] = funct;
//   }
// };



// let calculator = new Calculator();

// console.log(calculator.read()); // вводимо 5 цифр (1,2,3,4,5) після цього натискаємо Cancel і метод read() зупиняє роботу



// console.log(calculator.sum()) // 15

// console.log(calculator.mul()) // 120

// calculator.addMethod('minus', funct) // додається метод на віднімання

// console.log(calculator.minus()) // -13



// ====================================================================
