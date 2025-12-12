// src/components/Projects.jsx
import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

/* Projects data: add/remove or edit tag array for filtering */
const projectsData = [
  {
    id: "second-brain",
    title: "LLM-Based Personal Memory Assistant",
    subtitle: "Personal study assistant using embeddings & LLMs.",
    description:
      "Stores notes and retrieves context-aware responses using embeddings. Generates study plans and personalized feedback.",
    github: "https://github.com/sravanthee03/second-brain",
    demo: null,
    thumbnail: "/src/assets/llm.png",
    screenshots: [
      "/src/assets/llm.png",
      "/src/assets/llm.png",
    ],
    tags: ["AI", "Web"],
    tech: ["Python", "React", "OpenAI"],
  },
  {
    id: "voice-stress-detector",
    title: "Voice Stress & Emotion Detection",
    subtitle: "Realtime voice emotion & stress detection pipeline.",
    description:
      "Extracts audio features and predicts emotional states for wellness monitoring.",
    github: "https://github.com/sravanthee03/voice-stress-detector",
    demo: null,
    thumbnail: "/src/assets/voice.png",
    screenshots: [
      "/src/assets/voice.png",
      "/src/assets/voice.png",
    ],
    tags: ["ML", "Audio"],
    tech: ["Python", "Librosa", "TensorFlow"],
  },
  {
    id: "real-time-chat",
    title: "Real-Time Chat Application",
    subtitle: "Full-stack chat with WebSockets & JWT auth.",
    description:
      "Real-time messaging, message syncing and scalable cloud deployment.",
    github: "https://github.com/sravanthee03/Real-Time-Chat",
    demo: null,
    thumbnail: "/src/assets/reltime.png",
    screenshots: [
      "/src/assets/reltime.png",
      "/src/assets/reltime.png",
    ],
    tags: ["Web"],
    tech: ["Node", "Socket.io", "React"],
  },
];

const AVAILABLE_TAGS = ["All", "AI", "ML", "Web", "Audio"];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [openProject, setOpenProject] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projectsData.filter((p) => {
      if (activeTag !== "All" && !p.tags.includes(activeTag)) return false;
      if (!q) return true;
      const searchable = `${p.title} ${p.subtitle} ${p.tags.join(" ")} ${p.tech.join(" ")}`.toLowerCase();
      return searchable.includes(q);
    });
  }, [query, activeTag]);

  return (
    <section id="projects" className="bg-transparent">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-heading">My Projects</h2>
        <p className="section-sub">Filter, search, and click a project to view screenshots and details.</p>

        {/* Controls */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            {AVAILABLE_TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${activeTag === t ? "bg-gradient-to-r from-[#7DD3FC] to-[#C4B5FD] text-black" : "bg-white/80 dark:bg-white/6 text-gray-700"}`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech or tags..."
              className="px-3 py-2 rounded-md border bg-white/90 dark:bg-white/6"
            />
            <div className="text-sm text-gray-500 dark:text-gray-400">{filtered.length} results</div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid-cards mt-8">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={(proj) => setOpenProject(proj)} />
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-600 dark:text-gray-300 py-10">
              No projects found — try another filter or search term.
            </div>
          )}
        </div>
      </div>

      <ProjectModal
        open={!!openProject}
        onClose={() => setOpenProject(null)}
        project={openProject}
      />
    </section>
  );
}
