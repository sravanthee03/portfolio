// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

/*
  Animated skill bars. Edit the 'skills' array to change skill names/values.
*/

const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 70 },
  { name: "HTML / CSS", level: 92 },
  { name: "SQL", level: 75 },
  { name: "Machine Learning", level: 72 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-transparent">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-heading">Skills</h2>
        <p className="section-sub">
          Technical skills and developer tools I use regularly.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {skills.map((s) => (
              <div key={s.name} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{s.level}%</div>
                </div>

                <div className="w-full bg-white/30 dark:bg-white/6 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="h-3 rounded-full bg-gradient-to-r from-[#7DD3FC] to-[#C4B5FD]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Developer Tools</h4>
            <div className="flex flex-wrap gap-3">
              {["VS Code", "Eclipse", "IDLE", "Keil", "Git", "Firebase"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white/80 dark:bg-white/6 text-sm font-medium shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3">What I focus on</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>LLM-based tool building and embeddings</li>
                <li>Audio/ML pipelines for emotion detection</li>
                <li>Real-time messaging systems & scalable backends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
