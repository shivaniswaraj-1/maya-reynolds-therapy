import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Our Team", href: "#our-team" },
  { label: "Specialties", href: "#specialties" },
  { label: "Methods", href: "#methods" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <header className="bg-background">
      <div className="mx-auto flex max-w-[1680px] items-center justify-between px-10 py-[27px] md:px-16 lg:px-20">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/conejo-logo.png"
            alt="Conejo Valley Family Counseling"
            width={1500}
            height={438}
            priority
            className="h-[60px] w-auto sm:h-[68px] lg:h-[75px]"
          />
        </Link>

        {/* Nav links + Contact */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] tracking-[0.1em] text-foreground uppercase hover:text-accent-teal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full border border-foreground px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] text-foreground uppercase hover:bg-foreground hover:text-background"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
