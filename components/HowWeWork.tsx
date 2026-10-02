import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section
      className="relative flex flex-col overflow-hidden bg-accent-sand md:flex-row"
    >
      {/* Text content */}
      <div className="flex flex-1 flex-col px-8 py-16 md:px-16 md:py-14 lg:px-20 lg:pr-24">
        <p className="text-[15px] tracking-[0.15em] text-foreground uppercase">
          How we work
        </p>

        <h2 className="mt-14 font-serif text-[40px] font-light leading-[1.2] tracking-tight text-foreground sm:text-[48px] md:mt-28 lg:mt-44 lg:text-[56px]">
          We&apos;re here to make a difference.
        </h2>

        <div className="mt-10 grid gap-x-6 gap-y-6 md:mt-14 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <p className="text-[15px] leading-[1.8] tracking-[0.15em] text-foreground uppercase">
              The clients we work with are balancing so many things at once,
              it&apos;s often hard for them to put themselves first.
            </p>
            <p className="text-[17px] leading-[1.8] text-foreground">
              Here, your needs are always top priority. Our team takes the
              time to deeply listen to our clients in order to truly
              understand their story and their struggles. We recognize that no
              two people are the same and that personalized therapy means an
              intentional, tailored approach. (You won&apos;t find anything
              &ldquo;one-size-fits-all&rdquo; here.) If you&apos;re ready to
              do the work, we&apos;re ready to help.
            </p>
          </div>

          <p className="text-[17px] leading-[1.8] text-foreground">
            Sometimes we may gently challenge you to look at things
            differently and other times we may explore your emotions, all
            while encouraging you to practice what you&apos;ve learned in your
            daily life. We take what we do seriously because we know how
            important it is for you to heal from what&apos;s hurting you,
            discover a fulfilling life, and build meaningful relationships.
            Our goal is to walk alongside you in this journey, offering
            support and guidance as you uncover your strengths and embrace
            what the future can hold for you.
          </p>
        </div>

        <Link
          href="/about"
          className="mt-14 w-fit border-b border-foreground pb-2 text-[11.5px] tracking-[0.12em] text-foreground uppercase md:mt-auto md:pt-24"
        >
          Learn more about us
        </Link>
      </div>

      {/* Right image - flush to the viewport edge, inset from the section top */}
      <div className="relative h-[480px] w-full md:mt-[53px] md:mb-[33px] md:h-auto md:w-[23%] md:self-stretch">
        <Image
          src="/how-we-work.webp"
          alt="Mother and daughter dancing together on a sandy beach at sunset"
          fill
          sizes="(min-width: 768px) 23vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
