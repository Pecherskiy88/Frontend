'use strict'
/* 01
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// form.addEventListener("submit", fetchCountryData);

// /*
//   @param {FormEvent} evt
// */
// function fetchCountryData(e) {
//    e.preventDefault();   
//    let value = input.value;
//    const API_URL = `https://restcountries.eu/rest/v2/name/${value}`;
//     fetch(API_URL)
//     .then(response => response.json())
//     .then(data => createBox(data[0]))
//     .catch(er => console.log(er)) 
// };

// function createBox(input) {
//   result.innerHTML = `<ul>
//   <li>Country name: ${input.name}</li>
//   <li>Capital: ${input.capital}</li>
//   <li>Main currency: ${input.currencies[0].name}</li>
//   <li><img src="${input.flag}" alt="flag"></li>
// </ul>`;


// }

//============================02============================
/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://api.github.com/users/Pecherskiy88";


// form.addEventListener("submit", fetchUserData);

// /*
//   @param {FormEvent} evt
// */

// function fetchUserData(e){
//   e.preventDefault();
//   let name = input.value;
//   const API_URL = `https://api.github.com/users/${name}`;
//   fetch(API_URL)
//   .then(response => response.json())
//   .then(data => createBox(data)) 
//   .catch(error => console.log(error))
  

//   function createBox(data) {
//     result.innerHTML = `<ul>
//     <li>Avatar: <img src="${data.avatar_url}" alt="avatar"></li>
//     <li>Username: ${data.login}</li>
//     <li>Bio: ${data.bio}</li>
//     <li>Public repos: ${data.public_repos}</li>
//   </ul>`
//   }
// }
//============================03============================
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

// const form = document.querySelector(".search-form");
// const userTable = document.querySelector(".user-table");

// form.addEventListener("submit", fetchUsers);

// /*
//   @param {FormEvent} evt
// */
// function fetchUsers(e) {
//   e.preventDefault();
//   const url = 'https://jsonplaceholder.typicode.com/users/';

//   fetch(url)
//   .then(response => response.json())
//   .then(data => createBox(data))
//   .catch(error => console.log(error))
  
//   function createBox(data){
//     console.log(data);
    
//     let box = data.reduce((acc,elem)=> acc + `<tr>
//     <td>${elem.name}</td>
//     <td>${elem.email}</td>    
//     <td>${elem.address.city}</td>
//     <td>${elem.website}</td>
//     <td>${elem.company.name}</td>
//   </tr>`, '');
//     userTable.innerHTML = box;
//   }
  
// }
//============================04============================
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// form.addEventListener("submit", getUserById);

// function getUserById(evt) {
//   evt.preventDefault();
//   let id = input.value
//   const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
//   fetch(url)
//   .then(response => response.json())
//   .then(data => createUserId(data))
//   .catch(er => console.log(er))
//   input.value = '';

//   function createUserId(data){
//     console.log(data);
    
//     result.innerHTML = `<span>${data.id}${data.title}</span>`;
    
//   }


// }


