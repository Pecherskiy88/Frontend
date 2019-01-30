'use strict';

// 1) Получить информацию из инпутов (query selector, value)
// 2) Перемножаем полученную информацию (function)
// 3) Отобразить на экране результат пункта 2 (textContent)
// 4) Округлить до 2 знаков после запятой (toFixed(2))
// 5) Перезаписываем информацию в синем квдаратике (value range, textContent)
// 6) Перезаписываем информацию при изменинии какого либо из инпутов (event - input and function #2)
// 7) Посчитать стоимость при запуске страницы (DOMcontentLoader)



const price= document.querySelector('#price');
const quantity = document.querySelector('#quantity');
const textTotal = document.querySelector('.total');
let span = document.querySelector('.amount');
let total = 0;
const form = document.querySelector('.form');



function sum(){
    total = price.value * quantity.value;
    textTotal.textContent = total.toFixed(2);
    span.textContent = quantity.value;
};
form.addEventListener('input', sum);
window.addEventListener('DOMContentLoaded', sum);


//===============================================================================
//===============================================================================
//===============================================================================
//===============================================================================
//===============================================================================





