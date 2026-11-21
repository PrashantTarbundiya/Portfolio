// Native high-performance scroll provider - Zero JS wheel interception, zero lag, 100% native compositor speed
export function getLenis() {
  return null;
}

export function pauseLenis() {}

export function resumeLenis() {}

export function scrollToTarget(target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  const navHeight = 85;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

export default function useLenis() {
  // Uses 100% native hardware compositor scrolling for zero input latency
  return null;
}
