import Reveal from "@/components/Reveal";

export default function BioIntro() {
  return (
    <section className="bg-canvas px-6 py-20 sm:px-10 md:px-16 md:py-32 lg:px-[8.8%] lg:py-[200px]">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-[9%]">
        <Reveal>
          <h2 className="font-serif text-[36px] font-light leading-[1.3] tracking-tight text-ink sm:text-[44px] lg:text-[56px]">
            Functional on the outside. Quietly struggling on the inside.
          </h2>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-6">
          <p className="text-[14px] leading-[1.9] tracking-[0.15em] text-ink uppercase sm:text-[15px]">
            My work often focuses on anxiety, panic, trauma, and burnout.
          </p>
          <p className="text-[17px] leading-[1.8] text-ink">
            Many of the people I work with are high-achieving, thoughtful, and
            self-aware&mdash;but internally feel exhausted, stuck in
            overthinking, or emotionally on edge. Clients frequently come to me
            while quietly struggling with constant worry, tension in their
            body, difficulty sleeping, or a sense that they’re always bracing
            for something to go wrong. Others are navigating the impact of
            earlier life experiences that continue to affect their
            relationships, confidence, or sense of safety.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
