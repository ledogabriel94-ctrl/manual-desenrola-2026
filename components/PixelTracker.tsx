"use client";

import { useEffect, useRef } from "react";

import { getClientUserData, trackCustom } from "@/lib/pixel/client";

const SCROLL_BREAKPOINTS = [25, 50, 75, 90] as const;

export function PixelTracker() {
  const firedScrollDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Warm up identifiers (external_id, fbp, fbc) on first paint
    getClientUserData();
  }, []);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrolled = window.scrollY + window.innerHeight;
      const total = doc.scrollHeight;
      if (total <= 0) return;
      const percent = Math.min(100, Math.round((scrolled / total) * 100));
      for (const breakpoint of SCROLL_BREAKPOINTS) {
        if (percent >= breakpoint && !firedScrollDepths.current.has(breakpoint)) {
          firedScrollDepths.current.add(breakpoint);
          trackCustom("ScrollDepth", { depth: breakpoint });
        }
      }
    }

    let ticking = false;
    function throttled() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
    }

    window.addEventListener("scroll", throttled, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", throttled);
  }, []);

  return null;
}
