"use client";

import { ArrowLeftRight, Building2, Receipt } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import Card from "@/components/ui/Card";

const infoIcons = [Building2, Receipt, ArrowLeftRight] as const;

const infoCopy = {
  pl: {
    kicker: "Baza wiedzy",
    title: "Najważniejsze pojęcia wyjaśnione prostym językiem",
    description: "Poznaj podstawowe pojęcia związane z wynagrodzeniem w Polsce.",
    cards: [
      {
        title: "Co to jest ZUS?",
        description:
          "ZUS to system obowiązkowych składek finansujących emerytury, renty i świadczenia chorobowe. Dla umowy o pracę składki społeczne pracownika wynoszą łącznie 13,71% brutto.",
      },
      {
        title: "Jak obliczany jest PIT?",
        description:
          "PIT naliczany jest od dochodu po uwzględnieniu kosztów, składek i ulg. Kalkulator pokazuje zaliczkę podatkową oraz jej wpływ na kwotę netto.",
      },
      {
        title: "Brutto vs Netto",
        description:
          "Brutto to kwota przed odliczeniami. Netto to kwota na rękę po potrąceniu składek i podatku.",
      },
    ],
  },
  en: {
    kicker: "Knowledge base",
    title: "Key salary terms explained in simple language",
    description: "Understand the basics of salary calculation in Poland.",
    cards: [
      {
        title: "What is ZUS?",
        description:
          "ZUS is Poland’s mandatory social insurance contribution system. For employment contracts, employee social contributions total 13.71% of gross salary.",
      },
      {
        title: "How is PIT calculated?",
        description:
          "PIT is calculated from income after costs, contributions, and tax relief. The calculator shows the tax advance and its impact on net pay.",
      },
      {
        title: "Gross vs net",
        description:
          "Gross is the amount before deductions. Net is the take-home amount after contributions and income tax.",
      },
    ],
  },
} as const;

export default function InfoCardsSection() {
  const { language } = useLanguage();
  const copy = infoCopy[language];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-gold/10 px-4 pb-20 pt-12 md:px-6 md:pb-28 md:pt-16">
      <div className="absolute inset-x-0 top-0 mx-auto h-full max-w-7xl rounded-[3rem] bg-white/45" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="section-kicker">{copy.kicker}</span>
          <h2 className="mx-auto mb-4 max-w-3xl text-text-primary">
            {copy.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-text-secondary">
            {copy.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {copy.cards.map((card, index) => {
            const InfoIcon = infoIcons[index];

            return (
            <div
              key={card.title}
            >
              <Card hover className="flex h-full flex-col items-center overflow-hidden text-center md:items-start md:text-left">
                <div className="mb-5 inline-flex w-fit rounded-2xl bg-accent/10 p-3">
                  <InfoIcon className="text-accent" size={26} />
                </div>
                <h3 className="mb-3 text-text-primary">{card.title}</h3>
                <p className="flex-1 text-sm leading-7 text-text-secondary">
                  {card.description}
                </p>
                <div className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-secondary to-accent" />
              </Card>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
