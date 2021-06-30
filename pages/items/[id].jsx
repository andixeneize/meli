import css from '../../styles/detail.module.css';
import Breadcrumbs from '../../components/breadcrumbs';
import LeftDetail from '../../components/leftDetail';
import RightDetail from '../../components/rightDetail';

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

                <LeftDetail 
                    img={detail.item.picture} 
                    desc={detail.item.description}
                />

                <RightDetail 
                    condition={detail.item.condition} 
                    sold={detail.item.sold_quantity }
                    title={detail.item.title}
                    price={detail.item.price.amount}
                />
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