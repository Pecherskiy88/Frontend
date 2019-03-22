import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App/App';
import globalStore from './redux/store/store';


import './index.css';


ReactDOM.render(<Provider store = {globalStore}>
    <App />
    </Provider>, document.getElementById('root'));

