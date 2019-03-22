import {combineReducers} from 'redux';
import fetchFromApi from './fetchReducer';

const store = combineReducers({
    fetchFromApi,
})

export default store;