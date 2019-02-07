'use strict'
//===================Шаблоны пример========================
// const data = {
// people: [
//     {firstName: 'Homer', lastName: 'Simpson'},
//     {firstName: 'Peter', lastName: 'Griffin'},
//     {firstName: 'Eric', lastName: 'Cartman'},
//     {firstName: 'Kenny', lastName: 'McCormick'},
//     {firstName: 'Bart', lastName: 'Simpson'}
// ],
// temp: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node']
// };

// const source = document.querySelector('#example-template').innerHTML.trim();
// const templateFunc = Handlebars.compile(source);
// const markup = templateFunc(data);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;
//==============================================================

const gallery = {
    title: 'Gallery',
    items: [
        {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
        {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
        {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
        {img: 'https://placeimg.com/300/150/people', text: 'people'},
        {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
        {img: 'https://placeimg.com/300/150/any', text: 'random'}
    ]
};

const source = document.querySelector('#example-template').innerHTML.trim();
const templateFunc = Handlebars.compile(source);
const markup = templateFunc(gallery);
const container = document.querySelector('.content-placeholder');
container.innerHTML = markup;

//==============================================================


