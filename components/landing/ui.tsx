import Link from "next/link";
import type { ReactNode } from "react";

type LinkProps = { href: string; children: ReactNode; className?: string };

/** Uppercase text link with a thin underline, e.g. "BOOK A CONSULTATION". */
export function TextLink({ href, children, className = "" }: LinkProps) {
  return (
    <Link
      href={href}
      className={`inline-block w-fit border-b border-current py-[9px] text-button leading-[1.25] font-normal uppercase transition-colors duration-300 hover:text-accent-deep ${className}`}
    >
      {children}
    </Link>
  );
}

/** Oval button: solid eucalyptus, inverting to an outline on hover. */
export function PillLink({ href, children, className = "" }: LinkProps) {
  return (
    <Link
      href={href}
      className={`inline-block w-fit rounded-[100%] border border-primary bg-primary px-[22px] py-[15px] text-button leading-[1.25] font-normal text-canvas uppercase transition-colors duration-300 hover:bg-transparent hover:text-primary ${className}`}
    >
      {children}
    </Link>
  );
}
