import Link from "next/link";
import React from "react";
import styles from '../styles/items.module.css';
import { Currency } from './currency';

const ItemList = ({ itemList }) => {
    let items;

    if (itemList.length) {
        items = itemList.map((item) => 
            <li className={styles.listItem} key={item.id}>
                <Link href={`/items/${encodeURIComponent(item.id)}`}>
                <div className={styles.itemLayout}>
                    <img className={styles.itemThumbnail} src={item.thumbnail}></img>
                    <div className={styles.itemContent}>
                        <span className={styles.priceTag}> {Currency(item.price)} <img className={styles.icon} src='/ic_shipping.png' /></span>
                        <h2 className={styles.itemTitle}>{item.title}</h2>
                    </div>
                    <div className={styles.itemAddress}>
                        <p className={styles.itemState}>{item.address.state_name}</p>
                    </div>
                </div>    
                </Link>
            </li>
        );
    } 

    return (
        <div className="">   
            {items}
        </div>
    )
};

export default ItemList;