"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  onClose: () => void;
  navLinks: readonly { label: string; href: string }[];
  ctaLabel: string;
  activeHref: string;
  language: "pl" | "en";
  onLanguageChange: (language: "pl" | "en") => void;
}

export default function MobileMenu({
  onClose,
  navLinks,
  ctaLabel,
  activeHref,
  language,
  onLanguageChange,
}: MobileMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && activeHref === "/";
    if (href.startsWith("/#")) return pathname === "/" && activeHref === href;
    return pathname === href;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-4 top-[66px] z-40 overflow-hidden rounded-3xl border border-white/10 bg-primary/95 shadow-elevated backdrop-blur-xl lg:hidden"
    >
      <nav className="flex flex-col gap-2 p-3" aria-label="Menu mobilne">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`rounded-2xl px-4 py-3 text-center text-[15px] font-semibold transition-colors ${
              isActive(link.href)
                ? "bg-white text-primary shadow-sm"
                : "text-white/75 hover:bg-white/10 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#kalkulator"
          onClick={onClose}
          className={`mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-secondary to-accent px-4 py-3 text-[15px] font-bold text-white shadow-glow ${
            activeHref === "/#kalkulator" ? "ring-2 ring-white/80 ring-offset-2 ring-offset-primary" : ""
          }`}
        >
          <Calculator size={18} />
          {ctaLabel}
        </Link>
        <div className="mt-3 grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-white/10 p-1">
          {(["pl", "en"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onLanguageChange(option)}
              className={`rounded-xl px-3 py-2 text-sm font-bold transition-colors ${
                language === option
                  ? "bg-white text-primary"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {option === "pl" ? "PL" : "EN"}
            </button>
          ))}
        </div>
      </nav>
    </motion.div>
  );
}
