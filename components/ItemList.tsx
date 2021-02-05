import Link from "next/link";
import React from "react";
import styles from '../styles/list.module.css';
import { Currency } from './currency';

const ItemList = ({ itemList }) => {
    let items;

    if (itemList.length) {
        items = itemList.map((item) => 
            <li className={styles.listItem} key={item.id}>
                <Link href={`/items/${encodeURIComponent(item.id)}`} aria-label={`Detalles ${item.id}`}>
                <div className={styles.itemLayout}>
                    <img height="180px" width="180px" className={styles.itemThumbnail} src={item.thumbnail} alt={`Thumbnail ${item.id}`} ></img>
                    <div className={styles.itemContent}>
                        <span className={styles.priceTag}> {Currency(item.price)} <img height="18px" width="18px" className={styles.icon} src='/ic_shipping.png' alt={`Shipping ${item.id}`} /></span>
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
        <ol className={styles.orderedList}>
            {items}
        </ol>
    )
};

export default ItemList;