import React from 'react';
import './CartItem.css';

const CartItem = ({title, price, deleteItem}) => {
    return (
       <li className='item'>
           <h3 className='title'>{title}</h3>
           <p className='price'>{price} UAH</p>
           <p onClick={deleteItem} data-name={title} className='delete'>Delete</p>
       </li>
    );
};

export default CartItem;