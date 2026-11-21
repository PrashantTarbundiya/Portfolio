import React, { useEffect } from 'react';
import { X, ShieldCheck, Zap, Github, Layers, Check, ExternalLink } from 'lucide-react';
import { flagshipProject } from '../data/portfolioData';

export default function ArchitectureModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-250"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      <div 
        data-lenis-prevent="true"
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl glass-modal p-4 sm:p-7 md:p-9"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-start justify-between gap-3 pb-4 sm:pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-lime-neon text-[11px] sm:text-xs font-mono font-bold mb-2">
              <Layers className="w-3.5 h-3.5 text-lime-neon" />
              <span>SYSTEM ARCHITECTURE BLUEPRINT</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              AuraPass Architecture Deep Dive
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-mono mt-1">
              90° Yaw Tolerance • Passive Liveness Verification • Docker Microservices &amp; PostgreSQL RBAC
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

        {/* Modal Body */}
        <div className="py-4 sm:py-6 space-y-5 sm:space-y-7">
          
          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
            AuraPass is an AI-powered enterprise attendance and access control system that solves edge biometric failures caused by head rotations and spoofing attempts. The architecture decouples camera capture from vector classification, ensuring rapid kiosk check-in throughput and military-grade privacy.
          </p>

          {/* 6-Stage Execution Pipeline */}
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-lime-neon">
                End-to-End Pipeline Execution Flow
              </h4>
              <span className="text-[10px] sm:text-[11px] font-mono text-gray-400">
                Total Latency &lt; 220ms
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
              {flagshipProject.architecturePipeline.map((node, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl glass-card flex flex-col justify-between group hover:border-lime-neon/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-lime-neon font-bold tracking-widest px-2 py-0.5 rounded bg-lime-neon/10">
                        STAGE {node.step}
                      </span>
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-lime-neon transition-colors">
                      {node.heading}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Reliability Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
            
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-card">
              <div className="flex items-center gap-2 mb-2 text-lime-neon">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                <h5 className="text-xs sm:text-sm font-bold text-white">Zero-Trust Biometric Storage</h5>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                Raw employee facial photos are never written to disk or database tables. All biometric data is strictly mapped into 512-dimensional normalized vectors and cryptographically protected.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-card">
              <div className="flex items-center gap-2 mb-2 text-cyan-neon">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                <h5 className="text-xs sm:text-sm font-bold text-white">High-Concurrency Throughput</h5>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                Containerized PostgreSQL and Docker inference workers operate asynchronously, allowing seamless employee throughput during high-density shift rotations without queue bottlenecks.
              </p>
            </div>

          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 sm:pt-6 border-t border-white/10">
          <div className="flex items-center gap-2.5 flex-wrap">
            <a
              href={flagshipProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full glass-card hover:border-white/30 text-xs font-mono text-white transition-all shadow-md"
            >
              <Github className="w-4 h-4 text-lime-neon" />
              <span>GitHub Repository</span>
            </a>

            {flagshipProject.liveUrl && (
              <a
                href={flagshipProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-cyan-neon/20 border border-cyan-neon/40 text-cyan-neon hover:bg-cyan-neon hover:text-black font-semibold text-xs font-mono transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live System</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-lime-neon text-black font-mono font-bold text-xs hover:bg-[#d8ff33] shadow-[0_0_18px_rgba(200,255,0,0.35)] transition-all"
          >
            Done &amp; Close
          </button>
        </div>

      </div>
    </div>
  );
}
