'use strict'

const url = 'https://randomuser.me/api/';

fetch(url)
.then(res => res.json())
.then(data => fnTemplate(data.results[0]))
.catch(err => console.log(err))

function fnTemplate(obj){
    const bDay = new Date(obj.dob.date);
   
    obj.dob.date = bDay.toLocaleDateString();
    
    const source = document.querySelector('.template').innerHTML.trim();
    const templateFunc = Handlebars.compile(source);
    const markup = templateFunc(obj);
    const container = document.querySelector('.root');
    container.innerHTML = markup; 

    const pDescription = document.querySelector('.description');
    
    
    
    

    const ul = document.querySelector('.list');
    ul.addEventListener('mouseover', fnInfo);
    
    const pTitle = document.querySelector('.title')
    console.log(pTitle);
    
    function fnInfo(e){
        if(e.target.nodeName !== "LI"){
            return
        }else{
            pDescription.textContent = e.target.dataset.text;
            pTitle.textContent = e.target.dataset.title;
        }
        
    }
    
};








