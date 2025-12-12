// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-transparent text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="container max-w-6xl mx-auto">
        &copy; {new Date().getFullYear()} Sravanthee. All rights reserved.
      </div>
    </footer>
  );
}
