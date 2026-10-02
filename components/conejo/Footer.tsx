import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "@/components/conejo/conejo.module.css";

const NAV_LINKS = ["Home", "About", "FAQs", "Contact"];

const TEAM = [
  "Jennifer Anderson",
  "Heather Williams-Baumgart",
  "Autumn Bodily",
  "Candace Bletscher",
  "Samantha Johnson",
  "Rosa Gomez",
  "Chad Flores",
];

const LEGAL_LINKS = ["Terms", "Privacy Policy", "Disclaimer"];

function Column({ title, className, children }: { title: string; className: string; children: ReactNode }) {
  return (
    <div className={className}>
      <h3 className="text-eyebrow font-normal uppercase">{title}</h3>
      <div className="mt-[15px] text-small font-light">{children}</div>
    </div>
  );
}

/*
  768px+: brand block in columns 1–8, then Navigate (11–14), Our Team (15–19)
  and Contact (20–24). Mobile stacks them as Navigate, Contact, Our Team (as on
  the reference site).
*/
export default function Footer() {
  return (
    <footer className="bg-white">
      <div className={`${styles.grid24} flex flex-col pt-(--footer-pt) pb-(--footer-pb)`}>
        <div className="md:col-[2/10] md:row-[1]">
          <Link href="/conejo-clone" className="ml-edge block w-[82.6vw] md:ml-0 md:w-[calc(26.25vw_-_8px)]">
            <Image
              src="/conejo-logo.png"
              alt="Conejo Valley Family Counseling"
              width={1500}
              height={438}
              className="h-auto w-full"
            />
          </Link>
          <p className="mt-(--footer-logo-p) ml-[11.3vw] w-[77.4vw] text-body font-light md:ml-[1.77vw] md:w-[calc(26.39vw_-_6.6px)]">
            We want to make getting started simple. You’re welcome to come into
            our office in Newbury Park or schedule virtual appointments from
            anywhere in CA—whatever works best for you.
          </p>
        </div>

        <Column title="Navigate" className="order-1 mt-[39px] ml-[17.4vw] w-[65.4vw] md:order-none md:col-[12/16] md:row-[1] md:mt-0 md:ml-0 md:w-auto">
          <ul>
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <Link href={label === "Home" ? "/conejo-clone" : `#${label.toLowerCase()}`} className="transition-opacity duration-300 hover:opacity-60">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Column>

        <Column title="Our Team" className="order-3 mt-[18px] ml-[17.4vw] w-[65.4vw] md:order-none md:col-[16/21] md:row-[1] md:mt-0 md:ml-0 md:w-auto">
          <ul>
            {TEAM.map((name) => (
              <li key={name}>
                <Link href="#our-team" className="transition-opacity duration-300 hover:opacity-60">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </Column>

        <Column title="Contact" className="order-2 mt-[22px] ml-[17.4vw] w-[65.4vw] md:order-none md:col-[21/26] md:row-[1] md:mt-0 md:ml-0 md:w-auto">
          <address className="not-italic">
            925 Broadbeck Dr
            <br />
            Suites 200 and 225
            <br />
            Newbury Park, CA 91320
            <br />
            <a href="mailto:info@conejovalleycounseling.com" className="break-words transition-opacity duration-300 hover:opacity-60">
              info@conejovalleycounseling.com
            </a>
            <br />
            <a href="tel:+18052423120" className="transition-opacity duration-300 hover:opacity-60">
              805.242.3120
            </a>
          </address>
          <p className="mt-[15px] italic">
            Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp;
            Simi Valley
          </p>
        </Column>
      </div>

      <div className="flex items-center bg-accent-teal px-[7.7vw] py-[8px] text-small font-light text-white md:min-h-(--footer-bar) md:px-[6.8vw] md:py-0">
        <p>
          {LEGAL_LINKS.map((label) => (
            <span key={label}>
              <Link href="#" className="transition-opacity duration-300 hover:opacity-70">
                {label}
              </Link>
              {" | "}
            </span>
          ))}
          Website by Walker Strategy Co.
        </p>
      </div>
    </footer>
  );
}
