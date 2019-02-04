'use strict'
//====================делаем гугл картинки==================

const form = document.querySelector('.box');
form.addEventListener('submit', fnInput);

window.addEventListener('DOMContentLoaded', fnInput)
const input = document.querySelector('.input');
const container = document.querySelector('#container');




function fnInput(e){
    e.preventDefault();
    const URL = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&per_page=18&q=${input.value}`
    form.reset(); 
    fnUrl(URL);
};
function fnUrl(url){
    fetch(url)
    .then(response => response.json())
    .then(data => fnDraw(data.hits))
    .catch(err => console.log(err))
    
};

function fnDraw(arr){

    //============через создание элементов========
    // for(let elem of arr){
    //     const divOne = document.createElement('div');
    //     let p = document.createElement('p');
    //     p.textContent = `${elem.name}`
    //     const img = document.createElement('img');
    //     img.setAttribute('src', `${elem.webformatURL}`)
    //     divOne.append(p, img);
    //     container.append(divOne);
    // }
    //==========через иннер HTML================

    let string = arr.reduce((acc, elem)=> acc + `<div class="one">
    <p>Photographer is ${elem.name}</p>
    <img src=${elem.webformatURL}>
    </div>`, '');
    container.innerHTML = string;
    
};









