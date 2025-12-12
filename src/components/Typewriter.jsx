// Typewriter.jsx
import React, { useEffect, useState } from "react";

/**
 * Small, dependency-free typewriter.
 * Usage: <Typewriter phrases={['AI & Software Developer','ML Engineer','React Developer']} />
 */
export default function Typewriter({ phrases = [], speed = 50, pause = 1200 }) {
  const [text, setText] = useState("");
  const [pi, setPi] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;
    let mounted = true;
    let idx = 0;
    let charIdx = 0;

    const tick = () => {
      const phrase = phrases[pi];
      if (forward) {
        charIdx++;
        setText(phrase.slice(0, charIdx));
        if (charIdx === phrase.length) {
          setForward(false);
          setTimeout(() => { if (mounted) tick(); }, pause);
          return;
        }
      } else {
        charIdx--;
        setText(phrase.slice(0, charIdx));
        if (charIdx === 0) {
          setForward(true);
          setPi((p) => (p + 1) % phrases.length);
        }
      }
      setTimeout(() => { if (mounted) tick(); }, forward ? speed : speed / 2);
    };

    const t = setTimeout(tick, 200);
    return () => { mounted = false; clearTimeout(t); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pi, forward, phrases]);

  return <span className="inline-block text-accent font-extrabold">{text}<span className="blinker">|</span></span>;
}
