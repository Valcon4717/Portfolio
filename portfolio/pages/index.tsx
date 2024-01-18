import Footer from "@/components/footer";
import About from "@/components/about";
import Experience from "@/components/experience";
import Resume from "@/components/resume";
import Navbar from "@/components/navbar";
import { useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState("dark-mode");
  return (
    <div
      className={`min-h-screen ${theme}`}
      style={{ backgroundColor: "var(--background)" }}
    >
      <Navbar theme={theme}></Navbar>
      <button
        onClick={() =>
          setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode")
        }
      >
        Toggle theme
      </button>
      <About />
      <Experience />
      <Resume />
      <Footer />
    </div>
  );
};

export default Home;
