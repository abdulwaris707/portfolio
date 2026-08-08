import React from 'react';
import { useDiscipline } from '../../context/DisciplineContext';

export const Skills: React.FC = () => {
  const { getAccentColor } = useDiscipline();

  const skillGroups = [
    {
      title: 'Frontend Architecture',
      skills: [
        { name: 'React', desc: 'Virtual DOM optimization, context flows, custom hook state structures.' },
        { name: 'TypeScript', desc: 'Strict interface compilers, generics type safety, module constraints.' },
        { name: 'JavaScript', desc: 'Asynchronous concurrency models, runtime event engines.' },
        { name: 'CSS3 / HTML5', desc: 'Semantic layouts, structural grids, responsive custom stylesheet tokens.' }
      ]
    },
    {
      title: 'Backend & Data Services',
      skills: [
        { name: 'Node.js', desc: 'Asynchronous service layers, REST endpoint gateways.' },
        { name: 'Express.js', desc: 'Modular middleware routers, controllers, error handlers.' },
        { name: 'PostgreSQL', desc: 'Relational entity design, database normalization layouts.' },
        { name: 'SQL', desc: 'Complex query indexing, joins execution path profiling.' }
      ]
    },
    {
      title: 'Mobile & Design Systems',
      skills: [
        { name: 'Android Development', desc: 'Native Kotlin application patterns,Room caching structures.' },
        { name: 'Jetpack Compose', desc: 'Declarative composable component trees, canvas configurations.' },
        { name: 'UI/UX Design', desc: 'Design system components, wireframe layouts, Figma prototypes.' },
        { name: 'Git & Workflows', desc: 'Branching flow management, GitHub pipeline orchestrations.' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 lg:py-36 px-6 border-t border-brand-border bg-brand-obsidian relative">
      <div className="absolute inset-0 grid-bg-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading */}
        <div className="mb-20">
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 font-semibold">
            Capabilities Matrix
          </span>
          <h2 className="font-display font-light text-3xl md:text-5xl text-white tracking-tight mt-1">
            Technology &amp; Standards
          </h2>
          <p className="text-xs text-neutral-500 mt-2 max-w-sm leading-relaxed">
            Refined stack structures for engineering and design layouts. No logo clutter, pure coding execution.
          </p>
        </div>

        {/* Skill Group Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {skillGroups.map((group, groupIdx) => {
            return (
              <div
                key={groupIdx}
                className="flex flex-col gap-6"
              >
                {/* Column Header */}
                <div className="pb-3 border-b border-brand-border flex items-center justify-between">
                  <h3 className="font-display font-medium text-xs text-neutral-300 uppercase tracking-widest">
                    {group.title}
                  </h3>
                  <span className="text-[8px] font-mono text-neutral-600">0{groupIdx + 1}</span>
                </div>

                {/* Skills Row Listings */}
                <div className="flex flex-col gap-5">
                  {group.skills.map((skill, skillIdx) => {
                    return (
                      <div
                        key={skillIdx}
                        className="group flex flex-col gap-1 select-none"
                      >
                        <div className="text-xs font-semibold text-neutral-200 font-display flex items-center justify-between">
                          <span>{skill.name}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 group-hover:scale-125 transition-transform" style={{ '--hover-bg': getAccentColor() } as React.CSSProperties} />
                        </div>
                        <p className="text-[11px] text-neutral-500 leading-relaxed font-sans mt-0.5 group-hover:text-neutral-400 transition-colors duration-250">
                          {skill.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
