import { useState, useEffect, useRef, useCallback } from 'react';

export default function useCountUp({
  end,
  duration = 2000,
  startOnView = true,
} = {}) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const hasStarted = useRef(false);

  const decimalPlaces = String(end).includes('.')
    ? String(end).split('.')[1].length
    : 0;

  const animate = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;

      setDisplayValue(
        decimalPlaces > 0
          ? parseFloat(current.toFixed(decimalPlaces))
          : Math.round(current)
      );

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [end, duration, decimalPlaces]);

  useEffect(() => {
    if (!startOnView) {
      animate();
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [startOnView, animate]);

  return [ref, displayValue];
}
