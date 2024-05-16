import Footer from "@/components/footer";
import Experience from "@/components/experience";
import Resume from "@/components/resume";
import Navbar from "@/components/navbar";
import { useState } from "react";
import ThemeSwitch from "@/components/themeSwitch";
import Home from "@/components/home";

const Index = () => {
  const [theme, setTheme] = useState("dark-mode");

  return (
    <div>
      <ThemeSwitch
        theme={theme} 
        toggleTheme={() => setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode")}
      />
      <Navbar theme={theme} />
      <Home theme={theme}/>
      <Experience theme={theme}/>
      <Resume />
      <Footer/>
    </div>
  );
};

export default Index;

