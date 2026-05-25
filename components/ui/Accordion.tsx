"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: readonly AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-white/75 bg-white/80 shadow-card backdrop-blur"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-secondary/5 md:px-6"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-[15px] font-semibold text-text-primary md:text-[17px]">
                {item.question}
              </span>
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary/10 text-secondary transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronDown size={20} />
              </span>
            </button>
            {isOpen && (
              <div className="overflow-hidden">
                <p className="border-t border-border/70 bg-muted/40 px-5 py-5 text-[14px] leading-relaxed text-text-secondary md:px-6 md:text-[15px]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
