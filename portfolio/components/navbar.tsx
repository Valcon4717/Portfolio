import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from '@/styles/navbar.module.css';

const Navbar = (props: { theme: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.box} ${isScrolled ? styles.scrolled : ''} ${props.theme}`}>
      <h4 className={`${styles.title}`}>
        <Link to="home" spy={true} smooth={true} duration={500}>Valeria Contreras</Link>
      </h4>
      <h5 className={`${styles.navItems}`}>
        <Link to="about" spy={true} smooth={true} offset={-50}  duration={500}>about</Link>
        <Link to="experience" spy={true} smooth={true} offset={-50} duration={500}>experience</Link>
        <Link to="resume" spy={true} smooth={true} duration={500}>resume</Link>
      </h5>
    </nav>
  );
};

export default Navbar;
