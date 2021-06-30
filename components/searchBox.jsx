import React from 'react';
import css from '../styles/header.module.css';
import Logo from './logo';

const SearchBox = ({ setInputText, onSubmit }) => {

    return (
            <form className={css["form"]}>
                <Logo />

                <input 
                    onChange={(e) => setInputText(e.target.value)}
                    className={css["input"]}
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    aria-label="Buscar" 
                />

                <button onClick={onSubmit} className={css["button"]} type="submit">
                    <img className={css["icon"]} src='/ic_Search.png' alt="search_icon" height="18px" width="18px" />
                </button>
            </form>
    )
};

export default SearchBox;

/*

import React from 'react';
import css from '../styles/header.module.css';
import Logo from './logo';

const SearchBox = ({ setInputText, onSubmit }) => {

    return (
        <div className={css["header"]}>   
            <form className={css["form"]}>
                <Logo />

                <input 
                    onChange={(e) => setInputText(e.target.value)}
                    className={css["input"]}
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    aria-label="Buscar" 
                />

                <button onClick={onSubmit} className={css["button"]} type="submit">
                    <img className={css["icon"]} src='/ic_Search.png' alt="search_icon" height="18px" width="18px" />
                </button>
            </form>
        </div>
    )
};

export default SearchBox;


*/