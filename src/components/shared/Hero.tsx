import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDiscipline } from '../../context/DisciplineContext';
import type { Discipline } from '../../types';
import { AndroidSimulator } from '../widgets/AndroidSimulator';
import { DesignComparison } from '../widgets/DesignComparison';
import { ApiVisualizer } from '../widgets/ApiVisualizer';
import { CodeSandbox } from '../widgets/CodeSandbox';
import { Code, Smartphone, Compass, HardDrive, ArrowRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const { activeDiscipline, setActiveDiscipline, getAccentColor } = useDiscipline();

  const disciplineData = [
    {
      id: 'web' as Discipline,
      title: 'Web Engineering',
      icon: Code,
      accent: 'text-indigo-400'
    },
    {
      id: 'android' as Discipline,
      title: 'Android Dev',
      icon: Smartphone,
      accent: 'text-emerald-400'
    },
    {
      id: 'design' as Discipline,
      title: 'UI/UX Design',
      icon: Compass,
      accent: 'text-rose-400'
    },
    {
      id: 'systems' as Discipline,
      title: 'Backend Systems',
      icon: HardDrive,
      accent: 'text-amber-400'
    }
  ];

  const renderWidget = () => {
    switch (activeDiscipline) {
      case 'web': return <CodeSandbox />;
      case 'android': return <AndroidSimulator />;
      case 'design': return <DesignComparison />;
      case 'systems': return <ApiVisualizer />;
      default: return <CodeSandbox />;
    }
  };

  return (
    <section id="home" className="min-h-screen relative pt-32 lg:pt-40 pb-20 flex flex-col justify-center overflow-hidden bg-brand-obsidian">
      
      {/* Background Dots & Lights (Extremely subtle) */}
      <div className="absolute inset-0 grid-bg-dots opacity-30 pointer-events-none z-0" />

      {/* Main Grid Container with Asymmetrical Split */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Editorial Copy (7 columns) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Elegant Display Name */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 font-semibold">
              Abdul Waris — Product Engineer
            </span>
            <span className="h-[1px] w-12 bg-neutral-800" />
          </div>

          {/* Primary Editorial Headline */}
          <div className="flex flex-col gap-4">
            <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08] max-w-xl">
              Designing thoughtful interfaces.<br />
              <span className="text-neutral-500">Engineering them into reality.</span>
            </h1>
          </div>

          {/* Supporting Narrative */}
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-sans max-w-lg">
            A software engineer, web developer, UI/UX designer, and Android developer specialized in building functional, high-performance digital products. Bridging structural engineering parameters with clean visual systems.
          </p>

          {/* Selector Tabs (Integrated as subtle interactive visual spec buttons) */}
          <div className="flex flex-col gap-3 max-w-md mt-2">
            <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 font-semibold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-neutral-600" /> Select Sandbox Node:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {disciplineData.map(tab => {
                const TabIcon = tab.icon;
                const isSelected = activeDiscipline === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDiscipline(tab.id)}
                    className={`flex flex-col items-center gap-1.5 py-2 px-1 rounded border transition-all text-center focus:outline-none cursor-pointer ${
                      isSelected
                        ? 'bg-[#121215] border-neutral-800 text-white'
                        : 'bg-transparent border-transparent text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    <TabIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-neutral-600'}`} style={isSelected ? { color: getAccentColor() } : {}} />
                    <span className="text-[9px] font-mono tracking-wider uppercase">
                      {tab.title.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-5 items-center mt-4">
            <a
              href="#works"
              className="group text-xs font-mono uppercase tracking-widest text-white hover:text-neutral-300 flex items-center gap-2 transition-all"
            >
              <span>View Selected Work</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" style={{ color: getAccentColor() }} />
            </a>
            <a
              href="#contact"
              className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              Let's Work Together
            </a>
          </div>

        </div>

        {/* Right Column: Visual Interactive Sandbox Container (5 columns) */}
        <div className="lg:col-span-5 flex justify-center items-center w-full mt-8 lg:mt-0">
          <div className="w-full relative bg-[#0d0d10] border border-[#ffffff]/[0.05] rounded-xl p-2 max-w-md shadow-premium">
            {/* Background alignment outline */}
            <div className="absolute -inset-[1px] border border-dashed border-neutral-800/60 rounded-xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiscipline}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full flex items-center justify-center"
              >
                {renderWidget()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
