import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';
import type { Discipline, Project } from '../../types';
import { useDiscipline } from '../../context/DisciplineContext';
import { Github, ExternalLink, Compass, Smartphone, Code, HardDrive, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | Discipline>('all');
  const { getAccentColor } = useDiscipline();

  const getCategoryLabel = (category: Discipline): string => {
    switch (category) {
      case 'web': return 'Web Architecture';
      case 'android': return 'Android Client';
      case 'design': return 'Product Design';
      case 'systems': return 'Backend Systems';
    }
  };

  const getCategoryIcon = (category: Discipline) => {
    switch (category) {
      case 'web': return <Code className="w-3.5 h-3.5" />;
      case 'android': return <Smartphone className="w-3.5 h-3.5" />;
      case 'design': return <Compass className="w-3.5 h-3.5" />;
      case 'systems': return <HardDrive className="w-3.5 h-3.5" />;
    }
  };

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  const filterTabs = [
    { label: 'All Work', value: 'all' },
    { label: 'Web', value: 'web' },
    { label: 'Mobile', value: 'android' },
    { label: 'Design', value: 'design' },
    { label: 'Systems', value: 'systems' },
  ];

  return (
    <section id="works" className="py-24 lg:py-36 px-6 border-t border-brand-border bg-brand-obsidian relative">
      <div className="absolute inset-0 grid-bg-lines opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 font-semibold">
              Selected Projects
            </span>
            <h2 className="font-display font-light text-3xl md:text-5xl text-white tracking-tight">
              Featured Case Studies
            </h2>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap gap-1 border-b border-brand-border pb-1">
            {filterTabs.map(tab => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                className={`px-4 py-2 text-[10px] font-mono tracking-wider uppercase font-semibold transition-all focus:outline-none cursor-pointer relative ${
                  filter === tab.value ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {tab.label}
                {filter === tab.value && (
                  <motion.span
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                    style={{ backgroundColor: getAccentColor() }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Alternate Editorial Projects Stack */}
        <div className="flex flex-col gap-24 lg:gap-36">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index) => {
              const isReversed = index % 2 === 1;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview (Large image / mockup) */}
                  <div className="w-full lg:w-[50%] relative overflow-hidden bg-brand-dark group border border-brand-border aspect-[16/10] cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105 filter grayscale group-hover:grayscale-0 brightness-[0.7] group-hover:brightness-[0.9]"
                    />
                    
                    {/* Hover Link Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Editorial Text Content & Specifications */}
                  <div className="w-full lg:w-[50%] flex flex-col justify-between py-2">
                    
                    {/* Project Header Info */}
                    <div className="flex flex-col gap-3">
                      
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-1.5">
                          {getCategoryIcon(project.category)}
                          <span>{getCategoryLabel(project.category)}</span>
                        </span>
                        <span className="w-1 h-1 rounded-full bg-neutral-800" />
                        <span className="text-[10px] font-mono text-neutral-400">
                          Role: {project.role}
                        </span>
                      </div>

                      <h3 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight leading-none mt-1">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs font-mono text-neutral-500 tracking-wider">
                        {project.subtitle}
                      </p>

                      <p className="text-sm text-neutral-400 leading-relaxed font-sans mt-4 max-w-xl">
                        {project.solutionDescription}
                      </p>
                    </div>

                    {/* Metadata specs - What, Why, How */}
                    <div className="grid grid-cols-2 gap-4 mt-6 border-t border-brand-border pt-6">
                      <div>
                        <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-500 font-bold block mb-1">
                          Why (Problem)
                        </span>
                        <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                          {project.problemStatement}
                        </p>
                      </div>
                      
                      {/* Metric Display if available */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div>
                          <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-500 font-bold block mb-1">
                            Key Outcome
                          </span>
                          <div className="flex flex-col gap-1">
                            <span className="text-base font-mono font-bold text-white leading-none">
                              {project.metrics[0].value}
                            </span>
                            <span className="text-[9px] text-neutral-500 font-sans">
                              {project.metrics[0].label}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer tags and Link action */}
                    <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-brand-border">
                      <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] font-mono px-2 py-0.5 bg-neutral-900 border border-brand-border text-neutral-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Redirect actions */}
                      <div className="flex items-center gap-4">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-white transition-colors"
                            aria-label="GitHub Repository Link"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-white transition-colors"
                            aria-label="Live Demo Link"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

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
