import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { InteractiveNodes } from "./components/InteractiveNodes";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Portfolio } from "./sections/Portfolio";
import { Identitas } from "./sections/Identitas";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Real-time page scroll section highlighter
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "portfolio",
        "identitas",
        "contact",
      ];
      const scrollPos = window.scrollY + 250; // offset margin for smoother snapping

      for (const sect of sections) {
        const element = document.getElementById(sect);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-[#0A0A0B] font-sans text-slate-200 overflow-x-hidden selection:bg-brand-cyan/30 selection:text-white"
      id="syncdev-studio-app"
    >
      {/* Absolute canvas nodes graphic system in the background */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        id="ambient-nodes-overlay"
      >
        <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
        <InteractiveNodes />
      </div>

      {/* Floating high-tech Header Nav */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Synchronized content sections */}
      <main className="relative z-10 w-full" id="main-content-flow">
        {/* HERO */}
        <Hero onNavigate={handleNavigate} />

        {/* SERVICES */}
        <Services onNavigate={handleNavigate} />

        {/* CASE STUDIES PORTFOLIO */}
        <Portfolio />

        {/* TEAM IDENTITY */}
        <Identitas />

        {/* CONTACT & FAQs */}
        <Contact />
      </main>

      {/* STUDIO FOOTER */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
