import React from 'react';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';

const Navbar = (props: { theme:any, toggleTheme:any }) => {
  return (
    <nav className={`${styles.box} ${props.theme}`}>
      <Link href="/">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#experience">Experience</Link>
      <Link href="#resume">Resume</Link>
      <button onClick={props.toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
