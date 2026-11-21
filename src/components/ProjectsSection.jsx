import React, { useState } from 'react';
import { 
  Github, 
  Layers, 
  ExternalLink, 
  ChevronRight, 
  Radio,
  Sparkles,
  Bot,
  Video,
  ShieldAlert,
  Activity,
  Cpu,
  HeartPulse,
  BrainCircuit,
  FileCheck2,
  Sprout
} from 'lucide-react';
import { otherProjects } from '../data/portfolioData';
import AuraPassShowcase from './AuraPassShowcase';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ProjectsSection({ onOpenArchitectureModal, onOpenProjectDetail }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.15 });
  const [auraRef, auraVisible] = useScrollReveal({ threshold: 0.1 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.08 });

  const filters = [
    { id: 'all', label: `All Systems (${otherProjects.length + 1})` },
    { id: 'ai', label: 'AI, Vision & NLP' },
    { id: 'fullstack', label: 'Full Stack & Cloud' },
    { id: 'systems', label: 'Systems & Compilers' },
  ];

  const filteredProjects = otherProjects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category.includes(activeFilter);
  });

  const getProjectIcon = (id) => {
    switch (id) {
      case 'lab-portal':
        return <HeartPulse className="w-5 h-5 text-cyan-neon" />;
      case 'mlops-studio':
        return <Activity className="w-5 h-5 text-lime-neon" />;
      case 'makechat':
        return <Bot className="w-5 h-5 text-coral-devx" />;
      case 'playback':
        return <Video className="w-5 h-5 text-cyan-neon" />;
      case 'll1-parser':
        return <Cpu className="w-5 h-5 text-coral-devx" />;
      case 'scatch':
        return <ShieldAlert className="w-5 h-5 text-lime-neon" />;
      case 'revesoil':
        return <Sprout className="w-5 h-5 text-lime-neon" />;
      case 'research-crew':
        return <BrainCircuit className="w-5 h-5 text-coral-devx" />;
      case 'resume-screening':
        return <FileCheck2 className="w-5 h-5 text-cyan-neon" />;
      default:
        return <Layers className="w-5 h-5 text-lime-neon" />;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div 
        ref={headerRef} 
        className={`mb-8 sm:mb-12 reveal ${headerVisible ? 'visible' : ''}`}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-pill text-[11px] sm:text-xs font-mono text-gray-200 uppercase tracking-widest mb-3">
          <Radio className="w-3.5 h-3.5 text-lime-neon animate-pulse" />
          <span>Complete Engineering Repositories</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
          Featured Engineering Repositories
        </h2>
        <p className="text-gray-300 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
          Production AWS healthcare architectures, multi-model AI routing, compiler simulators, and biometric enterprise security systems.
        </p>
      </div>

      {/* Flagship AuraPass Showcase with Scale Reveal */}
      <div 
        ref={auraRef}
        className={`reveal-scale ${auraVisible ? 'visible' : ''}`}
      >
        <AuraPassShowcase onOpenArchitectureModal={onOpenArchitectureModal} />
      </div>

      {/* Segmented Filter Pills (Touch friendly scroll on mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`btn-press px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
              activeFilter === f.id
                ? 'bg-lime-neon text-black font-bold shadow-[0_0_22px_rgba(200,255,0,0.38)] scale-105'
                : 'glass-pill text-gray-300 hover:text-white hover:border-white/30'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Bento Grid with Staggered Entrance */}
      <div 
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 reveal-stagger ${
          gridVisible ? 'visible' : ''
        }`}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between group hover:border-white/30"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl glass-card group-hover:scale-110 transition-transform shadow-md shrink-0">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className={`text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border truncate ${
                    project.accent === 'coral' 
                      ? 'bg-coral-devx/10 border-coral-devx/40 text-coral-devx shadow-sm shadow-coral-devx/20' 
                      : project.accent === 'cyan' 
                      ? 'bg-cyan-neon/10 border-cyan-neon/40 text-cyan-neon shadow-sm shadow-cyan-neon/20' 
                      : 'bg-lime-neon/10 border-lime-neon/40 text-lime-neon shadow-sm shadow-lime-neon/20'
                  }`}>
                    {project.badge}
                  </span>
                </div>

                <button
                  onClick={() => onOpenProjectDetail(project)}
                  className="text-xs font-mono text-gray-400 hover:text-white flex items-center gap-1 group-hover:text-lime-neon transition-colors shrink-0"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-gray-400 mb-3 sm:mb-4 font-medium">
                {project.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5 sm:mb-6 font-normal">
                {project.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2 mb-5 sm:mb-6">
                {project.highlights.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-neon mt-1.5 shrink-0"></span>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-5 sm:mb-6 pt-4 sm:pt-5 border-t border-white/10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg glass-pill text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl glass-pill text-gray-200 hover:text-white"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-press flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-cyan-neon/15 border border-cyan-neon/30 text-cyan-neon hover:bg-cyan-neon hover:text-black font-semibold"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => onOpenProjectDetail(project)}
                  className="btn-press flex items-center gap-1 text-xs font-mono px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-lime-neon/10 hover:bg-lime-neon text-lime-neon hover:text-black font-semibold"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
