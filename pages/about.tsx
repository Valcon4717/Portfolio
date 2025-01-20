import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/components/themeSwitch";
import Footer from "@/components/footer";
import { useTheme } from "../themeContext";
import styles from "@/styles/about.module.css";
import profilePic from "../public/profilePicture.svg";
import gallery from "../public/photoGallery.optimized.svg"; 

const About = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={theme}>
      <ThemeSwitch
        theme={theme}
        toggleTheme={() =>
          setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode")
        }
      />
      <Navbar theme={theme} />
      <div id="about" className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.imageBlock}>
            <Image
              src={profilePic}
              alt="Profile Pic"
              style={{ objectFit: "cover"}}
            />
          </div>
          <div className={styles.textBlock}>
            <h4 className={styles.title}>
              hey there 👋🏼
            </h4>
            <div className={styles.subtitle}>
              <p>
                I&apos;m Valeria 😊, a fourth-year computer science
                student at The University of Texas at El Paso. I&apos;m
                passionate about designing intuitive user experiences and
                transforming creative ideas into functional and engaging
                front-end 🎨 solutions. 
              </p>
              <p>
                When I&apos;m not coding, I&apos;m often
                recharging by rock climbing or hiking 🧗🏼‍♀️. As a coffee enthusiast ☕,
                I&apos;ve been working on my brewing skills and dabbling in
                latte art, it&apos;s not quite café-worthy yet, but I&apos;m
                making progress!
              </p>
              <p>
                I&apos;m excited to combine my technical
                expertise with my love for design to create impactful solutions.
                Feel free to reach out, I&apos;d love to connect, collaborate on
                projects, or share ideas!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.gallery}>
          <Image
              src={gallery}
              alt="Gallery"
              height={700}
              style={{ objectFit: "contain" }}
            />
        </div>
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default About;

{/* <p>
Over time, I&apos;ve built a strong
technical foundation with skills spanning:
<ul>
🖥️ <strong>Languages:</strong> Java, Python, TypeScript, Swift,
SQL, HTML, CSS, and PHP.
</ul>
<ul>
🔨 <strong>Tools and Databases:</strong> Figma, GitHub, React,
Next.js, MySQL, Firestore, and GraphQL.
</ul>
</p> */}
