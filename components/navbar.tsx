import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';
import styles from '@/styles/navbar.module.css';

const Navbar = (props: { theme: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleMenuItemClick = (scrollToId: string) => {
    router.push('/').then(() => {
      scroller.scrollTo(scrollToId, {
        smooth: true,
        offset: -50,
        duration: 500,
      });
    });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`${styles.box} ${isScrolled ? styles.scrolled : ''} ${
        props.theme
      }`}
    >
      <h6 className={`${styles.title}`}>
        <div onClick={handleNameClick} style={{ cursor: 'pointer' }}>
          Valeria Contreras
        </div>
      </h6>
      <div className={styles.navMobile}>
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.open : styles.closed
          }`}
        >
          <a
            onClick={() => handleMenuItemClick('experience')}
            style={{ cursor: 'pointer' }}
          >
            work
          </a>
          <a
            onClick={() => handleMenuItemClick('projects')}
            style={{ cursor: 'pointer' }}
          >
            projects
          </a>
          <Link href="/about">about</Link>
          <a
            href="/Valeria_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </div>
      </div>
      <h6 className={`${styles.navItems}`}>
        <a
          onClick={() => handleMenuItemClick('experience')}
          style={{ cursor: 'pointer' }}
        >
          work
        </a>
        <a
          onClick={() => handleMenuItemClick('projects')}
          style={{ cursor: 'pointer' }}
        >
          projects
        </a>
        <Link href="/about">about</Link>
        <a href="/Valeria_Resume.pdf" target="_blank" rel="noopener noreferrer">
          resume
        </a>
      </h6>
    </nav>
  );
};

export default Navbar;
