'use strict'
// Отримати масив валют з сайта НБУ 
// Силка для запиту 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
// Вивести інформацію на екран в форматі списка. Пункт списку має мати 3 спана:
// Спан №1 показує текстову назву валюти
// Спан №2 показує курс
// Спан №3 показує позначку валюти (наприклад USD)
// Створити на екрані 3 кнопки та інпут.
// 1)Кнопка №1 сортує від дорожчого до дешевшого
// 2)Кнопка №2 сортує від дешевшого до дорощого
// 3)Кнопка №3 сортує по алфавіту
// 4)В інпут вводимо назву валюти текст або cc і отримуємо курс конкретної валюти. 



const ul = document.querySelector('.list')

window.addEventListener('DOMContentLoaded', fnSearch);

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', fnSearch);

const form = document.querySelector('.form');
form.addEventListener('submit', fnSearch );


const input = document.querySelector('.form__text');



function fnSearch(e){
    e.preventDefault();
    let target = event.target.textContent;
    const Url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    fetch(Url)
    .then(response => response.json())
    .then(data => {
       if(target === null){
           fnCreate(data)
       }else if(target === 'Sort UP'){
        data.sort((a,b)=> b.rate - a.rate)
           fnCreate(data);
       }else if(target === 'Sort Down'){
        data.sort((a,b) => a.rate - b.rate)
            fnCreate(data);
       }else if(target === 'Sort Alphavit'){
        data.sort((a,b)=> a.txt.localeCompare(b.txt))
           fnCreate(data);
       }else{
           let array = data.filter(el => el.txt.toLowerCase()===input.value.toLowerCase() || el.cc.toLowerCase()===input.value.toLowerCase());
           fnCreate(array)
           form.reset();
           
       } 
    })
    .catch(er => console.log(er))
    
};

function fnCreate(arr){
    ul.innerHTML = '';
    for(let item of arr){
        const li = document.createElement('li');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');
    
        li.append(span1, span2, span3);
        ul.append(li);  
    
        span1.textContent = item.txt;
        span2.textContent = item.rate;
        span3.textContent = item.cc;
    }
    
};










