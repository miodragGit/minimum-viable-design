import React from 'react';

const TestimonialCard: React.FC<{ name: string; handle: string; text: string; seed: string; delay: string }> = ({ name, handle, text, seed, delay }) => (
  <div 
    className="bg-[#0c0c0e]/70 backdrop-blur-xl border border-white/5 rounded-[32px] p-8 hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
    style={{ animationDelay: delay }}
  >
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H11.017C10.4647 12 10.017 11.5523 10.017 11V6C10.017 5.44772 10.4647 5 11.017 5H19.017C20.6739 5 22.017 6.34315 22.017 8V15C22.017 16.6569 20.6739 18 19.017 18H16.017C15.9065 18 15.8111 18.0895 15.8111 18.2V21H14.017ZM3.017 21V18.2C3.017 18.0895 2.92157 18 2.81109 18H1.017C0.464718 18 0.0170898 17.5523 0.0170898 17V8C0.0170898 6.34315 1.36024 5 3.01709 5H11.0171V12H9.01709C8.4648 12 8.01709 11.5523 8.01709 11V9C8.01709 8.44772 7.56937 8 7.01709 8H3.01709C2.4648 8 2.01709 8.44772 2.01709 9V15C2.01709 15.5523 2.4648 16 3.01709 16H6.01709C7.12166 16 8.01709 16.8954 8.01709 18V21H3.017Z"/></svg>
    </div>
    
    <div className="flex items-center gap-4 mb-8">
      <div className="relative">
        <img src={`https://i.pravatar.cc/150?u=${seed}`} className="w-12 h-12 rounded-full object-cover border border-white/10" alt={name} />
        <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 border-2 border-[#0c0c0e]">
          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-white text-base leading-tight">{name}</h4>
        <p className="text-white/30 text-sm">{handle}</p>
      </div>
    </div>
    
    <p className="text-white/60 font-normal leading-relaxed text-lg mb-6">
      {text}
    </p>

    <div className="flex items-center gap-1.5 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
       <div className="flex gap-0.5">
        {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-500 text-xs">★</span>)}
      </div>
      <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-0.5">Verified User</span>
    </div>
  </div>
);

const SocialProof: React.FC = () => {
  return (
    <section id="proof" className="py-32 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <div className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px]">Proof of Peace</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">The community <span className="font-serif italic text-white/60">is breathing again.</span></h2>
          <p className="text-white/40 text-xl max-w-2xl mx-auto font-light">Join 12,000+ writers, developers, and thinkers who switched to a calmer way of knowing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-8">
            <TestimonialCard 
              seed="alex"
              name="Alex Rivera"
              handle="@arivera_dev"
              delay="0.1s"
              text="Moonstruck has completely changed how I consume tech news. No more doomscrolling. Just the signal, every single morning."
            />
            <TestimonialCard 
              seed="marcus"
              name="Marcus Thorne"
              handle="@mthorne_ux"
              delay="0.4s"
              text="The AI summaries are actually useful. It feels like having a personal research assistant who knows exactly what I care about."
            />
          </div>
          <div className="space-y-8 lg:mt-12">
            <TestimonialCard 
              seed="sarah"
              name="Sarah Jenkins"
              handle="@sara_reads"
              delay="0.2s"
              text="I finally unsubscribed from 90% of my noise. Moonstruck is my only morning tab now. It’s peace in digital form."
            />
            <TestimonialCard 
              seed="david"
              name="David Wu"
              handle="@dwu_design"
              delay="0.5s"
              text="Finally, a reading app that values UX over engagement metrics. The star-field background is so calming while catching up."
            />
          </div>
          <div className="space-y-8">
            <TestimonialCard 
              seed="elena"
              name="Elena Kostas"
              handle="@elena_k"
              delay="0.3s"
              text="The search grounding feature is a game changer. I can ask about news and get cited, clean results without the ads."
            />
            <TestimonialCard 
              seed="liam"
              name="Liam Fletcher"
              handle="@liam_dev"
              delay="0.6s"
              text="Clean. Simple. Fast. It's the reader I've been waiting for since Google Reader died. Truly exceptional work."
            />
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-6 p-1 pl-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <span className="text-white/50 text-sm font-medium">Ready to find your quiet place?</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-zinc-200 transition-all">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;