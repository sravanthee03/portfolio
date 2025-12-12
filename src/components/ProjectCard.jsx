// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition flex flex-col justify-between border border-gray-200 dark:border-gray-700"
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {project.subtitle}
      </p>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200"
          >
            {t}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <div className="mt-5">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
        >
          View on GitHub →
        </a>
      </div>
    </motion.div>
  );
}
