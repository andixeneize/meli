import Link from 'next/link';
import css from '../styles/header.module.css';

const Logo = () => {
    return (
        <Link href="/" aria-label="Home">
            <a className={css["logo"]} aria-label="Home"></a>
        </Link>
    )
};

export default Logo;
