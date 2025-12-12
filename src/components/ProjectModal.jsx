// src/components/ProjectModal.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ open, onClose, project }) {
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef(null);

  useEffect(() => {
    setIndex(0);
  }, [project]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, (project?.screenshots?.length || 1) - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, project, onClose]);

  useEffect(() => {
    // scroll to the selected screenshot in scroller
    const scroller = scrollerRef.current;
    if (!scroller || !project) return;
    const child = scroller.children[index];
    if (child) child.scrollIntoView({ behavior: "smooth", inline: "center" });
  }, [index, project]);

  if (!open || !project) return null;

  const count = project.screenshots?.length || 0;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 max-w-4xl w-full bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-2xl"
      >
        <div className="p-4 flex items-start justify-between border-b border-gray-100 dark:border-neutral-800">
          <div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.subtitle}</p>
          </div>
          <button onClick={onClose} className="text-sm px-3 py-1 rounded-md bg-white/50 dark:bg-white/6">Close</button>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-neutral-800">
          <div ref={scrollerRef} className="flex gap-3 overflow-x-auto snap-x snap-mandatory py-2 px-1 project-gallery">
            {project.screenshots.map((src, idx) => (
              <div key={idx} className="snap-center flex-shrink-0 w-[80%] md:w-[60%]">
                <img src={src} loading="lazy" alt={`${project.title} ${idx+1}`} className="w-full h-auto rounded-lg object-cover shadow" />
              </div>
            ))}
          </div>

          {/* arrows + indicators */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                disabled={index === 0}
                className="px-3 py-2 rounded-md bg-white/80 dark:bg-white/6"
              >
                ← Prev
              </button>
              <button
                onClick={() => setIndex((i) => Math.min(i + 1, count - 1))}
                disabled={index === count - 1}
                className="px-3 py-2 rounded-md bg-white/80 dark:bg-white/6"
              >
                Next →
              </button>
            </div>

            <div className="flex items-center gap-2">
              {project.screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full ${i === index ? "bg-black dark:bg-white" : "bg-black/20 dark:bg-white/20"}`}
                  aria-label={`Go to slide ${i+1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 dark:border-neutral-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
          <div className="mt-4 flex gap-3">
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-black/90 text-white text-sm">GitHub</a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border">Live demo</a>}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
