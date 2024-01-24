import React from 'react';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';

const Navbar = (props: { theme:any, toggleTheme:any }) => {
  return (
    <nav className={`${styles.box} ${props.theme}`}>
      <h4 className={`${styles.title}`}><Link href="/">Valeria Contreras</Link></h4>
      <h5 className={`${styles.navItems}`}>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#resume">Resume</Link>
        <button onClick={props.toggleTheme}>
          COLOR
        </button>
      </h5>
    </nav>
  );
};

export default Navbar;