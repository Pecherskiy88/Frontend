'use strict'
/* 01 
  К pen уже подключен Handlebars.
  Используйте встроенные шаблоны и метод Handlebars.compile
  
  Создайте шаблон списка указаного во вкладке HTML.
  
  Отрендерите список в DOM по данным из массива listItems.
*/

// const products = {
//   items: [
//     { name: 'Apples', count: 50 },
//     { name: 'Grapes', count: 44 },
//     { name: 'Cheese', count: 128 },
//     { name: 'Milk', count: 293 },
//   ]
   
// };
//   const container = document.querySelector('.template-container');
  
//   const source = document.querySelector('#example-template').innerHTML.trim();
//   const templateFunc = Handlebars.compile(source);
//   const markup = templateFunc(products);
  
//  container.innerHTML += markup;


// =======================02=========================

/*
  К pen уже подключен Handlebars.
  Используйте встроенные шаблоны и метод Handlebars.compile
  
  Создайте шаблон поста указаного во вкладке HTML.
  Отрендерите список постов в DOM по данным из массива posts.
  
  Если в объекте поле isFav=true, в посте должна быть 
  разметка иконки избранного поста, в противном случае
  разметки иконки быть не должно.
  
  Используйте эту иконку для фона:
  https://image.flaticon.com/icons/svg/290/290413.svg
*/

// const posts = [
//   {
//     title: "Phasellus volutpat metus",
//     text:
//       "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
//     isFav: true
//   },
//   {
//     title: "Nulla consequat massa",
//     text:
//       "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     isFav: false
//   },
//   {
//     title: "In enim justo",
//     text:
//       "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
//     isFav: true
//   },
//   {
//     title: "Vestibulum ante ipsum",
//     text:
//       "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est.",
//     isFav: false
//   }
// ];

// const container = document.querySelector('.container');

// const template = document.querySelector('#example-template').innerHTML.trim();
// const templateFunc = Handlebars.compile(template);
// const markup = posts.reduce((acc, el) => acc + templateFunc(el), '');

// container.innerHTML += markup;

// =======================03=========================
/* 
  Напишите функцию validate которая проверяет поля формы 
  firstname и lastname и возвращает результат в виде 
  обьекта со свойствами 'first name' и 'last name'.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }
  
  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/

// const firstname = document.getElementById("first_name");
// const lastname = document.getElementById("last_name");
// const submitBtn = document.getElementById("submit-btn");

// submitBtn.addEventListener("click", validate);

// function validate(evt) {
//   evt.preventDefault();
//   const reg = /^[a-z]+(-?| ?)[a-z]+$/gi;

  
//   const result = {
//     first_name: null,
//     last_name: null,
//   };

//   const name = firstname.value;
//   const lastName = lastname.value;
//   console.log(reg.test(lastName));

//   if(reg.test(name) === true){
//     result.first_name = name;
//   }else if(reg.test(lastName) === true){
//     result.last_name = lastName;
//   }
  
//   console.log(result);
  
//  return result
 
// }


