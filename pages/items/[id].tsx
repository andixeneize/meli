import styles from '../../styles/detail.module.css';
import { GetServerSideProps } from 'next';
import { Currency } from '../../components/currency';
import { Condition } from '../../components/condition';
import Breadcrumbs from '../../components/breadcrumbs';

export const detailPage = ({ detail }) => {
    if (!detail) {
        return ( 
            <div className={styles.pageContainer}>
                <h1 className={styles.notFound}>Producto no encontrado.</h1>
            </div>
    )}    
    return(
        <div className={styles.pageContainer}>
            <Breadcrumbs categories=''/>
            <div className={styles.detailLayout}>
                <div className={styles.detailLeft}>
                    <img className={styles.image} src={detail.item.picture} alt={`Image ${detail.item.id}`} height="680px" width="680px"></img>
                    <div  className={styles.description}>
                        <h2 className={styles.descTitle}>Descripción del producto</h2>
                        <p>{detail.item.description}</p>
                    </div>
                </div>
                <div className={styles.detailRight}>
                    <span className={styles.sold}>
                        {Condition(detail.item.condition)} | {detail.item.sold_quantity} vendidos 
                    </span>
                    <h1 className={styles.title}>
                        {detail.item.title}
                    </h1>
                    <div className={styles.price}>
                        {Currency(detail.item.price.amount)}
                    </div>
                    <button className={styles.button}>
                        Comprar
                    </button>
                </div>
            </div>
 
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
    const id = pageContext.params.id;
    const url = 'http://localhost:3000/api/items/' + id;

    const response = await fetch (url);
    if (response.ok) {
        const data = await response.json();
        return { props: { detail: data }};
    } 
    return { props: {}};
};

export default detailPage;