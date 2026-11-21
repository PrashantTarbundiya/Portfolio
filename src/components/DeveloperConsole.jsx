import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Maximize2, Trash2 } from 'lucide-react';
import { personalInfo, otherProjects, flagshipProject, education, experience, skillCategories } from '../data/portfolioData';

export default function DeveloperConsole({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Prashant Tarbundiya — Engineering Terminal v2.4' },
    { type: 'system', text: 'Type "help" to list available system commands or "projects" to view repos.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    // Add to history
    setCommandHistory(prev => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();

    const newHistory = [...history, { type: 'user', text: trimmed }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `AVAILABLE COMMANDS:
  whoami        - Display developer profile & core summary
  skills        - Print technical competency stack
  projects      - List all 10+ engineered systems & repos
  aurapass      - Deep dive into AuraPass facial recognition architecture
  education     - Display Nirma University academic records (CGPA 9.08)
  experience    - Print industry experience & simulations
  contact       - Get direct contact emails and verified handles
  clear         - Clear terminal display buffer
  resume        - Open official resume in new browser tab
  github        - Open GitHub profile in new browser tab
  exit          - Close this interactive terminal console
  sudo          - Execute superuser operation (Easter egg)`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'response',
          text: `${personalInfo.name}
Role: ${personalInfo.role}
Degree: ${personalInfo.subRole}
Location: ${personalInfo.location}
Status: ${personalInfo.status}

Bio: ${personalInfo.summary}`
        });
        break;

      case 'skills':
        const skillsOutput = skillCategories
          .map(cat => `[${cat.title}] -> ${cat.skills.join(', ')}`)
          .join('\n');
        newHistory.push({
          type: 'response',
          text: `TECHNICAL SKILL MATRIX:\n${skillsOutput}`
        });
        break;

      case 'projects':
        const projOutput = [
          `★ [FLAGSHIP] ${flagshipProject.title}: ${flagshipProject.subtitle} -> ${flagshipProject.githubUrl}${flagshipProject.liveUrl ? ` | Live: ${flagshipProject.liveUrl}` : ''}`,
          ...otherProjects.map(p => `• [${p.badge}] ${p.title} (${p.tags.slice(0, 4).join(', ')}) -> ${p.githubUrl}${p.liveUrl ? ` | Live Demo: ${p.liveUrl}` : ''}`)
        ].join('\n');
        newHistory.push({
          type: 'response',
          text: `SYSTEMS & REPOSITORIES CATALOG (10+):\n${projOutput}`
        });
        break;

      case 'aurapass':
        newHistory.push({
          type: 'response',
          text: `AURAPASS ARCHITECTURE (Flagship AI Facial Recognition):
• Profile Yaw: 90° Head-Pose Angle Tolerance (Frontal + Profile)
• Inference: < 220ms Sub-Second Convolutional Embedding Pipeline
• Anti-Spoofing: Passive depth, blink & reflection replay defense
• Storage: Zero raw image persistence; strictly 512-d normalized vectors
• Stack: Python, Deep Learning, Docker, PostgreSQL RBAC, React Native Kiosk
• Source Code: ${flagshipProject.githubUrl}
• Live System: ${flagshipProject.liveUrl}`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'response',
          text: `ACADEMIC EXCELLENCE:
Institution: ${education.institution}
Degree: ${education.degree}
CGPA: ${education.cgpa} (Top Academic Tier)
Period: ${education.period}
Core Courses: ${education.coursework.join(', ')}`
        });
        break;

      case 'experience':
        const expText = experience.map(e => 
          `${e.role} @ ${e.company} (${e.period})
Location: ${e.location}
Key Tech: ${e.skills.join(', ')}
${e.bullets.map(b => `  - ${b}`).join('\n')}`
        ).join('\n\n');
        newHistory.push({
          type: 'response',
          text: `WORK EXPERIENCE & SIMULATIONS:\n${expText}`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          text: `CONTACT & NETWORK:
Email: ${personalInfo.email}
GitHub: ${personalInfo.socials.github}
LinkedIn: ${personalInfo.socials.linkedin}
Codeforces: ${personalInfo.socials.codeforces}
LeetCode: ${personalInfo.socials.leetcode}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'resume':
        window.open(personalInfo.resumeUrl, '_blank');
        newHistory.push({
          type: 'response',
          text: `Dispatched resume PDF download in browser tab.`
        });
        break;

      case 'github':
        window.open(personalInfo.socials.github, '_blank');
        newHistory.push({
          type: 'response',
          text: `Navigated to GitHub: ${personalInfo.socials.github}`
        });
        break;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case 'sudo':
        newHistory.push({
          type: 'response',
          text: `[AUTH ERROR]: User is not in the sudoers file. Nice try, recruiter!`
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `command not found: "${cmd}". Type "help" to view supported commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      <div 
        data-lenis-prevent="true"
        className={`relative w-full ${
          isMaximized ? 'max-w-6xl h-[92vh]' : 'max-w-3xl h-[65vh]'
        } flex flex-col rounded-2xl sm:rounded-3xl bg-[#090b10]/95 border border-lime-neon/40 shadow-[0_25px_90px_rgba(0,0,0,0.95),0_0_40px_rgba(200,255,0,0.15)] overflow-hidden transition-all duration-300 font-mono`}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 bg-black/60 border-b border-white/10 select-none">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button 
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity"
                title="Close (esc)"
              />
              <button 
                onClick={() => setIsMaximized(!isMaximized)}
                className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity"
                title="Maximize / Restore"
              />
              <button 
                onClick={() => setHistory([])}
                className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity"
                title="Clear buffer"
              />
            </div>
            <div className="flex items-center gap-2 pl-2 border-l border-white/10 text-xs text-gray-300">
              <Terminal className="w-3.5 h-3.5 text-lime-neon" />
              <span>prashant@workstation:~</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([])}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
              title="Clear Terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
              title="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body with Dedicated Native Scroll */}
        <div 
          data-lenis-prevent="true"
          className="flex-1 overflow-y-auto p-4 sm:p-5 text-xs sm:text-sm space-y-3 font-mono leading-relaxed select-text"
          onClick={() => inputRef.current?.focus()}
          onWheel={(e) => e.stopPropagation()}
        >
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'system' && (
                <div className="text-gray-400">
                  <span className="text-lime-neon">#</span> {item.text}
                </div>
              )}
              {item.type === 'user' && (
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lime-neon">prashant@portfolio:~$</span>
                  <span className="text-cyan-neon font-bold">{item.text}</span>
                </div>
              )}
              {item.type === 'response' && (
                <pre className="text-gray-200 whitespace-pre-wrap pl-3 sm:pl-4 border-l-2 border-lime-neon/40 font-mono text-[11px] sm:text-xs">
                  {item.text}
                </pre>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400 pl-3 sm:pl-4 border-l-2 border-rose-500/50 text-xs">
                  {item.text}
                </div>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-2 text-white">
            <span className="text-lime-neon shrink-0">prashant@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white outline-none font-mono caret-lime-neon text-xs sm:text-sm"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Status Bar */}
        <div className="px-4 sm:px-5 py-2 bg-black/70 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400 select-none">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-lime-neon flex items-center gap-1">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-lime-neon inline-block animate-pulse"></span>
              ONLINE
            </span>
            <span className="hidden sm:inline">B.Tech CSE @ Nirma</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span>Type <strong className="text-white">help</strong> for options</span>
            <span>•</span>
            <span><strong className="text-white">ESC</strong> to exit</span>
          </div>
        </div>

      </div>
    </div>
  );
}
