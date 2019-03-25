import {combineReducers} from 'redux';
import fetchFromApi from './fetchReduser';
import exchangeResult from './exchangeReduser';
import inputValue from './inputReduser';

const store = combineReducers({
    fetchFromApi,
    exchangeResult,
    inputValue,
})

export default store;