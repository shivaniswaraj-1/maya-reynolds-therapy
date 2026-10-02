import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-1 flex-col overflow-hidden bg-background md:min-h-[560px] md:flex-row">
      {/* Left image - real site: top 5.6%, bottom 11.2% (measured below the header) */}
      <div className="relative h-[420px] w-full md:h-auto md:w-[34.6%] md:self-stretch">
        <div className="absolute inset-0 md:top-[5.6%] md:bottom-[11.2%]">
          <Image
            src="/hero-family.jpg"
            alt="Family walking together on the beach"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col justify-center px-8 py-14 md:px-16 md:py-16 lg:px-20 lg:pr-28">
        <p className="max-w-md text-[15px] tracking-[0.15em] text-foreground uppercase">
          Online &amp; in-person counseling in Newbury Park &amp; across CA
        </p>

        <h1 className="mt-10 max-w-2xl font-serif text-[44px] font-light leading-[1.25] tracking-tight text-foreground sm:mt-14 sm:text-[52px] lg:mt-16 lg:max-w-[700px] lg:text-[58px]">
          Rebuild your foundation on solid ground and finally begin to{" "}
          <span className="font-script text-[57px] leading-none text-accent-teal sm:text-[67px] lg:text-[75px]">
            thrive
          </span>
          .
        </h1>

        <p className="mt-6 max-w-md text-[17px] leading-[1.8] text-foreground md:mt-8">
          Specialized therapy for adults, couples, teens, and children to
          reflect, heal, and grow.
        </p>

        <Link
          href="/#contact"
          className="mt-8 w-fit border-b border-foreground pb-1 text-[11.5px] tracking-[0.12em] text-foreground uppercase md:mt-10"
        >
          Book an Appointment
        </Link>
      </div>

      {/* Right edge image sliver - real site: top 33.8%, height 55% (measured below the header) */}
      <div className="absolute right-0 hidden w-[8.2%] lg:block lg:top-[33.8%] lg:h-[55%]">
        <Image
          src="/hero-edge.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
