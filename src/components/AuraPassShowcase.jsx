import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Github, 
  ExternalLink,
  Check,
  ShieldCheck,
  Zap,
  Server
} from 'lucide-react';
import { flagshipProject } from '../data/portfolioData';

export default function AuraPassShowcase({ onOpenArchitectureModal }) {
  const specItems = [
    {
      title: "90° Yaw Tolerance",
      subtitle: "Frontal & Extreme Profile",
      detail: "Reliable biometric recall across 0° to 90° rotation angles",
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-lime-neon" />,
      color: "lime"
    },
    {
      title: "< 220ms Latency",
      subtitle: "Sub-Second Recognition",
      detail: "Optimized convolutional inference pipeline",
      icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-neon" />,
      color: "cyan"
    },
    {
      title: "Anti-Spoofing V2",
      subtitle: "Passive Liveness Guard",
      detail: "Proactively rejects 2D photos, screen replays & masks",
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-coral-devx" />,
      color: "coral"
    },
    {
      title: "Docker + RBAC",
      subtitle: "PostgreSQL & Mobile Client",
      detail: "Containerized microservices & React Native companion app",
      icon: <Server className="w-4 h-4 sm:w-5 sm:h-5 text-violet-neon" />,
      color: "violet"
    }
  ];

  return (
    <article className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-card glass-card-glow p-5 sm:p-8 lg:p-11 mb-10 sm:mb-14 border border-lime-neon/40 shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.35),0_4px_12px_0_rgba(0,0,0,0.5),0_24px_60px_-8px_rgba(0,0,0,0.85)] group">
      
      {/* Top Luminous Neon Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-neon to-transparent opacity-90 shadow-[0_0_15px_#c8ff00]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Info & Highlights */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          
          <div>
            {/* Star Flagship Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-pill text-lime-neon text-[11px] sm:text-xs font-mono font-bold mb-4 sm:mb-5 border-lime-neon/40 shadow-[0_0_15px_rgba(200,255,0,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-lime-neon" />
              <span>{flagshipProject.badge}</span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">
              {flagshipProject.title}
              <span className="block text-base sm:text-lg lg:text-xl font-mono font-semibold text-lime-neon mt-1">
                {flagshipProject.subtitle}
              </span>
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 font-normal">
              {flagshipProject.description}
            </p>

            {/* Highlights Checklist */}
            <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              {flagshipProject.highlights.map((item, idx) => {
                const [title, desc] = item.split(': ');
                return (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="p-1 rounded-full bg-lime-neon/10 border border-lime-neon/30 mt-0.5 shrink-0">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-lime-neon" />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                      <strong className="text-white font-semibold">{title}:</strong> {desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              {flagshipProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-mono glass-pill text-gray-200 hover:border-lime-neon/50 hover:text-white transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-4 sm:pt-5 border-t border-white/10">
            <button
              onClick={onOpenArchitectureModal}
              className="btn-press flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-lime-neon text-black font-mono font-bold text-xs hover:bg-[#d8ff33] shadow-[0_0_20px_rgba(200,255,0,0.35)] w-full sm:w-auto"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Architecture Pipeline</span>
            </button>

            <a
              href={flagshipProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full glass-card hover:border-white/30 text-white font-mono text-xs shadow-md w-full sm:w-auto"
            >
              <Github className="w-4 h-4 text-lime-neon" />
              <span>GitHub Repository</span>
            </a>

            {flagshipProject.liveUrl && (
              <a
                href={flagshipProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-cyan-neon/20 border border-cyan-neon/40 text-cyan-neon hover:bg-cyan-neon hover:text-black font-semibold text-xs font-mono shadow-md transition-all w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live System</span>
              </a>
            )}
          </div>

        </div>

        {/* Right Column: Clean Enterprise Benchmark Metrics & Safeguards */}
        <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4">
          
          {/* 4 Clean Benchmark Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {specItems.map((spec, i) => (
              <div 
                key={i}
                className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-card flex flex-col justify-between group hover:border-white/30"
              >
                <div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 w-fit mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform">
                    {spec.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-0.5">
                    {spec.title}
                  </h4>
                  <p className={`text-xs font-mono font-semibold mb-1.5 sm:mb-2 ${
                    spec.color === 'lime' ? 'text-lime-neon' :
                    spec.color === 'cyan' ? 'text-cyan-neon' :
                    spec.color === 'coral' ? 'text-coral-devx' : 'text-violet-neon'
                  }`}>
                    {spec.subtitle}
                  </p>
                </div>
                <p className="text-[10px] sm:text-[11px] text-gray-400 leading-relaxed font-mono">
                  {spec.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Core System Safeguards Box */}
          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-card border border-white/15 space-y-2.5 sm:space-y-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-lime-neon flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Architectural Guarantees</span>
            </h5>
            
            <ul className="space-y-2 text-xs font-mono text-gray-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-neon mt-1.5 shrink-0"></span>
                <span><strong>Zero-Image Retention:</strong> persists 512-d normalized mathematical vectors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon mt-1.5 shrink-0"></span>
                <span><strong>High-Throughput:</strong> Docker workers eliminate check-in bottlenecks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-devx mt-1.5 shrink-0"></span>
                <span><strong>Dual Architecture:</strong> React Web Console + React Native Mobile</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </article>
  );
}
