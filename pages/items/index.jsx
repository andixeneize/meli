import css from '../../styles/items.module.css';
import ItemList from '../../components/itemList';
import Breadcrumbs from '../../components/breadcrumbs';

export const itemsPage = ({ items, categories }) => {
    if (items && items.length) {
        return (
            <div className={css["listLayout"]}>
                <Breadcrumbs categories={categories}></Breadcrumbs>
                <ItemList itemList={items} /> 
            </div>
        );
    } else {
        return (
        <></>
    )};
};


export const getServerSideProps = async (pageContext) => {
    const query = pageContext.query;
    let url = 'http://localhost:3000/api/items';
    
    if (query.search) {
        url = url + '?q=' + query.search;
        const response = await fetch (url);
        if (response.ok) {
            const data = await response.json();

            return {
                props: {
                    items: data.items,
                    categories: data.categories
                }, 
              }
        }
    } 
    return {
        props: {
            items: {},
            categories: null
        },
      }
};

export default itemsPage;