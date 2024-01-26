import React, {useState} from 'react';
import styles from './NavBar.module.css';
import { getImgUrl } from '../../util';

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Hnin's Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen ? getImgUrl("nav/closeicn.png"):getImgUrl("nav/menuicn.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#project'>Project</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </nav>
};