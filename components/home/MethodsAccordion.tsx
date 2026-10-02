"use client";

import { useState } from "react";

const METHODS = [
  {
    title: "Cognitive-Behavioral Therapy (CBT)",
    description:
      "A structured, practical approach for noticing the thought patterns that fuel anxiety and overthinking, and for building new ways of responding to them in everyday life.",
  },
  {
    title: "Eye Movement Desensitization & Reprocessing (EMDR)",
    description:
      "An evidence-based trauma therapy that helps the brain process distressing memories so they carry less emotional charge in the present.",
  },
  {
    title: "Mindfulness-Based Practices",
    description:
      "Practices that build present-moment awareness, helping you step out of constant worry and notice what you actually need.",
  },
  {
    title: "Body-Oriented Techniques",
    description:
      "Stress and trauma live in the body as well as the mind. These techniques work with physical signals like tension or feeling on edge to help your nervous system feel more regulated, not just during sessions but day to day.",
  },
];

export default function MethodsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul>
      {METHODS.map((method, i) => {
        const open = openIndex === i;
        const panelId = `method-panel-${i}`;
        return (
          <li key={method.title} className="border-b border-foreground/15 last:border-b-0">
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-start gap-4 py-[30px] text-left text-[14px] tracking-[0.15em] text-foreground uppercase transition-colors duration-300 hover:text-accent-teal sm:text-[15px]"
              >
                {/* Plus icon - the vertical stroke collapses to make a minus when open */}
                <span className="relative mt-[3px] h-[14px] w-[14px] shrink-0" aria-hidden="true">
                  <span className="absolute top-1/2 left-0 h-px w-full bg-current" />
                  <span
                    className={`absolute top-0 left-1/2 h-full w-px bg-current transition-transform duration-300 ${
                      open ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
                {method.title}
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
                <p className="pb-[30px] pl-[30px] text-[17px] leading-[1.8] text-foreground">
                  {method.description}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
