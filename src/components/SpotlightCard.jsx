import React from 'react';

/**
 * Clean Glassmorphic Card Wrapper
 * Per user instructions: no mouse-tracking spotlight radial gradient,
 * just pristine dual-inset glassmorphism with subtle glow.
 */
export default function SpotlightCard({ children, className = '', ...props }) {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {children}
    </div>
  );
}
