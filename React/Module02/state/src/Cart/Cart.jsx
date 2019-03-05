import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = ({isCartShow, toggleCart, cart, deleteItem}) => {
    return (
        <div className={isCartShow ? 'Cart__hide Cart' : 'Cart__hide'}>
        <span className='close' onClick={toggleCart}>x</span>
            <ul className='list'>
               {cart.map(el => <CartItem title={el.title} price={el.price} key={el.title} deleteItem={deleteItem}/>)}
            </ul>
            <span className='total'>Total: {cart.reduce((acc, el)=> el.price + acc, 0)} UAH</span>
        </div>
    );
};

export default Cart;