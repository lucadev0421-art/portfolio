import React from "react";

export default function Hero() {
  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-purple-50/30 to-blue-50/20 -z-10"></div>
      
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

          {/* Results Card */}
          <div className="w-full md:w-1/2 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-slate-100 hover:shadow-3xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl sm:text-3xl font-bold text-white">LM</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Proven Results</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Real impact for real businesses</p>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
                  <div className="text-2xl sm:text-3xl font-bold text-green-700">$10M+</div>
                  <div className="text-xs sm:text-sm text-green-600 font-medium">Transaction Volume Processed</div>
                </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-100">
                <div className="text-2xl sm:text-3xl font-bold text-blue-700">500K+</div>
                <div className="text-xs sm:text-sm text-blue-600 font-medium">Active Users (Android/iOS/Web)</div>
              </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-700">95%</div>
                  <div className="text-xs sm:text-sm text-purple-600 font-medium">AI Accuracy Rate</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available Now
                  </span>
                  <span className="text-slate-300">•</span>
                  <span>Response within 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}