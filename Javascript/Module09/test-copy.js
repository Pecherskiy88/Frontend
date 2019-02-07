'use strict'





const url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=412e51e107155c7ffabd155a02371cbd&format=json'

let body = document.querySelector('body');

const ul = document.createElement('ul');
const div = document.createElement('div')


body.append(div);

ul.addEventListener('click', searchVideo);
ul.classList.add('list-song');

body.append(ul);

window.addEventListener('DOMContentLoaded', searchFm)

function searchFm() {
    fetch(url)
    .then(response => response.json())
    .then(data => writeTracks(data.tracks.track)
    )
    .then(er => console.log(er))
    
};

function writeTracks(arr) {
    
    ul.innerHTML = arr.reduce((acc, elem) => acc + 
    `<li class="song">
            <img class="song__pic" src="${elem.image[1]['#text']}">
            <span class="song__artist">${elem.artist.name} - </span><span class="song__name"> ${elem.name}</span>
            <button class="button"></button>
            </li>`, '')
    
  
};



function searchVideo(e) {
    let search = e.path[1].innerText;
   

    const urlTube = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8&part=snippet&maxResults=1&q=${search}`
   
        fetch(urlTube)
        .then(response => response.json())
        .then(data => playVideo(data.items[0].id.videoId))
        .then(error => console.log(error))
   
        
      


}

function playVideo(videoId){
div.innerHTML = '<iframe class="frame" src=' + `https://www.youtube.com/embed/${videoId}?autoplay=1` + ' frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe><button class="closeBtn">X</button>'
div.classList.add('video-container')

const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', fnCLose);

function fnCLose() {

   
}

}