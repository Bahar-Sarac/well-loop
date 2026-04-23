import React from 'react';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  // 1. Track Styles
  const trackClasses = isDark 
    ? "bg-white/5 border-well-blue-500/40" 
    : "bg-well-slate-200/40 border-well-blue-600/50";

  // 2. Knob Styles
  const knobClasses = isDark 
    ? "translate-x-[41px] bg-well-slate-800 text-well-cyan-400 border-well-cyan-400/30 shadow-black/40" 
    : "translate-x-[4px] bg-white text-well-blue-700 border-well-indigo-800/20 shadow-slate-200";

  // 3. Common Circle Styles (Dashed Lines in the Background)
  const circleBase = "absolute w-[26px] h-[26px] rounded-full border-[1.5px] border-dashed transition-colors duration-premium";

  return (
    <button 
      onClick={toggleTheme} 
      aria-label="Toggle Theme"
      className={`relative mx-2 flex items-center w-[78px] h-[38px] rounded-full transition-all duration-premium border-[2.5px] outline-none focus:ring-2 ring-blue-400 translate-y-[3px] ${trackClasses}`}
    >
      {/* Left Circle */}
      <div className={`${circleBase} left-[5px] border-well-blue-600/20 dark:border-well-cyan-400/20`} />
      
      {/* Right Circle */}
      <div className={`${circleBase} right-[5px] border-well-indigo-800/20 dark:border-well-blue-500/20`} />
      
      {/* Moving Knob */}
      <div className={`absolute z-10 flex items-center justify-center w-[28px] h-[28px] rounded-full transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] border-[1.5px] ${knobClasses}`}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </div>
    </button>
  );
};

// 4. SVG Icons for Sun and Moon
const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <path strokeLinecap="round" strokeWidth="2.5" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M19.78 4.22l-1.42 1.42" />
  </svg>
);

export default ThemeToggle;