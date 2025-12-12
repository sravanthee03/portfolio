// src/components/BackgroundFX.jsx
import React, { useEffect, useRef } from "react";

/**
 * Robust BackgroundFX with cursor-follow spotlight.
 * - Uses left/top to position spotlight (more resilient)
 * - Smooths motion with lerp in requestAnimationFrame
 * - Falls back gracefully if prefers-reduced-motion is enabled
 */
export default function BackgroundFX() {
  const spotlightRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    // initial center placement
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    const ease = 0.18;

    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // Keep it faint and static for accessibility
      spotlight.style.opacity = "0.08";
      spotlight.style.left = `${targetX}px`;
      spotlight.style.top = `${targetY}px`;
      return;
    }

    function onPointerMove(e) {
      // Accept touch and mouse via clientX/Y
      targetX = e.clientX;
      targetY = e.clientY;
      // make visible
      spotlight.style.opacity = "1";
      // ensure pointer events unaffected
    }

    function onLeave() {
      // fade out spotlight a bit when leaving window
      spotlight.style.opacity = "0.06";
    }

    function tick() {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      // position by left/top and keep translate(-50%,-50%) in CSS for centering
      spotlight.style.left = `${Math.round(currentX)}px`;
      spotlight.style.top = `${Math.round(currentY)}px`;

      rafRef.current = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="bgfx-root" aria-hidden>
      {/* Blobs (light/dark) */}
      <div className="bg-blob blob-1 light" />
      <div className="bg-blob blob-2 light" />
      <div className="bg-blob blob-3 light" />

      <div className="bg-blob blob-1 dark" />
      <div className="bg-blob blob-2 dark" />
      <div className="bg-blob blob-3 dark" />

      {/* Spotlight positioned via left/top from JS; CSS keeps translate(-50%,-50%) centering */}
      <div
        ref={spotlightRef}
        className="bg-spotlight"
        style={{ left: "50%", top: "50%", opacity: 0.06 }}
      />
    </div>
  );
}
