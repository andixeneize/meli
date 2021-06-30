import css from '../../styles/detail.module.css';
import { Currency } from '../../utils/currency';
import { Condition } from '../../utils/condition';
import Breadcrumbs from '../../components/breadcrumbs';

export const detailPage = ({ detail }) => {
    if (!detail) {
        return ( 
            <div className={css["pageContainer"]}>
                <h1 className={css["notFound"]}>Producto no encontrado.</h1>
            </div>
    )}    
    return(
        <div className={css["pageContainer"]}>
            <Breadcrumbs categories={detail.item.categories}/>
            <div className={css["detailLayout"]}>
                <div className={css["detailLeft"]}>
                    <img className={css["image"]} src={detail.item.picture} alt={`Image ${detail.item.id}`} height="680px" width="680px"></img>
                    <div  className={css["description"]}>
                        <h2 className={css["descTitle"]}>Descripción del producto</h2>
                        <p>{detail.item.description}</p>
                    </div>
                </div>
                <div className={css["detailRight"]}>
                    <span className={css["sold"]}>
                        {Condition(detail.item.condition)} | {detail.item.sold_quantity} vendidos 
                    </span>
                    <h1 className={css["title"]}>
                        {detail.item.title}
                    </h1>
                    <div className={css["price"]}>
                        {Currency(detail.item.price.amount)}
                    </div>
                    <button className={css["button"]}>
                        Comprar
                    </button>
                </div>
            </div>
 
        </div>
    );
};

export const getServerSideProps = async (pageContext) => {
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