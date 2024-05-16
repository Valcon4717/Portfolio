import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/navbar.module.css';

const Navbar = (props: { theme: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNameClick = () => {
    if (router.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <nav className={`${styles.box} ${isScrolled ? styles.scrolled : ''} ${props.theme}`}>
      <h4 className={`${styles.title}`}>
        <div onClick={handleNameClick} style={{ cursor: 'pointer' }}>
          Valeria Contreras
        </div>
      </h4>
      <h5 className={`${styles.navItems}`}>
        <Link href="/about">About</Link>
        <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </h5>
    </nav>
  );
};

export default Navbar;
