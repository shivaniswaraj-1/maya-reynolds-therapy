import Reveal from "@/components/Reveal";
import TeamCarousel from "@/components/about/TeamCarousel";

export default function MeetTheTeam() {
  return (
    <section id="team" className="scroll-mt-6 bg-background pt-20 pb-24 md:pt-28 lg:pt-[120px] lg:pb-[130px]">
      <Reveal className="px-6 sm:px-10 md:px-16 lg:px-[8.8%]">
        <h2 className="font-serif text-[40px] font-light leading-[1.2] tracking-tight text-foreground sm:text-[50px] lg:text-[56px]">
          Meet the Team
        </h2>
        <p className="mt-8 max-w-[720px] text-[17px] leading-[1.8] text-foreground lg:mt-12">
          Take a look at the faces of Conejo Valley Family
          Counseling&mdash;therapists who are dedicated to helping you grow
          and live your best life.
        </p>
      </Reveal>

      <Reveal delay={150} className="mt-12 lg:mt-20">
        <TeamCarousel />
      </Reveal>
    </section>
  );
}
