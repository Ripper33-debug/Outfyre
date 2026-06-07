import type { Metadata } from "next";
import { Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "OUTFYRE — Your AI Growth Team on Retainer",
  description:
    "We build and run a multi-agent AI system that books your sales team 10+ qualified meetings every month — done for you, every month.",
  keywords: [
    "AI growth team",
    "AI outbound",
    "multi-agent AI",
    "sales meetings",
    "AI retainer",
    "OUTFYRE",
  ],
  openGraph: {
    title: "OUTFYRE — Your AI Growth Team. On Retainer.",
    description:
      "Multi-agent AI system that books 10+ qualified meetings per month. Built and run for you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} bg-charcoal text-cream antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
