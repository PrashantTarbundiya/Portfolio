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
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    let ticking = false;

    const determineActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. If at or near bottom of document, activate last section ('contact')
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // 2. If near the top, activate first section ('about')
      if (scrollY < 180) {
        setActiveSection('about');
        return;
      }

      // 3. Anchor line for detecting section in view (200px below top of viewport)
      const anchorLine = 200;

      let current = 'about';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top has scrolled to or past the anchor line
          if (rect.top <= anchorLine) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          determineActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check on mount and after a short tick when DOM has rendered
    determineActiveSection();
    const timer = setTimeout(determineActiveSection, 120);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return activeSection;
}
