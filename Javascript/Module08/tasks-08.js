'use strict';
/* 01  СДЕЛАТЬ ЕЩЕ РАЗ
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

//===========================================================================
// function Account(name, email, friend) {
//   this.login = name;
//   this.email = email;
//   this.friendsCount = friend;
// };
// Account.prototype.getAccountInfo = function(){
// console.log(`Your name is ${this.login}, your email is ${this.emal} and your have ${this.friendsCount}`);
// }

// const constructor = new Account('Petya', 'Petya-dog@gmail.com', 2);
// console.log(constructor);

//===========================================================================
/* 02
  Напишите ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в поле value.
  
  Добавьте классу следующие методы:
  
    - getValue() - возвращает текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/

// class StringBuilder {
//   constructor(string){
//     this.value = string;
//   }
//   getValue() {
//    return this.value;
//   }
//   append(str) {
//     this.value = this.value + str;
//   }
//   prepend(str) {
//     this.value = str + this.value;
//   }
//   pad(str) {
//     this.value = str + this.value + str;
//   }
// }




// const builder = new StringBuilder('.');

// builder.append('^'); 
// console.log(builder.getValue()); // '.^'

// builder.prepend('^'); 
// console.log(builder.getValue()); // '^.^'

// builder.pad('='); 
// console.log(builder.getValue()); // '=^.^='

//===========================================================================
/* 03
  Создайте класс Car с указанными полями и методами.
*/

// class Car {
//   constructor(maxSpeed) {
//     /*
//       Добавьте свойства:
//         - speed - для отслеживания текущей скорости, изначально 0.
        
//         - maxSpeed - для хранения максимальной скорости 
        
//         - running - для отслеживания заведен ли автомобиль, 
//           возможные значения true или false. Изначально false.
          
//         - distance - содержит общий киллометраж, изначально с 0
//     */
//    this.speed = 0;
//    this.maxSpeed = 200;
//    this.running = false;
//    this.distance = 0;
//   }

//   turnOn() {
//     // Добавьте код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//     this.running = true;
//   }

//   turnOff() {
//     // Добавьте код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//     this.running = false;
//   }
  
//   accelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//     if(spd <= this.maxSpeed) {
//       this.speed = spd;
//     }
//   }
  
//   decelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     if(spd <= this.maxSpeed && spd > 0){
//       this.speed = spd;
//     }
//   }

//   drive(hours) {
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//     if(this.running === true){
//       this.distance = hours * this.speed;
//     }
//   }
// }

// const test = new Car();
// test.turnOn();
// test.decelerate(150);
// test.drive(4);
// console.log(test);


// ДОДЕЛАТЬ
//===========================================================================
/* 04
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/
//===========================================================================
/* 05
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущее значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

// class Car {
//   constructor(value) {
//     // ... код
//     this._value = value;
//   }
//   // ... код
// }
//===========================================================================

