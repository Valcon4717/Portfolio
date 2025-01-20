import React from 'react';
import Image from 'next/image';
import styles from '@/styles/themeSwitch.module.css';
import sunLogo from "../public/Light/Sun.svg";
import moonLogo from "../public/Dark/Moon.svg";

const ThemeSwitch = (props: { theme:any, toggleTheme:any }) => {
  return (
    <div className={props.theme}>
      <button className={styles.buttonTheme} onClick={props.toggleTheme}>
        {props.theme === "light-mode" ? (
          <Image src={sunLogo} alt="sun logo" width={20} height={20} /> 

        ) : (
          <Image src={moonLogo} alt="moon logo" width={20} height={20} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;
