import Footer from "@/components/footer";
import Experience from "@/components/experience";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useTheme } from '../themeContext'; // Ensure correct path
import ThemeSwitch from "@/components/themeSwitch";
import Home from "@/components/home";

const Index = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
      <Navbar theme={theme}/>
      <Home theme={theme}/>
      <Experience theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
};

export default Index;
