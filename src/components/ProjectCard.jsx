// src/components/ProjectCard.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onOpen }) {
  const el = useRef(null);

  // pointer tilt — updates transform inline
  const handlePointerMove = (e) => {
    const node = el.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * 6; // rotateX
    const ry = (px - 0.5) * -8; // rotateY
    node.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
  };
  const handlePointerLeave = () => {
    const node = el.current;
    if (!node) return;
    node.style.transform = `none`;
  };

  return (
    <motion.article
      ref={el}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative card overflow-hidden"
    >
      <div className="relative">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-44 object-cover rounded-md"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/30">
          <button
            onClick={() => onOpen(project)}
            className="px-4 py-2 rounded-md bg-white text-sm font-semibold"
          >
            View screenshots
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{project.subtitle}</p>

        {/* tech chips */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/80 dark:bg-white/6">{t}</span>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-sm underline">GitHub</a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm underline">Live demo</a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
