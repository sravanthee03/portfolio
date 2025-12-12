// src/components/Spotlight.jsx
import React, { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    // create and append element
    const el = document.createElement("div");
    el.id = "spotlight";
    el.className = "spotlight";
    document.body.appendChild(el);

    let lastMove = 0;
    const onMove = (e) => {
      const now = Date.now();
      if (now - lastMove < 8) return; // throttle
      lastMove = now;
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.opacity = "1";
      // shrink on mobile interaction
      const scale = window.innerWidth < 640 ? 0.6 : 1;
      el.style.transform = `translate(-50%,-50%) scale(${scale})`;
    };
    const onLeave = () => { el.style.opacity = "0"; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
      if (el && el.parentNode) el.parentNode.removeChild(el);
    };
  }, []);

  return null; // purely DOM side-effect
}
