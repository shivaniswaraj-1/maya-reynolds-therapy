import Image from "next/image";
import Link from "next/link";

export default function ScheduleSection() {
  return (
    <section
      id="contact"
      className="relative flex scroll-mt-6 flex-col overflow-hidden bg-background md:flex-row"
    >
      {/* Left edge image sliver - inset from the top, flush with the section bottom margin */}
      <div className="relative hidden w-[12%] lg:mt-[272px] lg:mb-[50px] lg:block">
        <Image
          src="/schedule-shells.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="12vw"
          className="object-cover object-[10%_50%]"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col px-8 py-16 md:px-16 md:pt-[140px] md:pb-[70px] lg:px-[8%]">
        <p className="text-[15px] tracking-[0.15em] text-foreground uppercase">
          Schedule an appointment
        </p>

        <h2 className="mt-14 max-w-[720px] font-serif text-[40px] font-light leading-[1.4] tracking-tight text-foreground sm:text-[48px] md:mt-28 lg:mt-32 lg:text-[54px]">
          Find a therapist who is the right fit for{" "}
          <span className="font-script text-[60px] leading-none text-accent-teal sm:text-[70px] lg:text-[80px]">
            you
          </span>
          .
        </h2>

        <div className="mt-8 flex max-w-[720px] flex-col gap-5 text-[17px] leading-[1.8] text-foreground">
          <p>
            Coming to therapy is a courageous decision, and connecting with the
            right kind of therapist makes all the difference. We understand
            that your journey is personal, and we&apos;re here to support you
            with care and understanding every step of the way. Each member of
            our team brings dedicated expertise and a commitment to support
            you in your struggles. We want you to feel prioritized,
            understood, and empowered.
          </p>
          <p>Click the button below to schedule an appointment.</p>
        </div>

        <Link
          href="#contact"
          className="mt-12 w-fit rounded-full border border-foreground px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] text-foreground uppercase hover:bg-foreground hover:text-background md:mt-auto"
        >
          Book Now
        </Link>
      </div>

      {/* Right image - flush to the viewport edge */}
      <div className="relative h-[420px] w-full md:mt-[128px] md:mb-[50px] md:h-auto md:w-[34.5%]">
        <Image
          src="/schedule-sand.webp"
          alt="An adult pointing at seashells in the sand next to a child's bare feet"
          fill
          sizes="(min-width: 768px) 35vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
