import React, { useState, useEffect } from 'react';
import WellLoopLogo from './components/WellLoopLogo';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  
  // 1. Container Classes with Theme-Based Backgrounds
  const containerClasses = `
    min-h-screen font-sans p-16 px-10 md:px-20 relative overflow-hidden
    transition-all duration-premium ease-in-out
    ${isDark ? 'bg-well-bg-dark' : 'bg-well-bg-light'}
  `.trim();

  // 2. Glow Base Classes for Ambient Effects
  const glowBase = "absolute rounded-full pointer-events-none blur-[130px]";

  return (
    <div className={containerClasses}>
      
      {/* Ambient Glows */}
      <div className={`${glowBase} -bottom-24 -left-24 w-[600px] h-[600px] bg-cyan-500/10`} />
      <div className={`${glowBase} -top-24 -right-24 w-[400px] h-[400px] bg-blue-500/5`} />

      <header className="max-w-6xl mx-auto flex justify-center mb-24 relative z-10">
        <WellLoopLogo isDark={isDark} setIsDark={setIsDark} />
      </header>

    </div>
  );
}