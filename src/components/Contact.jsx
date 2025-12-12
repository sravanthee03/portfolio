// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-transparent">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-sub">I’m currently open to new opportunities — feel free to connect!</p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a href="mailto:youremail@example.com" className="btn-primary">Email Me</a>
          <a href="https://www.linkedin.com/in/sravanthee-reddy/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full border bg-white/6">LinkedIn</a>
          <a href="https://github.com/sravanthee03" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full border bg-white/6">GitHub</a>
        </div>
      </div>
    </section>
  );
}
