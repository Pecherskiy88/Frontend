import React from 'react';
import styles from '../ListItems/ListItems.module.css';

const ListItems = ({news,accordion, text}) => {
    return (
       <li onClick = {accordion} className={styles.Items}>
        {news.isHosted ? <div> <p data-id ={news.id}>{text}</p>
        <a href={news.webUrl}>Read full news...</a></div>
        : <h2 data-id ={news.id} className={styles.Title}>{news.webTitle}</h2>}
       </li>
    );
};

export default ListItems;