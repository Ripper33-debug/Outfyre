"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/components/providers/AppProviders";
import { CALENDLY_URL } from "@/lib/constants";

export function BookingModal() {
  const { isBookingOpen, closeBooking } = useBooking();

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
          />
          <motion.div
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[101] md:w-full md:max-w-3xl md:h-[85vh] bg-surface rounded-2xl border border-white/10 overflow-hidden shadow-ember-lg"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            data-lenis-prevent
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Book Your Strategy Call
                </h3>
                <p className="text-sm text-muted">
                  30 minutes · No commitment
                </p>
              </div>
              <button
                onClick={closeBooking}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted hover:text-white"
                aria-label="Close"
                data-cursor="hover"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M15 5L5 15M5 5l10 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="h-[calc(100%-73px)]">
              <iframe
                src={CALENDLY_URL}
                title="Book a call with OUTFYRE"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
