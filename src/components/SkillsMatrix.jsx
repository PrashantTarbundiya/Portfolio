import React from 'react';
import { 
  Code, 
  Cpu, 
  Server, 
  Database, 
  Brain, 
  Boxes,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function SkillsMatrix() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.15 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  const iconMap = {
    code: <Code className="w-4 h-4 sm:w-5 sm:h-5 text-lime-neon" />,
    cpu: <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-neon" />,
    server: <Server className="w-4 h-4 sm:w-5 sm:h-5 text-coral-devx" />,
    database: <Database className="w-4 h-4 sm:w-5 sm:h-5 text-lime-neon" />,
    brain: <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-violet-neon" />,
    boxes: <Boxes className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-neon" />,
  };

  return (
    <section id="skills" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div 
        ref={headerRef} 
        className={`mb-10 sm:mb-14 reveal ${headerVisible ? 'visible' : ''}`}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-pill text-[11px] sm:text-xs font-mono text-gray-200 uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-lime-neon" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
          Core Competencies &amp; Skills
        </h2>
        <p className="text-gray-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
          Grounded engineering skill set verified across production AWS deployments, high-concurrency ERP modules, and algorithmic problem-solving.
        </p>
      </div>

      {/* Staggered Skills Grid */}
      <div 
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 reveal-stagger ${
          gridVisible ? 'visible' : ''
        }`}
      >
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between group hover:border-white/30"
          >
            <div>
              <div className="flex items-center gap-3 sm:gap-3.5 mb-4 sm:mb-5">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl glass-card group-hover:scale-110 transition-transform shadow-md shrink-0">
                  {iconMap[cat.icon]}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-lime-neon transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono text-gray-400">
                    {cat.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] sm:text-xs font-mono px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl glass-pill text-gray-200 hover:border-lime-neon/50 hover:text-white transition-all cursor-default hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
