// src/components/ScrollProgress.jsx
import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const p = height ? Math.round((scrollTop / height) * 100) : 0;
      setPct(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div style={{ width: `${pct}%` }} className="h-1 bg-gradient-to-r from-brand-400 to-vio transition-all duration-150"></div>
    </div>
  );
}
