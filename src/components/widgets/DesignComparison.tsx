import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal, Eye, Edit2, Code } from 'lucide-react';

export const DesignComparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp]);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Description / Instructions */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-rose-500" /> Interactive Spec Slider
        </span>
        <span className="text-[10px] text-neutral-500">
          Drag slider to view Figma wireframe vs. code execution
        </span>
      </div>

      {/* Main Sandbox Container */}
      <div
        ref={containerRef}
        className="w-full aspect-[16/10] relative rounded-2xl border border-brand-border bg-brand-obsidian overflow-hidden select-none cursor-ew-resize shadow-premium"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Layer 1: The Finished Hi-Fi UI Code Layer (Underneath - Left Side) */}
        <div className="absolute inset-0 w-full h-full bg-[#0A0A0E] px-6 py-5 flex flex-col justify-between pointer-events-none">
          {/* Mock SaaS Card Top header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="text-xs font-bold text-neutral-200 font-display">Apex Analytics</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              Live Systems Status
            </span>
          </div>

          {/* Core Analytics Graph Visual */}
          <div className="my-auto flex flex-col gap-2">
            <div className="text-2xl font-bold text-white tracking-tight font-display">$84,240</div>
            <div className="text-[10px] text-neutral-400 flex items-center gap-1">
              <span className="text-emerald-400 font-bold">+18.4%</span> since last cycle
            </div>

            {/* Graph Bar Mock */}
            <div className="flex gap-2 items-end h-24 mt-3">
              {[40, 65, 45, 80, 55, 90, 75, 95].map((val, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-rose-500/10 to-rose-500/60 rounded-t-sm h-full flex items-end">
                  <div className="w-full bg-rose-500 rounded-t-sm" style={{ height: `${val}%` }} />
                </div>
              ))}
            </div>
          </div>

          {/* Card Footer tags */}
          <div className="flex justify-between items-center border-t border-white/5 pt-3">
            <div className="flex items-center gap-2 text-[10px] text-neutral-400">
              <Code className="w-3.5 h-3.5 text-indigo-400" />
              <span>React Virtualized Grid v4</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-500">RENDER TIME: 1.2ms</span>
          </div>
        </div>

        {/* Layer 2: The Wireframe Blueprint Layer (On top, clipped by sliderPosition - Right Side) */}
        <div
          className="absolute inset-0 bg-[#080B14] px-6 py-5 flex flex-col justify-between pointer-events-none border-r border-rose-500/40 select-none"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          {/* Blueprint Grid Lines Overlay */}
          <div className="absolute inset-0 grid-bg-lines opacity-40 pointer-events-none" />

          {/* Wireframe SaaS Card Header */}
          <div className="flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              {/* Wireframe box placeholder */}
              <div className="w-3.5 h-3.5 border border-dashed border-rose-500/40 flex items-center justify-center text-[7px] text-rose-500/60">IMG</div>
              <div className="w-16 h-2 bg-neutral-800 rounded" />
            </div>
            <div className="w-12 h-4 border border-dashed border-rose-500/30 rounded" />
          </div>

          {/* Wireframe Graph Visual */}
          <div className="my-auto flex flex-col gap-2.5 z-10">
            <div className="w-24 h-6 bg-neutral-800 rounded" />
            <div className="w-32 h-2.5 bg-neutral-900 rounded" />

            {/* Wireframe Bars */}
            <div className="flex gap-2 items-end h-24 mt-3 border-b border-dashed border-neutral-800">
              {[40, 65, 45, 80, 55, 90, 75, 95].map((val, i) => (
                <div key={i} className="flex-1 border border-dashed border-rose-500/20 rounded-t h-full flex items-end">
                  <div className="w-full border-t border-dashed border-rose-500/40" style={{ height: `${val}%` }} />
                </div>
              ))}
            </div>
          </div>

          {/* Wireframe Card Footer */}
          <div className="flex justify-between items-center border-t border-dashed border-rose-500/10 pt-3 z-10">
            <div className="flex items-center gap-1.5 text-[9px] text-rose-500/60">
              <Edit2 className="w-3 h-3" />
              <span>Figma Blueprint Stage v4</span>
            </div>
            <div className="w-20 h-2 bg-neutral-900 rounded" />
          </div>
        </div>

        {/* Slider Handle (The vertical divider line & button) */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-rose-500 z-30 cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-brand-obsidian border-2 border-rose-500 flex items-center justify-center shadow-lg -translate-x-1/2 group">
            <MoveHorizontal className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
