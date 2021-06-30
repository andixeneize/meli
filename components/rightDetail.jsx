import React from 'react';
import css from '../styles/detail.module.css';
import { Currency } from '..//utils/currency';
import { Condition } from '../utils/condition';

const RightDetail = ({condition, sold, title, price}) => {

    return (
        <div className={css["detailRight"]}>
            <span className={css["sold"]}>
                {Condition(condition)} | {sold} vendidos 
            </span>
            <h1 className={css["title"]}>
                {title}
            </h1>
            <div className={css["price"]}>
                {Currency(price)}
            </div>
            <button className={css["button"]}>
                Comprar
            </button>
        </div>
    )
};

export default RightDetail;