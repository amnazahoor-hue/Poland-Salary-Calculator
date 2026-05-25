"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  BadgeCheck,
  Calculator,
  FileCheck2,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/components/language/LanguageProvider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const highlightIcons = [BadgeCheck, FileCheck2, Layers3] as const;

const heroCopy = {
  pl: {
    kicker: "Premium kalkulator netto",
    title: "Oblicz wynagrodzenie netto z pełną jasnością.",
    subtitle:
      "Profesjonalny kalkulator brutto-netto dla pracowników, freelancerów i zespołów HR w Polsce.",
    description:
      "Nasz kalkulator wynagrodzeń uwzględnia aktualne stawki ZUS, składkę zdrowotną i PIT na rok 2025. Wpisz kwotę brutto i otrzymaj precyzyjne zestawienie w kilka sekund, bez arkuszy, zgadywania i niejasnych skrótów.",
    primaryCta: "Oblicz wynagrodzenie netto",
    secondaryCta: "Zobacz szczegóły składek",
    sampleTitle: "Przykładowe netto",
    sampleMeta: "brutto 6 000 zł · UoP",
    netLabel: "Wynagrodzenie netto",
    secureLabel: "Obliczenia po stronie przeglądarki",
    highlights: [
      {
        title: "Aktualne stawki 2025",
        description: "ZUS, zdrowotna i PIT w jednym miejscu.",
      },
      {
        title: "3 typy umów",
        description: "Praca, zlecenie oraz dzieło.",
      },
      {
        title: "Pełny rozkład składek",
        description: "Netto, podatki i odliczenia bez chaosu.",
      },
    ],
    rows: [
      { label: "ZUS pracownik", value: "822,60 zł" },
      { label: "Składka zdrowotna", value: "466,97 zł" },
      { label: "Zaliczka PIT", value: "460,43 zł" },
    ],
    stats: [
      { label: "Obsługiwane typy umów", value: "3" },
      { label: "Średni czas obliczeń", value: "<1s" },
      { label: "Poziom przejrzystości", value: "100%" },
    ],
  },
  en: {
    kicker: "Premium net salary calculator",
    title: "Calculate your take-home salary with complete clarity.",
    subtitle:
      "A professional gross-to-net calculator for employees, freelancers, and HR teams in Poland.",
    description:
      "The calculator uses 2025 ZUS, health insurance, and PIT rates. Enter your gross salary and get a clear breakdown in seconds, without spreadsheets, guessing, or confusing abbreviations.",
    primaryCta: "Calculate net salary",
    secondaryCta: "See deduction details",
    sampleTitle: "Sample net salary",
    sampleMeta: "gross 6,000 PLN · employment contract",
    netLabel: "Net salary",
    secureLabel: "Browser-side calculations",
    highlights: [
      {
        title: "Current 2025 rates",
        description: "ZUS, health insurance, and PIT in one place.",
      },
      {
        title: "3 contract types",
        description: "Employment, mandate, and specific-task contracts.",
      },
      {
        title: "Full deduction breakdown",
        description: "Net salary, taxes, and deductions without chaos.",
      },
    ],
    rows: [
      { label: "Employee ZUS", value: "822.60 PLN" },
      { label: "Health insurance", value: "466.97 PLN" },
      { label: "PIT advance", value: "460.43 PLN" },
    ],
    stats: [
      { label: "Supported contract types", value: "3" },
      { label: "Average calculation time", value: "<1s" },
      { label: "Transparency level", value: "100%" },
    ],
  },
} as const;

