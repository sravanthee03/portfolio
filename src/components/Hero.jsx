// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="bg-transparent">
      <div className="container max-w-7xl mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <motion.div
            className="md:col-span-7 text-center md:text-left"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            

            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight section-heading">
              I’m <span className="text-gradient">Sravanthee</span>
            </h1>

            <p className="mt-4 text-base md:text-lg section-sub">
              AI & Software Developer — building LLM tools, voice ML systems, and real-time web applications.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects" className="btn-primary" aria-label="See my projects">View Projects</a>
              <a 
  href="https://drive.google.com/file/d/1Y1qs833EkmWJB_ss9C7_cVXK4zzH2HlJ/view?usp=sharing" 
  target="_blank" 
  rel="noreferrer" 
  className="px-4 py-2 rounded-full border bg-white/80 dark:bg-white/6 text-sm"
>
  Resume
</a>

            </div>
          </motion.div>

          <motion.div
  className="md:col-span-5 flex justify-center md:justify-end"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg bg-gray-200 dark:bg-neutral-800">
    <img
      src={profile}
      alt="Sravanthee"
      className="w-full h-full object-cover"
      style={{ objectPosition: "50% 20%" }}
    />
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}
