import type { Metadata } from "next";
import { serif, sans, script } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conejo Valley Family Counseling",
  description:
    "Online & in-person counseling in Newbury Park & across CA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
