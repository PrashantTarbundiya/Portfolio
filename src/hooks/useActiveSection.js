import { useState, useEffect } from 'react';

const SECTION_IDS = [
  'about',
  'skills',
  'projects',
  'experience',
  'achievements',
  'contact',
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        let best = null;
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!best || entry.intersectionRatio > best.intersectionRatio)
          ) {
            best = entry;
          }
        }
        if (best) {
          setActiveSection(best.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.2,
      }
    );

    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
