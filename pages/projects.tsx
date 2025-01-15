import React from "react";
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/components/themeSwitch";
import Footer from "@/components/footer";
import { useTheme } from "../themeContext";
import styles from "@/styles/projects.module.css";

const Projects = () => {
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
      <div id="projects" className={styles.section}>
        <div className={styles.WIP}>WIP</div>
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default Projects;