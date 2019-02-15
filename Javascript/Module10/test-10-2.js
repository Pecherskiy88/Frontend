'use strict'

// localStorage.setItem('test', JSON.stringify([1,2,4,5,6,7])) // create

// let str = JSON.parse(localStorage.getItem('test')); //read и приводим к нужному формату
// console.log(str);

// localStorage.setItem('test', JSON.stringify(8)); // rewrite

// localStorage.removeItem('test'); //delete

//=============Вешаем тему на сайт==================
//1) Получить данные с селекторов (value)
//2) Где-то записать (obj и localStorage)
//3) Применить стили (obj.style)
//4) Писля обновления стили остаются (setItem and DomContentLoaded)

let form = document.querySelector('#form');
let selectors = document.querySelectorAll('select');
let body = document.querySelector('body');


function readData(e) {
    e.preventDefault();
    let settings = {};
    selectors.forEach(el => settings[el.name] = el.value)
    localStorage.setItem('settings', JSON.stringify(settings));
    changeStyle();
};

function changeStyle () {
    let obj = JSON.parse(localStorage.getItem('settings'));
    if(!obj) {
        return
    }
    body.style.color = obj.color;
    body.style.fontSize = obj.fontSize + 'px';
    body.style.fontFamily = obj.fontFamily;
    
};


form.addEventListener('submit', readData);
window.addEventListener('DOMContentLoaded', changeStyle);
//===============================================================

