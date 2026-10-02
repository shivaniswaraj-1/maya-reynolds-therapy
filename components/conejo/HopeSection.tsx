import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="relative mt-16 flex flex-col overflow-hidden bg-background md:mt-24 md:min-h-screen md:flex-row lg:mt-28">
      {/* Text content */}
      <div className="flex flex-1 flex-col justify-center px-8 py-16 md:px-16 md:py-20 lg:px-20 lg:py-24 lg:pr-16">
        <h2 className="max-w-3xl font-serif text-[38px] font-light leading-[1.3] tracking-tight text-foreground sm:text-[44px] lg:max-w-[880px] lg:text-[50px]">
          You&apos;re holding onto hope that life can be better than it is
          right now.
        </h2>

        <div className="mt-12 grid gap-x-16 gap-y-8 md:mt-16 md:grid-cols-2 lg:mt-20">
          <div className="flex flex-col gap-5">
            <p className="text-[15px] tracking-[0.1em] text-foreground uppercase">
              At Conejo Valley Family Counseling we want to make that hope a
              reality.
            </p>
            <p className="text-[17px] leading-[1.8] text-foreground">
              Whether you&apos;re an adult seeking personal growth,  looking
              to work through your trauma, a couple working on your
              relationship, or a parent looking for support for your child,
              we provide a compassionate and safe space to help you navigate
              all of life&apos;s ups and downs.
            </p>
          </div>

          <p className="text-[17px] leading-[1.8] text-foreground">
            First and foremost, we believe what you&apos;re going through is
            real, valid, and worthy of support. Our team offers clients in
            the Newbury Park area and across CA an environment to discover a
            new life and a deeper sense of self in the midst of their
            struggles. As we tap into the power of connection and
            understanding, you can find your footing again and take a
            transformative path forward.
          </p>
        </div>
      </div>

      {/* Right image - real site: top 12.5%, bottom 16.9%, height ~70.6% of section */}
      <div className="relative h-[380px] w-full md:h-auto md:w-[30.5%] md:self-stretch">
        <div className="absolute inset-0 md:top-[12.5%] md:bottom-[16.9%]">
          <Image
            src="/hope-ocean.jpg"
            alt="Sandy beach with gentle ocean waves and a cloudy sky"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
