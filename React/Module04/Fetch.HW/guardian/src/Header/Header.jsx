import React from 'react';
import styles from './Header.module.css';

const Header = ({refresh}) => {
    return (
        <header className={styles.Header}>
            <p className={styles.Text}>The Guardian News</p>
            <button onClick = {refresh} className={styles.Btn}>REFRESH</button>
        </header>
    );
};

export default Header;