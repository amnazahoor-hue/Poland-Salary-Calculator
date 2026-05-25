"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calculator, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language/LanguageProvider";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const navLabels = {
  pl: [
    { label: "Strona główna", href: "/" },
    { label: "Jak to działa", href: "/#jak-to-dziala" },
    { label: "Pytania", href: "/#faq" },
    { label: "O nas", href: "/o-nas" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "How it works", href: "/#jak-to-dziala" },
    { label: "Questions", href: "/#faq" },
    { label: "About", href: "/o-nas" },
    { label: "Contact", href: "/kontakt" },
  ],
} as const;

const scrollTrackedHrefs = ["/#kalkulator", "/#jak-to-dziala", "/#faq"] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const navLinks = navLabels[language];
  const ctaLabel = language === "pl" ? "Oblicz" : "Calculate";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateActiveSection = () => {
      if (pathname !== "/") {
        setActiveHref(pathname);
        return;
      }

      const scrollPosition = window.scrollY + 130;
      let nextActiveHref = "/";

      for (const href of scrollTrackedHrefs) {
        const sectionId = href.split("#")[1];
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          nextActiveHref = href;
        }
      }

      if (window.scrollY < 80) {
        nextActiveHref = "/";
      }

      setActiveHref(nextActiveHref);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && activeHref === "/";
    if (href.startsWith("/#")) return pathname === "/" && activeHref === href;
    return pathname === href;
  };

  const handleLanguageChange = (nextLanguage: "pl" | "en") => {
    setLanguage(nextLanguage);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-white/10 bg-primary/95 shadow-elevated backdrop-blur-xl"
            : "border-white/10 bg-primary/95 backdrop-blur-xl"
        }`}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-3 md:px-6">
          <Link
            href="/"
            aria-label="Strona główna KalkulatorWynagrodzeń"
            className="mr-auto lg:absolute lg:left-4 lg:mr-0 xl:left-6"
          >
            <span className="hidden md:block">
              <Logo variant="dark" size="desktop" />
            </span>
            <span className="md:hidden">
              <Logo variant="dark" size="mobile" />
            </span>
          </Link>

          <nav
            className="hidden items-center justify-center gap-1 rounded-full border border-white/10 bg-white/10 p-1.5 shadow-sm backdrop-blur lg:flex xl:gap-1.5"
            aria-label="Główne menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-[13px] font-semibold transition-all xl:px-4 xl:text-[14px] ${
                  isActive(link.href)
                    ? "bg-white text-primary shadow-sm"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:absolute lg:right-4 lg:flex xl:right-6 xl:gap-3">
            <div className="grid grid-cols-2 gap-1 rounded-full border border-white/10 bg-white/10 p-1">
              {(["pl", "en"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleLanguageChange(option)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
                    language === option
                      ? "bg-white text-primary"
                      : "text-white/65 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-pressed={language === option}
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>
            <Link
              href="/#kalkulator"
              className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent px-4 py-2.5 text-sm font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-elevated xl:px-5 ${
                activeHref === "/#kalkulator" ? "ring-2 ring-white/80 ring-offset-2 ring-offset-primary" : ""
              }`}
            >
              <Calculator size={17} />
              {ctaLabel}
            </Link>
          </div>

          <button
            type="button"
            className="absolute right-4 rounded-2xl border border-white/10 bg-white/10 p-2 text-white shadow-sm transition-colors hover:bg-white/20 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            onClose={() => setMobileOpen(false)}
            navLinks={navLinks}
            ctaLabel={ctaLabel}
            activeHref={activeHref}
            language={language}
            onLanguageChange={handleLanguageChange}
          />
        )}
      </AnimatePresence>
    </>
  );
}
