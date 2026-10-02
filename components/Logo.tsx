type LogoProps = {
  size?: "nav" | "footer";
};

/** Text wordmark: name set in the serif, credentials in spaced teal caps. */
export default function Logo({ size = "nav" }: LogoProps) {
  const footer = size === "footer";
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-serif font-light tracking-tight text-foreground ${
          footer ? "text-[44px] sm:text-[56px]" : "text-[28px] sm:text-[34px] lg:text-[38px]"
        }`}
      >
        Maya Reynolds
      </span>
      <span
        className={`text-accent-teal uppercase ${
          footer
            ? "mt-3 text-[12px] tracking-[0.42em] sm:text-[14px]"
            : "mt-1.5 text-[9px] tracking-[0.38em] sm:text-[10px]"
        }`}
      >
        PsyD &middot; Clinical Psychologist
      </span>
    </span>
  );
}
