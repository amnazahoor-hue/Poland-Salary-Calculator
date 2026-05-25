"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const Component = hover ? motion.div : "div";
  const hoverProps = hover
    ? {
        whileHover: {
          y: -8,
          boxShadow: "0 28px 70px rgba(16, 24, 40, 0.14)",
        },
        transition: { duration: 0.25 },
      }
    : {};

  return (
    <Component
      className={`premium-ring rounded-[1.75rem] border border-white/75 bg-white/80 p-6 backdrop-blur transition-all duration-300 ${className}`}
      {...hoverProps}
    >
      {children}
    </Component>
  );
}
