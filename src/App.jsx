import React, { useState, useEffect } from 'react';
import WellLoopLogo from './components/WellLoopLogo';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Temayı document root ile senkronize et
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`
      min-h-screen transition-all duration-1000 font-sans p-16 px-10 md:px-20 relative overflow-hidden
      bg-gradient-to-tr from-cyan-100 via-slate-50 to-white
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-800
      text-slate-900 dark:text-white
    `}>
      
      {/* Background Ambient Glows */}
      <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header: Logo & Toggle Area */}
      <header className="max-w-6xl mx-auto flex justify-center mb-24 relative z-10 text-center">
        <WellLoopLogo isDark={isDark} setIsDark={setIsDark} />
      </header>

    </div>
  );
}