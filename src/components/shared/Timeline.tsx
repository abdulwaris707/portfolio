import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData } from '../../data/portfolioData';
import type { ExperienceType } from '../../types';
import { useDiscipline } from '../../context/DisciplineContext';

export const Timeline: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | ExperienceType>('all');
  const { getAccentColor } = useDiscipline();

  const getEventLabel = (type: ExperienceType): string => {
    switch (type) {
      case 'professional': return 'Employment';
      case 'education': return 'Education';
      case 'freelance': return 'Consulting';
      case 'personal': return 'Release';
      case 'internship': return 'Internship';
      case 'milestone': return 'Milestone';
    }
  };

  const filteredEvents = filterType === 'all'
    ? experienceData
    : experienceData.filter(e => e.type === filterType);

  const filters: { label: string; value: 'all' | ExperienceType }[] = [
    { label: 'All Journey', value: 'all' },
    { label: 'Employment', value: 'professional' },
    { label: 'Consulting', value: 'freelance' },
    { label: 'Personal', value: 'personal' },
    { label: 'Internships', value: 'internship' },
    { label: 'Education', value: 'education' },
  ];

  return (
    <section id="experience" className="py-24 lg:py-36 px-6 border-t border-brand-border bg-brand-obsidian relative">
      <div className="absolute inset-0 grid-bg-lines opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading & Interactive Filter bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 font-semibold">
              Chronology
            </span>
            <h2 className="font-display font-light text-3xl md:text-5xl text-white tracking-tight mt-1">
              Professional Journey
            </h2>
          </div>

          {/* Timeline Filter tabs */}
          <div className="flex flex-wrap gap-1 border-b border-brand-border pb-1">
            {filters.map(f => (
              <button
                key={f.value}
                onClick={() => setFilterType(f.value)}
                className={`px-3 py-2 text-[10px] font-mono tracking-wider uppercase font-semibold transition-all focus:outline-none cursor-pointer relative ${
                  filterType === f.value ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {f.label}
                {filterType === f.value && (
                  <motion.span
                    layoutId="activeTimelineFilter"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                    style={{ backgroundColor: getAccentColor() }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Vertical Timeline */}
        <div className="relative border-l border-neutral-900 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-12">
          
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => {
              return (
                <motion.div
                  layout
                  key={event.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Small Timeline node indicator dot */}
                  <div
                    className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-2 h-2 rounded-full bg-neutral-800 transition-colors group-hover:scale-125"
                    style={{ '--hover-color': getAccentColor() } as React.CSSProperties}
                  />

                  {/* Text Grid Card layout */}
                  <div className="flex flex-col gap-3">
                    
                    {/* Event Header details */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-2 border-b border-brand-border/60">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-display font-medium text-base text-white">
                          {event.role}
                        </h3>
                        {event.company && (
                          <>
                            <span className="text-neutral-700 text-xs select-none">•</span>
                            <span className="text-xs text-neutral-300 font-semibold font-display">
                              {event.company}
                            </span>
                          </>
                        )}
                      </div>

                      <div className="flex items-center gap-2.5 text-[10px] font-mono text-neutral-500">
                        <span>{getEventLabel(event.type)}</span>
                        <span>|</span>
                        <span>{event.period}</span>
                      </div>
                    </div>

                    {/* Bullet logs */}
                    <div className="space-y-2 mt-1">
                      {event.description.map((point, idx) => (
                        <p key={idx} className="text-xs text-neutral-400 leading-relaxed font-sans">
                          {point}
                        </p>
                      ))}
                    </div>

                    {/* Tech Badges if present */}
                    {event.tech && event.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {event.tech.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-mono px-2 py-0.5 bg-neutral-900 border border-brand-border text-neutral-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
