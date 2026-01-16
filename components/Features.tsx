import React from 'react';

const Features: React.FC = () => {
  return (
    <div id="features" className="relative z-10">
      {/* Value Prop 1: The Problem / The Noise */}
      <section className="py-24 md:py-40 border-t border-white/5 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">
                The Signal
              </div>
              <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-tight">
                Escape the <br/>
                <span className="font-serif italic text-white/60">algorithmic chaos.</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed max-w-lg">
                Your attention is being sold to the highest bidder. Moonstruck gives it back. No infinite scrolls, no rage-bait, just the writers you actually care about.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/80 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                Clean, chronological delivery.
              </div>
            </div>
            
            {/* Immersive Code Editor UI Mockup */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/3] bg-[#0c0c0e]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl flex">
                
                {/* Editor Sidebar */}
                <div className="w-48 border-r border-white/5 bg-black/20 p-4 hidden sm:block">
                  <div className="flex items-center gap-2 mb-6 opacity-40">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest font-bold">Explorer</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-white/60 pl-2">
                        <span className="text-blue-400 opacity-70">▼</span> Cloud App
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white/40 pl-6 border-l border-white/5 ml-2">Platform</div>
                      <div className="flex items-center gap-2 text-xs text-blue-400 pl-8 bg-blue-500/10 border-r-2 border-blue-500 py-1">
                        <span className="text-[10px]">JS</span> controllers.js
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white/40 pl-6 border-l border-white/5 ml-2">Assets</div>
                      <div className="flex items-center gap-2 text-xs text-white/40 pl-6 border-l border-white/5 ml-2">Models</div>
                    </div>
                  </div>
                </div>

                {/* Editor Main Area */}
                <div className="flex-1 flex flex-col">
                  {/* Tabs */}
                  <div className="h-10 border-b border-white/5 flex items-center bg-black/40">
                    <div className="px-4 h-full flex items-center gap-2 border-r border-white/5 bg-[#16161a] text-[10px] text-white/80">
                      <span className="text-yellow-500/80">JS</span> controllers.js
                    </div>
                    <div className="px-4 h-full flex items-center gap-2 border-r border-white/5 text-[10px] text-white/30">
                      <span className="text-orange-500/60">H</span> views.html
                    </div>
                  </div>
                  
                  {/* Content Area with Syntax Highlighting Effect */}
                  <div className="flex-1 p-6 font-mono text-[11px] leading-relaxed overflow-hidden">
                    <div className="flex gap-4">
                      <div className="text-white/10 text-right select-none pr-2 border-r border-white/5">
                        {Array.from({length: 15}).map((_, i) => <div key={i}>{i+1}</div>)}
                      </div>
                      <div className="space-y-1">
                        <div className="text-purple-400">import <span className="text-white">React</span> from <span className="text-emerald-400">'react'</span>;</div>
                        <div className="text-purple-400">import <span className="text-white">Moonstruck</span> from <span className="text-emerald-400">'./api'</span>;</div>
                        <div className="h-2"></div>
                        <div className="text-blue-400">const <span className="text-white">projectID</span> = <span className="text-emerald-400">'1b7801d6-8a66-4be4-a442'</span>;</div>
                        <div className="text-blue-400">const <span className="text-white">isCalm</span> = <span className="text-amber-400">Boolean</span>(</div>
                        <div className="pl-4 text-white">window.<span className="text-blue-300">location</span>.<span className="text-blue-300">mode</span> === <span className="text-emerald-400">'peaceful'</span></div>
                        <div className="text-white">);</div>
                        <div className="h-2"></div>
                        <div className="text-purple-400">export function <span className="text-blue-400">register</span>(config) &#123;</div>
                        <div className="pl-4 text-purple-400">if (<span className="text-white">process.env.<span className="text-emerald-400">NODE_ENV</span></span> === <span className="text-emerald-400">'calm'</span>) &#123;</div>
                        <div className="pl-8 text-white/30 italic">// The noise filtering happens here</div>
                        <div className="pl-8 text-blue-400">const <span className="text-white">signal</span> = new <span className="text-amber-400">URL</span>(process.env.SIG);</div>
                        <div className="pl-4 text-purple-400">&#125;</div>
                        <div className="text-purple-400">&#125;</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlays for depth */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop 2: The Solution / Curation */}
      <section className="py-24 md:py-40 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center flex-row-reverse">
             <div className="relative group order-last md:order-first">
              <div className="absolute -inset-4 bg-gradient-to-bl from-blue-600/10 to-cyan-600/10 blur-3xl opacity-50"></div>
              <div className="relative bg-[#0c0c0e]/60 border border-white/5 rounded-[40px] p-10 overflow-hidden backdrop-blur-md">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-xl text-yellow-500">✨</div>
                    <div className="space-y-1">
                      <div className="w-32 h-3 bg-white/10 rounded"></div>
                      <div className="w-20 h-2 bg-white/5 rounded"></div>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-white/5"></div>
                  <div className="space-y-3">
                    <div className="w-full h-4 bg-white/5 rounded"></div>
                    <div className="w-4/5 h-4 bg-white/5 rounded"></div>
                    <div className="w-3/5 h-4 bg-white/5 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8 md:pl-12">
              <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">
                The Engine
              </div>
              <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-tight">
                AI that <br/>
                <span className="font-serif italic text-white/60">actually serves you.</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed max-w-lg">
                Our lightweight models summarize long-form essays into 30-second briefs, so you can decide what's worth your time before diving in.
              </p>
              <ul className="space-y-4">
                {['Smart Summaries', 'Source Neutrality', 'Zero-Tracking Indexing'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop 3: The Habit / Ritual */}
      <section className="py-24 md:py-40 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-8">
            The Ritual
          </div>
          <h2 className="text-[40px] md:text-[64px] font-medium leading-[1.1] tracking-tight mb-8">
            Designed for <br/>
            <span className="font-serif italic text-white/60">morning focus.</span>
          </h2>
          <p className="text-white/50 text-xl leading-relaxed mb-12">
            Moonstruck isn't a tool you use all day. It’s a 15-minute sanctuary you visit once. We don't want you staying; we want you leaving inspired.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { l: 'Focus', d: 'No Ads' },
               { l: 'Peace', d: 'Minimalist' },
               { l: 'Speed', d: 'Fast Load' },
               { l: 'Private', d: 'No Data' }
             ].map((stat) => (
               <div key={stat.l} className="p-6 rounded-3xl border border-white/5 bg-white/[0.04] backdrop-blur-md">
                 <div className="text-white font-bold text-lg">{stat.l}</div>
                 <div className="text-white/30 text-xs uppercase tracking-widest mt-1 font-semibold">{stat.d}</div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;