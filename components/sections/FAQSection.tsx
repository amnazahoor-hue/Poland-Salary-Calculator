"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language/LanguageProvider";
import Accordion from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

const faqCopy = {
  pl: {
    kicker: "FAQ",
    title: "Najczęściej zadawane pytania",
    description:
      "Odpowiedzi na najpopularniejsze pytania dotyczące obliczania wynagrodzenia netto.",
    imageTitle: "Finanse bez niejasności",
    imageDescription: "Zrozum netto, podatki i składki przed podpisaniem umowy.",
    helpTitle: "Masz inne pytanie?",
    helpDescription:
      "Sekcja FAQ obejmuje najważniejsze tematy związane z PIT, ZUS i typami umów.",
    items: FAQ_ITEMS,
  },
  en: {
    kicker: "FAQ",
    title: "Frequently asked questions",
    description:
      "Answers to the most common questions about calculating net salary in Poland.",
    imageTitle: "Finance without confusion",
    imageDescription:
      "Understand net pay, taxes, and contributions before signing a contract.",
    helpTitle: "Have another question?",
    helpDescription:
      "This FAQ covers the most important topics around PIT, ZUS, and contract types.",
    items: [
      {
        question: "How do I calculate net salary?",
        answer:
          "Net salary is calculated by subtracting employee social contributions, health insurance, and PIT tax advance from gross salary. The calculator does this automatically after you enter the amount and choose contract options.",
      },
      {
        question: "What is ZUS?",
        answer:
          "ZUS is the Polish social insurance system. It includes retirement, disability, and sickness contributions that reduce gross salary before net pay is calculated.",
      },
      {
        question: "Which contract types are supported?",
        answer:
          "The calculator supports employment contract, mandate contract, and specific-task contract, each with different contribution and tax-cost rules.",
      },
      {
        question: "When should I use the 32% PIT rate?",
        answer:
          "The 32% PIT rate generally applies after exceeding the second tax threshold. You can select it manually if your annual income qualifies for the higher rate.",
      },
      {
        question: "Does the calculator include tax relief?",
        answer:
          "Yes. When enabled, monthly tax relief lowers the PIT advance, which can increase the estimated take-home salary.",
      },
      {
        question: "Can I share or export the result?",
        answer:
          "Yes. After calculating, you can share the result by WhatsApp or email, and download a professional PDF report.",
      },
    ],
  },
} as const;

export default function FAQSection() {
  const { language } = useLanguage();
  const copy = faqCopy[language];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-muted/60 px-4 pb-20 pt-12 md:px-6 md:pb-28 md:pt-16"
    >
      <div className="orb right-16 top-20 h-64 w-64 bg-secondary/20" />
      <div className="relative mx-auto grid max-w-7xl items-stretch gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex h-full flex-col text-center lg:text-left">
          <span className="section-kicker mx-auto lg:mx-0">{copy.kicker}</span>
          <h2 className="mb-4 text-text-primary">{copy.title}</h2>
          <p className="text-lg leading-8 text-text-secondary">
            {copy.description}
          </p>
          <div className="mt-8 flex-1 overflow-hidden rounded-[1.75rem] border border-white/75 bg-white/80 shadow-elevated backdrop-blur">
            <div className="relative h-full min-h-[300px]">
              <Image
                src="/faq-money-scene.png"
                alt="Miniaturowe postacie na tle banknotów symbolizujące pytania o wynagrodzenie"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-center text-white backdrop-blur-md lg:text-left">
                <p className="font-heading text-lg font-bold">{copy.imageTitle}</p>
                <p className="mt-1 text-sm leading-6 text-white/75">
                  {copy.imageDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[1.5rem] bg-primary p-6 text-center text-white shadow-elevated lg:text-left">
            <p className="mb-2 font-heading text-xl font-bold">
              {copy.helpTitle}
            </p>
            <p className="text-sm leading-6 text-white/70">
              {copy.helpDescription}
            </p>
          </div>
        </div>
        <div className="h-full rounded-[1.75rem] border border-white/75 bg-white/65 p-4 shadow-elevated backdrop-blur">
          <Accordion items={copy.items} />
        </div>
      </div>
    </section>
  );
}
