import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-10 pb-14 bg-[#050608]/90 backdrop-blur-xl">
      {/* Glowing Gradient Section Divider */}
      <div className="section-divider mb-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <span className="font-mono font-bold text-black bg-lime-neon px-3 py-1.5 rounded-xl text-xs shadow-[0_0_15px_rgba(200,255,0,0.3)]">
              PT
            </span>
            <div>
              <span className="font-extrabold text-white text-base block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-gray-400 font-mono">
                Full Stack &amp; Systems Developer • Nirma University
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-gray-300">
            <a href="#about" className="hover:text-lime-neon transition-colors">About</a>
            <a href="#skills" className="hover:text-lime-neon transition-colors">Skills</a>
            <a href="#projects" className="hover:text-lime-neon transition-colors">Projects</a>
            <a href="#experience" className="hover:text-lime-neon transition-colors">Experience</a>
            <a href="#achievements" className="hover:text-lime-neon transition-colors">Honors</a>
            <a href="#contact" className="hover:text-lime-neon transition-colors">Contact</a>
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lime-neon hover:underline font-bold"
            >
              Resume PDF
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <p>© {currentYear} {personalInfo.name} (@prashanttarbundiya). All rights reserved.</p>
          <p className="text-gray-400 flex items-center gap-3">
            <a href="/sitemap.xml" className="hover:text-lime-neon transition-colors">Sitemap</a>
            <span>•</span>
            <span>Engineered with React 18 &amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
