import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function BioBanner() {
  return (
    <section className="relative h-[460px] w-full overflow-hidden bg-primary sm:h-[540px] lg:h-[627px]">
      <Image
        src="/images/quiet-shore.jpg"
        alt="A quiet stretch of beach with dune grass and calm water"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 flex items-end px-6 pb-14 sm:px-10 md:px-16 md:pb-28 lg:px-[8.8%] lg:pb-[130px]">
        <Reveal>
          <p className="max-w-[1100px] font-serif text-[30px] font-light leading-[1.4] tracking-tight text-white sm:text-[40px] lg:text-[50px]">
            My goal is not just symptom relief, but helping you develop
            insight, resilience, and a stronger relationship with yourself.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
