import React from 'react';
import styles from '@/styles/projects.module.css';
import { HoverEffect  } from './cardHover';

const Projects = (props: { theme: any }) => {
  return (
    <div id="projects" className={`${styles.section} ${props.theme}`}>
      <div className={styles.sectionTitle}>Projects</div>
      <div className={styles.carouselContainer}>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Projects;

export const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A Next.js-based personal portfolio showcasing front-end programming skills, professional experiences, and projects. Designed from scratch with Material Design principles, the portfolio emphasizes a clean, user-centric UI built using custom components and modern tools.",
    link: "https://github.com/Valcon4717/Portfolio",
    sub: "Next.js TypeScript JavaScript CSS Tailwind Figma"
  },
  {
    title: "TRACE",
    description:
      "A web-app designed for the DoD to consolidate penetration testing tools and techniques into a single intuitive real-time dashboard. TRACE supports project-based scanning, AI-powered credential generation, and visual mapping of vulnerabilities using modular service components.",
    link: "https://github.com/Valcon4717/TRACE_CyberGuardians",
    sub: "SvelteKit FastAPI Python Neo4j Tailwind CSS Figma"
  },
  {
    title: "UniCart",
    description:
      "A collaborative grocery Flutter application designed for students and roommates to manage grocery lists and optimize shopping experiences. The app enables real-time list syncing, item tracking, group management, and future integrations like iOS Live Activities and budget split tools.",
    link: "https://github.com/Valcon4717/UniCart",
    sub: "Flutter Dart Firebase Firestore KrogerAPI Figma"
  },
  {
    title: "PowerPit",
    description:
      "A fitness-tracking web application built using React, Firebase, and Fluent UI. It provides features for workout creation, scheduling, nutrition tracking, and gym membership management. Developed with the Atomic Design Pattern, it also integrates AI for personalized workout plans.",
    link: "https://team-9-56497.firebaseapp.com/",
    sub: "React.js TypeScript JavaScript Firebase FireStore FluentUI Tailwind CSS Figma Vite"
  },
  {
    title: "SmartGrades",
    description:
      "A machine learning project analyzing factors influencing student performance, such as study hours, attendance, and resource access. Focused on data-driven decision-making, it uses linear regression, Lasso, Ridge, and Random Forest models to highlight impactful habits beyond studying.",
    link: "https://github.com/Valcon4717/StudyBuddy/tree/main",
    sub: "Python Pandas NumPy Scikit-learn GoogleColab"
  },
  {
    title: "UTEP Instructors",
    description:
      "A database project created using SQL, MySQL, and PHP to manage instructors, students, courses, research projects, and labs at UTEP. It features robust database design and user interfaces to allow easy access and updates to data, with functionality for reports and administrative tasks.",
    link: "https://github.com/Valcon4717/DB4342",
    sub: "MySQL SQL PHP CSS"
  },
  {
    title: "TicketMiner",
    description:
      "A Java-based ticketing system enabling event management and ticket booking. Built with Object-Oriented Programming principles, the project includes event creation and modification features, with comprehensive testing using JUnit and detailed documentation via Javadoc.",
    link: "https://github.com/UTEPAOOP/pa5-valeria_javier_steven_eric",
    sub: "Java JUnit Javadoc"
  },
];