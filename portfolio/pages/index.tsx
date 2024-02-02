import Footer from "@/components/footer";
import About from "@/components/about";
import Experience from "@/components/experience";
import Resume from "@/components/resume";
import Navbar from "@/components/navbar";
import { useState } from "react";
import ThemeSwitch from "@/components/themeSwitch";
import Home from "@/components/home";

const Index = () => {
  // state variable theme initialized to "dark-mode"
  const [theme, setTheme] = useState("dark-mode");

  return (
    <div>
      <ThemeSwitch
        theme={theme} 
        toggleTheme={() => setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode")}
      />
      <Navbar theme={theme} />
      <Home theme={theme}/>
      <About theme={theme}/>
      <Experience theme={theme}/>
      <Resume />
      <Footer/>
    </div>
  );
};

export default Index;

