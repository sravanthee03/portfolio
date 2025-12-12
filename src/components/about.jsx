// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          About Me
        </h2>

        {/* Main Paragraph */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-center">
          I build intelligent, user-friendly software — focusing on AI-powered tools,
          audio/ML systems, and real-time web applications. I enjoy turning research
          and data into practical products that help people study, communicate, and
          solve real problems.
        </p>

        {/* Skills / Tools */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-12 text-center text-gray-800 dark:text-gray-200 text-lg">
          <div>
            <strong className="text-gray-900 dark:text-white">Languages:</strong>{" "}
            Python, Java, HTML/CSS, SQL
          </div>

          <div>
            <strong className="text-gray-900 dark:text-white">Tools:</strong>{" "}
            VS Code, Eclipse, IDLE, Keil
          </div>
        </div>
      </div>
    </section>
  );
}
