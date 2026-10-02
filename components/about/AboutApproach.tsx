import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutApproach() {
  return (
    <section className="bg-white py-20 md:py-28 lg:pt-[120px] lg:pb-[90px]">
      <Reveal className="px-6 sm:px-10 md:px-16 lg:px-[8.8%]">
        <p className="text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
          Our approach
        </p>
        <h2 className="mt-6 max-w-[1180px] font-serif text-[32px] font-light leading-[1.35] tracking-tight text-foreground sm:text-[40px] lg:text-[46px]">
          We believe real change starts with understanding yourself, but we
          know that&apos;s not enough&mdash;you need to know{" "}
          <span className="font-script text-[46px] leading-none text-accent-teal sm:text-[56px] lg:text-[62px]">
            how
          </span>{" "}
          to make that change happen.
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col gap-12 md:mt-24 md:flex-row md:items-center md:gap-0 lg:mt-[130px]">
        {/* Left image - flush to the viewport edge */}
        <Reveal className="relative aspect-[947/565] w-full md:w-[49.7%]">
          <Image
            src="/about-approach.webp"
            alt="A family of five walking hand in hand along the shoreline"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={150}
          className="flex flex-col gap-6 px-6 sm:px-10 md:flex-1 md:pr-16 md:pl-12 lg:pr-[8.8%] lg:pl-[8.2%]"
        >
          <p className="text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
            That&apos;s where we come in.
          </p>
          <p className="text-[17px] leading-[1.8] text-foreground">
            We&apos;re here to listen, to honor what you&apos;ve been through,
            and to help you make sense of your experiences, without judgment
            or preconceived agendas. We also recognize that this can be a
            vulnerable experience, especially if you&apos;re used to being
            someone who has managed it all on your own before. This is a place
            where you can be free to show up exactly as you are knowing that
            we&apos;re proud of you and are ready to help you feel grounded,
            even when life feels chaotic.
          </p>
          <p className="text-[17px] leading-[1.8] text-foreground">
            Our goal is to not only help you understand yourself on a deeper
            level but to also give you practical skills you can use in your
            daily life. We expect you to show up, not just physically, but
            with a willingness to reflect, apply what you&apos;ve learned, and
            engage in this work of healing. We believe that growth happens
            through consistency, both in and out of sessions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
