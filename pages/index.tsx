import Footer from "@/components/footer";
import Experience from "@/components/experience";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useTheme } from "../themeContext";
import ThemeSwitch from "@/components/themeSwitch";
import Home from "@/components/home";
import Projects from "@/components/projects";

const Index = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode");
  };

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark-mode"
      : "light-mode";

    setTheme(systemTheme);

    document.body.className = systemTheme;
  }, [setTheme]);

  return (
    <div>
      <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
      <Navbar theme={theme} />
      <Home theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default Index;
