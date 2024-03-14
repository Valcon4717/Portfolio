import React from 'react';
import styles from "@/styles/experience.module.css";


const Experience = (props: { theme: any }) => {
  return (
    <div id="experience" className={`${styles.section} ${props.theme}`}>
      <div className={styles.grid}> 
        <h3>
            Experience page
        </h3>
      </div>
    </div>
  );
};
export default Experience;
