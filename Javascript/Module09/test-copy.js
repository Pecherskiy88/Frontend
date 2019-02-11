'use strict'





// const url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=412e51e107155c7ffabd155a02371cbd&format=json'

// let body = document.querySelector('body');

// const ul = document.createElement('ul');
// const div = document.createElement('div')


// body.append(div);

// ul.addEventListener('click', searchVideo);
// ul.classList.add('list-song');

// body.append(ul);

// window.addEventListener('DOMContentLoaded', searchFm)

// function searchFm() {
//     fetch(url)
//     .then(response => response.json())
//     .then(data => writeTracks(data.tracks.track)
//     )
//     .then(er => console.log(er))
    
// };

// function writeTracks(arr) {
    
//     ul.innerHTML = arr.reduce((acc, elem) => acc + 
//     `<li class="song">
//             <img class="song__pic" src="${elem.image[1]['#text']}">
//             <span class="song__artist">${elem.artist.name} - </span><span class="song__name"> ${elem.name}</span>
//             <button class="button"></button>
//             </li>`, '')
    
  
// };



// function searchVideo(e) {
//     let search = e.path[1].innerText;
   

//     const urlTube = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8&part=snippet&maxResults=1&q=${search}`
   
//         fetch(urlTube)
//         .then(response => response.json())
//         .then(data => playVideo(data.items[0].id.videoId))
//         .then(error => console.log(error))
   
        
      


// }

// function playVideo(videoId){
// div.innerHTML = '<iframe class="frame" src=' + `https://www.youtube.com/embed/${videoId}?autoplay=1` + ' frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe><button class="closeBtn">X</button>'
// div.classList.add('video-container')

// const closeBtn = document.querySelector('.closeBtn');
// closeBtn.addEventListener('click', fnCLose);

// function fnCLose() {

   
// }

// }


const timer = {
    startTime: 0,
    deltaTime: null,
    id: null,
    pauseTime: 0,
    isActive: false
  };
  
  const clockface = document.querySelector(".js-clockface");
  const startBtn = document.querySelector(".js-timer-start");
  const stopBtn = document.querySelector(".js-timer-stop");
  
  startBtn.addEventListener('click', handleClickStart);
  stopBtn.addEventListener('click', handleClickStop);
  stopBtn.addEventListener('dblclick', handleClickReset);
  
  
  
  function handleClickStart () {
    if(!timer.isActive) {
      timer.isActive = true;
      this.pauseTime = 0;
      
      timer.startTime = new Date() - timer.pauseTime;
      // console.log('timer.startTime', timer.startTime);
      timer.id = setInterval(() => {
        let currentTime = new Date();
      
        timer.deltaTime = currentTime - timer.startTime;
        let time = new Date(timer.deltaTime);
        updateClockface(clockface, time)
      }, 100); 
    }
  }
  
  function handleClickStop (time) {
    timer.pauseTime = timer.deltaTime;
    
    clearInterval(timer.id);
    
    timer.isActive = false;
    timer.startTime = 0;
    timer.id = null;
    
  }
  
  function handleClickReset() {
    // console.log('reset');
    timer.isActive = false;
    clearInterval(timer.id);
    timer.id = null;
    timer.startTime = 0;
    timer.deltaTime = 0;
    updateClockface(clockface, timer.startTime)
  }
  
  /*
  * Обновляет поле счетчика новым значением при вызове
  * аргумент time это кол-во миллисекунд
  */
  function getFormattedTime(time) {
    let date = new Date(time);
    let min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let ms = Math.floor(date.getMilliseconds() /100)
    return `${min}:${sec}.${ms}`;
    
  }
  
  function updateClockface(el, time) {
    el.textContent = getFormattedTime(time);
  }
  
  /*
  * Подсветка активной кнопки
  */
  function setActiveBtn(target) {
    if(target.classList.contains('active')) {
      return;
    }
    
    startBtn.classList.remove('active');
    stopBtn.classList.remove('active');
    
    target.classList.add('active');
  }
  