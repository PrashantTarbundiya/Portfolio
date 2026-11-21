import React, { useEffect } from 'react';
import { X, Github, Check, ExternalLink } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-250"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      <div 
        data-lenis-prevent="true"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl glass-card border border-white/25 p-4 sm:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-start justify-between gap-3 pb-4 sm:pb-6 border-b border-white/10">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold px-3 py-1 rounded-full glass-pill text-lime-neon mb-2 inline-block">
              {project.badge}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-mono mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full glass-pill text-gray-300 hover:text-white transition-all shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="py-4 sm:py-6 space-y-5 sm:space-y-6">
          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed font-normal">
            {project.description}
          </p>

          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-lime-neon mb-2 sm:mb-3">
              Architectural &amp; Engineering Highlights
            </h4>
            <div className="space-y-2.5 sm:space-y-3">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-lime-neon/10 border border-lime-neon/30 mt-0.5 shrink-0">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-lime-neon" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2 sm:mb-3">
              Technologies &amp; Infrastructure
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-mono glass-pill text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pt-4 sm:pt-6 border-t border-white/10 gap-3">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full glass-card hover:border-white/30 text-xs font-mono text-white transition-all shadow-md"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-lime-neon" />
              <span>GitHub Repo</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-cyan-neon/20 border border-cyan-neon/40 text-cyan-neon hover:bg-cyan-neon hover:text-black font-semibold text-xs font-mono transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-lime-neon text-black font-mono font-bold text-xs hover:bg-[#d8ff33] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
