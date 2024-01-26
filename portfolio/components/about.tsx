import React from 'react';
import Image from 'next/image';
import styles from '@/styles/about.module.css';
import darkAvatar from "../public/Dark/Avatar.svg";
import lightAvatar from "../public/Light/Avatar.svg";



const About = (props: { theme:any }) => {
    return (
      <div id="about" className={`${styles.section} ${props.theme}`}>
        <div className={`${styles.personIcon}`}>
          {props.theme === "dark-mode" ? (
            <Image src={darkAvatar} alt="darkAvater icon"/> 
          ) : (
            <Image src={lightAvatar} alt="lightAvatar icon"/>
          )}
        </div>
      </div>
    );
};

export default About;