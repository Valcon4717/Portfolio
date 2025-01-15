import React from "react";
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/components/themeSwitch";
import Footer from "@/components/footer";
import { useTheme } from "../themeContext";
import styles from "@/styles/projects.module.css";
import { HoverEffect } from '@/components/card-hover-effect';

const Projects = () => {
  const { theme, setTheme } = useTheme();

  const projects = [
    {
      title: "Project 1",
      description: "This is a project description",
      image: "../public/profilePicture.svg",
      link: "https://github.com",
    },
    {
      title: "Project 2",
      description: "This is a project description",
      image: "../public/profilePicture.svg",
      link: "https://github.com",
    },
    {
      title: "Project 3",
      description: "This is a project description",
      image: "../public/profilePicture.svg",
      link: "https://github.com",
    },
    {
      title: "Project 4",
      description: "This is a project description",
      image: "../public/profilePicture.svg",
      link: "https://github.com",
    },
    {
      title: "Project 5",
      description: "This is a project description",
      image: "../public/profilePicture.svg",
      link: "https://github.com",
    },
    {
      title: "Project 6",
      description: "This is a project description",
      image: "../public/profilePicture.svg",
      link: "https://github.com",
    },
  ];

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
        <div className={styles.cardContainer}>
          <HoverEffect items={projects} />          
        </div>
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default Projects;