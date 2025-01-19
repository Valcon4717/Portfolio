import React from 'react';
import styles from '@/styles/projects.module.css';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel from './carousel';

const Projects = (props: { theme: any }) => {
  const options: EmblaOptionsType = { loop: true };
  const slideCount = 5;
  const slides = Array.from(Array(slideCount).keys());

  return (
    <div id="projects" className={`${styles.section} ${props.theme}`}>
      <div className={styles.sectionTitle}>Projects</div>
      <div className={styles.carouselContainer}>
        <Carousel slides={slides} options={options} theme={props.theme} />
      </div>
    </div>
  );
};

export default Projects;
