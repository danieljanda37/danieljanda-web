"use client";

import { useRef, ReactNode, useEffect, useState } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
}

export default function Magnetic({
  children,
  className = "",
  strength = 0.25,
  as = "a",
  href,
  onClick,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLSpanElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const el = ref.current;
    const span = inner.current;
    if (!el || !span) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    span.style.transform = `translate3d(${dx * 0.4}px, ${dy * 0.4}px, 0)`;
  };

  const reset = () => {
    const el = ref.current;
    const span = inner.current;
    if (!el || !span) return;
    el.style.transform = "translate3d(0,0,0)";
    span.style.transform = "translate3d(0,0,0)";
  };

  const Tag = as as React.ElementType;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        display: "inline-block",
        transition: "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
      }}
    >
      <Tag
        href={href}
        onClick={onClick}
        className={className}
        style={{ display: "inline-flex" }}
      >
        <span
          ref={inner}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform",
          }}
        >
          {children}
        </span>
      </Tag>
    </div>
  );
}
