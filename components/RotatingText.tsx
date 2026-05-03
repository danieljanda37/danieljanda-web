"use client";

import { useEffect, useState } from "react";

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function RotatingText({
  words,
  interval = 2800,
  className = "",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const out = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase("in");
      }, 320);
    }, interval);
    return () => clearInterval(out);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-block overflow-hidden align-baseline ${className}`}
      style={{ minWidth: "fit-content" }}
    >
      <span
        key={index}
        className="inline-block"
        style={{
          opacity: phase === "in" ? 1 : 0,
          transform:
            phase === "in" ? "translateY(0)" : "translateY(-0.4em)",
          transition:
            "opacity 320ms cubic-bezier(0.22, 1, 0.36, 1), transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {words[index]}
      </span>
    </span>
  );
}
