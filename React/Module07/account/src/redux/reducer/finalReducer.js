import {combineReducers} from 'redux';
import inputsReducer from './inputsReducer';
import modalReducer from './modalReducer';
import users from './saveReducer';
import edit from './editReduser';

const rootReducer = combineReducers({
    inputsReducer,
    modalReducer,
    users,
    edit,
})

export default rootReducer;