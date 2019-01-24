'use strict';

// Функциональные методы массива:
    // map +
    // filter +
    // find +
    // reduce +
    // sort +
    // every +
    // some +
    // chaning -


const scientist = [{
  first: 'Albert',
  last: 'Einstein',
  year: 1879,
  passed: 1955
},
{
  first: 'Isaac',
  last: 'Newton',
  year: 1643,
  passed: 1727
},
{
  first: 'Galileo',
  last: 'Galilei',
  year: 1564,
  passed: 1642
},
{
  first: 'Marie',
  last: 'Curie',
  year: 1867,
  passed: 1934
},
{
  first: 'Johannes',
  last: 'Kepler',
  year: 1571,
  passed: 1630
},
{
  first: 'Nicolaus',
  last: 'Copernicus',
  year: 1473,
  passed: 1543
},
{
  first: 'Max',
  last: 'Planck',
  year: 1858,
  passed: 1947
},
{
  first: 'Katherine',
  last: 'Blodgett',
  year: 1898,
  passed: 1979
},
{
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852
},
{
  first: 'Sarah E.',
  last: 'Goode',
  year: 1855,
  passed: 1905
},
{
  first: 'Lise',
  last: 'Meitner',
  year: 1878,
  passed: 1968
},
{
  first: 'Hanna',
  last: 'Hammarström',
  year: 1829,
  passed: 1909
}
];

// 1) отримати масив вчених що народилися в 19 ст
// const result = scientist.filter(function(elem) {
//   if( elem.year >= 1800 && elem.year < 1900 ){
//     return elem
//   } 
// })
// .map(function(elem) {
//   return console.log(elem.first)
  
// });

// const result = scientist.filter(elem => elem.year > 1800 && elem.year <= 1900)
// .map(elem => elem.first);
// console.log(result);


//==============================================

// 2) знайти суму років скільки прожили всі вченні
// const sumBorn = scientist.reduce(function(acc, elem) {
//   return acc+elem.year
// },0)
// const sumDeath = scientist.reduce(function(acc,elem){
//   return acc+elem.passed
// },0);
// console.log(sumDeath-sumBorn);

// const sumBorn = scientist.reduce((acc,elem) => acc+elem.year,0);
// const result = scientist.reduce((acc,elem) => acc+elem.passed,0);
// console.log(result - sumBorn);

//==============================================

// 3) Відсортувати вчених по алфавіту
// const filt = scientist.map(elem => elem.first);
// console.log(filt.sort());


// console.log(scientist.sort((a,b) => a.first < b.first ? -1 : 1)
// .map(x=>x.first));

//==============================================
// 4) Відсортувати вчених по даті народження
// console.log(scientist.sort((a,b) => a.year < b.year ? -1 : 1)
// .map(a => a.year));

//==============================================
// 5) Відсортувати вчених по кількості прожитих років
// const result = scientist.sort((a,b) => (a.passed-a.year) - (b.passed -b.year)).
// map(elem => elem.first);
// console.log(result);

//==============================================

// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// console.log(scientist.filter(elem => elem.year < 1500 || elem.year > 1800));
 
//==============================================
// 7) Знайти вченого який народився найпізніше.
// const born = scientist.sort((a,b) => a.year > b.year ? -1 : 1)
// console.log(born[0]);

//==============================================
// 8) Знайти рік народження Albert Einstein
// const name = scientist.find(elem => 'Einstein' === elem.last)
// console.log(name.year);

//==============================================

// 9) Знайти вчених прізвище яких починається на літеру С
// const filt = scientist.filter(elem => elem.last[0] === 'C')
// console.log(filt);

//==============================================

// 10) Видалити з масива всіх вчених імя яких починається на A

// const filt = scientist.filter(function(elem) {
//   return elem.first[0] !== 'A'
// });
// console.log(filt);
