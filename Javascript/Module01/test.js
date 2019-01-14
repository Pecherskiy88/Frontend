'use strict';

// let px = '10px';
// let promNan = prompt('Введи количество тарелок');
// console.log(Number(px));
// console.log(Number.parseInt(promNan));

// let px = '10px';
// let promNan = prompt('Введи количество тарелок');
// console.log(Number(px));
// console.log(Number.parseFloat(promNan));


// let promNan = Number(prompt('Введи количество тарелок'));
// console.log(Number.isNaN(promNan));
// console.log(Number.isInteger(promNan));

// SLACK

// 1) Створіть змінну num і надайте їй значення 3. Виведіть значення цієї змінної на екран за допомогою методу alert

// let num = 3;
// alert(num);


// 2) Створіть змінні a = 10 і b = 2. Виведіть на екран їх суму, різницю, добуток і частку (результат ділення)

// const a = 10;
// const b = 2;
//  let c = a / b;
//  alert(c);



// 3) Створіть змінні c = 15 і d = 2. Підсумуйте їх, а результат надайте змінної result. Виведіть на екран значення змінної result

// const c = 10;
// const d = 2;
// let result;
// result = c / d;
// alert(result);


// 4) Створіть змінні a = 10, b = 2 і c = 5. Виведіть на екран їх суму.

// const a = 10;
// const b = 2;
// const c = 5;
// let result = a + b + c;
// console.log(result);


// 5)  Створіть змінні a = 17 і b = 10. Відніміть від a змінну b і результат надайте зміннії c. Потім створіть змінну d, надайте їй значення 7. Складіть змінні c і d, а результат запишіть в змінну result. Виведіть на екран значення змінної result.

// const a = 17;
// const b = 10;
// let c = a - b;
// const d = 7;
// let result = c + d;
// alert(result);


// 6) Запитайте ім'я користувача за допомогою методи prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я %значення що отримали з prompt%'

//const name = prompt('введите ваше имя');
//alert('Ваше имя:' + name);


// 7) Запитайте у користувача число. Виведіть за допомогою alert квадрат цього числа.

// let n = prompt('Введите число');
// n = Math.pow(n, 2);
// alert(n);


// 8) Напишіть скрипт, який рахує кількість секунд в годині, в добі, в місяці і виведіть ці значення в консоль

// const s = 1;
// const m = s * 60;
// const h = m * 60;
// let resultH = h / s;
// console.log(resultH);
// console.log(resultH * 24);
// console.log(resultH * 24 * 30);


// 9) Створіть три змінні - година, хвилина, секунда. З їх допомогою виведіть поточний час в форматі 'година: хвилина: секунда'.

// let h = 13;
// let m = 40;
// let s = 55;
// let time = h + '\/' + m + '\/' + s;
// alert(time);



// 10) Створіть змінну, надайте їй число. Зведіть це число в квадрат. Виведіть його на екран

// const a = 10;
// let result = Math.pow(a, 2);
// alert(result);


// 11) Переробіть цей код так, щоб в ньому використовувалися операції + =, - =, * =, / =. Кількість рядків коду при цьому не повинно змінитися.

// num+=7;
// num-=18;
// num/=15;

// 12) Переробіть цей код так, щоб в ньому використовувалися операції ++ і --. Кількість рядків коду при цьому не повинно змінитися.

// let num;
// num=num++;
// num=num--;
// alert(num);


//13)  Створіть змінну str і надайте їй значення 'Hello World'. Виведіть значення цієї змінної на екран

// const str = 'Hello Word';
// alert(str);


// 14) Створіть змінні str1 = 'Hello,' і str2 = 'World!'. За допомогою цих змінних і операції додавання рядків виведіть на екран фразу 'Hello World'.

// const str1 = "Hello";
// const str2 = "Word";
// console.log(`${str1} ${str2}`);


// 15) Створіть змінну name і надайте їй ваше ім'я. Створіть змінну age і надайте їй ваш вік. Виведіть на екран 'Привіт, я  % Ім'я%!'Мені% Вік% років!'.

// const name = 'Artyom';
// const age = '30';
// console.log(`Привет я ${name} мне ${age}`);



// 18) Дана рядок 'js'. Зробіть з неї рядок 'JS'.

// let str = 'js';
// str = str.toUpperCase();
// console.log(str);

// 19) Дана рядок 'JS'. Зробіть з неї рядок 'js'
// let str = "JS";
// str = str.toLowerCase();
// console.log(str);


// 20) Дана рядок 'я вчу javascript!'. Знайдіть кількість символів в цьому рядку.

// const str = 'я учу js';
// console.log(str.length);




// SlACK

// 1) Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'

// let a = prompt('Введите число', '10');
// a = Number(a);
// if (a===10){
//     alert('верно')}
//     else {alert('не верно')};
    // второй вариант тернарный оператор
// a===10 ? alert('верно') : alert('неверно');


// 2) В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

