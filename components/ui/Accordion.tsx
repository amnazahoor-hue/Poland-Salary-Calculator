"use client";

import { AnimatePresence, motion } from "framer-motion";
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
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary/10 text-secondary"
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-border/70 bg-muted/40 px-5 py-5 text-[14px] leading-relaxed text-text-secondary md:px-6 md:text-[15px]">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
