"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-gradient-to-r from-secondary via-btn to-accent text-white shadow-glow hover:shadow-elevated",
  secondary:
    "bg-primary text-white shadow-card hover:bg-slate-800 hover:shadow-elevated",
  outline:
    "border border-secondary/25 bg-white/70 text-secondary shadow-sm backdrop-blur hover:border-secondary/50 hover:bg-secondary/10 hover:text-btn-hover",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[14px] md:text-[15px]",
  lg: "px-8 py-4 text-[15px] md:text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", children, className = "", ...props },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
