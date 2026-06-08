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

declare global {
  interface Window {
    __outfyreScrollReady?: boolean;
  }
}

export function AppProviders({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      window.__outfyreScrollReady = true;
      window.dispatchEvent(new Event("outfyre:scroll-ready"));
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });

    const onRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      window.__outfyreScrollReady = true;
      window.dispatchEvent(new Event("outfyre:scroll-ready"));
    });

    return () => {
      gsap.ticker.remove(updateLenis);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      ScrollTrigger.scrollerProxy(document.documentElement, {});
      ScrollTrigger.refresh();
      lenis.destroy();
      lenisRef.current = null;
      window.__outfyreScrollReady = false;
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
