'use strict';
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/640/480/any?t=1549041714465",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/640/480/any?t=1549041753073",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/640/480/any",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];






function createPostCard(obj){
  const movie = document.createElement('div');
  const img = document.createElement('img');
  const movieBody = document.createElement('div');
  const title = document.createElement('h2');
  const description = document.createElement('p');
  const date = document.createElement('p');

  
  

  movie.classList.add('movie');
  img.classList.add('movie__image');
  movieBody.classList.add('movie__body');
  title.classList.add('movie__title');
  description.classList.add('movie__description');
  date.classList.add('movie__date');
  
  
  const body = document.querySelector('body');
  
  body.append(movie);
  
  movie.append(img,movieBody);
  movieBody.append(title,description,date);
  

  
  img.setAttribute('alt', 'movie image');
  img.setAttribute('src', obj.img);
  title.textContent = obj.title;
  description.textContent = obj.text;
  date.textContent = obj.link;
  
  
};


function createCards(arr){
  for(let item of arr){
    createPostCard(item);
  }
};

createCards(posts);