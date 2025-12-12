// src/hooks/useActiveSection.js
import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently in view.
 * Usage: const active = useActiveSection(["home","about","skills"]);
 */
export default function useActiveSection(ids = []) {
  const [active, setActive] = useState(ids && ids.length ? ids[0] : "");

  useEffect(() => {
    if (!ids || ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // find the most visible entry (largest intersectionRatio)
        let mostVisible = { id: active, ratio: 0 };
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (!id) return;
          const ratio = entry.intersectionRatio;
          if (ratio > mostVisible.ratio) mostVisible = { id, ratio };
        });

        if (mostVisible.id && mostVisible.id !== active) {
          setActive(mostVisible.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: [0, 0.15, 0.4, 0.6],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return active;
}
