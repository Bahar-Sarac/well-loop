import React from 'react';
import ThemeToggle from './ThemeToggle';

const WellLoopLogo = ({ isDark, setIsDark }) => {
  return (
    <div className="flex items-center justify-center select-none">
      <h1 className="flex items-baseline text-6xl font-black tracking-tighter leading-tight">
        {/* Left branding part */}
        <span className="bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
          WellL
        </span>

        <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

        {/* px-3: Wide space to prevent horizontal breakage.
        -ml-4: To compensate for the space created by padding and to shift the letter to the left.
        pb-5: To prevent vertical breakage. */}
        <span className={`
          inline-block px-3 -ml-4 pb-5 leading-normal
          bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-500 dark:to-indigo-400 
          bg-clip-text text-transparent
        `}>
          p
        </span>
      </h1>
    </div>
  );
};

export default WellLoopLogo;