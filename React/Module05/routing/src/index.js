import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';  //npm install --save react-router-dom  - установка плагина, ддя того чтобы была навигация по приложению
import './index.css';
import App from './App/App';


ReactDOM.render(<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root')); // оборачиваем в этом плагин нашу приложуху

