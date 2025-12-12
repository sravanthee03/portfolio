// src/components/Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "LLM-Based Personal Memory Assistant",
    subtitle: "AI-powered study assistant",
    description:
      "Stores notes, habits, and mistakes using embeddings and retrieves them intelligently to help students learn better.",
    tech: ["Python", "LLMs", "Embeddings", "Flask"],
    github: "https://github.com/sravanthee03/second-brain",
  },
  {
    id: 2,
    title: "Voice Stress & Emotion Detection",
    subtitle: "Realtime audio emotion classifier",
    description:
      "Analyzes voice recordings in real time to detect stress and emotional patterns for wellness monitoring.",
    tech: ["Python", "Librosa", "TensorFlow"],
    github: "https://github.com/sravanthee03/voice-stress-detector",
  },
  {
    id: 3,
    title: "Realtime Chat Application",
    subtitle: "WebSocket-based chat",
    description:
      "A fast and secure full-stack chat with JWT authentication, WebSockets, and typing indicators.",
    tech: ["React", "Node.js", "Socket.io", "JWT"],
    github: "https://github.com/sravanthee03/Real-Time-Chat",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-center text-4xl font-bold mb-10">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, index) => (
          <ProjectCard key={p.id} project={p} index={index} />
        ))}
      </div>
    </section>
  );
}
