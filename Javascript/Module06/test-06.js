'use strict';

// __proto__ = [[prototype]] // key in object (in browser, in documentation);
//prorotype // key in constructor fumction (спратана от пользователя), обратится
// console.log(ConsturctorFn.prorotype);



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

// function Pizza (name, size) {
//     this.name = name;
//     this.size = size;
//     this.toppings = [];
//     this.souces = [];
// };

// Pizza.prototype.addToppings = function (topping) {
//     if(!this.toppings.includes(topping)){
//         this.toppings.push(topping);
//     }
// };

// Pizza.prototype.deleteToppings = function(topping){
//     if(!this.toppings.includes(topping)){
//         return
//     }
//     this.toppings = this.toppings.filter(el => el !== topping);
// };
// Pizza.prototype.addSouce = function(souce) {
//     if(!this.souces.includes(souce)){
//         this.souces.push(souce)
//     }
// };
// Pizza.prototype.deleteSouce = function(souce) {
//     if(!this.souces.includes(souce)){
//         return
//     }
//     this.souces = this.souces.filter(el => el !== souce);
// };
// Pizza.prototype.totalPrice = function() {
//     let sum = this.size.price
//      + this.toppings.reduce((acc, elem) => acc + elem.price, 0)
//     + this.souces.reduce((acc,elem) => acc + elem.price,0);
//     return sum
// };
// Pizza.prototype.totalCalories = function() {
//     let sum = this.size.callories
//     + this.toppings.reduce((acc, elem) => acc + elem.callories,0)
//     + this.souces.reduce((acc, elem) => acc + elem.callories,0);
//     return sum
// };




// let order = new Pizza('margarita', BIG);
// order.addToppings(MEAT);
// order.addToppings(SALAT);
// order.deleteToppings(MEAT);

// order.addSouce(ketchup);
// order.addSouce(mustard);
// order.deleteSouce(mustard);
// console.log(order.totalPrice());
// console.log(order.totalCalories());



// console.log(order);


// // создвть 2 разных пицы большую и маленькую. Дл каждой из них добавить по одной начинке и соус. Потом вывести цену и калории.
// // Дальше добавить еще по одному соусу и 2 начинки.
// // Потом удалить одну начинку и вывести цену и калории новой пицы

//================================================================================================

// Написати калькулятор за допомогою ф-ї конструктора. Ця ф-я створює обєкт з  методами read(), sum(), mul(), addMethod(name, function);
// Метод read() запитує в користувача числа за допомогою prompt і запамятовує їх.
// Метод read() працює до тих пір поки користувач не натисне Cancel;
// Метод sum() виводить в консоль суму всіх чисел що ввели в процесі роботи метода read().
// Метод console.log(calculator.sum()) // 15() виводить в консоль добуток всіх чисел.
// Метод addMethod(name, function) вчить калькулятор нової операції. 
// параметр name - назва нового метода
// параметр function - код нового метода.
// За допомогою метода addMethod(name, function) додати в калькулятор новий функціонад який буде знаходити різницю всіх введених цифр які отримали при використанні метода read();

// function Calculator () {
//     this.data = [];
// };

// Calculator.prototype.read = function() {
//     let input;
//     while(input !== null ) {
//         input = prompt('Ввели число');
//         if(input === null){
//             break;
//         }
//         this.data.push(Number(input));
//     }
    
// };

// Calculator.prototype.sum = function() {
//     return this.data.reduce((acc,elem)=> acc + elem, 0);
// };
// Calculator.prototype.mul = function() {
//     return this.data.reduce((acc, elem) => acc * elem, 1);
// };

// Calculator.prototype.addMethod = function(name,code) {
//     Calculator.prototype[name] = code;
// };




// let calculator = new Calculator();
// calculator.read(); // вводимо 5 цифр (1,2,3,4,5) після цього натискаємо Cancel і метод read() зупиняє роботу
// console.log(calculator);



// console.log(calculator.sum()) // 15

// console.log(calculator.mul()) // 120


// function sub () {

//     return this.data.reduce((acc, elem) => acc - elem);
// };


// calculator.addMethod('minus', sub) // додається метод на віднімання

// console.log(calculator.minus()) // -13

// ====================================================================

