"use client";

import { useEffect, useState } from "react";

interface LiveClockProps {
  timeZone?: string;
  className?: string;
  showSeconds?: boolean;
}

export default function LiveClock({
  timeZone = "Europe/Prague",
  className = "",
  showSeconds = true,
}: LiveClockProps) {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("cs-CZ", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: showSeconds ? "2-digit" : undefined,
        hour12: false,
      }).format(now);
      setTime(formatted);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timeZone, showSeconds]);

  // Avoid hydration mismatch — render placeholder until mounted
  if (!mounted) {
    return (
      <span className={className} suppressHydrationWarning>
        --:--{showSeconds ? ":--" : ""}
      </span>
    );
  }

  return (
    <span className={className} suppressHydrationWarning>
      {time}
    </span>
  );
}
