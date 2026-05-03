"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[100] h-px"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="h-full bg-[var(--color-accent)]"
        style={{
          width: `${progress}%`,
          transition: "width 80ms linear",
          boxShadow: "0 0 10px var(--color-accent)",
        }}
      />
    </div>
  );
}