// let min =  Number(prompt('Please enter the number from 0 to 59'));
// let message;
// if (min >= 0 && min <= 15){
//     message = 'Quatter 1'
// } else if (min >=16 && min <=30){
//     message = 'Quatter 2'
// } else if (min >= 31 && min <=45){
//     message = 'Quatter 3'
// } else if (min >=46 && min <=60){
//     message = "Quatter 4"
// }
// alert(message);


// 3)Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = Number(prompt('введите число:'));
// let message = "неверно";
// if (a===0){
//     message = "верно"
// }
// alert(message);
    //второй вариант тернарный оператор
// a === 0 ? message = 'Верно' : message;
// alert(message);


// 4) Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = Number(prompt('введите число'));
// let message = 'верно';
// if (a > 0 || a < 0){  
//     message;
// }
// else{
//     message = 'неверно';
// }
// alert(message);

    //второй вариант тернарный оператор
//     a === 0 ? message = 'не верно' : message;
// alert(message);



// 5)  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = Number(prompt('введите число'));
// let message = 'верно';
// if (a < 0){
//     message = 'верно';
// }
// else {
//     message = "не верно";
// }
// alert(message);
    //второй вариант тернарный оператор
// a < 0 ? message : message = 'не верно';
// alert(message);


// 6) Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = Number(prompt('введите число'));
// let message = 'верно';
// if(a => 0){
//     message;
// }
// else{
//     message = 'не верно';
// }
// alert(message);
    //второй вариант тернарный оператор
// a => 0 ? message : message = 'не верно';
// alert(message);


// 7)  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = Number(prompt("введи число"));
// let message = "верно";
// if(a <= 0){
//     message;
// }
// else{
//     message = "не верно";
// }
// alert(message);
     //второй вариант тернарный оператор
// a <= 0 ? message : message = 'не верно';
// alert(message);


// 8) Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. Показать решение.

// let a = Number(prompt('enter the number'));
// let message = 'right';
// if (a !== 0){
//     message;
// }
// else{
//     message = 'wrong';
// }
// alert(message);
     //второй вариант тернарный оператор
// a !== 0 ? message : message = 'wrong';
// alert(message);


// 9) Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

// let a = prompt("enter: " + "test");
// let message = 'right';
// if (a === 'test'){
//     message;
// }
// else{
//     message = 'wrong';
// }
// alert(message);
    //второй вариант тернарный оператор
// a === 'test' ? message : message = 'wrong';
// alert(message);


// 10) Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

// let a = 1;
// let message;
// if(a === 1){
//     message = 'right';
// }
// else{
//     message = 'wrong';
// }
// alert(message);


// 11) Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной

// let test = 'true';
// let message;
// test === 'true' ? message = 'right' : message = 'false';
// alert(message);


// 12) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2

// let a = Number(prompt('введите число'));
// let message;
// if (a > 0 && a < 5){
//     message = "Верно";
// }
// else{
//     message = "не верно";
// }
// alert(message);



/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/

















// ADVANCED - 7) Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром основания 4м.

// let h = '10m';
// let d = '4m';
// h = Number.parseInt(h);
// d = Number.parseInt(d);
// const r = d / 2;
// let s = Math.PI*(Math.pow(r, 2));
// console.log(s);
// let v = s * h;
// alert(v);

// advanced - 8)  У прямоугольного треугольника две стороны n и m. Найдите гипотенузу по теореме Пифагора (нужно использовать функцию Math.pow(число, степень)).
//y(в квадрате)= n(в квадрате) + m(в квадрате)

// let n = '10.4m';
// let m = '15m';
// n = Number.parseInt(n);
// m = Number.parseInt(m);
// let y = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
// alert(y);


/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/



/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

// let hours = 7;
// let minutes = 3;
// let seconds = 42;

// const time = `${hours}:${minutes}:${seconds}`;
// let hoursStr = string;
// let minutesStr = string;
// let secondsStr = string;

// if(hoursSrt)
// console.log('Time is: ', time);

// 30) Возведите 2 в 10 степень. Результат запишите в переменную st.
// let st = 2;
// let st = Math.pow(st, 10);

// alert(st);

// 31) Найдите квадратный корень из 245.

// let a = 245;
// a = Math.sqrt(a);

// alert(a);

// 32) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))

// let a = 379;
// a = Math.sqrt(a);
// a = a.toFixed(2);
// alert(a);

// 33) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны

// let a = 587;
// a = Math.sqrt(a);
// alert(Math.ceil(a, 0.5));

// 34) Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

// let a = 20;
// let b = "20";
// let message = 'Делится';

// if (a % b == 0){
//     message;
// }else{
//     message = 'Делится с остатком';
// }
// a % b ==0 ? message : message = 'Делится с остатком';
// alert(message);


// 35) Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// let a = 4;
// let b = -2;
// let c = 3;
// let d = 19;
// let e = -130;
// let f = 0;
// let g = 10;

// alert(Math.min(a, b, c, d, e, f, g));

// 35) Выведите на экран случайное целое число от 1 до 100.

// let n = Math.random()*100;

// alert(n);

// 36) Необходимо написать программу, где бы пользователю предлагалось ввести число на выбор: 1, 2 или 3, а программа должна сказать, какое число ввёл пользователь: 1, 2, или 3.

