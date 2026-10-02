"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

const METHODS: { title: string; description: ReactNode }[] = [
  {
    title: "Somatic Therapy",
    description:
      "Somatic Therapy focuses on the connection between the body and mind, helping you process and release trauma stored in the body. By using body awareness and mindfulness, this approach can help you calm your nervous system and discover lasting healing, especially if you’re struggling with trauma or dissociation.",
  },
  {
    title: "Eye Movement Desensitization & Reprocessing (EMDR)",
    description: (
      <>
        EMDR is a therapeutic technique that helps people safely process
        traumatic memories. Through guided eye movements, EMDR can help your
        brain reprocess difficult experiences, reduce the emotional charge
        tied to them, and support you in recovering from trauma. Learn more{" "}
        <Link href="/#specialties" className="underline underline-offset-4">
          here
        </Link>
        .
      </>
    ),
  },
  {
    title: "Emotionally Focused Therapy (EFT)",
    description:
      "EFT is designed to help individuals and couples strengthen their emotional bonds. It focuses on understanding and expressing underlying emotions, creating more secure and meaningful connections, which can be transformative for couples or anyone who may be struggling with emotional disconnection.",
  },
  {
    title: "Internal Family Systems Informed",
    description:
      "Looking at things with an IFS-informed lens, means viewing the mind as made up of different “parts,” each with its own role. This method can help you understand and heal the inner conflicts between these parts of yourself, building self-compassion, and a sense of wholeness.",
  },
  {
    title: "Cognitive Behavioral Therapy (CBT)",
    description:
      "CBT is a goal-oriented approach that teaches people to identify and change negative thought patterns that influence their emotions and behaviors. By focusing on practical skills, CBT can help you manage anxiety, depression, and a range of emotional challenges.",
  },
  {
    title: "Dialectical Behavioral Therapy (DBT)",
    description:
      "DBT combines cognitive strategies with mindfulness to help you manage overwhelming emotions, improve your relationships, and cope with stress. It is especially helpful for those seeking to build emotional resilience and navigate intense feelings.",
  },
  {
    title: "Brainspotting",
    description:
      "Brainspotting is a trauma-focused technique that helps you process unresolved emotional pain by targeting specific eye positions or “brainspots” linked to areas of the brain where distress is stored. Through this focused work, deeper healing becomes possible, allowing you to address trauma and emotional challenges in a more effective way.",
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
          <li
            key={method.title}
            className="border-b border-foreground/15 last:border-b-0"
          >
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
