import React, { useState } from 'react';
import { Sliders, Code, Sparkles } from 'lucide-react';

export const CodeSandbox: React.FC = () => {
  const [padding, setPadding] = useState(16); // px
  const [radius, setRadius] = useState(12); // px
  const [glow, setGlow] = useState(15); // px
  const [rotate, setRotate] = useState(0); // deg

  const tailwindSnippet = `// Live CSS & React Component Rendering
<div 
  className="
    bg-neutral-900 border border-white/5 
    p-[${padding}px] 
    rounded-[${radius}px] 
    rotate-[${rotate}deg]
    shadow-[0_0_${glow}px_rgba(99,102,241,0.2)]
    transition-all duration-300
  "
>
  <h4 className="text-white font-bold">Interactive Sandbox</h4>
  <p className="text-xs text-neutral-400">Atomic style tokens applied live.</p>
</div>`;

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col md:flex-row gap-4 font-mono text-xs">
      {/* Sliders Control Panel */}
      <div className="flex-1 bg-[#0A0A0E] rounded-xl border border-brand-border p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2 border-b border-brand-border pb-2">
          <Sliders className="w-4 h-4 text-indigo-400" />
          <span className="text-[11px] font-bold text-neutral-200 uppercase tracking-wider">Style Controls</span>
        </div>

        {/* Padding Control */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[10px] text-neutral-400">
            <span>Padding</span>
            <span className="text-indigo-400 font-bold">{padding}px</span>
          </div>
          <input
            type="range" min="8" max="40" value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
            className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>

        {/* Border Radius Control */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[10px] text-neutral-400">
            <span>Border Radius</span>
            <span className="text-indigo-400 font-bold">{radius}px</span>
          </div>
          <input
            type="range" min="0" max="32" value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
            className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>

        {/* Glow Control */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[10px] text-neutral-400">
            <span>Neon Accent Glow</span>
            <span className="text-indigo-400 font-bold">{glow}px</span>
          </div>
          <input
            type="range" min="0" max="30" value={glow}
            onChange={(e) => setGlow(Number(e.target.value))}
            className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>

        {/* Rotation Control */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[10px] text-neutral-400">
            <span>Rotation Matrix</span>
            <span className="text-indigo-400 font-bold">{rotate}°</span>
          </div>
          <input
            type="range" min="-10" max="10" value={rotate}
            onChange={(e) => setRotate(Number(e.target.value))}
            className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>
      </div>

      {/* Render View & Dynamic Code Panel */}
      <div className="flex-[1.2] flex flex-col gap-3">
        {/* Render View Stage */}
        <div className="h-32 bg-brand-obsidian rounded-xl border border-brand-border flex items-center justify-center relative overflow-hidden select-none">
          <div className="absolute inset-0 grid-bg-dots opacity-30" />

          {/* Dynamic Component */}
          <div
            style={{
              padding: `${padding}px`,
              borderRadius: `${radius}px`,
              boxShadow: `0 0 ${glow}px rgba(99, 102, 241, ${glow > 0 ? 0.35 : 0})`,
              transform: `rotate(${rotate}deg)`,
            }}
            className="bg-brand-card border border-white/5 max-w-[200px] text-center transition-all duration-100 ease-out z-10"
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse-subtle" />
              <span className="font-bold text-[10px] text-neutral-200 font-display">Target View</span>
            </div>
            <p className="text-[8px] text-neutral-400 leading-normal">
              Tailwind parameters updated dynamically in the DOM matrix.
            </p>
          </div>
        </div>

        {/* Output Code Panel */}
        <div className="flex-1 bg-black/90 rounded-xl border border-brand-border p-3 relative flex flex-col overflow-hidden">
          <div className="flex items-center gap-1 text-[9px] text-neutral-500 uppercase font-bold tracking-widest border-b border-brand-border pb-1.5 mb-1.5">
            <Code className="w-3.5 h-3.5 text-indigo-400" /> Compiled Elements
          </div>
          <pre className="text-[9px] text-neutral-400 leading-relaxed font-mono overflow-y-auto max-h-[110px] code-scrollbar whitespace-pre">
            {tailwindSnippet}
          </pre>
        </div>
      </div>
    </div>
  );
};
