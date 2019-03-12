import React from 'react';
import {NavLink} from 'react-router-dom'; // компонент, для навигации, так же вшит в модуль, который установили
import './Menu.css';



const Menu = () => {
    return (
            <ul className="menu">
                <li className="menu__item">
                <NavLink className="menu__link" to='/'>Roadster</NavLink>
                </li>
                <li className="menu__item">
                <NavLink className="menu__link" to='/curiosity'>Curiosity</NavLink>
                </li>
                <li className="menu__item">
                <NavLink className="menu__link" to='/avengers'>Avengers</NavLink>
                </li>
                <li className="menu__item">
                <NavLink className="menu__link" to='/user'>User</NavLink>
                </li>
            </ul>
        
    );
};

export default Menu;