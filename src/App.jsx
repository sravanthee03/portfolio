// src/App.jsx
import React from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import ScrollProgress from "./components/ScrollProgress";
import BackgroundFX from "./components/BackgroundFX";

export default function App() {
  return (
    <div className="relative bg-blue-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 min-h-screen scroll-smooth transition-colors duration-300">

      {/* Background Animation */}
      <BackgroundFX />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      

      {/* MAIN CONTENT */}
      <main className="relative z-10">

        {/* HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20">
          <About />
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20">
          <Skills />
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="py-20">
          <Certificates />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20">
          <Projects />
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <Contact />
        </section>

        <div className="relative ...">
  <BackgroundFX />
  {/* rest of app */}
</div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
