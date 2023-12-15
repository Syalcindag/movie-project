import Link from 'next/link';
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

import styles from './styles.module.css';
 
const Header = () => {
  return (

    <header className={`${styles.header } container fluid`}>
        <div className={styles.headerWrapper}>
            <Link href='/'>
                <FaPlayCircle/> NetFilms
            </Link>
            <nav className={styles.navigationMenu}>
                <Link href=''>Movies</Link>
                <Link href=''>Movies</Link>
                <Link href=''>Movies</Link>
            </nav>
        </div>
    </header>

    
  )
}

export default Header