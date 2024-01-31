import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';

const Navbar = (props: { theme: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.box} ${isScrolled ? styles.scrolled : ''} ${props.theme}`}>
      <h4 className={`${styles.title}`}><Link href="/">Valeria Contreras</Link></h4>
      <h5 className={`${styles.navItems}`}>
        <Link href="#about">about</Link>
        <Link href="#experience">experience</Link>
        <Link href="#resume">resume</Link>
      </h5>
    </nav>
  );
};

export default Navbar;
