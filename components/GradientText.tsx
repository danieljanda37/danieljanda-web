"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ec4899", "#a855f7", "#ec4899", "#f472b6", "#ec4899"],
  duration = 8,
}: GradientTextProps) {
  const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;
  return (
    <>
      <span
        className={className}
        style={{
          backgroundImage: gradient,
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          animation: `gradient-shift ${duration}s linear infinite`,
          display: "inline-block",
        }}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </>
  );
}
