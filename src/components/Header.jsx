import React from "react";

export default function Header() {
  return (
    <header className="bg-none backdrop-blur-lg sticky top-0 z-30 border-b border-slate-200/50 shadow-lg shadow-slate-200/50 transparency">
      <div className="max-w-[var(--page-max)] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
        {/* Enhanced Logo */}
        <div className="flex items-center gap-3 sm:gap-4 group">
          <div className="relative">
            {/* Animated glow ring */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent via-purple-600 to-pink-600 opacity-20 blur-md group-hover:opacity-40 transition-opacity"></div>
            {/* Logo */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-accent via-purple-600 to-blue-600 text-white flex items-center justify-center font-extrabold text-base sm:text-lg shadow-xl shadow-accent/30 group-hover:scale-105 transition-transform">
              <span className="relative z-10">LM</span>
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="font-extrabold text-base sm:text-lg bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Luca Martinez
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-purple-600 animate-pulse"></span>
                <span className="font-semibold">Senior Developer</span>
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">AI/ML Android & Full-Stack</span>
            </div>
          </div>
        </div>

        {/* Professional Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a 
            href="#work" 
            className="relative text-slate-700 hover:text-accent transition font-semibold group"
          >
            <span>Projects</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#contact" 
            className="relative text-slate-700 hover:text-accent transition font-semibold group"
          >
            <span>Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          
          {/* CTA Button in Desktop Nav */}
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-gradient-to-r from-accent to-purple-600 text-white font-bold rounded-lg shadow-lg shadow-accent/30 hover:shadow-xl hover:scale-105 transition-all"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile CTA */}
        <a 
          href="#contact" 
          className="md:hidden px-4 py-2 text-xs sm:text-sm bg-gradient-to-r from-accent to-purple-600 text-white font-bold rounded-lg shadow-lg shadow-accent/30 hover:scale-105 transition-transform"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}