'use strict';

/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/



// const login = 'admin';
// const passUser = '123';

// const get = 'Отменено пользователем!';

// const incorrectLog = 'Доступ запрещен, не верный Логин!';
// const incorrectPass = 'Неверный пароль!';
// const correct = 'Добро пожаловать!';

// let log = prompt('Введите свой Логин:');
// if(log == null){
//     alert(get);
// }else if(log != login){
//     alert(incorrectLog);
// }else if(log === login){
//     let pass = prompt('Введите пароль: ');
//     if(pass == null){
//         alert(get);
//         console.log(get);
//     }else if(pass != passUser){
//         alert(incorrectPass);
//     }else if(pass == passUser){
//         alert(correct);
//     }
// }




/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

const sharm = 15;
const hurgada = 25;
const taba = 6;

let log = prompt('Введите необходимое количество мест: ');

// if(log == null){
//   alert('Очень жаль, приходите еще!');
// }else if(log != Number(log)){
//   alert('Ошибка ввода');
// }else if(log == Number(log)){
//   if(Number(log) <= sharm){
//     let booking = confirm('Есть место в группе отелей Sharm, забронировать место? ');
//     if(booking == true){
//       alert('Приятного путешествия в группе Sharm!');
//     }else if(Number(log) <= hurgada){
//       booking = confirm('Есть место в группе отелей Hurgada, забронировать место? ');
//       if(booking == true){
//         alert('Приятного путешествия в группе Hurgada!');
//       }else if(Number(log) <= taba){
//         booking = confirm('Есть место в группе отелей Taba, забронировать место? ');
//         if(booking == true){
//           alert('Приятного путешествия в группе Taba!');
//         }else{
//           alert('Нам очень жаль, приходите еще!');
//         }
//       }  
//     }
//   }else if(Number(log) > hurgada){
//     alert('Извините, столько мест нет ни в одной группе');
//   }
// }

    
  








