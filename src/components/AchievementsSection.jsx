import React from 'react';
import { Trophy, Terminal, Medal, Flame, ShieldCheck, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function AchievementsSection() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.15 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  const iconMap = {
    trophy: <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-lime-neon" />,
    terminal: <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-neon" />,
    medal: <Medal className="w-4 h-4 sm:w-5 sm:h-5 text-coral-devx" />,
    flame: <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-lime-neon" />,
    'shield-check': <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-coral-devx" />,
    'check-circle': <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-neon" />,
  };

  return (
    <section id="achievements" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div 
        ref={headerRef}
        className={`mb-10 sm:mb-14 reveal ${headerVisible ? 'visible' : ''}`}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-pill text-[11px] sm:text-xs font-mono text-gray-200 uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-lime-neon" />
          <span>Accolades &amp; Proof of Work</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
          Honors, Awards &amp; Certifications
        </h2>
        <p className="text-gray-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
          National competitive programming accolades, Google competition qualifications, and hackathon distinctions.
        </p>
      </div>

      {/* Staggered Grid */}
      <div 
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 reveal-stagger ${
          gridVisible ? 'visible' : ''
        }`}
      >
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between group hover:border-white/30"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl glass-card group-hover:scale-110 transition-transform shadow-md shrink-0">
                  {iconMap[item.icon]}
                </div>
                <span className={`text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border truncate ${
                  item.color === 'lime'
                    ? 'bg-lime-neon/10 border-lime-neon/40 text-lime-neon shadow-sm shadow-lime-neon/20'
                    : item.color === 'cyan'
                    ? 'bg-cyan-neon/10 border-cyan-neon/40 text-cyan-neon shadow-sm shadow-cyan-neon/20'
                    : 'bg-coral-devx/10 border-coral-devx/40 text-coral-devx shadow-sm shadow-coral-devx/20'
                }`}>
                  {item.tag}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-gray-400 mb-2 sm:mb-3 font-medium">
                {item.organization}
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 sm:mb-5">
                {item.desc}
              </p>
            </div>

            {item.link && (
              <div className="pt-3 sm:pt-4 border-t border-white/10">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-neon hover:text-white hover:underline transition-colors"
                >
                  <span>View Verified Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
