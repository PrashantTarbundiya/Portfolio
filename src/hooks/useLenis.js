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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      // Crucial: prevent Lenis from intercepting scroll inside modals, drawers & CLI
      prevent: (node) => {
        return Boolean(node?.closest?.('[data-lenis-prevent]'));
      },
    });

    lenisRef.current = lenis;
    globalLenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      globalLenis = null;
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
