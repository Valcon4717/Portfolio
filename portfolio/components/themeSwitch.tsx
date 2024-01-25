import React from 'react';
import Image from 'next/image';
import styles from '@/styles/themeSwitch.module.css';
import sunLogo from "../public/light/Sun.svg";
import moonLogo from "../public/dark/Moon.svg";

type ThemeSwitchProps = {
  theme: 'dark-mode' | 'light-mode';
  toggleTheme: () => void;
};

const ThemeSwitch = ({ theme, toggleTheme }: ThemeSwitchProps) => {
  return (
    <div className={theme}>
      <button className={styles.buttonTheme} onClick={toggleTheme}>
        {theme === "dark-mode" ? (
          <Image src={sunLogo} alt="sun logo" width={20} height={20} /> 
        ) : (
          <Image src={moonLogo} alt="moon logo" width={20} height={20} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;
