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
  title: "OUTFYRE — Custom AI Tools & Managed Web Platforms",
  description:
    "We build custom AI tools and the websites that power them — designed, hosted, and evolved as one ongoing partnership.",
  keywords: [
    "custom AI tools",
    "web design",
    "managed hosting",
    "AI chatbots",
    "web development",
    "OUTFYRE",
  ],
  openGraph: {
    title: "OUTFYRE — We Build AI Tools",
    description:
      "Custom AI systems and the platforms they live on — built, hosted, and evolved together.",
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
