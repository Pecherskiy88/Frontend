'use strict'
 // флаги регулярок

//  i - ігнорує регістр*
// g - глобальний погук а не перший збіг*
// m - багатостроковий пошук*
// Класи
// \d - numbers 0-9*
// \D - not numbers*
// \w - word*
// \W - not word*
// \s - space*
// \S - not space*
// \b - word or symbol with spase around*
// \B - not word*
// [] - набір *
// - діапазон *
// ^ - в [] це виключення за межами набору це початок строки*
// {} - показник кількості*
// () - група символів*
//  + - один або більше
//  ? - нуль або один
//  * - нуль або більше
//  . - будь - який символ*
//  $ - кінець строки*


// (?:) - виключення результату
//  x(?=y) - відповідність
//  x(?!y) - відплвідність якщо не йде у після х
//  x|y - або
// ?<=
//  ?<!
//===========================

let regV = /^\w+@[a-z]+\.[a-z.]{3}$/g;

let string = 'pecherskiy@gmail.com';

console.log(string.match(regV));
console.log(regV.test(string));

