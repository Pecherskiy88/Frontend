'use strict';
/* 01
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// let ul = document.querySelector('.categories').children;
// ul = Array.from(ul);
// ul.map(el => console.log(el.firstChild.textContent.trim()));

// ============================02================================
/* 03
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const ul = document.querySelector('.list');

// ul.firstElementChild.style.color = 'red';
// ul.lastElementChild.style.color = 'blue';

// ============================03================================
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const ul = document.querySelector('.list')
// for(let item of elements){
//   let li = document.createElement('li');
//   li.textContent = item;
//   ul.append(li);
// }
// ============================04================================
/* 04
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Two Brown Hen and One Red Rooster"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Macaw Birds"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "2 Lion on Grass Field during Daytime"
//   }
// ];

// const ul = document.querySelector('.gallery');

// for(let item of galleryItems){
//   let li = document.createElement('li');
//   let img = document.createElement('img');
//   img.setAttribute('src', item.url);
//   img.setAttribute('alt', item.alt);
//   li.append(img);
//   ul.append(li);
//   img.style.width = '300px';
//   img.style.margin = '20px';
//   img.style.border = '5px solid purple';
//   ul.style.listStyle = 'none';
//   ul.style.width = '300px';
//   ul.style.margin = 'auto';
// }

// ============================05================================
/* 05
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// const size = Array.from(document.querySelectorAll('input'));
// let arr = [];

// for(let item of size){
//   if(item.checked){
//     arr.push(item.parentElement.textContent.trim())
//   }
 
// }
// console.log(arr);
// ============================06================================
/*06 for HOMEWORK!!!
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
//========= элементы
// function createMovieCard(){
//   const movie = document.createElement('div');
//   const img = document.createElement('img');
//   const movieBody = document.createElement('div');
//   const title = document.createElement('h2');
//   const description = document.createElement('p');
//   const date = document.createElement('p');
//   const rating = document.createElement('p');
  
  
//   //===========классы
//   movie.classList.add('movie');
//   img.classList.add('movie__image');
//   movieBody.classList.add('movie__body');
//   title.classList.add('movie__title');
//   description.classList.add('movie__description');
//   date.classList.add('movie__date');
//   rating.classList.add('movie__rating');
//   //===========append
//   const body = document.querySelector('body');
  
//   body.append(movie);
  
//   movie.append(img,movieBody);
//   movieBody.append(title,description,date,rating);
  
//   //=================атрибуты
//   img.setAttribute('src', 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg');
//   img.setAttribute('alt', 'movie image');
//   //======================текст контент
  
//   title.textContent = 'The Godfather';
//   description.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
//   date.textContent = 'Released: 1972-03-14';
//   rating.textContent = 'Rating: 8.6';
  
// };
// createMovieCard();

// ============================07================================

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

function createBoxes(num) {
  const id = document.querySelector('#root');
  let i = 0;
  let j = 20;
  while(i < num){
    let div = document.createElement('div');
    id.append(div);
    let rgb1 = Math.floor(Math.random()*255);
    let rgb2 = Math.floor(Math.random()*255);
    let rgb3 = Math.floor(Math.random()*255);
    let rgb = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    console.log(rgb);
    j = j + 10;
    div.style.width = `${j}px`;
    div.style.height = `${j}px`;

    div.style.backgroundColor = rgb;
    console.log(div.style);
    
    
  
    i += 1;

  }
};
createBoxes(5);

// ============================================================


