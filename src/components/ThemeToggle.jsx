import React from 'react';

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" strokeWidth="2.5">
    <circle cx="12" cy="12" r="5" />
    <path strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M19.78 4.22l-1.42 1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const ThemeToggle = ({ isDark, toggleTheme }) => {
  // Base container styles that don't change
  const baseTrackStyles = "relative mx-2 flex items-center w-[78px] h-[38px] rounded-full transition-all duration-500 border-[2.5px] outline-none focus:ring-2 ring-blue-400 translate-y-[3px]";
  
  // Theme-specific track styles
  const trackTheme = isDark 
    ? "bg-white/5 border-blue-500/40" 
    : "bg-slate-200/40 border-blue-600/50";

  // Base knob styles (the moving circle)
  const baseKnobStyles = "absolute z-10 flex items-center justify-center w-[28px] h-[28px] rounded-full shadow-lg transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] border-[1.5px]";
  
  // Theme-specific knob positioning and coloring
  const knobTheme = isDark
    ? "translate-x-[41px] rotate-[360deg] bg-slate-800 text-cyan-400 border-cyan-400/30"
    : "translate-x-[4px] rotate-0 bg-white text-blue-700 border-indigo-600/30";

  return (
    <button 
      type="button"
      onClick={toggleTheme} 
      className={`${baseTrackStyles} ${trackTheme}`} 
      aria-label="Toggle dark mode"
    >
      {/* Decorative Dashed Rings - Combined logic for cleaner JSX */}
      {[
        { pos: 'left-[5px]', color: 'border-blue-600/30 dark:border-cyan-400/30' },
        { pos: 'right-[5px]', color: 'border-indigo-600/30 dark:border-blue-400/30' }
      ].map((ring, idx) => (
        <div 
          key={idx}
          className={`absolute ${ring.pos} ${ring.color} w-[26px] h-[26px] rounded-full border-[1.5px] border-dashed transition-colors duration-500`} 
        />
      ))}
      
      {/* Moving Knob */}
      <div className={`${baseKnobStyles} ${knobTheme}`}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </div>
    </button>
  );
};

export default ThemeToggle;