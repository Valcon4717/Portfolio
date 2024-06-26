import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/home.module.css';
import darkAvatar from '../public/Dark/Avatar.svg';
import lightAvatar from '../public/Light/Avatar.svg';
import arrowDark from '../public/Dark/HomeDownArrow.svg';
import arrowLight from '../public/Light/HomeDownArrow.svg';
import { Link } from 'react-scroll';
import { TypewriterEffectSmooth } from './typewriter-effect';

const Home = (props: { theme: any }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const words = [
    {
      text: 'Hello,',
    },
    {
      text: "I'm",
    },
    {
      text: 'Valeria',
    },
    {
      text: '👋🏼',
    },
  ];

  return (
    <div id="home" className={`${styles.section} ${props.theme}`}>
      <div className={styles.grid}>
        <div className={styles.titleBlock}>
          <div className={`${styles.title} ${'main-title'}`}>
            {isClient && <TypewriterEffectSmooth words={words} />}
          </div>
          <div className={styles.subtitle}>
            Software developer, coffee lover, and part-time rock climber.
          </div>
        </div>
        <div className={styles.personIcon}>
          {props.theme === 'dark-mode' ? (
            <Image
              src={darkAvatar}
              alt="darkAvatar icon"
              width={800}
              height={800}
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <Image
              src={lightAvatar}
              alt="lightAvatar icon"
              width={800}
              height={800}
              style={{ objectFit: 'contain' }}
            />
          )}
        </div>
      </div>
      <div className={styles.navigation}>
        {props.theme === 'dark-mode' ? (
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Image
              src={arrowDark}
              alt="downArrowDark icon"
              width={30}
              height={30}
              style={{ objectFit: 'contain' }}
            />
          </Link>
        ) : (
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Image
              src={arrowLight}
              alt="downArrowLight icon"
              width={30}
              height={30}
              style={{ objectFit: 'contain' }}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
