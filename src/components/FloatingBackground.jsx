// src/components/FloatingBackground.jsx
import React from "react";

export default function FloatingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Light floating blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-ping"></div>

      {/* Slow rotating gradient ring */}
      <div className="absolute -top-20 right-1/4 w-96 h-96 border-[1px] border-blue-400/20 dark:border-blue-300/10 rounded-full animate-spin-slow"></div>
    </div>
  );
}
