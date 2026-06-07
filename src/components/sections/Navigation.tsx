"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FlameIcon } from "@/components/ui/FlameIcon";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
        <a
          href="#"
          className="flex items-center gap-2 group"
          data-cursor="hover"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <FlameIcon className="h-6 w-6 transition-transform group-hover:scale-110" />
          <span className="font-display text-xl font-extrabold tracking-tight text-cream">
            OUTFYRE
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="text-sm text-muted hover:text-cream transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-ember after:transition-all hover:after:w-full"
                data-cursor="hover"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <MagneticButton
          size="sm"
          onClick={() => scrollTo("#contact")}
        >
          Book a Call
        </MagneticButton>
      </nav>
    </motion.header>
  );
}
