import React from 'react';

const ProcessCard: React.FC<{ number: string; title: string; desc: string; icon: React.ReactNode; iconBg: string; color: string; delay: string }> = ({ number, title, desc, icon, iconBg, color, delay }) => (
  <div 
    className="bg-[#0c0c0e]/90 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 flex flex-col items-start text-left hover:border-white/20 transition-all duration-500 group shadow-[0_20px_80px_-15px_rgba(0,0,0,0.8)] fade-in"
    style={{ animationDelay: delay }}
  >
    <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110 duration-500`}>
      <div style={{ color: color }}>
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">
      {number}. {title}
    </h3>
    <p className="text-white/50 text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[160vh] md:min-h-[140vh] flex flex-col items-center pt-32 text-center px-6 overflow-visible">
      {/* Background Aurora - Low Level */}
      <div className="luminescence">
        <div className="aurora-layer aurora-1"></div>
        <div className="aurora-layer aurora-2"></div>
        <div className="aurora-layer aurora-3"></div>
      </div>
      
      {/* Main Hero Text - Middle Level */}
      <div className="relative z-20 max-w-4xl mx-auto mb-32 fade-in" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-[42px] md:text-[68px] font-medium leading-[1.1] tracking-[-0.04em] mb-8 text-white">
          A quiet place to<br />
          <span className="font-serif italic text-white">see what's new.</span>
        </h1>
        
        <p className="max-w-[540px] text-white/60 text-lg md:text-[20px] font-normal mt-2 mb-14 tracking-tight mx-auto leading-[1.5]">
          The only reader designed to reduce your screen time, not increase it. Escape the noise and reconnect with what matters.
        </p>

        <div className="w-full max-w-[520px] mx-auto group">
          <form className="relative flex items-center p-1.5 bg-white rounded-full transition-transform duration-300 hover:scale-[1.01]">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-transparent px-8 py-3.5 text-black text-lg outline-none placeholder:text-gray-400 font-medium"
            />
            <button className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-zinc-800 transition-all active:scale-[0.96]">
              Join the waitlist
            </button>
          </form>
        </div>
      </div>

      {/* Floating Cards - Highest Level (Above Planet) - Lowered 10% more by changing mb-20 to mb-10 */}
      <div className="relative z-50 w-full max-w-6xl mx-auto mt-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProcessCard 
            number="1"
            title="Idea"
            desc="Bring your curiosity to our curation engine. We help you filter the noise from the signal."
            iconBg="bg-blue-500/20"
            color="#60a5fa"
            delay="0.4s"
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>}
          />
          <ProcessCard 
            number="2"
            title="Build"
            desc="Give us 30 seconds to summarize long-form content into actionable insights for your day."
            iconBg="bg-rose-500/20"
            color="#fb7185"
            delay="0.6s"
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>}
          />
          <ProcessCard 
            number="3"
            title="Launch!"
            desc="Get your morning routine in place and you are ready to launch your day in just 15 minutes."
            iconBg="bg-purple-500/20"
            color="#c084fc"
            delay="0.8s"
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>}
          />
        </div>
      </div>

      {/* Planet Positioning - Background Level - Lifted to 55% translate-y */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250%] md:w-[160%] aspect-[2/1] translate-y-[55%] pointer-events-none z-10">
        <div className="w-full h-full bg-[#02040a] rounded-[100%] overflow-hidden relative border-t-[2px] border-white/60 shadow-[0_-40px_100px_-15px_rgba(255,255,255,0.2)]">
          <div className="moon-craters"></div>
          <div className="absolute inset-0 moon-shadow-overlay"></div>
          
          {/* Layered Intense Light Bloom */}
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[60%] h-[40px] bg-white/10 blur-[40px] rounded-full"></div>
          <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-[40%] h-[2px] bg-white blur-[1px] opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;