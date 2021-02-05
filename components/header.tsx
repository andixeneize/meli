import React from 'react';
import Link from 'next/link'
import styles from '../styles/header.module.css';

const Header = ({ setInputText, onSubmit }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div className={styles.header}>   
            <form className={styles.form}>
                <Link href="/">
                    <a className={styles.logo}></a>
                </Link>
                <input onChange={inputTextHandler} className={styles.input} type="text" placeholder="Nunca dejes de buscar" />
                <button onClick={onSubmit} className={styles.button} type="submit">
                    <img className={styles.icon} src='/ic_Search.png' />
                </button>
            </form>
        </div>
    )
};

export default Header;
