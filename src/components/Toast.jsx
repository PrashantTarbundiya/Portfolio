import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl glass-card border border-lime-neon/50 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(200,255,0,0.25)] text-white backdrop-blur-2xl animate-in slide-in-from-bottom duration-250">
      <CheckCircle2 className="w-5 h-5 text-lime-neon shrink-0 animate-bounce" />
      <span className="text-xs font-mono text-gray-100 font-semibold">
        {message}
      </span>
      <button 
        onClick={onClose} 
        className="text-gray-400 hover:text-white ml-2 p-1 rounded-lg hover:bg-white/10"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
