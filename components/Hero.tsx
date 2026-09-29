import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#f4f1ea] md:flex-row">
      {/* Left image */}
      <div className="relative h-[420px] w-full md:h-[720px] md:w-[34%]">
        <Image
          src="/hero-family.svg"
          alt="Family walking together on the beach"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col justify-center gap-6 px-8 py-14 md:px-16 md:py-0 lg:px-20 lg:pr-40">
        <p className="max-w-md text-[13px] tracking-[0.2em] text-neutral-700 uppercase">
          Online &amp; in-person counseling in Newbury Park &amp; across CA
        </p>

        <h1 className="font-serif text-[44px] leading-[1.15] text-neutral-800 sm:text-[52px] lg:text-[58px]">
          Rebuild your foundation on solid ground and finally begin to{" "}
          <span className="font-script text-teal-700 text-[64px] leading-none sm:text-[72px] lg:text-[80px]">
            thrive
          </span>
          .
        </h1>

        <p className="max-w-md text-lg leading-8 text-neutral-600">
          Specialized therapy for adults, couples, teens, and children to
          reflect, heal, and grow.
        </p>

        <Link
          href="#contact"
          className="mt-2 w-fit border-b border-neutral-800 pb-1 text-[13px] tracking-[0.2em] text-neutral-800 uppercase"
        >
          Book an Appointment
        </Link>
      </div>

      {/* Right edge image sliver */}
      <div className="absolute top-0 right-0 hidden h-[720px] w-[8%] lg:block">
        <Image
          src="/hero-edge.svg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
