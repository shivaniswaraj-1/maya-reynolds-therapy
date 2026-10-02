import Link from "next/link";
import type { ReactNode } from "react";
import Logo from "@/components/Logo";
import { MAPS_URL, NAV_LINKS, PRACTICE } from "@/lib/site";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  ...NAV_LINKS,
  { label: "Contact", href: "/#contact" },
];

const SPECIALTIES = ["Anxiety & Panic", "Trauma", "Burnout", "Perfectionism"];

function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[15px] tracking-[0.15em] text-foreground uppercase">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="grid gap-14 px-6 pt-20 pb-24 sm:px-10 md:px-16 lg:grid-cols-[1fr_15%_17%_22%] lg:gap-x-8 lg:px-[6.8%] lg:pt-[90px] lg:pb-[200px]">
        <div className="max-w-[500px]">
          <Link href="/" className="block w-fit" aria-label="Dr. Maya Reynolds, PsyD — home">
            <Logo size="footer" />
          </Link>
          <p className="mt-8 text-[17px] leading-[1.8] text-foreground">
            Therapy for adults navigating anxiety, trauma, and burnout. In
            person in Santa Monica, or by secure telehealth anywhere in
            California.
          </p>
        </div>

        <nav>
          <ColumnHeading>Navigate</ColumnHeading>
          <ul className="mt-5 flex flex-col gap-1 text-[16px] leading-[1.7] text-foreground">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors duration-300 hover:text-accent-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ColumnHeading>Specialties</ColumnHeading>
          <ul className="mt-5 flex flex-col gap-1 text-[16px] leading-[1.7] text-foreground">
            {SPECIALTIES.map((item) => (
              <li key={item}>
                <Link href="/#specialties" className="transition-colors duration-300 hover:text-accent-teal">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ColumnHeading>Office</ColumnHeading>
          <address className="mt-5 flex flex-col gap-1 text-[16px] leading-[1.7] text-foreground not-italic">
            <span>{PRACTICE.street}</span>
            <span>{PRACTICE.city}</span>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-fit border-b border-foreground/40 transition-colors duration-300 hover:border-accent-teal hover:text-accent-teal"
            >
              Get directions
            </a>
          </address>
          <p className="mt-4 text-[16px] leading-[1.7] text-foreground italic">
            Telehealth available for clients located in California
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1 bg-accent-teal px-6 py-4 text-[15px] text-white sm:flex-row sm:justify-between sm:px-10 md:px-16 lg:px-[6.8%]">
        <span>
          &copy; {new Date().getFullYear()} {PRACTICE.name}
        </span>
        <span>{PRACTICE.title} &middot; Santa Monica, CA</span>
      </div>
    </footer>
  );
}
