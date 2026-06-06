"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type BookingContextType = {
  openBooking: () => void;
  closeBooking: () => void;
  isBookingOpen: boolean;
};

const BookingContext = createContext<BookingContextType | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within AppProviders");
  return ctx;
}

export function AppProviders({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, [reducedMotion]);

  useEffect(() => {
    document.body.classList.toggle("has-custom-cursor", !reducedMotion);
    return () => document.body.classList.remove("has-custom-cursor");
  }, [reducedMotion]);

  useEffect(() => {
    if (isBookingOpen) {
      lenisRef.current?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenisRef.current?.start();
      document.body.style.overflow = "";
    }
  }, [isBookingOpen]);

  const bookingValue: BookingContextType = {
    openBooking: () => setIsBookingOpen(true),
    closeBooking: () => setIsBookingOpen(false),
    isBookingOpen,
  };

  return (
    <BookingContext.Provider value={bookingValue}>
      {children}
    </BookingContext.Provider>
  );
}

export { gsap, ScrollTrigger };
