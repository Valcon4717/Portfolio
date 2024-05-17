// pages/about.tsx
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import ThemeSwitch from '@/components/themeSwitch';
import Footer from "@/components/footer";
import { useTheme } from '../themeContext';
import styles from '@/styles/about.module.css';
import profilePic from '../public/ProfilePic.svg';
import coffee from '../public/CoffeeLogo.svg';

const About = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={theme}>
      <ThemeSwitch
        theme={theme}
        toggleTheme={() => setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode")}
      />
      <Navbar theme={theme} />
      <div id="about" className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.imageBlock}>
            <Image
              src={profilePic}
              alt="Profile Pic"
              width={600}
              height={600}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.textBlock}>
            <h4 className={styles.title}>
              About Me
              <Image
                src={coffee}
                alt="Coffee Logo"
                width={55}
                height={55}
                className={styles.emoji}
              />
            </h4>
            <p>
              Hi, I’m Valeria, a third-year student at The University of Texas at El Paso with a deep passion for front-end development and UI/UX design...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
