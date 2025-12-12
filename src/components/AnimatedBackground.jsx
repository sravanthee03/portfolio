// src/components/AnimatedBackground.jsx
import React from "react";

/**
 * AnimatedBackground
 * - Theme-aware: uses .dark on the html/body to switch palettes
 * - Non-interactive (pointer-events: none) so it doesn't block clicks
 * - Low-cost: CSS-only animations + transform-based motion
 */
export default function AnimatedBackground() {
  return (
    <div aria-hidden className="animated-bg -z-20 pointer-events-none fixed inset-0">
      {/* slow shifting gradients */}
      <div className="bg-layer bg-layer-1" />
      <div className="bg-layer bg-layer-2" />

      {/* floating orbs (you can add/remove as needed) */}
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="orb orb-d" />
    </div>
  );
}
