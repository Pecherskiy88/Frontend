import {pow, sum, substr} from './math';
import h1 from './createDom';
import lodash from 'lodash';
console.log(sum(5,12,42,31,56,5));
console.log(pow(4,3));
console.log(substr(45,2,3,56));


const body = document.querySelector('body');
body.append(h1);