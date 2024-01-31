import React from 'react';
import styles from '@/styles/about.module.css';

const About = (props: { theme:any }) => {
    return (
      <div id="about" className={`${styles.section} ${props.theme}`}>
        About Page
      </div>
    );
};

export default About;