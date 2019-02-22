
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

const form = document.querySelector('.js-form');
const source = document.querySelector("#template").innerHTML.trim();
const result = document.querySelector('.js-result'); 
/**
 * Generates HTML markup to be inserted into the DOM
 * @param {array} arr an array of filtered objects to generate HTML
 */
function generateMarkup (arr){
  let tempFunc = Handlebars.compile(source);
  let mark = arr.reduce((acc,el)=> acc + tempFunc(el),"");
  result.innerHTML = mark;
}
/**
 * Filter of selected objects
 * @param {object} event 
 */
function filterButtonHendler (event) {
    event.preventDefault(); 
    const arr = [...document.querySelectorAll('.js-form input:checked')]; 
    const filter = {
      size: [],
      color: [],
      release_date: []
    }; 
    filter.size = arr.filter(elem => elem.name === 'size').map(el=> el.value);
    filter.color = arr.filter(elem => elem.name === 'color').map(el=> el.value);
    filter.release_date = arr.filter(elem => elem.name === 'release_date').map(el=> el.value); 
   
    // const products = laptops.filter( el => (filter.size.length) ? filter.size.includes(String(el.size)) : true)
    //                       .filter( el => (filter.color.length) ? filter.color.includes(el.color) : true)
    //                       .filter( el => (filter.release_date.length) ? filter.release_date.includes(String(el.release_date)) : true); 
   
    const products = laptops.filter(el =>
      (filter.size.includes(String(el.size)) || filter.size.length === 0) &&
      (filter.color.includes(el.color) || filter.color.length === 0) &&
      (filter.release_date.includes(String(el.release_date)) || filter.release_date.length === 0));

    generateMarkup(products);   
}
/**
 * Clear all checkboxes
 */
function clearButtonHandler(){
  const arr = [...document.querySelectorAll('.js-form input:checked')]; 
  arr.map(el=>el.checked = false);
}
form.addEventListener('submit', filterButtonHendler);
form.addEventListener('reset', clearButtonHandler);
window.addEventListener('DOMContentLoaded',generateMarkup(laptops) );