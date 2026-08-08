import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Palette } from 'lucide-react';
import { useDiscipline } from '../../context/DisciplineContext';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  research: string;
  userFlow: string;
  decisions: { title: string; desc: string }[];
}

export const DesignShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'mobile'>('dashboard');
  const { getAccentColor } = useDiscipline();

  const caseStudies: Record<'dashboard' | 'mobile', CaseStudy> = {
    dashboard: {
      id: 'dashboard',
      title: 'Zenith SaaS Analytics Dashboard',
      subtitle: 'Information Density & Cognitive Load',
      problem: 'Enterprise users faced cognitive overload due to nested log tables, increasing configuration lookup time by 30%.',
      research: 'Conducted user interviews with 5 DevOps leads. Findings: Users prioritised system status summaries and required query inputs accessible in under 1 second.',
      userFlow: 'Console Overview ➔ Active Query Filter ➔ Focused Metric Graph ➔ Raw SQL Stream',
      decisions: [
        { title: 'Optimised Information Hierarchy', desc: 'Grouped metrics into 3 distinct visual levels (Log counters, graph trends, active query stream).' },
        { title: 'Premium Obsidian Tone', desc: 'Applied high contrast neutral palettes (#08080a) to reduce visual fatigue during long monitoring cycles.' }
      ]
    },
    mobile: {
      id: 'mobile',
      title: 'ApexNotes Mobile Workspace',
      subtitle: 'Mobile Markdown Editor & Ergonomics',
      problem: 'Markdown writers on mobile screens faced cramped inputs and inaccurate tap targets, causing typing delays.',
      research: 'Observed 8 developers taking notes on their mobile devices. Findings: Formatting shortcuts need to sit directly above the software keyboard for thumb reachability.',
      userFlow: 'Notes Index ➔ Create / Open Note ➔ Rich Editing Sheet ➔ Side-by-side Markdown Render',
      decisions: [
        { title: 'Sticky Shortcut Band', desc: 'Built a custom keyboard accessory bar housing common formatting syntax tags (#, *, `, [Link]).' },
        { title: 'Standardised Tap Targets', desc: 'Set critical interaction components to 48dp minimum bounds, preventing input collision.' }
      ]
    }
  };

  const currentStudy = caseStudies[activeTab];

  return (
    <section id="design" className="py-24 lg:py-36 px-6 border-t border-brand-border bg-brand-obsidian relative">
      <div className="absolute inset-0 grid-bg-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading with "Designing before building" statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 font-semibold">
              Design Philosophy
            </span>
            <h2 className="font-display font-light text-3xl md:text-5xl text-white tracking-tight">
              Designing before building.
            </h2>
          </div>

          {/* Product tabs */}
          <div className="flex border-b border-brand-border pb-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 text-[10px] font-mono tracking-wider uppercase font-semibold transition-all focus:outline-none cursor-pointer relative ${
                activeTab === 'dashboard' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              SaaS Dashboard
              {activeTab === 'dashboard' && (
                <motion.span
                  layoutId="activeDesignTab"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                  style={{ backgroundColor: getAccentColor() }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-4 py-2 text-[10px] font-mono tracking-wider uppercase font-semibold transition-all focus:outline-none cursor-pointer relative ${
                activeTab === 'mobile' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              Mobile Application
              {activeTab === 'mobile' && (
                <motion.span
                  layoutId="activeDesignTab"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                  style={{ backgroundColor: getAccentColor() }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Presentation Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Side: Mockups & Wireframe placeholders (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Low-Fi Wireframe Panel */}
                <div className="bg-[#0d0d10] border border-brand-border p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                    <span>Stage 01 // Structural Blueprint Layout</span>
                    <Layout className="w-3.5 h-3.5" />
                  </div>

                  {/* Wireframe representation */}
                  <div className="border border-dashed border-neutral-800 rounded-lg p-4 bg-brand-obsidian/40 min-h-[120px] flex flex-col justify-center">
                    {activeTab === 'dashboard' ? (
                      <div className="w-full flex flex-col gap-3">
                        <div className="flex justify-between items-center border-b border-dashed border-neutral-800/80 pb-2">
                          <div className="w-20 h-2 bg-neutral-900 rounded" />
                          <div className="w-12 h-3 border border-dashed border-neutral-800 rounded" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-10 border border-dashed border-neutral-800 rounded flex items-center justify-center text-[9px] text-neutral-600">Metric_A</div>
                          <div className="h-10 border border-dashed border-neutral-800 rounded flex items-center justify-center text-[9px] text-neutral-600">Metric_B</div>
                          <div className="h-10 border border-dashed border-neutral-800 rounded flex items-center justify-center text-[9px] text-neutral-600">Metric_C</div>
                        </div>
                      </div>
                    ) : (
                      <div className="max-w-[140px] mx-auto w-full border border-dashed border-neutral-800 rounded-xl p-3 flex flex-col gap-2.5">
                        <div className="w-8 h-1 bg-neutral-900 rounded mx-auto" />
                        <div className="h-12 border border-dashed border-neutral-800 rounded flex items-center justify-center text-[8px] text-neutral-600">EDITOR_SHEET</div>
                        <div className="grid grid-cols-4 gap-1">
                          <div className="h-2 bg-neutral-900 rounded" />
                          <div className="h-2 bg-neutral-900 rounded" />
                          <div className="h-2 bg-neutral-900 rounded" />
                          <div className="h-2 bg-neutral-900 rounded" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* High-Fi Interface Preview */}
                <div className="bg-[#0d0d10] border border-brand-border p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                    <span>Stage 02 // Interactive Interface Preview</span>
                    <Palette className="w-3.5 h-3.5" />
                  </div>

                  {/* High Fidelity preview */}
                  <div className="border border-brand-border bg-brand-obsidian p-5 rounded-lg min-h-[180px] flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg-dots opacity-20 pointer-events-none" />

                    {activeTab === 'dashboard' ? (
                      <div className="w-full flex flex-col gap-4 relative z-10">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: getAccentColor() }} />
                            <span className="text-[10px] font-mono text-neutral-300 font-bold">Query Traffic Analysis</span>
                          </div>
                          <span className="text-[8px] font-mono text-neutral-500">Live 99.98%</span>
                        </div>

                        {/* Graph outline */}
                        <div className="h-16 flex items-end relative border-b border-neutral-900 pb-1">
                          <svg className="absolute inset-0 w-full h-full text-neutral-800" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M 0 90 C 20 60, 40 10, 60 70 T 100 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                          <svg className="absolute inset-0 w-full h-full" style={{ color: getAccentColor() }} preserveAspectRatio="none" viewBox="0 0 100 100">
                            <circle cx="60" cy="70" r="2.5" fill="currentColor" />
                            <circle cx="100" cy="30" r="2.5" fill="currentColor" />
                          </svg>
                          <span className="text-[8px] font-mono text-neutral-600 absolute top-0 left-0">12k requests/sec</span>
                        </div>
                      </div>
                    ) : (
                      <div className="max-w-[160px] mx-auto w-full border border-brand-border bg-[#0d0d10] p-4 flex flex-col gap-3 relative z-10 shadow-premium">
                        <div className="flex justify-between items-center text-[7px] text-neutral-600 font-mono">
                          <span>Workspace</span>
                          <span>Saved</span>
                        </div>
                        <div className="space-y-2">
                          <div className="w-20 h-2 bg-neutral-800" />
                          <div className="w-full h-1 bg-neutral-900 overflow-hidden">
                            <div className="h-full w-[70%]" style={{ backgroundColor: getAccentColor() }} />
                          </div>
                        </div>
                        <div className="bg-brand-obsidian p-2 border border-brand-border flex justify-between items-center">
                          <span className="text-[8px] font-mono text-neutral-300"># Heading</span>
                          <span className="text-[8px] font-mono text-neutral-500">`Code`</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Case Study Metadata & Decisions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            
            <div className="flex flex-col gap-6">
              
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                  Product Identity
                </span>
                <h3 className="font-display font-medium text-2xl text-white tracking-tight leading-snug mt-1">
                  {currentStudy.title}
                </h3>
                <p className="text-xs font-mono text-neutral-500 mt-1">
                  {currentStudy.subtitle}
                </p>
              </div>

              {/* Problem statement */}
              <div className="flex flex-col gap-1.5 border-t border-brand-border pt-4">
                <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-500 font-bold">
                  Problem Context
                </span>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {currentStudy.problem}
                </p>
              </div>

              {/* Research and findings */}
              <div className="flex flex-col gap-1.5 border-t border-brand-border pt-4">
                <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-500 font-bold">
                  Research Insight
                </span>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {currentStudy.research}
                </p>
              </div>

              {/* User Flow */}
              <div className="flex flex-col gap-1.5 border-t border-brand-border pt-4">
                <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-500 font-bold">
                  User Flow Path
                </span>
                <p className="text-xs font-mono text-neutral-400 leading-normal">
                  {currentStudy.userFlow}
                </p>
              </div>

            </div>

            {/* Design Decisions Cards */}
            <div className="mt-8 pt-6 border-t border-brand-border">
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 font-bold block mb-3">
                Key Design Decisions
              </span>
              <div className="flex flex-col gap-3">
                {currentStudy.decisions.map((dec, idx) => (
                  <div key={idx} className="p-3 border border-neutral-900 bg-[#0d0d10] flex flex-col gap-1">
                    <span className="text-[10px] font-mono font-semibold text-white">
                      {dec.title}
                    </span>
                    <p className="text-[10px] text-neutral-500 font-sans leading-normal">
                      {dec.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
