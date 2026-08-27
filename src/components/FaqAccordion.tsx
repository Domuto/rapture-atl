"use client";

import { useState } from "react";
import type { Faq } from "@/lib/content";

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-paper/12">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-paper/12">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-spot"
              >
                <span className="display text-2xl sm:text-3xl">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`text-3xl leading-none transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-spot" : "text-paper/50"
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              hidden={!isOpen}
              className="max-w-3xl pb-8 text-lg leading-relaxed text-paper/65"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
