// src/components/Navbar.jsx
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";
import useActiveSection from "../hooks/useActiveSection";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Certificates", href: "#certificates", id: "certificates" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // CALL THE HOOK INSIDE THE COMPONENT (not at top-level)
  const active = useActiveSection(links.map(l => l.id));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
          <span className="hidden md:inline font-extrabold text-lg dark:text-white text-gray-900">Sravanthee</span>
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.name}
                href={l.href}
                className={`text-sm ${isActive ? "text-accent font-semibold" : "text-gray-700 dark:text-gray-200"} hover:text-accent transition`}
              >
                {l.name}
              </a>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(v => !v)} className="p-2 rounded-md bg-gray-100 dark:bg-white/5">
            <svg className="w-5 h-5 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.name} href={l.href} className="text-gray-800 dark:text-gray-200 hover:text-accent transition">{l.name}</a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
