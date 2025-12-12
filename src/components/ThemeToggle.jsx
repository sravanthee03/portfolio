// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  // null = not yet determined, true = dark, false = light
  const [isDark, setIsDark] = useState(null);

  // initialize from localStorage or OS preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem("site-theme");
      if (stored === "dark") {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      } else if (stored === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      } else {
        // no stored pref -> respect OS
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
      }
    } catch (e) {
      // fail gracefully (e.g., file:// or strict privacy mode)
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // toggle handler
  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      localStorage.setItem("site-theme", next ? "dark" : "light");
    } catch (e) {
      // ignore storage errors
    }
    document.documentElement.classList.toggle("dark", next);
  };

  // while initializing, render a tiny placeholder (avoids mismatch during SSR/hydration)
  if (isDark === null) {
    return (
      <button aria-label="Toggle theme" className="px-2 py-1 rounded-md bg-gray-100 dark:bg-white/5" onClick={() => toggle()}>
        ⏳
      </button>
    );
  }

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className="px-3 py-1 rounded-md bg-gray-100 dark:bg-white/5 flex items-center gap-2"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
