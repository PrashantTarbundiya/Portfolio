import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsSection from './components/ProjectsSection';
import ExperienceEducation from './components/ExperienceEducation';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ArchitectureModal from './components/ArchitectureModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import CommandPalette from './components/CommandPalette';
import DeveloperConsole from './components/DeveloperConsole';
import Toast from './components/Toast';
import useLenis, { pauseLenis, resumeLenis } from './hooks/useLenis';
import { ArrowUp } from 'lucide-react';

export default function App() {
  // Initialize Lenis smooth scrolling across the entire portfolio
  useLenis();

  const [toastMessage, setToastMessage] = useState('');
  const [isArchModalOpen, setIsArchModalOpen] = useState(false);
  const [activeProjectDetail, setActiveProjectDetail] = useState(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Check if any modal or overlay is open
  const isAnyOverlayOpen = Boolean(
    isArchModalOpen || activeProjectDetail || isCommandPaletteOpen || isTerminalOpen
  );

  // When ANY overlay is open: pause Lenis and lock body so inner scroll works 100%
  useEffect(() => {
    if (isAnyOverlayOpen) {
      document.body.style.overflow = 'hidden';
      pauseLenis();
    } else {
      document.body.style.overflow = '';
      resumeLenis();
    }
  }, [isAnyOverlayOpen]);

  // Keyboard shortcuts listener: Ctrl+K or Cmd+K for Command Palette, `~` for Terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K or Cmd+K opens Command Palette
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      // Backtick or tilde `~` opens Developer Console
      if (e.key === '`' && !isCommandPaletteOpen) {
        // Only if user is not actively typing in an input
        const tag = document.activeElement?.tagName?.toLowerCase();
        if (tag !== 'input' && tag !== 'textarea') {
          e.preventDefault();
          setIsTerminalOpen((prev) => !prev);
        }
      }
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCommandPaletteOpen]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleCopyEmail = (email) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast(`Copied ${email} to clipboard!`);
        })
        .catch(() => {
          fallbackCopyTextToClipboard(email);
        });
    } else {
      fallbackCopyTextToClipboard(email);
    }
  };

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`Copied ${text} to clipboard!`);
    } catch (err) {
      showToast(`Email: ${text}`);
    }
    document.body.removeChild(textArea);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#08090d] text-[#f8fafc] font-sans selection:bg-lime-neon selection:text-black overflow-x-hidden">
      
      {/* =========================================================================
          DYNAMIC ATMOSPHERIC MESH & SUBTLE GRID BACKGROUND
          ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        
        {/* Subtle geometric dot matrix */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]"></div>

        {/* Ambient Top Glow: Soft Indigo/Cyan atmospheric wash (replaces murky lime) */}
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.09)_0%,rgba(14,165,233,0.05)_40%,transparent_70%)] blur-[140px]"></div>

        {/* Luminous Colored Accent Lights (Soft, elegant ambient glow) */}
        <div className="absolute top-[22%] -right-[8%] w-[650px] h-[650px] rounded-full bg-[#00f0ff]/6 blur-[160px] blob-2"></div>
        <div className="absolute top-[52%] -left-[10%] w-[680px] h-[680px] rounded-full bg-[#EA9271]/6 blur-[160px] blob-3"></div>
        <div className="absolute -bottom-[8%] right-[8%] w-[650px] h-[650px] rounded-full bg-[#8b5cf6]/7 blur-[150px] blob-1"></div>

        {/* Decorative Top Radar Ring */}
        <svg 
          className="absolute top-20 right-[-10vw] w-[50vmin] max-w-[540px] opacity-10 pointer-events-none" 
          viewBox="0 0 720 720"
        >
          <circle cx="360" cy="360" r="352" fill="none" stroke="#fff" strokeWidth="1.2" opacity="0.12" />
          <circle cx="360" cy="360" r="272" fill="none" stroke="#fff" strokeWidth="1.2" opacity="0.18" />
          <circle cx="360" cy="360" r="192" fill="none" stroke="#fff" strokeWidth="1.2" opacity="0.12" />
          <circle cx="360" cy="360" r="112" fill="none" stroke="#fff" strokeWidth="1.2" opacity="0.18" />
          <circle cx="360" cy="360" r="330" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="2 24" opacity="0.15" />
          <line x1="8" y1="360" x2="712" y2="360" stroke="#fff" strokeWidth="1.2" opacity="0.08" />
          <line x1="360" y1="8" x2="360" y2="712" stroke="#fff" strokeWidth="1.2" opacity="0.08" />
        </svg>

        {/* Decorative Bottom Radar Marking */}
        <svg 
          className="absolute bottom-40 left-[-5vw] w-[40vmin] max-w-[420px] opacity-10 pointer-events-none" 
          viewBox="0 0 400 400"
        >
          <path d="M8 268 A150 150 0 0 1 158 118" fill="none" stroke="#fff" strokeWidth="1.2" opacity="0.15" />
          <path d="M8 322 A204 204 0 0 1 212 118" fill="none" stroke="#00f0ff" strokeWidth="2" strokeDasharray="2 18" opacity="0.12" />
          <circle cx="158" cy="118" r="3" fill="#00f0ff" opacity="0.3" />
        </svg>

      </div>

      {/* Floating Glass Navigation with Scroll Spy */}
      <Navbar 
        onCopyEmail={handleCopyEmail}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section with Stats Bar & Count-Up */}
        <Hero 
          onCopyEmail={handleCopyEmail}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* Technical Skills Matrix */}
        <SkillsMatrix />

        {/* Projects Showcase */}
        <ProjectsSection 
          onOpenArchitectureModal={() => setIsArchModalOpen(true)}
          onOpenProjectDetail={(proj) => setActiveProjectDetail(proj)}
        />

        {/* Dual Column Experience & Education */}
        <ExperienceEducation />

        {/* Achievements & Competitive Programming */}
        <AchievementsSection />

        {/* Interactive Contact & Quick Actions */}
        <ContactSection onCopyEmail={handleCopyEmail} showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* AuraPass Deep-Dive Architecture Modal */}
      <ArchitectureModal 
        isOpen={isArchModalOpen} 
        onClose={() => setIsArchModalOpen(false)} 
      />

      {/* Generic Project Details Modal */}
      <ProjectDetailModal 
        project={activeProjectDetail} 
        onClose={() => setActiveProjectDetail(null)} 
      />

      {/* Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenArchitectureModal={() => setIsArchModalOpen(true)}
        onOpenProjectDetail={(proj) => setActiveProjectDetail(proj)}
        onCopyEmail={handleCopyEmail}
      />

      {/* Developer Terminal Console (~) */}
      <DeveloperConsole 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Back to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''} p-3 rounded-full glass-card hover:border-lime-neon/50 text-lime-neon shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(200,255,0,0.25)] hover:scale-110 active:scale-95 transition-all`}
        title="Back to Top"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Floating Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage('')} 
      />

    </div>
  );
}
