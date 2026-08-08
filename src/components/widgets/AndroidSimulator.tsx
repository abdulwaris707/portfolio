import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wifi, Battery, Signal, Home, ChevronLeft, Square, Play,
  Cpu, Database, HardDrive, Smartphone, Sparkles, FolderCode
} from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

type ScreenState = 'home' | 'projects' | 'metrics' | 'about';

export const AndroidSimulator: React.FC = () => {
  const [screen, setScreen] = useState<ScreenState>('home');
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 18,
    ram: 2.4,
    dbCache: 124,
    fps: 60
  });

  // Simulate real-time background metrics changes
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemMetrics(prev => ({
        cpu: Math.floor(Math.random() * 15) + 12,
        ram: parseFloat((2.3 + Math.random() * 0.2).toFixed(2)),
        dbCache: prev.dbCache + (Math.random() > 0.7 ? 1 : 0),
        fps: Math.random() > 0.95 ? 59 : 60
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const androidProjects = projectsData.filter(p => p.category === 'android' || p.category === 'web');

  return (
    <div className="w-full max-w-[270px] sm:max-w-[300px] md:max-w-[310px] lg:max-w-[320px] mx-auto relative select-none">
      {/* Outer Phone Frame */}
      <div className="relative mx-auto border-[10px] border-brand-border bg-brand-obsidian rounded-[40px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden aspect-[9/19] w-full">
        {/* Notch / Speaker Ear Piece */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-5 w-32 bg-brand-border rounded-b-xl z-50 flex items-center justify-center">
          <div className="w-12 h-1 bg-neutral-800 rounded-full" />
        </div>

        {/* Screen Content Wrapper */}
        <div className="relative w-full h-full bg-[#09090D] flex flex-col pt-6 pb-4">

          {/* Status Bar */}
          <div className="h-6 px-4 flex justify-between items-center text-[10px] text-neutral-400 font-mono z-40 select-none">
            <span>12:00</span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3 text-neutral-400" />
              <Wifi className="w-3 h-3 text-emerald-400" />
              <div className="flex items-center gap-0.5">
                <span className="text-[8px]">100%</span>
                <Battery className="w-3.5 h-3.5 text-emerald-400 rotate-90" />
              </div>
            </div>
          </div>

          {/* Core Screen */}
          <div className="flex-1 overflow-hidden relative px-3 py-2 flex flex-col">
            <AnimatePresence mode="wait">
              {/* Home Screen */}
              {screen === 'home' && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  {/* Grid System Widget */}
                  <div className="bg-neutral-900/60 border border-white/5 rounded-2xl p-3 mt-2 backdrop-blur-md">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span className="text-[11px] font-semibold text-neutral-200">Compose UI Core</span>
                    </div>
                    <p className="text-[9px] text-neutral-400 leading-normal">
                      Modular Jetpack Compose framework demonstrating native performance models.
                    </p>
                  </div>

                  {/* App Drawer / Grid */}
                  <div className="grid grid-cols-3 gap-y-5 gap-x-2 my-auto px-1">
                    {/* App 1: Projects */}
                    <button
                      onClick={() => setScreen('projects')}
                      className="flex flex-col items-center gap-1.5 focus:outline-none group"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg group-active:scale-95 transition-transform">
                        <FolderCode className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] font-medium text-neutral-300">Projects</span>
                    </button>

                    {/* App 2: System Monitor */}
                    <button
                      onClick={() => setScreen('metrics')}
                      className="flex flex-col items-center gap-1.5 focus:outline-none group"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg group-active:scale-95 transition-transform">
                        <Cpu className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] font-medium text-neutral-300">Monitor</span>
                    </button>

                    {/* App 3: Tech Stack */}
                    <button
                      onClick={() => setScreen('about')}
                      className="flex flex-col items-center gap-1.5 focus:outline-none group"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center shadow-lg group-active:scale-95 transition-transform">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] font-medium text-neutral-300">Android UI</span>
                    </button>
                  </div>

                  {/* Dock Area */}
                  <div className="bg-white/5 border border-white/5 rounded-3xl px-3 py-2 flex justify-around items-center backdrop-blur-md mb-2">
                    <div className="w-7 h-7 rounded-lg bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400 font-mono">ROOM</div>
                    <div className="w-7 h-7 rounded-lg bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400 font-mono">FLOW</div>
                    <div className="w-7 h-7 rounded-lg bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400 font-mono">HILT</div>
                  </div>
                </motion.div>
              )}

              {/* Projects List Screen */}
              {screen === 'projects' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <ChevronLeft
                      className="w-4 h-4 text-emerald-400 cursor-pointer"
                      onClick={() => setScreen('home')}
                    />
                    <span className="text-[11px] font-semibold text-neutral-200">Mobile Portfolio</span>
                  </div>

                  <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2 no-scrollbar">
                    {androidProjects.map(proj => (
                      <div
                        key={proj.id}
                        className="bg-neutral-900/80 border border-white/5 rounded-xl p-2.5 backdrop-blur-sm"
                      >
                        <div className="text-[10px] font-bold text-neutral-200">{proj.title}</div>
                        <div className="text-[8px] text-neutral-400 mt-0.5 line-clamp-2">{proj.problemStatement}</div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {proj.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[7px] px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* System Monitor Screen */}
              {screen === 'metrics' && (
                <motion.div
                  key="metrics"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-1.5 mb-3">
                    <ChevronLeft
                      className="w-4 h-4 text-indigo-400 cursor-pointer"
                      onClick={() => setScreen('home')}
                    />
                    <span className="text-[11px] font-semibold text-neutral-200">Performance Monitor</span>
                  </div>

                  <div className="flex-1 flex flex-col gap-3">
                    {/* CPU metric */}
                    <div className="bg-neutral-900/80 border border-white/5 rounded-xl p-2.5">
                      <div className="flex justify-between items-center text-[9px] mb-1">
                        <span className="flex items-center gap-1 text-neutral-400">
                          <Cpu className="w-3 h-3 text-indigo-400" /> CPU Core Load
                        </span>
                        <span className="font-mono text-neutral-200">{systemMetrics.cpu}%</span>
                      </div>
                      <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-indigo-500"
                          animate={{ width: `${systemMetrics.cpu}%` }}
                        />
                      </div>
                    </div>

                    {/* RAM metric */}
                    <div className="bg-neutral-900/80 border border-white/5 rounded-xl p-2.5">
                      <div className="flex justify-between items-center text-[9px] mb-1">
                        <span className="flex items-center gap-1 text-neutral-400">
                          <HardDrive className="w-3 h-3 text-purple-400" /> RAM Consumption
                        </span>
                        <span className="font-mono text-neutral-200">{systemMetrics.ram} GB</span>
                      </div>
                      <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-purple-500"
                          animate={{ width: `${(systemMetrics.ram / 4) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Room DB Cache */}
                    <div className="bg-neutral-900/80 border border-white/5 rounded-xl p-2.5">
                      <div className="flex justify-between items-center text-[9px] mb-1">
                        <span className="flex items-center gap-1 text-neutral-400">
                          <Database className="w-3 h-3 text-emerald-400" /> SQLite Sync Records
                        </span>
                        <span className="font-mono text-emerald-400 font-bold">{systemMetrics.dbCache}</span>
                      </div>
                      <span className="text-[7px] text-neutral-500">Auto syncing changes from local database caches...</span>
                    </div>

                    {/* Render Performance status */}
                    <div className="flex-1 border border-dashed border-neutral-800 rounded-xl flex items-center justify-center p-2 text-center">
                      <div>
                        <div className="text-[12px] font-bold text-emerald-400 font-mono flex items-center justify-center gap-1">
                          <Play className="w-3.5 h-3.5 fill-emerald-400/20 text-emerald-400" /> {systemMetrics.fps} FPS
                        </div>
                        <span className="text-[7px] text-neutral-400 uppercase tracking-widest mt-1 block">Compose Frame Latency OK</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* About Simulator Screen */}
              {screen === 'about' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <ChevronLeft
                      className="w-4 h-4 text-rose-400 cursor-pointer"
                      onClick={() => setScreen('home')}
                    />
                    <span className="text-[11px] font-semibold text-neutral-200">Custom Canvas Core</span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="bg-neutral-900/80 border border-white/5 rounded-xl p-2.5 text-center flex-1 flex flex-col justify-center items-center">
                      <div className="w-12 h-12 rounded-full border border-dashed border-rose-500/40 flex items-center justify-center animate-spin-slow">
                        <div className="w-9 h-9 rounded-full bg-rose-500/10 flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-rose-400" />
                        </div>
                      </div>
                      <div className="text-[10px] font-bold text-neutral-200 mt-2">Kotlin UI Core</div>
                      <p className="text-[8px] text-neutral-400 mt-1 leading-normal max-w-[140px]">
                        Fully responsive, declarative composition layers with custom pixel alignment.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 mt-2">
                      <div className="bg-white/5 border border-white/5 rounded-lg p-1.5 text-center text-[7px] text-neutral-400">
                        MVVM Architecture
                      </div>
                      <div className="bg-white/5 border border-white/5 rounded-lg p-1.5 text-center text-[7px] text-neutral-400">
                        Coroutines Async
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Keys */}
          <div className="h-8 px-8 flex justify-between items-center text-neutral-500 select-none z-40">
            <button
              onClick={() => {
                if (screen !== 'home') setScreen('home');
              }}
              className="hover:text-neutral-300 focus:outline-none transition-colors active:scale-90"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setScreen('home')}
              className="hover:text-neutral-300 focus:outline-none transition-colors active:scale-90"
            >
              <Home className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (screen === 'home') setScreen('metrics');
                else setScreen('home');
              }}
              className="hover:text-neutral-300 focus:outline-none transition-colors active:scale-90"
            >
              <Square className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
