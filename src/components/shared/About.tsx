import React from 'react';
import { motion } from 'framer-motion';
import { useDiscipline } from '../../context/DisciplineContext';
import type { Discipline } from '../../types';
import { Cpu, Globe, Compass, Smartphone } from 'lucide-react';

export const About: React.FC = () => {
  const { setActiveDiscipline, getAccentColor } = useDiscipline();

  const coreAreas = [
    {
      discipline: 'systems' as Discipline,
      title: 'Software Engineering',
      icon: Cpu,
      description: 'Architecting modular backend services, designing scalable API systems, and optimizing relational schemas for database operations.'
    },
    {
      discipline: 'web' as Discipline,
      title: 'Web Development',
      icon: Globe,
      description: 'Building high-performance client applications with clean React structures, strict typing, and responsive layout grids.'
    },
    {
      discipline: 'design' as Discipline,
      title: 'UI/UX Design',
      icon: Compass,
      description: 'Formulating consistent, tokenized visual design languages, wireframe blueprints, and user flow architectures in Figma.'
    },
    {
      discipline: 'android' as Discipline,
      title: 'Android Development',
      icon: Smartphone,
      description: 'Coded native mobile application interfaces using Kotlin, structured local Room databases, and declarative Jetpack Compose UI trees.'
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-36 px-6 border-t border-brand-border bg-brand-obsidian relative">
      <div className="absolute inset-0 grid-bg-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Large Editorial Intro Statement */}
        <div className="mb-20 overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] max-w-4xl"
          >
            I build digital experiences<br />
            where <span className="italic font-normal font-serif text-neutral-400">engineering</span> meets <span className="font-normal">design.</span>
          </motion.h2>
        </div>

        {/* Split Layout: Narrative Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-brand-border pt-12 mb-20">
          
          {/* Left Column: Big Philosophy Introduction Statement (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-display font-medium text-xl md:text-2xl text-neutral-200 leading-snug">
              Bridging functional complexity and visual clarity to craft robust digital systems.
            </h3>
          </div>

          {/* Right Column: Short Professional Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-sm text-neutral-400 leading-relaxed font-sans">
            <p>
              I view digital products as unified architectures. Software engineering paradigms are only as valuable as the interfaces that deliver them. By operating across mobile platforms, database layouts, design systems, and frontend codebases, I ensure that styling, speed, and usability align seamlessly.
            </p>
            <p>
              My workflow balances backend logic (REST architectures, caching layers, schema design) with direct physical form (clean hierarchies, micro-interactions, responsive grids).
            </p>
          </div>

        </div>

        {/* Capabilities / Disciplines Section */}
        <div className="border-t border-brand-border pt-12">
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block mb-8">
            Core Capabilities
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreAreas.map((area) => {
              const AreaIcon = area.icon;
              return (
                <div
                  key={area.title}
                  onClick={() => setActiveDiscipline(area.discipline)}
                  className="flex flex-col justify-between p-6 border border-neutral-900 bg-[#0d0d10] hover:border-neutral-800 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <AreaIcon className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                      <span className="text-[9px] font-mono tracking-wider text-neutral-600 uppercase group-hover:text-neutral-400 transition-colors">
                        Select
                      </span>
                    </div>
                    
                    <h4 className="font-display font-semibold text-sm text-white mt-2">
                      {area.title}
                    </h4>
                    
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans mt-1">
                      {area.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-900 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-neutral-600 group-hover:text-neutral-300 transition-colors">
                    <span>Activate Accent</span>
                    <span className="transition-transform group-hover:translate-x-1" style={{ color: getAccentColor() }}>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
