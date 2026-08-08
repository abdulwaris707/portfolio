import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AndroidSimulator } from '../widgets/AndroidSimulator';
import { DesignComparison } from '../widgets/DesignComparison';
import { ApiVisualizer } from '../widgets/ApiVisualizer';
import { CodeSandbox } from '../widgets/CodeSandbox';
import { FlaskConical, Smartphone, Eye, Database, Sliders, ChevronRight } from 'lucide-react';

type LabWidget = 'emulator' | 'slider' | 'api' | 'sandbox';

export const Lab: React.FC = () => {
  const [activeWidget, setActiveWidget] = useState<LabWidget>('emulator');

  const widgets = [
    {
      id: 'emulator' as LabWidget,
      title: 'Android Emulator',
      subtitle: 'Native Mobile Sandbox',
      icon: Smartphone,
      component: <AndroidSimulator />,
      description: 'Simulates a native Kotlin mobile client operating layout structures and live performance. Allows interaction with mock applications, file cache metrics, and SQLite database sync counters.',
      stack: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Flow APIs', 'State Hoisting']
    },
    {
      id: 'slider' as LabWidget,
      title: 'Design Spec Slider',
      subtitle: 'Figma to Code Accuracy',
      icon: Eye,
      component: <DesignComparison />,
      description: 'An interactive sliding canvas displaying Figma vector blueprints overlaying clean React code representations. Showcases exact pixel matching and design token integrations.',
      stack: ['Figma API', 'Design Tokens Studio', 'Tailwind CSS', 'CSS Variables', 'Drag Gestures']
    },
    {
      id: 'api' as LabWidget,
      title: 'REST API Terminal',
      subtitle: 'Backend Query Simulator',
      icon: Database,
      component: <ApiVisualizer />,
      description: 'Exposes simulated backend endpoints executing PostgreSQL queries. Clicking send triggers real-time query rendering and displays formatted JSON outputs inside a CRT scanline console.',
      stack: ['Node.js', 'Express.js', 'PostgreSQL Schema', 'SQL Joins', 'CRT Scanlines']
    },
    {
      id: 'sandbox' as LabWidget,
      title: 'Tailwind CSS Sandbox',
      subtitle: 'Atomic Property Modifier',
      icon: Sliders,
      component: <CodeSandbox />,
      description: 'Modify padding, border-radius, rotation, and custom box glows. Outputs the dynamically compiled React DOM class markup in real time.',
      stack: ['React State', 'Dynamic Template Literals', 'Tailwind CSS', 'Box Shadow Specs']
    }
  ];

  const currentWidget = widgets.find(w => w.id === activeWidget)!;

  return (
    <section id="lab" className="py-24 px-6 border-t border-brand-border bg-[#070709] relative">
      <div className="absolute inset-0 grid-bg-dots opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="mb-12">
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 flex items-center gap-1.5">
            <FlaskConical className="w-3.5 h-3.5 text-indigo-400" /> Interactive Playgrounds
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mt-1">
            The Developer Lab
          </h2>
          <p className="text-xs text-neutral-500 mt-2 max-w-lg leading-relaxed">
            A sandbox environments designed to demonstrate software engineering capabilities, clean mobile architectures, and visual fidelity.
          </p>
        </div>

        {/* Lab Panel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Menu / Selector (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-2 bg-brand-card/30 border border-brand-border p-3 rounded-2xl">
            {widgets.map(w => {
              const IconComponent = w.icon;
              const isActive = w.id === activeWidget;
              return (
                <button
                  key={w.id}
                  onClick={() => setActiveWidget(w.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all text-left focus:outline-none ${isActive
                      ? 'bg-brand-card border-brand-border text-white shadow'
                      : 'border-transparent text-neutral-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg border ${isActive ? 'bg-neutral-800 border-neutral-700' : 'bg-transparent border-transparent'
                      }`}>
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-neutral-500'}`} />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-display">{w.title}</div>
                      <div className="text-[9px] font-mono text-neutral-500 mt-0.5">{w.subtitle}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-neutral-300 translate-x-0.5' : 'text-neutral-600'
                    }`} />
                </button>
              );
            })}
          </div>

          {/* Right Presentation Canvas (8 Cols) */}
          <div className="lg:col-span-8 bg-brand-card/45 border border-brand-border rounded-2xl p-6 md:p-8 flex flex-col justify-between items-stretch">

            {/* Widget Stage */}
            <div className="flex-1 flex items-center justify-center min-h-[300px] mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWidget}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex justify-center"
                >
                  {currentWidget.component}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Widget Detail Descriptions */}
            <div className="border-t border-brand-border pt-6 flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <h4 className="text-xs font-bold text-neutral-200 font-display">
                  Concepts &amp; Integration
                </h4>
                <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed max-w-md">
                  {currentWidget.description}
                </p>
              </div>

              {/* Technical Stack Tags */}
              <div className="w-full md:w-[220px] shrink-0">
                <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2 font-bold">
                  Stack / Target Architecture
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentWidget.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono px-2 py-0.5 bg-neutral-900 border border-brand-border text-neutral-300 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
