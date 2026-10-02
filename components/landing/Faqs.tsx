"use client";

import { useState } from "react";
import styles from "@/components/layout/site-grid.module.css";
import { FAQS } from "@/lib/faqs";

/* FAQ accordion: heading in columns 2–8, questions in columns 10–24. */
export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className={`${styles.grid24} scroll-mt-28 bg-secondary px-gutter pt-(--how-pt) pb-(--how-pb) md:px-0`}
    >
      <div className="md:col-[3/10]">
        <p className="text-eyebrow font-normal uppercase">FAQs</p>
        <h2 className="mt-[24px] font-serif text-h3 font-extralight text-primary">
          Questions about therapy in <span className="whitespace-nowrap">Santa Monica</span>
        </h2>
      </div>

      <ul className="mt-[40px] md:col-[11/26] md:mt-0">
        {FAQS.map((faq, i) => {
          const open = openIndex === i;
          const panelId = `faq-panel-${i}`;
          return (
            <li key={faq.question} className="border-b border-primary/20 first:border-t">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-[24px] text-left font-serif text-h4 font-extralight text-primary transition-colors duration-300 hover:text-accent-deep"
                >
                  {faq.question}
                  {/* Plus icon; the vertical stroke collapses into a minus when open */}
                  <span className="relative h-[14px] w-[14px] shrink-0" aria-hidden="true">
                    <span className="absolute top-1/2 left-0 h-px w-full bg-current" />
                    <span
                      className={`absolute top-0 left-1/2 h-full w-px bg-current transition-transform duration-300 ${
                        open ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden" inert={!open}>
                  <p className="max-w-[760px] pb-[26px] text-body font-light">{faq.answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
