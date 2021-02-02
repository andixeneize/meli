import styles from '../../styles/items.module.css';
import Header from '../../components/header';
import { GetServerSideProps } from 'next';

export const itemsPage = ({ items }) => {

    if (items.length) {
        const itemList = items.map((item) => 
            <li className={styles.listItem}>
                <div className={styles.itemLayout}>
                    <div className={styles.itemImage}>
                        <img className={styles.itemThumbnail} src={item.thumbnail}></img>
                    </div>
                    <div className={styles.itemContent}>
                        <div>
                            <span className={styles.priceTag}>${parseInt(item.price)}</span>
                        </div>
                        <div>
                            <h2 className={styles.itemTitle}>{item.title}</h2>
                        </div>
                    </div>
                    <div className={styles.itemAddress}>
                        <p className={styles.itemState}>{item.address.state_name}</p>
                    </div>
                </div>    
            </li>
        );
    
        return(
            <div className={styles.pageContainer}>
                <style jsx global>{`
                        body {
                        margin: 0;
                        background-color: #EEEEEE;
                        font-family: roboto;
                        }
                    `}
                </style>
                <div className={styles.main}>
                    <Header />

                    <div className={styles.listLayout}>
                        <ol className={styles.orderedList}>
                            {itemList}
                        </ol>
                    </div>
                    
                </div>
            </div>
        );
    } else {
        return(
            <div className={styles.pageContainer}>
                <style jsx global>{`
                        body {
                        margin: 0;
                        background-color: #EEEEEE;
                        font-family: roboto;
                        }
                    `}
                </style>
                <Header />
            </div>
        );
    }
};

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
    const query = pageContext.query;
    let url = 'http://localhost:3000/api/items';
    
    console.log('QUERY:');
    console.log(query);
    
    if (query.search) {
        url = url + '?search=' + query.search;
    }
    
    const apiResponse = await fetch (url);
    
    const resp = await apiResponse.json();

    return {
        props: { items: resp.items }
    }
};

export default itemsPage;