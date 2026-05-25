"use client";

import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 1.5,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let frameId = 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const tick = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(from + (to - from) * easedProgress);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [duration, from, to]);

  const formatted = new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  const display = `${prefix}${formatted}${suffix}`;

  return <span className={className}>{display}</span>;
}
