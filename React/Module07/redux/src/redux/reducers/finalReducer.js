import {combineReducers} from 'redux';
import counter from './counterReducer';
import input from './inputReducer';
import data from './historyReducer';
import gallery from './galleryReducer';

const rootReducer = combineReducers({
    counter, 
    input,
    data,
    gallery// название ключа и ипорт функции одинаковы, поэтому записано одним словом.
})

export default rootReducer;

