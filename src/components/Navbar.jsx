import React, { useState, useEffect } from 'react';
import { 
  FileDown, 
  Copy, 
  Menu, 
  X, 
  Check, 
  Sparkles,
  Command,
  Terminal,
  Github,
  Linkedin,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import useActiveSection from '../hooks/useActiveSection';

export default function Navbar({ onCopyEmail, onOpenCommandPalette, onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopy = () => {
    onCopyEmail(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Honors', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-2 transition-all duration-300">
      
      {/* Floating Glass Capsule Navigation Bar */}
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b0e14]/85 backdrop-blur-2xl border border-white/15 shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.3),0_18px_45px_-10px_rgba(0,0,0,0.85)] py-2 sm:py-2.5 px-3.5 sm:px-6' 
          : 'bg-[#0e111a]/70 backdrop-blur-xl border border-white/10 shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.2),0_10px_30px_-10px_rgba(0,0,0,0.6)] py-2.5 sm:py-3 px-4 sm:px-6'
      }`}>
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-2 group shrink-0 min-w-0">
            <span className="text-xs sm:text-sm font-extrabold text-white tracking-tight group-hover:text-lime-neon transition-colors truncate max-w-[170px] sm:max-w-none">
              Prashant Tarbundiya
            </span>
          </a>

          {/* Desktop Nav Links with Scroll Spy (Visible on lg and wider) */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/40 border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${
                    isActive 
                      ? 'nav-link-active font-bold text-lime-neon shadow-[0_0_12px_rgba(200,255,0,0.25)]' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions & Command Palette Trigger (Desktop lg+) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            
            {/* Quick Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full glass-pill text-gray-300 hover:text-white hover:border-lime-neon/40 transition-all btn-press"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-lime-neon" />
              <span>Search</span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400">
                ⌘K
              </kbd>
            </button>

            {/* Terminal Drawer Button */}
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-full glass-pill text-gray-300 hover:text-lime-neon hover:border-lime-neon/40 transition-all btn-press"
              title="Open Interactive Terminal (~)"
            >
              <Terminal className="w-3.5 h-3.5" />
            </button>

            {/* Copy Email Glass Pill */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full glass-pill text-gray-200 hover:text-white transition-all btn-press group"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-lime-neon" />
                  <span className="text-lime-neon font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-lime-neon group-hover:scale-110 transition-transform" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-1.5 rounded-full bg-lime-neon text-black hover:bg-[#d8ff33] shadow-[0_0_20px_rgba(200,255,0,0.35)] hover:shadow-[0_0_28px_rgba(200,255,0,0.55)] btn-press"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile & Tablet Controls (Visible on screens < lg) */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="p-1.5 sm:p-2 rounded-full glass-pill text-gray-300 hover:text-white"
              title="Open Command Palette (Ctrl+K)"
              aria-label="Search"
            >
              <Command className="w-4 h-4 text-lime-neon" />
            </button>

            {/* Quick Resume Link on Tablet / larger mobile */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold px-3 py-1.5 rounded-full bg-lime-neon text-black hover:bg-[#d8ff33] shadow-sm shadow-lime-neon/20 shrink-0"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Copy email icon on small mobile */}
            <button
              onClick={handleCopy}
              className="p-1.5 sm:p-2 rounded-full glass-pill text-gray-300 sm:hidden"
              title="Copy Email"
              aria-label="Copy Email"
            >
              {copied ? <Check className="w-4 h-4 text-lime-neon" /> : <Copy className="w-4 h-4 text-lime-neon" />}
            </button>

            {/* Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-full glass-pill text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-lime-neon" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Slide-down Drawer */}
      {mobileMenuOpen && (
        <div 
          data-lenis-prevent="true"
          className="lg:hidden mt-2.5 max-w-7xl mx-auto rounded-2xl sm:rounded-3xl glass-card p-4 sm:p-6 border border-white/20 animate-in slide-in-from-top-3 duration-200 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-y-auto max-h-[80vh]"
        >
          <div className="flex flex-col gap-3">
            {/* Top Bar & Terminal */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-gray-300 font-semibold tracking-wider uppercase">
                Menu
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-mono text-lime-neon hover:border-lime-neon/40 shrink-0"
                title="Launch Terminal"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>CLI Console</span>
              </button>
            </div>

            {/* Navigation Grid (Touch-friendly 2 or 3 columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-mono tracking-wide transition-all text-center ${
                      isActive 
                        ? 'bg-lime-neon/15 text-lime-neon font-bold border border-lime-neon/40 shadow-sm shadow-lime-neon/20' 
                        : 'bg-white/5 text-gray-200 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Bottom Action CTAs */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-lime-neon text-black font-mono font-bold text-xs shadow-md shadow-lime-neon/25 hover:bg-[#d8ff33] transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>
              <button
                onClick={handleCopy}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass-pill text-gray-200 hover:text-white font-mono text-xs font-medium transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-lime-neon" />
                    <span className="text-lime-neon font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-lime-neon" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Verified Profiles Row */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-around text-gray-400">
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-xl glass-card text-gray-300 hover:text-white hover:border-white/30 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-xl glass-card text-gray-300 hover:text-cyan-neon hover:border-cyan-neon/30 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.socials.codeforces} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-xl glass-card text-gray-300 hover:text-lime-neon hover:border-lime-neon/30 transition-all"
                title="Codeforces"
              >
                <Terminal className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.socials.leetcode} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-xl glass-card text-gray-300 hover:text-coral-devx hover:border-coral-devx/30 transition-all"
                title="LeetCode"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
