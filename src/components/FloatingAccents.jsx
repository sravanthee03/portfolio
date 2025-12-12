// src/components/FloatingAccents.jsx
import React from "react";

export default function FloatingAccents() {
  return (
    <div aria-hidden className="pointer-events-none">
      {/* left orb */}
      <div className="accent-orb -left-32 top-20 w-56 h-56 md:w-72 md:h-72" />
      {/* right orb */}
      <div className="accent-orb -right-28 top-36 w-44 h-44 md:w-60 md:h-60" />
      {/* small drifting dots */}
      <div className="accent-dot left-8 top-72" />
      <div className="accent-dot right-12 top-10" />
    </div>
  );
}
