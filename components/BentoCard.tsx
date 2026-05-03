"use client";

import { ReactNode } from "react";
import TiltCard from "./TiltCard";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: boolean;
}

export default function BentoCard({
  children,
  className = "",
  tilt = true,
  glow = true,
}: BentoCardProps) {
  const inner = (
    <div
      className={`relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111113] p-6 transition-colors duration-500 hover:border-white/[0.14] ${className}`}
    >
      {/* mouse glow */}
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(236,72,153,0.10), transparent 50%)",
          }}
        />
      )}
      <div className="relative h-full">{children}</div>
    </div>
  );

  if (tilt) {
    return (
      <TiltCard className="group h-full" intensity={4}>
        {inner}
      </TiltCard>
    );
  }
  return <div className="group h-full">{inner}</div>;
}
