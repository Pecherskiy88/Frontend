import {createStore, applyMiddleware, compose} from 'redux';
import store from '../redusers/finalReducers';
import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const globalStore = createStore(store, devTools(applyMiddleware(thunk)));


export default globalStore;