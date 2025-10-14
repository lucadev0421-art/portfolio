import React, { useState } from "react";

const projects = [
  {
    title: "AI-Powered RAG Chatbot Platform",
    desc: "Enterprise SaaS with GPT-4, Claude, and custom RAG pipeline using FAISS & Pinecone for document retrieval. Handles 10K+ daily queries with 95% accuracy.",
    tech: "Python · FastAPI · GPT-4 · FAISS · Pinecone · React · PostgreSQL · Kubernetes",
    category: "AI/ML",
    demo: "https://huggingface.co/chat",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Crypto Wallet & DeFi Android App",
    desc: "Native Android wallet supporting Solana & Ethereum with built-in DEX, staking, NFT gallery, and biometric security. 50K+ active users with 4.8★ rating on Play Store.",
    tech: "Kotlin · Jetpack Compose · Room · Web3j · Solana SDK · Hilt",
    category: "Mobile",
    demo: "https://solflare.com",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Solana Token Launchpad & DeFi Platform",
    desc: "Complete token creation, presale, and staking platform on Solana. Includes smart contract audits, whitelisting, and automated vesting with 500+ successful launches.",
    tech: "Rust · Anchor · Solana · React · Next.js · Web3.js",
    category: "Blockchain",
    demo: "https://raydium.io",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Real-Time Trading Analytics Dashboard",
    desc: "Full-stack trading system with live market data, AI-driven price predictions, and automated alerts. Manages $2M+ in daily transaction volume.",
    tech: "Next.js · Node.js · NestJS · MongoDB · WebSocket · AWS",
    category: "Full-Stack",
    demo: "https://www.coingecko.com",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "AI Fitness Coach Mobile App",
    desc: "Cross-platform fitness app with AI-powered workout plans, real-time form correction using ML models, nutrition tracking, and social features. 100K+ downloads.",
    tech: "React Native · TensorFlow Lite · Firebase · Redux · Stripe",
    category: "Mobile",
    demo: "https://www.fitbod.me",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Voice AI Agent with LLM Integration",
    desc: "Multi-language voice assistant powered by Llama & fine-tuned models. Includes speech-to-text, natural language understanding, and custom voice synthesis.",
    tech: "Python · PyTorch · Hugging Face · Whisper · Llama · FastAPI",
    category: "AI/ML",
    demo: "https://speechify.com",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "NFT Marketplace on Ethereum",
    desc: "Secure NFT marketplace with lazy minting, royalty management, and auction system. Audited smart contracts handling $500K+ in transactions.",
    tech: "Solidity · Hardhat · Ethereum · React · Ethers.js · IPFS",
    category: "Blockchain",
    demo: "https://blur.io",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Multi-Tenant SaaS Platform",
    desc: "Scalable enterprise application with role-based access, payment integration, analytics dashboard, and microservices architecture deployed on Kubernetes.",
    tech: "React · NestJS · PostgreSQL · Docker · Kubernetes · Azure",
    category: "Full-Stack",
    demo: "https://render.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
  }
];

// Modal Component
function Modal({ project, onClose }) {
  if (!project) return null;

  const categoryColors = {
    "AI/ML": "bg-gradient-to-r from-purple-500 to-pink-600 text-white",
    "Blockchain": "bg-gradient-to-r from-blue-500 to-cyan-600 text-white",
    "Full-Stack": "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
    "Mobile": "bg-gradient-to-r from-orange-500 to-red-600 text-white"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center transition z-10 shadow-md border border-slate-200"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project Image */}
        <div className="aspect-video w-full overflow-hidden bg-slate-100 rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {project.title}
            </h2>
            <span className={`px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap flex-shrink-0 shadow-sm ${categoryColors[project.category]}`}>
              {project.category}
            </span>
          </div>

          {/* Full Description */}
          <p className="text-base text-slate-700 leading-relaxed mb-6">
            {project.desc}
          </p>

          {/* All Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.split(' · ').map((tech, i) => (
                <span key={i} className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Link */}
          <div className="pt-6 border-t border-slate-200">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-purple-600 text-white font-bold hover:shadow-xl transition"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ p, onClick }) {
  const categoryColors = {
    "AI/ML": "bg-gradient-to-r from-purple-500 to-pink-600 text-white",
    "Blockchain": "bg-gradient-to-r from-blue-500 to-cyan-600 text-white",
    "Full-Stack": "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
    "Mobile": "bg-gradient-to-r from-orange-500 to-red-600 text-white"
  };

  return (
    <article 
      className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md border-2 border-slate-100 hover:border-accent/50 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover-lift"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-bold text-base sm:text-lg leading-tight text-slate-900 group-hover:text-accent transition-colors">
            {p.title}
          </h3>
          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 shadow-sm ${categoryColors[p.category]}`}>
            {p.category}
          </span>
        </div>

        <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">{p.desc}</p>

        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
          {p.tech.split(' · ').slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
              {tech}
            </span>
          ))}
          {p.tech.split(' · ').length > 4 && (
            <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs">
              +{p.tech.split(' · ').length - 4}
            </span>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm text-accent font-bold group-hover:text-purple-600 transition-colors">
            Click for details →
          </span>
          <a
            className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-accent font-medium group/link"
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
            <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-[var(--page-max)] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-bold mb-4">
            PORTFOLIO
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Projects That <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">Drive Results</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-900">50+ successful projects across</span>
            <span> </span>
            <span className="font-semibold text-orange-600">AI/ML</span>,
            <span> </span>
            <span className="font-semibold text-purple-600">Android/Mobile</span>,
            <span> </span>
            <span className="font-semibold text-orange-600">Blockchain</span>, and
            <span> </span>
            <span className="font-semibold text-purple-600">Full-Stack</span>.
            Real solutions for real businesses — best projects across all categories.
            
          </p>
        </div>
        
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="animate-fadeInUp"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Card p={p} onClick={() => setSelectedProject(p)} />
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 bg-gradient-to-r from-accent/10 via-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8 md:p-10 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Ready to Build Your Next Big Thing?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-2xl mx-auto">
            Need a high-performance <span className="font-semibold text-slate-900">Web</span>, <span className="font-semibold text-slate-900">Android app</span>, <span className="font-semibold text-slate-900">AI-powered platform</span>, or <span className="font-semibold text-slate-900">blockchain solution</span> ?
            Let's turn your idea into a scalable, production-ready application.
          </p>
          <a href="#contact" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-accent to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base">
            Start Your Project Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}