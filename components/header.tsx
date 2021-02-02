import styles from '../styles/header.module.css';

  const Header = () => (
    <div className={styles.header}>   
      <form className={styles.searhForm}>
        <input className={styles.searchInput} type="text" placeholder="Search.." name="search2" />
        <button type="submit"><i className={styles.searchIcon}>buscar</i></button>
      </form>
    </div>
  );
  
  export default Header;