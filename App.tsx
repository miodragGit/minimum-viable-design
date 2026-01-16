import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      <Navbar scrolled={scrolled} />
      
      {/* Immersive layered star container with even higher density and speed */}
      <div className="stars-container">
        <div className="stars-layer stars-1"></div>
        <div className="stars-layer stars-2"></div>
        <div className="stars-layer stars-3"></div>
        <div className="stars-layer stars-4"></div>
        {/* Duplicated layers with offsets for hyper-density */}
        <div className="stars-layer stars-1" style={{ animationDelay: '-15s', transform: 'rotate(45deg)', opacity: 0.4 }}></div>
        <div className="stars-layer stars-2" style={{ animationDelay: '-25s', transform: 'rotate(90deg)', opacity: 0.3 }}></div>
        <div className="stars-layer stars-3" style={{ animationDelay: '-35s', transform: 'scale(1.2)', opacity: 0.2 }}></div>
        <div className="stars-layer stars-4" style={{ animationDelay: '-10s', transform: 'scale(0.8)', opacity: 0.4 }}></div>
      </div>

      <main className="relative z-10">
        <Hero />
        <Features />
        <SocialProof />
        <ContactForm />
      </main>
      
      <footer className="relative z-10 py-12 border-t border-white/5 bg-black/60 backdrop-blur-sm text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-500 text-sm tracking-widest uppercase">© 2025 MOONSTRUCK. Keep looking up.</p>
          <div className="flex justify-center gap-6 mt-6 opacity-40">
            <span className="text-xs hover:opacity-100 cursor-pointer transition-opacity">Twitter</span>
            <span className="text-xs hover:opacity-100 cursor-pointer transition-opacity">Instagram</span>
            <span className="text-xs hover:opacity-100 cursor-pointer transition-opacity">YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;