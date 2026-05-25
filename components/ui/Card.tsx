"use client";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`premium-ring rounded-[1.75rem] border border-white/75 bg-white/80 p-6 backdrop-blur transition-all duration-300 ${
        hover ? "hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(16,24,40,0.14)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
