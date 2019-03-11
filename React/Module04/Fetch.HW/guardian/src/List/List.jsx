import React from 'react';
import ListItems from '../ListItems/ListItems';
import styles from '../List/List.module.css';

const List = ({news, accordion,text}) => {
    return (
        <ul className={styles.List}>
            {news.map(el => <ListItems accordion = {accordion} news = {el} text = {text} key = {el.id}/>)}
        </ul>
    );
};

export default List;