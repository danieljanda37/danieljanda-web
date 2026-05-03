"use client";

import { ReactNode, CSSProperties } from "react";

interface LogoLoopProps {
  items: (string | ReactNode)[];
  duration?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function LogoLoop({
  items,
  duration = 40,
  direction = "left",
  className = "",
}: LogoLoopProps) {
  const animClass = direction === "left" ? "marquee-left" : "marquee-right";
  const doubled = [...items, ...items];

  const trackStyle = {
    ["--marquee-duration" as string]: `${duration}s`,
  } as CSSProperties;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className={`flex w-max items-center gap-10 sm:gap-14 ${animClass}`}
        style={trackStyle}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center px-2 sm:px-3">
            {typeof item === "string" ? (
              <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-neutral-500 transition-colors duration-300 hover:text-[var(--color-accent)] sm:text-sm">
                {item}
              </span>
            ) : (
              item
            )}
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32"
        style={{
          background:
            "linear-gradient(to right, var(--color-bg), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32"
        style={{
          background:
            "linear-gradient(to left, var(--color-bg), transparent)",
        }}
      />
    </div>
  );
}
