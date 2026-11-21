import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Terminal, 
  FileDown, 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  FolderGit2, 
  GraduationCap, 
  Trophy, 
  Mail, 
  X, 
  CornerDownLeft
} from 'lucide-react';
import { personalInfo, otherProjects, flagshipProject } from '../data/portfolioData';
import { scrollToTarget } from '../hooks/useLenis';

export default function CommandPalette({ 
  isOpen, 
  onClose, 
  onOpenTerminal, 
  onOpenArchitectureModal, 
  onOpenProjectDetail,
  onCopyEmail 
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleNavigate = (targetId) => {
    onClose();
    setTimeout(() => {
      scrollToTarget(`#${targetId}`);
    }, 80);
  };

  // Define commands
  const allCommands = [
    // Quick Actions
    {
      id: 'resume',
      category: 'Actions',
      title: 'Download Resume PDF',
      subtext: 'Official 1-page B.Tech CSE resume',
      icon: <FileDown className="w-4 h-4 text-lime-neon" />,
      action: () => window.open(personalInfo.resumeUrl, '_blank'),
    },
    {
      id: 'copy-email',
      category: 'Actions',
      title: 'Copy Email Address',
      subtext: personalInfo.email,
      icon: <Copy className="w-4 h-4 text-cyan-neon" />,
      action: () => {
        onCopyEmail(personalInfo.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 800);
      },
    },
    {
      id: 'open-terminal',
      category: 'Actions',
      title: 'Launch Interactive Developer Terminal',
      subtext: 'Press ~ or execute commands: help, projects, skills...',
      icon: <Terminal className="w-4 h-4 text-lime-neon" />,
      action: () => {
        onClose();
        onOpenTerminal();
      },
    },

    // Navigation Jump Links
    {
      id: 'nav-about',
      category: 'Navigation',
      title: 'Jump to About / Overview',
      subtext: 'Prashant Tarbundiya profile summary & stats',
      icon: <Sparkles className="w-4 h-4 text-gray-300" />,
      action: () => handleNavigate('about'),
    },
    {
      id: 'nav-skills',
      category: 'Navigation',
      title: 'Jump to Technical Stack',
      subtext: 'Languages, Systems, Web, Databases & AI/ML',
      icon: <Layers className="w-4 h-4 text-gray-300" />,
      action: () => handleNavigate('skills'),
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      title: 'Jump to Projects & Repositories',
      subtext: 'All 10+ GitHub repositories & systems',
      icon: <FolderGit2 className="w-4 h-4 text-gray-300" />,
      action: () => handleNavigate('projects'),
    },
    {
      id: 'nav-experience',
      category: 'Navigation',
      title: 'Jump to Experience & Education',
      subtext: 'Chemicrown Trading Co. & Nirma University (CGPA 9.08)',
      icon: <GraduationCap className="w-4 h-4 text-gray-300" />,
      action: () => handleNavigate('experience'),
    },
    {
      id: 'nav-achievements',
      category: 'Navigation',
      title: 'Jump to Honors & Awards',
      subtext: 'Google Big Code, Codeforces Pupil, MINeD Hackathon',
      icon: <Trophy className="w-4 h-4 text-gray-300" />,
      action: () => handleNavigate('achievements'),
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: 'Jump to Contact',
      subtext: 'Direct outreach & message dispatcher',
      icon: <Mail className="w-4 h-4 text-gray-300" />,
      action: () => handleNavigate('contact'),
    },

    // Flagship Project
    {
      id: 'project-aurapass-arch',
      category: 'Flagship System',
      title: 'AuraPass: Architecture Blueprint',
      subtext: '90° Yaw Tolerance Biometric System Pipeline',
      icon: <Layers className="w-4 h-4 text-lime-neon" />,
      action: () => {
        onClose();
        onOpenArchitectureModal();
      },
    },
    {
      id: 'project-aurapass-repo',
      category: 'Repositories',
      title: 'AuraPass: GitHub Repository (RMS)',
      subtext: 'github.com/PrashantTarbundiya/RMS',
      icon: <FolderGit2 className="w-4 h-4 text-lime-neon" />,
      action: () => window.open(flagshipProject.githubUrl, '_blank'),
    },
    {
      id: 'project-aurapass-live',
      category: 'Live Deployments',
      title: 'AuraPass: Live Facial Recognition System',
      subtext: 'https://13-60-225-165.sslip.io/',
      icon: <ExternalLink className="w-4 h-4 text-lime-neon" />,
      action: () => window.open(flagshipProject.liveUrl, '_blank'),
    },

    // All Projects
    ...otherProjects.map((p) => ({
      id: `project-${p.id}`,
      category: 'Repositories',
      title: p.title,
      subtext: p.subtitle,
      icon: <FolderGit2 className="w-4 h-4 text-cyan-neon" />,
      action: () => {
        onClose();
        onOpenProjectDetail(p);
      },
    })),

    // Live Deployments
    ...otherProjects
      .filter((p) => Boolean(p.liveUrl))
      .map((p) => ({
        id: `live-${p.id}`,
        category: 'Live Deployments',
        title: `${p.title} (Launch Live App)`,
        subtext: p.liveUrl,
        icon: <ExternalLink className="w-4 h-4 text-lime-neon" />,
        action: () => window.open(p.liveUrl, '_blank'),
      })),

    // External Profiles
    {
      id: 'ext-leetcode',
      category: 'Links',
      title: 'LeetCode Profile',
      subtext: 'leetcode.com/u/sRj6itRSrz (DSA Practice)',
      icon: <ExternalLink className="w-4 h-4 text-coral-devx" />,
      action: () => window.open(personalInfo.socials.leetcode, '_blank'),
    },
    {
      id: 'ext-github',
      category: 'Links',
      title: 'GitHub Profile',
      subtext: 'github.com/PrashantTarbundiya (17 repos)',
      icon: <Github className="w-4 h-4 text-white" />,
      action: () => window.open(personalInfo.socials.github, '_blank'),
    },
    {
      id: 'ext-linkedin',
      category: 'Links',
      title: 'LinkedIn Network',
      subtext: 'linkedin.com/in/prashant-tarbundiya',
      icon: <ExternalLink className="w-4 h-4 text-cyan-neon" />,
      action: () => window.open(personalInfo.socials.linkedin, '_blank'),
    },
  ];

  const filteredCommands = query.trim() === ''
    ? allCommands
    : allCommands.filter(c => 
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.subtext.toLowerCase().includes(query.toLowerCase()) ||
        c.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => 
          (prev - 1 + Math.max(1, filteredCommands.length)) % Math.max(1, filteredCommands.length)
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] sm:pt-[12vh] px-3 sm:px-4 bg-black/80 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      <div 
        data-lenis-prevent="true"
        className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl glass-card border border-white/20 p-2 sm:p-4 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-lime-neon shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, or section..."
            className="w-full bg-transparent text-white placeholder-gray-500 font-mono text-xs sm:text-sm outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-gray-400 px-2 py-1 rounded-md bg-white/5 border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Command List (Dedicated Native Scroll) */}
        <div 
          data-lenis-prevent="true"
          className="max-h-[55vh] sm:max-h-[60vh] overflow-y-auto py-2 px-1 space-y-1"
          onWheel={(e) => e.stopPropagation()}
        >
          {filteredCommands.length === 0 ? (
            <div className="py-12 text-center text-xs sm:text-sm font-mono text-gray-400">
              No matching commands or projects found for "{query}".
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-lime-neon/15 border border-lime-neon/40 shadow-sm'
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className={`p-1.5 sm:p-2 rounded-xl border shrink-0 ${
                      isSelected 
                        ? 'bg-lime-neon/20 border-lime-neon/50' 
                        : 'bg-white/5 border-white/10'
                    }`}>
                      {cmd.icon}
                    </div>
                    <div className="truncate min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs sm:text-sm font-semibold truncate ${
                          isSelected ? 'text-lime-neon' : 'text-white'
                        }`}>
                          {cmd.title}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400 shrink-0">
                          {cmd.category}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-400 font-mono truncate">
                        {cmd.subtext}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    {isSelected && (
                      <span className="text-[11px] sm:text-xs font-mono text-lime-neon flex items-center gap-1">
                        <span className="hidden sm:inline">Select</span>
                        <CornerDownLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 mt-1 sm:mt-2 pt-2 border-t border-white/10 text-[10px] sm:text-[11px] font-mono text-gray-400">
          <div className="flex items-center gap-2 sm:gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↑↓</kbd> navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↵</kbd> select</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">esc</kbd> close</span>
          </div>
          <span className="text-lime-neon hidden sm:inline truncate">
            {copied ? '✓ Email Copied!' : 'Prashant Tarbundiya CLI'}
          </span>
        </div>

      </div>
    </div>
  );
}
