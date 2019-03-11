import React from 'react';
import styles from './Pages.module.css';

const Pages = ({findPage, current, total, nextPage, prevPage}) => {
    return (
       <div className = {styles.Container}>
           <button onClick = {prevPage}>Prew page</button>
           <span>{current}</span>
           <form action="">
           <input onChange = {findPage} className = {styles.Input} type="text"/>
           </form>
           <span>{total}</span>
           <button onClick = {nextPage}>Next Page</button>
       </div>
    );
};

export default Pages;