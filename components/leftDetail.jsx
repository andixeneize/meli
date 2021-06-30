import React from 'react';
import css from '../styles/detail.module.css';

const LeftDetail = ({img, desc}) => {

    return (
        <div className={css["detailLeft"]}>
            <img className={css["image"]} src={img} alt={'Product image'} height="680px" width="680px"></img>
            <div  className={css["description"]}>
                <h2 className={css["descTitle"]}>Descripción del producto</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
};

export default LeftDetail;