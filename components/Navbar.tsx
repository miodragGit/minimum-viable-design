import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-xl py-5' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between">
        <div className="flex items-center group cursor-pointer">
          {/* Custom Moonstruck Logo Implementation */}
          <div className="flex items-baseline text-white">
            <span className="text-[22px] font-extralight tracking-[0.25em] leading-none">M</span>
            <div className="relative inline-block mx-[-2px]">
              <div className="w-[18px] h-[18px] border-[1.2px] border-white rounded-full flex items-center justify-center">
                {/* The Orbiting Circle on the 'O' */}
                <div className="absolute -top-[5px] -right-[3px] w-[8px] h-[8px] border-[1.2px] border-white rounded-full bg-black"></div>
              </div>
            </div>
            <span className="text-[22px] font-extralight tracking-[0.25em] leading-none ml-1">NSTRUCK</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.15em] uppercase text-white/40">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#proof" className="hover:text-white transition-colors">Waitlist</a>
          <button className="border border-white/20 text-white px-7 py-2.5 rounded-full text-[10px] hover:bg-white hover:text-black transition-all duration-300">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;