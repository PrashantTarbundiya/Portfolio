import React from 'react';
import { Briefcase, GraduationCap, MapPin, Check, Sparkles } from 'lucide-react';
import { experience, education } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ExperienceEducation() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.15 });
  const [leftRef, leftVisible] = useScrollReveal({ threshold: 0.1 });
  const [rightRef, rightVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="experience" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div 
        ref={headerRef}
        className={`mb-10 sm:mb-14 reveal ${headerVisible ? 'visible' : ''}`}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-pill text-[11px] sm:text-xs font-mono text-gray-200 uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-lime-neon" />
          <span>Track Record</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
          Experience &amp; Academic Rigor
        </h2>
        <p className="text-gray-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
          Production full-stack ERP microservices at Chemicrown Trading Co. combined with high-academic distinction at Nirma University.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        
        {/* Experience Column (Reveal Left) */}
        <div 
          ref={leftRef}
          className={`reveal-left ${leftVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl glass-card text-lime-neon">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Work Experience</h3>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl group hover:border-white/30"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h4>
                  <span className="text-[11px] sm:text-xs font-mono text-lime-neon font-bold px-3 py-1 rounded-full glass-pill border-lime-neon/40 shadow-sm shadow-lime-neon/20">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-4 sm:mb-5">
                  <span className="text-white font-medium">{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {exp.location}
                  </span>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] sm:text-xs font-mono px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl glass-pill text-gray-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 sm:space-y-3">
                  {exp.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-lime-neon/10 border border-lime-neon/30 mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-lime-neon" />
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column (Reveal Right) */}
        <div 
          ref={rightRef}
          className={`reveal-right ${rightVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl glass-card text-cyan-neon">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Education &amp; Foundation</h3>
          </div>

          <div className="glass-card p-5 sm:p-7 sm:p-9 rounded-2xl sm:rounded-3xl flex flex-col justify-between group hover:border-cyan-neon/40 min-h-[300px]">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h4 className="text-lg sm:text-xl font-bold text-white">{education.degree}</h4>
                <span className="text-[11px] sm:text-xs font-mono text-cyan-neon font-bold px-3 py-1 rounded-full glass-pill border-cyan-neon/40 shadow-sm shadow-cyan-neon/20">
                  {education.period}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-5 sm:mb-6">
                <span className="text-cyan-neon font-medium">{education.institution}</span>
                <span>•</span>
                <span>{education.location}</span>
              </div>

              {/* CGPA Highlight Box with Glass Sheen */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-card border-cyan-neon/30 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-gray-400 block mb-0.5">CUMULATIVE CGPA</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
                      {education.cgpa}
                    </span>
                  </div>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs font-mono text-cyan-neon font-bold block">Top Academic Tier</span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-gray-400">Scale of 10.0</span>
                </div>
              </div>

              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-lime-neon mb-2 sm:mb-3">
                Core Computer Science Coursework
              </h5>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-[11px] sm:text-xs font-mono px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl glass-pill text-gray-200 hover:border-cyan-neon/40 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/10 text-[11px] sm:text-xs font-mono text-gray-400 flex flex-wrap items-center justify-between gap-2">
              <span>Department of Computer Science &amp; Engineering</span>
              <span className="text-lime-neon">Aug 2023 – May 2027</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
