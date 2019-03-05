import React from 'react';
import './Header.css';

const Header = ({cart, toggleCart}) => {
    return (
       <header className='Header'>
         <p className='counter'>{cart.length}</p>
         <button className='cart' onClick={toggleCart}>Корзина</button>
       </header>
    );
};

export default Header;