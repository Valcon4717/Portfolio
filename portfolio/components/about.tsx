import React from "react";
import Image from "next/image";
import styles from "@/styles/about.module.css";
import graphicDark1 from "../public/Dark/graphic 1.2.svg";
import graphicLight1 from "../public/Light/graphic 1.2.svg";
import graphicDark2 from "../public/Dark/graphic 2.svg";
import graphicLight2 from "../public/Light/graphic 2.svg";
import profilePic from "../public/ProfilePic.svg";
import coffee from "../public/CoffeeLogo.svg";

const About = (props: { theme: any }) => {
  return (
    <div id="about" className={`${styles.section} ${props.theme}`}>
      <div className={styles.grid}>
        <div className={styles.imageBlock}>
          <Image
            src={profilePic}
            alt="profilePic"
            width={600}
            height={600}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.textBlock}>
          <h4 className={styles.title}>
            About Me
            <Image
              src={coffee}
              alt="coffee logo"
              width={55}
              height={55}
              className={styles.emoji}
            />
          </h4>
          <div className={styles.subtitle}>
            <p>
              Hi, I&apos;m Valeria, a third-year student at The University of
              Texas at El Paso with a deep passion for&nbsp;
              <span style={{ color: "var(--primary)" }}>
                &nbsp;front-end development
              </span>
              &nbsp;and&nbsp;
              <span style={{ color: "var(--primary)" }}>
                &nbsp;UI/UX design
              </span>
              . I&apos;ve developed a diverse skill set that includes&nbsp;
              <span style={{ color: "var(--primary)" }}>
                Java, Python, TypeScript, C, Swift, HTML, CSS,
              </span>
              &nbsp;and&nbsp;
              <span style={{ color: "var(--primary)" }}>SCSS,</span>
              &nbsp;along with proficiency in tools like GitHub, Figma, and
              Xcode. My experience has been further enriched by internships
              at&nbsp;
              <span style={{ color: "var(--primary)" }}>Microsoft,</span>
              &nbsp;where I&apos;ve embraced the challenge of complex front-end
              projects for apps and websites. <br />
              <br />I find my creative spark in nature, often rock climbing and
              hiking. These activities provide a physical challenge and a fresh
              perspective that I bring back to my coding. I&apos;m an avid video
              gamer in my downtime, finding relaxation and inspiration in the
              virtual world. My passion for creativity also extends to the
              kitchen, where I love experimenting with new recipes. And when
              it&apos;s time to study or unwind, you&apos;ll likely find me in a
              cozy coffee shop, sipping on a good cup of coffee. <br />
              <br />I am excited about the future of&nbsp;
              <span style={{ color: "var(--primary)" }}>web</span>
              &nbsp;and&nbsp;
              <span style={{ color: "var(--primary)" }}>app development</span>
              &nbsp;and am always keen on exploring new technologies and design
              trends. Feel free to reach out if you&apos;re interested in
              discussing tech or potential collaborations or want to share your
              favorite video game or coffee!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.graphicTop}>
        {props.theme === "dark-mode" ? (
          <Image
            src={graphicDark1}
            alt="darkGraphic1 icon"
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
        ) : (
          <Image
            src={graphicLight1}
            alt="lightGraphic1 icon"
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <div className={styles.graphicBtm}>
        {props.theme === "dark-mode" ? (
          <Image
            src={graphicDark2}
            alt="darkGraphic2 icon"
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
        ) : (
          <Image
            src={graphicLight2}
            alt="lightGraphic2 icon"
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
    </div>
    
  );
};

export default About;
