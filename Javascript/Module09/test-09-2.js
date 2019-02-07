'use strict'

// const promise = new Promise((resolve, reject) => {
//     let i = 0;
//     let arr = [];
//     while(i < 1000000) {
//         arr.push(i)
//         i++
//     }
//     resolve(arr)
    
// });
// console.log('Before');

// promise.then(data => {
//     console.log('INSIDE promise.then');

//     console.log(data);
    
// })
// console.log('after');

//=============
// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         reject('error')
//     },2000);
// })

// .catch(err => console.log(err)
// )
//=================slack пример Вовы==========

// let obj = new Promise(function (ok, fatal) {
//     let i = 1;
//     let arr = [];
//     while (i < 10000000) {
//         arr.push(i);
//         i++
//     }
//     if (arr.length === 99999995) {
//         ok(arr)
//     } else {
//         let f = new Error('error in while loop')
//         // console.error(f);
//         fatal(f)
//     }
// });

// // // console.log(obj);

// obj
//     .then(data => console.log(data))
//     .catch(err => console.error(err))