// Написати конструктор обєкта Account який буде описувати рахунок користувача.
// Обєкт має мати такі унікальні ключі:
// 1) Імя юзера
// 2) id юзера
// 3) ключ balance
// 4) ключ credits // список кредитів
// 5) ключ deposits // список депозитів
// 6) ключ depositIncome // загальний прибуток від депозитів
// 7) ключ creditCosts // загальні затрати по кредитах
// 8) ключ charity // сума яку виділили на благодійність

// Також мають бути такі методи
// 1) countDepositsIncome // метод що приймає суму депозита і та збільшує поле depositIncome в задежності від типу і ставки і періоду депозиту.
// 2) openDeposit // метод що додає депозит в список deposits і запускає метод countDepositsIncome
// 3) countCreditCost  // метод що приймає суму кредиту і його тип та збільшує поле creditCosts
// 4) openCredit // метод що додає кредит в список credits і запускає метод countCreditCost
// 5) showIncome // метод що показує загальний дохід від депозитів
// 6) showCost // метод що показує загальні затрати на кредити
// 7) showProfit //метод що показує прибуток (різниця доходів і витрат)
// 8) getCash //метод що приймає число і зменьшує баланс юзера так як він знімає готівку з рахкнку
// 9) addition // метод що приймає число і збільшує баланс юзера (поповнення через термінал)
// 10) closeCredit // метод що закриває кредит в банку і видаляє його з поля credits та забирає суму з creditCosts
// 11) closeDeposit //  метод що закриває депозит в банку і видаляє його з поля deposits та забирає суму з depositIncome

// let a = '10%'
// let b = a.substr(0,2);
// console.log(b);


// function Account(name, id) {
//     this.userName = name;
//     this.idUser = id;
//     this.balance = 0;
//     this.credits = [];
//     this.deposits = [];
//     this.depositIncome = 0;
//     this.creditCosts = 0;
//     this.charity = 0;
// };

// Account.prototype.countDepositsIncome = function(depos){
//     if(depos.type === 'simple'){
//         this.depositIncome = this.depositIncome + (depos.amount * ((Number.parseFloat(depos.percent) /100 / 12)) * depos.period);
//     }else if(depos.type === 'compound') {
//         this.depositIncome = this.depositIncome + (depos.amount * Math.pow((1 + Number.parseFloat(depos.percent) / 100 /1), depos.period / 12) - depos.amount);
//         this.depositIncome = Math.floor(this.depositIncome);
//     }
// };

// Account.prototype.openDeposit = function(depos) {
//   this.deposits.push(depos);
//   this.countDepositsIncome(depos);    
// };

// Account.prototype.countCreditCost = function(cred) {

//     if(cred.type === 'simple') {
//         this.creditCosts = this.creditCosts + (((2 * cred.amount - (cred.amount * ((cred.period - 1) / cred.period))) / 2)*cred.period*(Number.parseFloat(cred.percent) / 100));
//     }
// };

// Account.prototype.openCredit = function(cred) {
//     this.credits.push(cred);
//     this.countCreditCost(cred);
// };



// // Зразок обєкта депозита
// const deposit = {
//     amount: 5000,
//     type: 'compound', // типи депозиту 'simple', 'compound'
//     percent: '6%',
//     period: 18 // період вказуємо в місяцях
// }

// // зразок обєкта кредиту
// const credit = {
//     amount: 500000,
//     type: 'simple', // типи кредиту 'annuity', 'simple'
//     percent: '5%',
//     period: 15 // період вказуємо в роках
// }


// // ДЛЯ ПРОВЕРКИ
// let user1 = new Account('Petro', 100);

// // user1.openDeposit({amount: 50000, type: 'simple', percent: '15%', period: 24})
// user1.openDeposit({amount: 20000, type: 'compound', percent: '20%', period: 12})

// // user1.openCredit({ammount: 500000 ,type: 'annuity', percent: '5%', period:10})
// user1.openCredit({amount:10000, type: 'simple', percent: '25%', period:3})


// console.log(user1);



// simple deposit formula https://www.rapidtables.com/calc/finance/simple-interest-calculation.html 

// compound deposit formula https://www.rapidtables.com/calc/finance/compound-interest-formula.html

// annuity credit formula
// Дивитися Приклад 4.
// https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC

// simple credit formula
// Дивитися Приклад 3.
// https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC


//=======================================================================