export default function HeroSection() {
  const { language } = useLanguage();
  const copy = heroCopy[language];

  const scrollToCalculator = () => {
    document.getElementById("kalkulator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mesh-bg relative flex min-h-[100svh] flex-col overflow-hidden px-4 pb-16 pt-24 md:px-6 md:pb-20 md:pt-28 lg:min-h-[600px] lg:pb-8 lg:pt-24 xl:min-h-[calc(100vh-73px)] xl:pb-14 xl:pt-28">
      <div className="orb -left-24 top-16 h-72 w-72 bg-secondary/25" />
      <div className="orb right-0 top-28 h-80 w-80 bg-accent/20" />
      <div className="orb bottom-4 left-1/2 h-72 w-72 bg-gold/20" />

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 lg:grid-cols-5 lg:gap-6 xl:gap-12">
        <motion.div
          className="text-center lg:col-span-3 lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="section-kicker">
            <Sparkles size={14} />
            {copy.kicker}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mx-auto mb-4 max-w-4xl text-[38px] font-bold text-text-primary md:text-[54px] lg:mx-0 lg:mb-3 lg:text-[38px] lg:leading-[1.06] xl:mb-4 xl:text-[58px]"
          >
            {copy.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-4 max-w-2xl font-heading text-[18px] font-medium leading-7 text-text-secondary md:text-[22px] md:leading-8 lg:mx-0 lg:mb-3 lg:text-[15px] lg:leading-6 xl:mb-4 xl:text-[22px] xl:leading-8"
          >
            {copy.subtitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-6 max-w-2xl text-[14px] leading-6 text-text-secondary md:text-[15px] lg:mx-0 lg:mb-3 lg:text-[12px] lg:leading-[1.45] xl:mb-6 xl:text-[15px] xl:leading-6"
          >
            {copy.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start lg:gap-2 xl:gap-3">
            <Button size="lg" onClick={scrollToCalculator} className="lg:px-5 lg:py-3 lg:text-xs xl:px-8 xl:py-4 xl:text-base">
              {copy.primaryCta}
              <ArrowDown size={18} />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToCalculator} className="lg:px-5 lg:py-3 lg:text-xs xl:px-8 xl:py-4 xl:text-base">
              {copy.secondaryCta}
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 grid items-stretch gap-3 sm:grid-cols-3 lg:mt-3 lg:gap-2 xl:mt-6 xl:gap-3"
          >
            {copy.highlights.map((highlight, index) => {
              const HighlightIcon = highlightIcons[index];

              return (
              <div
                key={highlight.title}
                className="group relative min-h-[96px] overflow-hidden rounded-[1.25rem] border border-white/80 bg-white/85 p-3.5 text-center shadow-card backdrop-blur transition-all duration-300 hover:bg-white sm:text-left lg:min-h-[74px] lg:p-2.5 xl:min-h-[96px] xl:p-3.5"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent/10 transition-transform duration-300 group-hover:scale-125" />
                <div className="relative flex h-full flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start lg:gap-2 xl:gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-sm lg:h-8 lg:w-8 lg:rounded-xl xl:h-10 xl:w-10 xl:rounded-2xl">
                    <HighlightIcon size={18} />
                  </div>
                  <div>
                    <p className="font-heading text-[13px] font-bold leading-5 text-text-primary lg:text-[11px] lg:leading-4 xl:text-[13px] xl:leading-5">
                      {highlight.title}
                    </p>
                    <p className="mt-1 text-[11px] leading-4 text-text-secondary lg:text-[10px] lg:leading-3 xl:text-[11px] xl:leading-4">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card relative overflow-hidden rounded-[2rem] p-5 md:p-6 lg:p-3 xl:p-6"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/20" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-accent/20" />

            <div className="relative">
              <div className="mb-5 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left lg:mb-3 lg:gap-2 xl:mb-5 xl:gap-3">
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <div className="rounded-2xl bg-secondary/10 p-2.5 lg:p-1.5 xl:p-2.5">
                    <Calculator className="text-secondary" size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary lg:text-xs xl:text-sm">{copy.sampleTitle}</p>
                    <p className="font-heading text-xs text-text-secondary">
                      {copy.sampleMeta}
                    </p>
                  </div>
                </div>
                <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                  2025
                </div>
              </div>

              <p className="mb-2 text-center text-sm font-semibold text-text-secondary sm:text-left lg:mb-1 lg:text-xs xl:mb-2 xl:text-sm">
                {copy.netLabel}
              </p>
              <p className="text-center font-heading text-4xl font-bold text-accent md:text-5xl sm:text-left lg:text-3xl xl:text-5xl">
                <AnimatedCounter to={4250} duration={1.5} suffix=" zł" />
              </p>

              <div className="mt-5 space-y-2.5 border-t border-border/70 pt-5 lg:mt-3 lg:space-y-1.5 lg:pt-3 xl:mt-5 xl:space-y-2.5 xl:pt-5">
                {copy.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between rounded-2xl bg-white/70 px-4 py-2.5 text-sm text-text-secondary lg:px-3 lg:py-1.5 lg:text-xs xl:px-4 xl:py-2.5 xl:text-sm"
                  >
                    <span>{row.label}</span>
                    <span className="font-medium text-text-primary">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-primary p-4 text-white lg:mt-3 lg:p-2.5 xl:mt-5 xl:p-4">
                <div className="mb-2.5 flex items-center justify-center gap-2 text-sm font-semibold sm:justify-start lg:mb-2 lg:text-xs xl:mb-2.5 xl:text-sm">
                  <ShieldCheck size={18} className="text-accent" />
                  {copy.secureLabel}
                </div>
                <div className="grid grid-cols-3 gap-3 lg:gap-2 xl:gap-3">
                  {copy.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-heading text-lg font-bold lg:text-base xl:text-lg">{stat.value}</p>
                      <p className="text-[11px] leading-snug text-white/60 lg:text-[10px] xl:text-[11px]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
