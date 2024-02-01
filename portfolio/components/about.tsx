import React from "react";
import styles from "@/styles/about.module.css";
import Image from "next/image";
import graphicDark1 from "../public/Dark/graphic 1.2.svg";
import graphicLight1 from "../public/Light/graphic 1.2.svg";
// import graphicLight2 from "../public/Dark/graphic 2.svg";
// import graphicDark2 from "../public/Light/graphic 2.svg";
import profilePic from "../public/ProfilePic.svg";

const About = (props: { theme: any }) => {
  return (
    <div id="about" className={`${styles.section} ${props.theme}`}>
      <div className={styles.grid}>
        <div className={styles.imageBlock}>
          <Image
                src={profilePic}
                alt="profilePic"
                width={60}
                height={60}
                className={styles.imagePic}
              />
        </div>

      </div>
      <div className={styles.graphic}>
        {props.theme === "dark-mode" ? (
          <Image
            src={graphicDark1}
            alt="darkGraphic1 icon"
            width={300}
            height={300}
            layout="responsive"
          />
        ) : (
          <Image
            src={graphicLight1}
            alt="lightGraphic1 icon"
            width={300}
            height={300}
            layout="responsive"
          />
        )}
      </div>
    </div>
  );
};

export default About;
