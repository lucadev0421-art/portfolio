import React from "react";

export default function Hero() {
  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 overflow-hidden">
      {/* Enhanced decorative floating shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-accent/30 rounded-lg animate-float-slow pointer-events-none shadow-lg shadow-accent/20"></div>
      <div className="absolute top-40 right-20 w-20 h-20 border-2 border-purple-400/30 rounded-full animate-float-medium pointer-events-none shadow-lg shadow-purple-400/20"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg animate-float-fast pointer-events-none shadow-xl shadow-cyan-400/30"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-pink-400/30 rotate-45 animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-float-medium pointer-events-none blur-sm"></div>
      <div className="absolute top-1/3 left-1/3 w-10 h-10 border-2 border-blue-400/20 rounded-lg animate-float-fast pointer-events-none"></div>
      
      <div className="max-w-[var(--page-max)] mx-auto px-4 sm:px-6">
        {/* Trust Badges - Immediate credibility */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fadeInUp">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full shadow-sm border hover:shadow-md transition-shadow">
            <span className="text-yellow-500 text-sm sm:text-base">⭐⭐⭐⭐⭐</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700">50+ Projects</span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full shadow-sm border hover:shadow-md transition-shadow">
            <span className="text-green-500 text-sm sm:text-base">✓</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700">100% Success Rate</span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full shadow-sm border hover:shadow-md transition-shadow">
            <span className="text-blue-500 text-sm sm:text-base">🚀</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700">15+ Years Experience</span>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          <div className="w-full md:w-1/2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Transform Your Vision Into 
              <span className="block mt-1 bg-gradient-to-r from-accent via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Production-Ready Reality
              </span>
            </h1>
            
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              I'm <span className="text-accent font-bold">Luca Martinez</span> — <span className="font-semibold">AI/ML</span>, <span className="font-semibold">Android</span> & <span className="font-semibold">Full-Stack</span> expert delivering enterprise-grade solutions that <span className="font-semibold">scale</span>, <span className="font-semibold">perform</span>, and <span className="font-semibold">convert</span>.
            </p>

            {/* Key Value Props */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-slate-900">Ship faster than your competition</p>
                  <p className="text-xs sm:text-sm text-slate-600">Clean, documented code with CI/CD pipelines</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-slate-900">Built for scale from day one</p>
                  <p className="text-xs sm:text-sm text-slate-600">Microservices, cloud-native, handles millions of users</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                  <span className="text-purple-600 text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-slate-900">Available now — Start immediately</p>
                  <p className="text-xs sm:text-sm text-slate-600">Flexible contracts, reliable communication, on-time delivery</p>
                </div>
              </div>
            </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-accent to-purple-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm sm:text-base">
                    Start Your Project Now
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a href="#work" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white hover:scale-105 transition-all font-semibold text-sm sm:text-base">
                    View Portfolio
                  </a>
                </div>

            {/* Tech Stack Pills */}
            <div className="mt-6 sm:mt-8">
              <p className="text-xs text-slate-500 font-semibold mb-3">EXPERT IN:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-white rounded-lg text-xs sm:text-sm font-semibold text-slate-700 shadow-sm border hover:border-accent hover:shadow-md transition-all cursor-default">GPT-4 & Claude</span>
                <span className="px-3 py-1.5 bg-white rounded-lg text-xs sm:text-sm font-semibold text-slate-700 shadow-sm border hover:border-accent hover:shadow-md transition-all cursor-default">React & Next.js</span>
                <span className="px-3 py-1.5 bg-white rounded-lg text-xs sm:text-sm font-semibold text-slate-700 shadow-sm border hover:border-accent hover:shadow-md transition-all cursor-default">Solana & Ethereum</span>
                <span className="px-3 py-1.5 bg-white rounded-lg text-xs sm:text-sm font-semibold text-slate-700 shadow-sm border hover:border-accent hover:shadow-md transition-all cursor-default">Android & Kotlin</span>
                <span className="px-3 py-1.5 bg-white rounded-lg text-xs sm:text-sm font-semibold text-slate-700 shadow-sm border hover:border-accent hover:shadow-md transition-all cursor-default">Python & Node.js</span>
                <span className="px-3 py-1.5 bg-white rounded-lg text-xs sm:text-sm font-semibold text-slate-700 shadow-sm border hover:border-accent hover:shadow-md transition-all cursor-default">React Native</span>
              </div>
            </div>
          </div>

          {/* Enhanced Results Card */}
          <div className="w-full md:w-1/2 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              {/* Animated glow background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
              
              {/* Main card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-200/50 hover:border-accent/30 transition-all duration-300">
                {/* Header with enhanced logo */}
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    {/* Glow ring */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-accent via-purple-600 to-pink-600 rounded-full blur-md opacity-30 animate-pulse"></div>
                    {/* Logo */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-accent via-purple-600 to-blue-600 flex items-center justify-center shadow-2xl shadow-accent/50">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white relative z-10">LM</span>
                      {/* Inner shine */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-slate-900 via-accent to-purple-600 bg-clip-text text-transparent mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">
                    Delivering excellence for <span className="text-accent font-bold">15+ years</span>
                  </p>
                </div>

                {/* Stats with enhanced design */}
                <div className="space-y-3">
                  {/* Stat 1 */}
                  <div className="relative group/stat overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl"></div>
                    <div className="relative bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-5 border-2 border-green-200/50 hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-200/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            $10M+
                          </div>
                          <div className="text-xs sm:text-sm text-green-700 font-semibold mt-1">
                            Transaction Volume
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                          <span className="text-2xl">💰</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="relative group/stat overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl"></div>
                    <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 sm:p-5 border-2 border-blue-200/50 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-200/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            500K+
                          </div>
                          <div className="text-xs sm:text-sm text-blue-700 font-semibold mt-1">
                            Active Users Globally
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                          <span className="text-2xl">👥</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="relative group/stat overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl"></div>
                    <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 sm:p-5 border-2 border-purple-200/50 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-200/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            95%
                          </div>
                          <div className="text-xs sm:text-sm text-purple-700 font-semibold mt-1">
                            AI Accuracy Rate
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                          <span className="text-2xl">🎯</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced footer */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full font-semibold">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Available Now
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      ⚡ Response in <span className="text-accent font-bold">24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}