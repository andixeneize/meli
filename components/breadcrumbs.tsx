import styles from '../styles/items.module.css';

const Breadcrumbs = ({ categories }) => {
    let breadcrumbs;

    if (categories && categories.length) {
        breadcrumbs = categories.map((category, index) => {
            if (index == 0) {
                return <span key={index} >{category.name}</span>
            } else {
                return <span key={index}> &gt; {category.name}</span>
            }
        });
    } 

    return (
        <div className="bread">   
            {breadcrumbs}
            <style jsx>{`
                .bread {
                    width: 80vw;
                    justify-content: left;
                    margin: 16px 0 16px;
                    color: #333333;
                    font-size: 14px;
                }
            `}</style>
        </div>
    )
};

export default Breadcrumbs;