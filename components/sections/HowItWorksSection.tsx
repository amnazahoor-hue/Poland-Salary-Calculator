"use client";

import { Calculator, FileText, MousePointerClick, Wallet } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import Card from "@/components/ui/Card";

const stepIcons = [Wallet, FileText, MousePointerClick, Calculator] as const;

const processCopy = {
  pl: {
    kicker: "Proces",
    title: "Od kwoty brutto do pełnego zestawienia w czterech krokach",
    description:
      "Cztery proste kroki dzielą Cię od pełnego zrozumienia swojego wynagrodzenia netto.",
    stepLabel: "Krok",
    steps: [
      {
        number: "01",
        title: "Wpisz swoje wynagrodzenie brutto",
        description:
          "Podaj miesięczną kwotę brutto, którą otrzymujesz od pracodawcy lub zleceniodawcy.",
      },
      {
        number: "02",
        title: "Wybierz typ umowy i opcje podatkowe",
        description:
          "Określ rodzaj umowy oraz stawkę PIT i ulgę podatkową.",
      },
      {
        number: "03",
        title: "Kliknij Oblicz",
        description:
          "Kalkulator przetworzy dane w ułamku sekundy, stosując aktualne przepisy 2025.",
      },
      {
        number: "04",
        title: "Zobacz pełne zestawienie",
        description:
          "Sprawdź netto oraz szczegółowy rozkład składek ZUS, zdrowotnej i PIT.",
      },
    ],
  },
  en: {
    kicker: "Process",
    title: "From gross salary to a full breakdown in four steps",
    description:
      "Four simple steps help you understand your net salary with full clarity.",
    stepLabel: "Step",
    steps: [
      {
        number: "01",
        title: "Enter your gross salary",
        description:
          "Add the monthly gross amount stated by your employer or contractor.",
      },
      {
        number: "02",
        title: "Choose contract and tax options",
        description:
          "Select the contract type, PIT rate, and monthly tax relief option.",
      },
      {
        number: "03",
        title: "Click Calculate",
        description:
          "The calculator applies 2025 rules and processes your data instantly.",
      },
      {
        number: "04",
        title: "Review the full breakdown",
        description:
          "See net salary plus ZUS, health insurance, PIT, and total deductions.",
      },
    ],
  },
} as const;

export default function HowItWorksSection() {
  const { language } = useLanguage();
  const copy = processCopy[language];

  return (
    <section
      id="jak-to-dziala"
      className="relative overflow-hidden bg-gradient-to-br from-muted/90 via-white to-accent/15 px-3 pb-16 pt-10 sm:px-4 md:px-6 md:pb-28 md:pt-16"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />
      <div className="absolute inset-x-2 bottom-5 top-5 rounded-[2rem] border border-white/70 bg-white/45 shadow-card backdrop-blur sm:inset-x-6 sm:top-8 sm:rounded-[3rem]" />
      <div className="orb left-1/4 top-20 h-56 w-56 bg-accent/20" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-9 text-center md:mb-14">
          <span className="section-kicker">
            {copy.kicker}
          </span>
          <h2 className="mx-auto mb-3 max-w-3xl text-[25px] leading-tight text-text-primary md:mb-4 md:text-[42px]">
            {copy.title}
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-7 text-text-secondary md:text-lg md:leading-8">
            {copy.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {copy.steps.map((step, index) => {
            const StepIcon = stepIcons[index];

            return (
            <div
              key={step.number}
            >
              <Card className="group relative flex h-full flex-col items-center overflow-hidden bg-white/95 text-center sm:items-start sm:text-left">
                <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-secondary/10 transition-transform duration-300 group-hover:scale-125 sm:-right-10 sm:-top-10 sm:h-28 sm:w-28" />
                <span className="relative mb-4 inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 font-heading text-xs font-bold text-secondary sm:mb-6 sm:text-sm">
                  {copy.stepLabel} {step.number}
                </span>
                <div className="relative mb-4 inline-flex rounded-2xl bg-gradient-to-br from-secondary to-accent p-3 shadow-glow sm:mb-5">
                  <StepIcon className="text-white" size={22} />
                </div>
                <h3 className="relative mb-3 text-[18px] leading-snug text-text-primary md:text-[24px]">{step.title}</h3>
                <p className="text-[13px] leading-6 text-text-secondary sm:text-sm sm:leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
