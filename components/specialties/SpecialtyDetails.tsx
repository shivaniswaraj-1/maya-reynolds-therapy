import Reveal from "@/components/Reveal";

export const SPECIALTIES = [
  {
    id: "anxiety",
    title: "Anxiety & Panic",
    signs: [
      "Constant worry or overthinking",
      "Tension in your body",
      "Difficulty sleeping",
      "Always bracing for something to go wrong",
      "Feeling emotionally on edge",
    ],
    body: [
      "Many of the people I work with are high-achieving, thoughtful, and self-aware. They look “functional” on the outside while quietly feeling exhausted inside.",
      "Together we’ll look at both the emotional and physiological sides of anxiety, drawing on approaches like CBT, mindfulness-based practices, and body-oriented techniques so you leave with practical tools, not just insight.",
    ],
  },
  {
    id: "trauma",
    title: "Trauma",
    signs: [
      "Single-incident trauma",
      "Complex, long-standing patterns",
      "Experiences rooted in childhood or relationships",
      "The wear of chronic stress",
    ],
    body: [
      "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex patterns that may stem from childhood, relationships, or chronic stress.",
      "The work is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life—not just during sessions. EMDR and body-oriented techniques are often part of this process.",
    ],
  },
  {
    id: "burnout",
    title: "Burnout & Perfectionism",
    signs: [
      "Professional burnout",
      "Perfectionism",
      "High internal pressure",
      "Feeling disconnected from yourself",
    ],
    body: [
      "Many of my clients are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress.",
      "Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working, with a therapist who understands the realities of a fast-paced environment.",
    ],
  },
  {
    id: "past-experiences",
    title: "Past Experiences",
    signs: [
      "Patterns that keep showing up in relationships",
      "Shaken confidence",
      "A fragile sense of safety",
    ],
    body: [
      "Earlier life experiences can continue to affect your relationships, confidence, or sense of safety long after they’ve passed.",
      "We’ll explore those patterns with care. The goal isn’t only symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.",
    ],
  },
];

export default function SpecialtyDetails() {
  return (
    <section className="bg-canvas px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-[8.8%] lg:py-32">
      <ol>
        {SPECIALTIES.map((item, i) => (
          <li
            key={item.id}
            id={item.id}
            className="grid gap-10 border-t border-primary/10 py-16 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[38%_1fr] md:gap-[6%] lg:py-24"
          >
            <Reveal>
              <span className="text-[14px] tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 font-serif text-[36px] font-light leading-[1.2] tracking-tight text-ink sm:text-[44px]">
                {item.title}
              </h2>
            </Reveal>

            <Reveal delay={150} className="grid gap-10 lg:grid-cols-[40%_1fr] lg:gap-12">
              <div>
                <h3 className="text-[14px] tracking-[0.15em] text-ink uppercase">
                  You might notice
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {item.signs.map((sign) => (
                    <li key={sign} className="flex gap-3 text-[17px] leading-[1.6] text-ink">
                      <span aria-hidden="true" className="mt-[11px] h-px w-4 shrink-0 bg-primary" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-[14px] tracking-[0.15em] text-ink uppercase">
                  How we’ll work
                </h3>
                {item.body.map((paragraph) => (
                  <p key={paragraph} className="text-[17px] leading-[1.8] text-ink">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
