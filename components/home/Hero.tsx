import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-1 flex-col overflow-hidden bg-background md:min-h-[560px] md:flex-row">
      {/* Left image - inset from the header and section bottom on desktop */}
      <div className="relative h-[340px] w-full sm:h-[420px] md:h-auto md:w-[38%] md:self-stretch">
        <div className="absolute inset-0 md:top-[5.6%] md:bottom-[11.2%]">
          <Image
            src="/office-1.jpeg"
            alt="Dr. Reynolds’ sunlit Santa Monica office with a grey sofa, armchair, and tall windows"
            fill
            priority
            sizes="(min-width: 768px) 38vw, 100vw"
            className="object-cover object-[65%_50%]"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col justify-center px-6 py-14 sm:px-10 md:px-16 md:py-16 lg:px-20 lg:pr-[8.8%]">
        <p className="max-w-md text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
          In-person therapy in Santa Monica &amp; telehealth across California
        </p>

        <h1 className="mt-10 max-w-[720px] font-serif text-[40px] font-light leading-[1.25] tracking-tight text-foreground sm:mt-14 sm:text-[52px] lg:mt-16 lg:text-[58px]">
          Feel steady on the inside, not just{" "}
          <span className="mr-2 font-script text-[54px] leading-none text-accent-teal sm:text-[67px] lg:text-[75px]">
            functional
          </span>{" "}
          on the outside.
        </h1>

        <p className="mt-6 max-w-[540px] text-[17px] leading-[1.8] text-foreground md:mt-8">
          Dr. Maya Reynolds, PsyD is a licensed clinical psychologist helping
          adults work through anxiety, trauma, and burnout.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-10">
          <Link
            href="/contact"
            className="rounded-full border border-foreground px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            Book a consultation
          </Link>
          <Link
            href="/about"
            className="border-b border-foreground pb-1 text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:border-accent-teal hover:text-accent-teal"
          >
            About Dr. Reynolds
          </Link>
        </div>
      </div>
    </section>
  );
}