// const a = 1;
// const b = 2;
// const c = 3;

// let message = prompt(`'Ввведите число: ' ${a}, ${b} или ${c}`);

// if(message == a){
//     message = 'Вы ввели 1';
// }else if(message == b){
//     message = 'Вы ввели 2';
// }else if(message == c){
//     message = 'Вы введи 3';
// }else{
//     message = 'Ввод некорректный';
// }
// alert(message);

// 37) Необходимо написать программу, где бы пользователю предлагалось ввести число  1. Если пользователь ввёл число 1, программа должна вывести сообщение: "Вы ввели число 1". Если пользователь ввёл другое число, программа должна вывести такое сообщение: "Вы ввели число не равное 1"

// const a = 1;
// let message;

// message = prompt(`Choose number ${a}`);
// if(message == a){
//     message = 'You chose number 1';
// }else{
//     message = 'You chose not number 1';
// }
// alert(message);

// 38 ) Пользователь вводит число. Проверить число на четное или не четное и вывести в консоль результат проверки.

// let a =prompt('Введите число');
// let message;
// if(a % 2 == 0){
//     message = 'you chose evens';
// }else{
//     message = 'you chose odds';
// }
// alert(message);

// 41) Найдите суму всех товаров в корзине магазина без мелочи, с мелочью

// const a = Number(prompt('Почем хлеб?'));
// const b = Number(prompt('Сколько пивас?'));
// const c = Number(prompt('Сколько за рыбу?'));
// const d = Number(prompt('Мороженое'));

// console.log(Math.round(a + b + c + d));
// console.log(a + b + c + d);

// 42) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.


// let a = prompt('Введите число от 1 до 4');
// let result;
// switch(a){
//     case '1':
//     result = 'winter';
//     break;
//     case '2':
//     result = 'spring';
//     break;
//     case '3':
//     result = 'summer';
//     break;
//     case '4':
//     result = 'autumn';
//     break;
//     default:
//     result = 'Вы Петья';
// }
// console.log(result);


// 43) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = prompt('Выбери число от 1 до 5!!!');
// let message;
// if(a>0&&a<5){
//   message = 'Спасибо';
// }else{
//   message = 'Неверно';
// }

// console.log(message);



// 44)  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = Number(prompt('введите число'));
// let result;
// if(a === 0 || a === 2){
//     console.log(a+7);
// }else{
//     console.log(a / 10);
// }

// a === 0 || a === 2 ? console.log(a+7) : console.log(a / 10);


// 45)  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// let a = Number(prompt('Введите число'));
// let b = Number(prompt('Введите число'));
// let result;
// if(a<=1 && b >= 3){
//     result = a + b;
// }else{
//     result = a - b;
// }
// alert(result);

// a<=1 && b >= 3 ? result = a + b : result = a - b;
// alert(result);

// 46)  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = Number(prompt('enter number'));
// let b = Number(prompt('Enter number'));
// let result;
// if(a > 2 && a < 11 || b >= 6 && b<=14){
//     result = 'Good';
// }else{
//     result = 'Bad';
// }
// alert(result);

// 47) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = Number(prompt('Enter number'));
// let decade;
// if(day >= 1 && day <= 10){
//     alert(decade = 'First decade');
// }else if(day > 10 && day <=20){
//     alert(decade = 'Second decay');
// }else{
//     alert(decade = 'decade 3');
// }



// 48)  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).



// РЕПЕТА - ПРОВЕРКА ВАЛИДНОСТИ и Задачка (1:30:00) автомат кофе

// const SIZE_SMALL = 0;
// const SIZE_MEDIUM = 1;
// const SIZE_LARGE = 2;

// const PRICE_SMALL = 50;
// const PRICE_MEDIUM = 100;
// const PRICE_LARGE = 150;

// const userInput = prompt('0 - small, 1 - medium, 2 - large', 1);
// const coffeeSize = Number(userInput);

// const isValidInput = userInput !== null && !Number.isNaN(coffeeSize);

// if(isValidInput){
//     let haveCoffee;
//     let size;
//     let price;

//   switch(coffeeSize){
//     case SIZE_SMALL:
//       console.log('Маленький кофе');
//       haveCoffee = true;
//       size = 'small';
//       price = PRICE_SMALL;
//     break;

//     case SIZE_MEDIUM:
//       console.log('Средний кофе');
//       haveCoffee = true;
//       size = 'medium';
//       price = PRICE_MEDIUM;
//     break;

//     case SIZE_LARGE:
//       console.log('Большой кофе');
//       haveCoffee = true;
//       size = 'large';
//       price = PRICE_LARGE;
//     break;
//     default:
//     alert('Такого кофе нет');
//   }

//   if (haveCoffee) {
//     const userCash = Number(prompt(`Заказан ${size}, с тебя ${price}`));

//     if(userCash >= price) {
//       const change = userCash - price;
//       alert(`Вот ваш ${size} кофе! Сдача: ${change}`);
//     }else{
//       alert('А денег то не хватило!');
//     }
//   }


// }else{
//   alert('Невалидный ввод!!!')
// }








