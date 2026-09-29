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
    <header className="bg-[#f4f1ea]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6 md:px-14 lg:px-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-[26px] text-neutral-800">
            Conejo Valley
          </span>
          <span className="mt-1 text-[11px] tracking-[0.3em] text-teal-700/80">
            FAMILY COUNSELING
          </span>
        </Link>

        {/* Nav links + Contact */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] tracking-[0.15em] text-neutral-700 uppercase hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full border border-neutral-700 px-6 py-2.5 text-[13px] tracking-[0.15em] text-neutral-800 uppercase hover:bg-neutral-800 hover:text-[#f4f1ea]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
