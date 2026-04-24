import React from 'react';
import ThemeToggle from './ThemeToggle';

const WellLoopLogo = ({ isDark, setIsDark }) => {
  // 1. Common transition styles for both parts of the logo
  const syncStyle = "transition-all duration-premium ease-in-out";
  
  // 2. Gradient classes that change based on the theme
  const gradientLeft = isDark 
    ? "from-well-cyan-400 to-well-blue-500" 
    : "from-well-cyan-600 to-well-blue-700";
    
  const gradientRight = isDark 
    ? "from-well-blue-500 to-well-indigo-400" 
    : "from-well-blue-700 to-well-indigo-800";

  return (
    <div className="flex items-center justify-center select-none">
      <h1 className="flex items-baseline text-6xl font-black tracking-tight leading-tight">
        <span className={`${syncStyle} bg-gradient-to-r ${gradientLeft} bg-clip-text !text-transparent`}>
          WellL
        </span>

        <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

        {/* Visual tricks like -ml-4 and -pb-5 are stored here */}
        <span className={`inline-block px-3 -ml-4 pb-5 leading-normal ${syncStyle} bg-gradient-to-r ${gradientRight} bg-clip-text !text-transparent`}>
          p
        </span>
      </h1>
    </div>
  );
};

export default WellLoopLogo;