import styles from '../styles/items.module.css';

const Breadcrumbs = ({ categories }) => {
    let breadcrumbs;

    if (categories && categories.length) {
        breadcrumbs = categories.map((category, index) => {
            if (index == 0) {
                return <span>{category.name}</span>
            } else {
                return <span> &gt; {category.name}</span>
            }
        });
    } 

    return (
        <div className={styles.bread}>   
            {breadcrumbs}
        </div>
    )
};

export default Breadcrumbs;