import React from "react";

export default function Header() {
  return (
    <header className="bg-white/70 backdrop-blur sticky top-0 z-30 shadow-sm border-b border-slate-100">
      <div className="max-w-[var(--page-max)] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-accent to-purple-600 text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-md">
            LM
          </div>
          <div>
            <div className="font-bold text-sm sm:text-base">Luca Martinez</div>
            <div className="hidden sm:block text-xs text-slate-500">AI/ML, Android & Full-Stack Expert</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-4 lg:gap-6 text-sm">
          <a href="#work" className="text-slate-600 hover:text-accent transition font-medium">Projects</a>
          <a href="#contact" className="text-slate-600 hover:text-accent transition font-medium">Contact</a>
        </nav>

        <a href="#contact" className="md:hidden px-3 py-1.5 text-xs sm:text-sm bg-accent text-white font-bold rounded-lg shadow-sm">
          Hire Me
        </a>
      </div>
    </header>
  );
}