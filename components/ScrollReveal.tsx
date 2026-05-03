"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: string;
  className?: string;
  baseOpacity?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  baseOpacity = 0.2,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // start when element top hits 80% of viewport, complete when bottom hits 20%
      const start = vh * 0.85;
      const end = vh * 0.2;
      const top = rect.top;
      let p = (start - top) / (start - end);
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const words = children.split(/(\s+)/);
  const totalWords = words.filter((w) => w.trim().length > 0).length;
  const wordIndex: number[] = [];
  let counter = 0;
  words.forEach((w, i) => {
    if (w.trim().length > 0) {
      wordIndex[i] = counter;
      counter++;
    } else {
      wordIndex[i] = -1;
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => {
        const idx = wordIndex[i];
        if (idx === -1) return <span key={i}>{word}</span>;
        // Each word becomes fully visible at its own scroll point
        const wordProgress = Math.max(
          0,
          Math.min(1, progress * totalWords - idx)
        );
        const opacity = baseOpacity + (1 - baseOpacity) * wordProgress;
        return (
          <span
            key={i}
            style={{
              opacity,
              transition: "opacity 200ms ease-out",
              display: "inline-block",
              whiteSpace: "pre",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
