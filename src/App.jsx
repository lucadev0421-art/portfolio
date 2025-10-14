import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating particle dots */}
      {[...Array(9)].map((_, i) => (
        <div key={i} className="particle-dot" style={{ bottom: '0' }}></div>
      ))}
      
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}