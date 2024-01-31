import React from 'react';
import Image from 'next/image';
import styles from '@/styles/home.module.css';
import darkAvatar from "../public/Dark/Avatar.svg";
import lightAvatar from "../public/Light/Avatar.svg";

const Home = (props: { theme:any }) => {
    return (
        <div id="home" className={`${styles.section} ${props.theme}`}>
            <div className={styles.grid}>
                <div className={styles.titleBlock}>
                    <div className={`${styles.title} ${'main-title'}`}>
                        Hello, I&apos;m Valeria
                    </div>
                    <h5 className={styles.subtitle}>
                        software developer
                    </h5>
                </div>
                <div className={styles.personIcon}>
                    {props.theme === "dark-mode" ? (
                        <Image src={darkAvatar} alt="darkAvatar icon" layout="fill" objectFit="contain"/>
                    ) : (
                        <Image src={lightAvatar} alt="lightAvatar icon" layout="fill" objectFit="contain"/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;