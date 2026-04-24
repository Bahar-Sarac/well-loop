import React from 'react';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  // Config'den gelen yeni sürelerimiz ve eğrimiz
  const premiumTransition = "transition-all duration-premium ease-in-out";
  const interactiveTransition = "transition-all duration-interactive ease-in-out";

  // Color classes that change based on the theme
  const trackClasses = isDark 
    ? "bg-white/5 border-well-blue-500/40" 
    : "bg-well-slate-200/40 border-well-blue-600/50";

  const knobClasses = isDark 
    ? "translate-x-[41px] bg-well-slate-800 text-well-cyan-400 border-well-cyan-400/30" 
    : "translate-x-[4px] bg-white text-well-blue-700 border-well-indigo-800/20 shadow-well-slate-200";

  return (
    <button 
      onClick={toggleTheme} 
      className={`relative mx-2 flex items-center w-[78px] h-[38px] rounded-full border-[2.5px] outline-none focus:ring-2 ring-blue-400 translate-y-[3px] ${premiumTransition} ${trackClasses}`}
    >
      {/* left circle */}
      <div className={`absolute left-[5px] w-[26px] h-[26px] rounded-full border-[1.5px] border-dashed border-well-cyan-600/20 dark:border-well-cyan-400/20 ${premiumTransition}`} />
      {/* right circle */}
      <div className={`absolute right-[5px] w-[26px] h-[26px] rounded-full border-[1.5px] border-dashed border-well-indigo-800/20 dark:border-well-blue-500/20 ${premiumTransition}`} />
      
      {/* moving knob */}
      <div className={`
        absolute z-10 flex items-center justify-center w-[28px] h-[28px] rounded-full border-[1.5px] 
        ${interactiveTransition} 
        ${knobClasses}
      `}>
        {isDark ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path strokeLinecap="round" strokeWidth="2.5" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M19.78 4.22l-1.42 1.42" /></svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;