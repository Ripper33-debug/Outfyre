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
  title: "OUTFYRE — AI-Powered Outbound That Fills Your Calendar",
  description:
    "AI-powered outbound that fills your calendar with qualified sales meetings — automatically. 10+ meetings per month guaranteed.",
  keywords: [
    "AI lead generation",
    "outbound sales",
    "B2B meetings",
    "sales automation",
    "OUTFYRE",
  ],
  openGraph: {
    title: "OUTFYRE — We Start The Fire",
    description:
      "AI-powered outbound that fills your calendar with qualified sales meetings.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} bg-void text-white antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
