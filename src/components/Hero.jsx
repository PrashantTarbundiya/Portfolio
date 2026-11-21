import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Terminal, 
  Linkedin, 
  Github, 
  Code2, 
  Mail, 
  Command
} from 'lucide-react';
import { personalInfo, heroStats } from '../data/portfolioData';
import useCountUp from '../hooks/useCountUp';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Hero({ onCopyEmail, onOpenCommandPalette, onOpenTerminal }) {
  // Animated counters for numerical stats
  const [cgpaRef, cgpaVal] = useCountUp({ end: 9.08, duration: 1800 });
  const [reposRef, reposVal] = useCountUp({ end: 10, duration: 1600 });
  const [statsBarRef, statsBarVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 overflow-hidden">
      
      {/* Subtle Hero Radial Spotlight (Crisp Indigo-Teal Atmospheric Accent) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08)_0%,rgba(14,165,233,0.04)_45%,transparent_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Title & Identity — Crisp, High-Contrast Luxury Typography */}
        <div className="max-w-4xl">
          <h1 className="hero-entrance-delay-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-5 sm:mb-7 leading-[1.15] break-words">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_2px_30px_rgba(255,255,255,0.18)]">
              {personalInfo.name}
            </span>
          </h1>

          <p className="hero-entrance-delay-2 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mb-8 sm:mb-10 font-normal">
            {personalInfo.summary}
          </p>

          {/* Action CTAs */}
          <div className="hero-entrance-delay-3 flex flex-wrap items-center gap-2.5 sm:gap-4 mb-8 sm:mb-12">
            <a
              href="#projects"
              className="btn-press flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-lime-neon text-black font-mono font-bold text-xs sm:text-sm hover:bg-[#d8ff33] shadow-[0_0_24px_rgba(200,255,0,0.35)] hover:shadow-[0_0_36px_rgba(200,255,0,0.6)]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3.5 rounded-full glass-card hover:border-white/30 text-white font-mono text-xs sm:text-sm shadow-lg"
            >
              <FileDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-lime-neon" />
              <span>Resume PDF</span>
            </a>

            <button
              onClick={onOpenCommandPalette}
              className="btn-press flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full glass-pill text-gray-200 hover:text-white font-mono text-xs sm:text-sm"
              title="Press Ctrl+K"
            >
              <Command className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-lime-neon" />
              <span>Commands (⌘K)</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="btn-press hidden sm:flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-full text-gray-400 hover:text-lime-neon font-mono text-xs sm:text-sm"
              title="Launch Terminal (~)"
            >
              <Terminal className="w-4 h-4" />
              <span>Terminal (~)</span>
            </button>
          </div>

          {/* Social Links Row */}
          <div className="hero-entrance-delay-5 flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl glass-card text-gray-300 hover:text-white hover:border-white/30 hover:scale-105 transition-all"
              aria-label="GitHub Profile"
              title="GitHub (PrashantTarbundiya)"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl glass-card text-gray-300 hover:text-white hover:border-cyan-neon/40 hover:scale-105 transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl glass-card text-gray-300 hover:text-cyan-neon hover:border-cyan-neon/40 hover:scale-105 transition-all"
              aria-label="Codeforces Profile"
              title="Codeforces (Pupil)"
            >
              <Terminal className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl glass-card text-gray-300 hover:text-coral-devx hover:border-coral-devx/40 hover:scale-105 transition-all"
              aria-label="LeetCode Profile"
              title="LeetCode Problem Solving"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <button
              onClick={() => onCopyEmail(personalInfo.email)}
              className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl glass-card text-gray-300 hover:text-lime-neon hover:border-lime-neon/40 hover:scale-105 transition-all"
              aria-label="Copy Email"
              title="Copy prashanttarbundiya2@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bento Glass Stats Bar with Animated CountUp */}
        <div 
          ref={statsBarRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10 reveal-stagger ${
            statsBarVisible ? 'visible' : ''
          }`}
        >
          {heroStats.map((stat, idx) => {
            let renderedValue = stat.value;
            let targetRef = null;

            if (stat.label.includes('CGPA')) {
              renderedValue = cgpaVal > 0 ? cgpaVal.toFixed(2) : '9.08';
              targetRef = cgpaRef;
            } else if (stat.label.includes('Repos')) {
              renderedValue = reposVal > 0 ? `${reposVal}+` : '10+';
              targetRef = reposRef;
            }

            return (
              <div 
                key={idx}
                ref={targetRef}
                className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between group hover:border-white/30"
              >
                <div className="flex items-baseline gap-1 mb-2 sm:mb-3">
                  <span className={`text-2xl sm:text-3xl lg:text-4xl font-mono font-extrabold tracking-tight ${
                    stat.accent === 'lime' ? 'text-lime-neon' :
                    stat.accent === 'coral' ? 'text-coral-devx' :
                    stat.accent === 'cyan' ? 'text-cyan-neon' : 'text-white'
                  }`}>
                    {renderedValue}
                  </span>
                  {stat.suffix && (
                    <span className="text-[10px] sm:text-xs font-mono text-gray-400 font-bold">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-gray-200 mb-0.5 sm:mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-mono text-gray-400 leading-tight">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
