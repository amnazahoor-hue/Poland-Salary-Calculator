"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

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
  const spring = useSpring(from, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (value) => {
    const formatted = new Intl.NumberFormat("pl-PL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    spring.set(to);
  }, [spring, to]);

  return <motion.span className={className}>{display}</motion.span>;
}
