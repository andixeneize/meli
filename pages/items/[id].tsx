import styles from '../../styles/detail.module.css';
import Header from '../../components/header';
import { GetServerSideProps } from 'next';

export const detailPage = ({ detail }) => {
    if (!detail) {
        return <h1>Producto no encontrado.</h1>
    }    
    return(
        <div className={styles.pageContainer}>
            <style jsx global>{`
                body {
                margin: 0;
                background-color: #EEEEEE;
                font-family: roboto;
                }
            `}</style>
            <Header />

            <h1>Detalle</h1>

            <div className={styles.detailLayout}>
                <div className={styles.detailLeft}>
                    <img className={styles.image} src={detail.item.picture}></img>
                    <div  className={styles.description}>
                        <h2>Descripción del producto</h2>
                        <p>{detail.description}</p>
                    </div>
                </div>
                <div className={styles.detailRight}>
                    <span>
                        {detail.item.condition} | {detail.item.sold_quantity} vendidos 
                    </span>
                    <h1>
                        {detail.item.title}
                    </h1>
                    <span>
                        ${detail.item.price.amount}
                    </span>
                    <button className={styles.button}>
                        comprar
                    </button>
                </div>
            </div>
 
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
    const id = pageContext.params.id;
    const url = 'http://localhost:3000/api/items/' + id;

    const detail = await fetch (url)
    .then((response) => response.json())
    .then((data) => {
        if (data.detail) {
            return data.detail;
        } else {
            return null;
        }
    })
    .catch((error) =>{
        console.log(error);
        return null;
    });
    
    return { props: { detail: detail }};
};

export default detailPage;