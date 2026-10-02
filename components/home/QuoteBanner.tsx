import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function QuoteBanner() {
  return (
    <section className="relative mt-16 h-[460px] w-full overflow-hidden bg-primary md:mt-24 md:h-[580px] lg:mt-28 lg:h-[660px]">
      <Image
        src="/images/shoreline-walk.jpg"
        alt="A person walking slowly along a misty shoreline"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/55" />
      <div className="absolute inset-0 flex items-end px-6 pb-14 sm:px-10 md:px-16 md:pb-20 lg:px-[8.8%] lg:pb-[120px]">
        <Reveal>
          <p className="max-w-[1050px] font-serif text-[30px] font-light leading-[1.35] tracking-tight text-white sm:text-[38px] lg:text-[48px]">
            Therapy can become a space to slow down, reconnect, and develop
            more <em className="italic">sustainable</em> ways of living and
            working.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
