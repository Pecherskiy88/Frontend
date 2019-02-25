/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/

const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];


  const form = document.querySelector('.js-form'); // достучались до формы отправки
  const div = document.querySelector('.root'); // достучались до контейнера в который будет помещать карточки с товаром
  

  form.addEventListener('submit', filterArr); // слушатель на кнопку Филтер
  form.addEventListener('reset', clearFunc); // слушатель на кнопку  Reset
  window.addEventListener('DOMContentLoaded', generateMarkup(laptops)); // при загрузке онка, запускаем функцию, которая строит DOM элементы(все, без фильтра)

  function filterArr() { // создаем функцию, которая на основе выбранных характеристик, будет отфильтровывать наш массив с продуктами.
    event.preventDefault();
    const arr = [...document.querySelectorAll('.js-form input:checked')];// создаем массив, где собраны все инпуты, у которых значение поля checked - активно и спрэдаем.
    console.log(arr);
    
    const filter = { size: [], color: [], release_date: [] }; // Создаем объект с полями по которым будет фильтровать.
    filter.size = arr.filter(el => el.name === 'size').map(el => el.value); // фильтруем массив который выше, по ключу size и записываем значение его в обьект filter
    filter.color = arr.filter(el => el.name === 'color').map(el => el.value);
    filter.release_date = arr.filter(el => el.name === 'release_date').map(el => el.value);
  
    const products = laptops.filter(el => // создаем переменную в которую запишем массив - результат фильтра нашего массива с товарами(laptops)
      (filter.size.includes(String(el.size)) || filter.size.length === 0) && // Есть ли в нашем главном массиве с товарами поля size, color, date, значение которых содержит такое же значение, как и в одноименных массивах обьекта filter
      (filter.color.includes(el.color) || filter.color.length === 0) && // либо эти поля не были выбраны
      (filter.release_date.includes(String(el.release_date)) ||
      filter.release_date.length === 0)
    );
    
    generateMarkup(products);
    
  };
  
function generateMarkup(arr){ // Функция для работы с шаблонами и библиотекой Handlebars
  const template = document.querySelector('#example-template').innerHTML.trim();
  const templateFunc = Handlebars.compile(template);
  const markup = arr.reduce((acc, elem) => acc + templateFunc(elem), "");
  div.innerHTML = markup;
};

function clearFunc() {// Функция, которая очищает фильтр.
  const arr = [...document.querySelectorAll('.js-form input:checked')];
  arr.map(el => el.checked = false);
  div.innerHTML = '';
};

