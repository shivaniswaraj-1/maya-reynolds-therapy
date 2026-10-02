import Reveal from "@/components/Reveal";

export default function Philosophy() {
  return (
    <section className="bg-canvas px-6 py-20 sm:px-10 md:px-16 md:py-32 lg:px-[8.8%] lg:py-[180px]">
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16 lg:gap-[9%]">
        <Reveal>
          <h2 className="font-serif text-[36px] font-light leading-[1.3] tracking-tight text-ink sm:text-[44px] lg:text-[52px]">
            Therapy works best when you feel respected, understood, and
            actively involved.
          </h2>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-6">
          <p className="text-[14px] leading-[1.9] tracking-[0.15em] text-ink uppercase sm:text-[15px]">
            Practical tools combined with depth-oriented work.
          </p>
          <p className="text-[17px] leading-[1.8] text-ink">
            Sessions are structured enough to feel supportive, while still
            leaving space for reflection and depth. I integrate evidence-based
            methods such as cognitive-behavioral therapy (CBT), EMDR,
            mindfulness-based practices, and body-oriented techniques to help
            you understand both the emotional and physiological sides of what
            you’re experiencing.
          </p>
          <p className="text-[17px] leading-[1.8] text-ink">
            My goal is not just symptom relief, but helping you develop
            insight, resilience, and a stronger relationship with yourself
            over time&mdash;and to feel more regulated in your daily life, not
            just during sessions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
