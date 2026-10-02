import Link from "next/link";
import type { ReactNode } from "react";

type LinkProps = { href: string; children: ReactNode; className?: string };

/** Uppercase text link with a thin underline, e.g. "BOOK AN APPOINTMENT". */
export function TextLink({ href, children, className = "" }: LinkProps) {
  return (
    <Link
      href={href}
      className={`inline-block w-fit border-b border-current py-[9px] text-button leading-[1.25] font-normal uppercase transition-opacity duration-300 hover:opacity-60 ${className}`}
    >
      {children}
    </Link>
  );
}

/** Oval outlined button, e.g. "CONTACT" / "BOOK NOW". */
export function PillLink({ href, children, className = "" }: LinkProps) {
  return (
    <Link
      href={href}
      className={`inline-block w-fit rounded-[100%] border border-current px-[19.5px] py-[15px] text-button leading-[1.25] font-normal uppercase transition-colors duration-300 hover:bg-foreground hover:text-background ${className}`}
    >
      {children}
    </Link>
  );
}
