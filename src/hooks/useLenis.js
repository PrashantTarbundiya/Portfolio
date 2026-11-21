import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

let globalLenis = null;

export function getLenis() {
  return globalLenis;
}

export function pauseLenis() {
  globalLenis?.stop();
}

export function resumeLenis() {
  globalLenis?.start();
}

export function scrollToTarget(target, options = {}) {
  if (globalLenis) {
    globalLenis.scrollTo(target, { offset: -80, duration: 1.2, ...options });
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // On touch devices (phones/tablets), let the native OS handle 120Hz/60Hz hardware scrolling
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.6, // Snappy & responsive (prevents sluggish wheel delay)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !isTouch,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false, // Prevents touch hijacking on mobile
      prevent: (node) => {
        return Boolean(node?.closest?.('[data-lenis-prevent]'));
      },
    });

    lenisRef.current = lenis;
    globalLenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      globalLenis = null;
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
