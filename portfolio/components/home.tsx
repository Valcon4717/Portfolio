import React from 'react';
import Image from 'next/image';
import styles from '@/styles/home.module.css';
import darkAvatar from "../public/Dark/Avatar.svg";
import lightAvatar from "../public/Light/Avatar.svg";
import wave from "../public/WaveHand.svg";
import arrowDark from "../public/Dark/HomeDownArrow.svg";
import arrowLight from "../public/Light/HomeDownArrow.svg";
import darkGraphic from "../public/Dark/graphic 1.svg";
import lightGraphic from "../public/Light/graphic 1.svg";
import { Link } from 'react-scroll';

const Home = (props: { theme:any }) => {
    return (
        <div id="home" className={`${styles.section} ${props.theme}`}>
            <div className={styles.grid}>
                <div className={styles.titleBlock}>
                    <div className={`${styles.title} ${'main-title'}`}>
                        Hello, I&apos;m Valeria <Image src={wave} alt="wave" width={60} height={60} className={styles.emoji} />
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
            <div className={styles.navigation}>
                {props.theme === "dark-mode" ? (
                        <Link to="about" spy={true} smooth={true} duration={500}>
                            <Image src={arrowDark} alt="downArrowDark icon" width={30} height={30}/>
                        </Link>
                        ) : (
                        <Link to="about" spy={true} smooth={true} duration={500}>
                            <Image src={arrowLight} alt="downArrowLight icon" width={30} height={30}/>
                        </Link>
                        )}            
            </div>
            <div className={styles.graphic}>
                {props.theme === "dark-mode" ? (
                            <Image src={darkGraphic} alt="darkGraphic icon" width={300} height={300} layout="responsive"/>
                        ) : (
                            <Image src={lightGraphic} alt="lightGraphic icon" width={300} height={300} layout="responsive"/>
                        )}
            </div>
        </div>
    );
};


export default Home;