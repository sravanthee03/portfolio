// src/components/Particles.jsx
import React, { useEffect, useRef } from "react";

/**
 * Desktop-friendly lightweight particle background.
 * Props:
 *  - particleCount (number) default 60
 *  - zIndex (number) default -30
 *  - opacity (number 0..1) default 0.22
 */
export default function Particles({ particleCount = 60, zIndex = -30, opacity = 0.22 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, down: false });
  const particlesRef = useRef([]);
  const themeRef = useRef(determineTheme());

  function determineTheme() {
    try {
      // prefer explicit class on html
      const html = document.documentElement;
      if (html.classList.contains("dark")) return "dark";
      // else fallback to system preference
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let width = 0;
    let height = 0;
    const devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    // particle class
    class P {
      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        const speed = 0.2 + Math.random() * 0.9;
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.radius = 0.8 + Math.random() * 2.2;
        this.baseAlpha = 0.08 + Math.random() * 0.22;
        this.alpha = initial ? Math.random() * this.baseAlpha : 0;
        this.h = themeRef.current === "dark" ? 220 + Math.random() * 40 : 200 + Math.random() * 40;
        this.s = themeRef.current === "dark" ? 30 + Math.random() * 30 : 50 + Math.random() * 20;
        this.l = themeRef.current === "dark" ? 60 + Math.random() * 10 : 45 + Math.random() * 6;
      }
      step(dt) {
        // velocity damping
        this.x += this.vx * dt;
        this.y += this.vy * dt;

        // wrap edges
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        // alpha breathing
        this.alpha += Math.sin(Date.now() / 1000 + this.radius) * 0.002;
        this.alpha = Math.max(0, Math.min(this.baseAlpha + 0.12, this.alpha));

        // react to mouse (repel)
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        if (mx >= 0 && my >= 0) {
          const dx = this.x - mx;
          const dy = this.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const min = 60; // repulsion radius
          if (dist < min && dist > 0.1) {
            const force = (1 - dist / min) * 0.85;
            this.vx += (dx / dist) * force * 0.35;
            this.vy += (dy / dist) * force * 0.35;
          }
        }

        // gentle slowdown
        this.vx *= 0.995;
        this.vy *= 0.995;

        // limit speed
        const sp = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSp = 2.4;
        if (sp > maxSp) {
          this.vx = (this.vx / sp) * maxSp;
          this.vy = (this.vy / sp) * maxSp;
        }
      }
      draw(ctx) {
        ctx.beginPath();
        const color = `hsl(${this.h} ${this.s}% ${this.l} / ${this.alpha * opacity})`;
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // create particles
    function initParticles() {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new P());
      }
    }

    // connect lines
    function drawConnections() {
      const pts = particlesRef.current;
      const len = pts.length;
      for (let i = 0; i < len; i++) {
        const a = pts[i];
        for (let j = i + 1; j < len; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const maxDist = 110 * (themeRef.current === "dark" ? 1.0 : 0.9);
          if (d2 < maxDist * maxDist) {
            const dist = Math.sqrt(d2);
            const alpha = (1 - dist / maxDist) * 0.12 * opacity;
            ctx.strokeStyle = `hsl(${(a.h + b.h) / 2} ${a.s}% ${a.l}% / ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    }

    let lastT = performance.now();
    function frame(t) {
      const dt = Math.min(1.0, (t - lastT) / 16.666);
      lastT = t;

      ctx.clearRect(0, 0, width, height);

      // subtle background gradient overlay for a glowy feel
      if (themeRef.current === "dark") {
        ctx.fillStyle = "rgba(6,10,17,0.02)";
      } else {
        ctx.fillStyle = "rgba(255,255,255,0.02)";
      }
      ctx.fillRect(0, 0, width, height);

      // step + draw particles
      const pts = particlesRef.current;
      for (let i = 0; i < pts.length; i++) {
        pts[i].step(dt);
        pts[i].draw(ctx);
      }

      // connections
      drawConnections();

      rafRef.current = requestAnimationFrame(frame);
    }

    // handle pointer
    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current.x = x;
      mouseRef.current.y = y;
    }
    function onPointerLeave() {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }

    // react to theme changes (via html.dark toggle or system)
    const observer = new MutationObserver(() => {
      const newTheme = determineTheme();
      if (newTheme !== themeRef.current) {
        themeRef.current = newTheme;
        // recolor particles gently by recreating their HSL bases
        for (const p of particlesRef.current) {
          p.h = themeRef.current === "dark" ? 220 + Math.random() * 40 : 200 + Math.random() * 40;
          p.s = themeRef.current === "dark" ? 30 + Math.random() * 30 : 50 + Math.random() * 20;
          p.l = themeRef.current === "dark" ? 60 + Math.random() * 10 : 45 + Math.random() * 6;
        }
      }
    });
    try {
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    } catch (err) {
      // ignore
    }

    // init
    function start() {
      resize();
      initParticles();
      window.addEventListener("resize", resize, { passive: true });
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave, { passive: true });
      rafRef.current = requestAnimationFrame(frame);
    }

    start();

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      observer.disconnect();
      // release canvas
      ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [particleCount, opacity]);

  // inline styles ensure the canvas sits behind content
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex,
        pointerEvents: "none",
        opacity: 1,
      }}
    />
  );
}
