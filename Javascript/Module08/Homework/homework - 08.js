'use strict'
/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  { preview: "./img/1small.jpg", fullview: './img/1big.jpg', alt: "alt text 1" },
  { preview: './img/2small.jpg', fullview: './img/2big.jpg', alt: "alt text 2" },
  { preview: './img/3small.jpg', fullview: './img/3big.jpg', alt: "alt text 3" },
  { preview: './img/4small.jpg', fullview: './img/4big.jpg', alt: "alt text 4" },
  { preview: './img/5small.jpg', fullview: './img/5big.jpg', alt: "alt text 5" },
  { preview: './img/3small.jpg', fullview: './img/3big.jpg', alt: "alt text 6" },
];


//================Обычный метод============================

const gallery = document.querySelector('.js-image-gallery');
const ul = document.createElement('ul');
ul.classList.add('preview');
gallery.append(ul);


const box = galleryItems.reduce((acc, elem) => acc + `
<li><img class="preview-img" src=${elem.preview} data-fullview=${elem.fullview} alt=${elem.alt}></li>
`, "");

ul.innerHTML = box;


ul.addEventListener('click', openFullImg);


const imgBig = document.createElement('img');
imgBig.classList.add('big-size');
imgBig.setAttribute('src', './img/1big.jpg');
gallery.prepend(imgBig);


function openFullImg() {
  if(event.target.nodeName !== 'IMG'){
    return
  }
  let images = [...document.querySelectorAll('.preview-img')];
  console.log(images);
  

  images.forEach(el => el.classList.remove('effect-active'))
  imgBig.setAttribute('src', event.target.dataset.fullview);
  event.target.classList.add('effect-active');
};


//=====================Через классы=====================



/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

// new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });

/* Далее плагин работает в автономном режиме */
