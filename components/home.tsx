import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/home.module.css';
import avatar3D from '../public/avatare3D.png';
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
          <Image src={avatar3D} alt="avatar3D icon"  style={{ objectFit: 'contain', width: '80%', height: 'auto'}}  />
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
