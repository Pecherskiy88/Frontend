import {combineReducers} from 'redux';
import inputsReducer from './inputsReducer';
import modalReducer from './modalReducer';
import users from './saveReducer';

const rootReducer = combineReducers({
    inputsReducer,
    modalReducer,
    users,
})

export default rootReducer;