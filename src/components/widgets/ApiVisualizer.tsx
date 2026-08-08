import React, { useState } from 'react';
import { Send, Database, Copy, Check } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

type Route = 'GET /v1/projects' | 'GET /v1/skills' | 'GET /v1/db/health' | 'POST /v1/handshake';

export const ApiVisualizer: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<Route>('GET /v1/projects');
  const [isExecuting, setIsExecuting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string>(
    JSON.stringify({ status: 200, info: "API gateway ready. Standby." }, null, 2)
  );

  const getSqlStatement = (route: Route): string => {
    switch (route) {
      case 'GET /v1/projects':
        return 'SELECT id, title, category, tags FROM projects WHERE active = true ORDER BY id ASC;';
      case 'GET /v1/skills':
        return 'SELECT name, category, proficiency FROM skills GROUP BY category, name ORDER BY category;';
      case 'GET /v1/db/health':
        return 'SELECT pg_is_in_recovery() AS recovery, count(*) AS connection_count FROM pg_stat_activity;';
      case 'POST /v1/handshake':
        return "INSERT INTO handshakes (created_at, origin) VALUES (NOW(), 'client_handshake') RETURNING session_id;";
    }
  };

  const getJsonResponse = (route: Route) => {
    switch (route) {
      case 'GET /v1/projects':
        return projectsData.map(p => ({
          id: p.id,
          title: p.title,
          category: p.category,
          stack: p.tags.slice(0, 3)
        }));
      case 'GET /v1/skills':
        return [
          { category: "frontend", skills: ["React", "TypeScript", "Tailwind"] },
          { category: "backend", skills: ["Node.js", "Express", "REST APIs"] },
          { category: "database", skills: ["PostgreSQL", "SQL"] }
        ];
      case 'GET /v1/db/health':
        return {
          status: "healthy",
          uptime_seconds: 31536000,
          database: "PostgreSQL 16.2",
          active_connections: 4,
          max_connections: 100,
          latency_ms: 3
        };
      case 'POST /v1/handshake':
        return {
          status: 200,
          session: "hs_8f7b2c9e4a1d",
          handshake: "complete",
          message: "Secure gateway established. Welcome, peer.",
          server_timestamp: new Date().toISOString()
        };
    }
  };

  const handleSend = () => {
    setIsExecuting(true);
    setTerminalOutput("// Querying database and executing logic...");
    setTimeout(() => {
      setTerminalOutput(JSON.stringify(getJsonResponse(selectedRoute), null, 2));
      setIsExecuting(false);
    }, 850);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-[#070709] rounded-2xl border border-brand-border overflow-hidden shadow-premium flex flex-col font-mono text-xs">

      {/* Route Selector & Input Bar */}
      <div className="bg-[#0B0B0F] border-b border-brand-border p-3 flex flex-col sm:flex-row items-center gap-2">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider flex items-center gap-1">
            <Database className="w-3.5 h-3.5 text-amber-500" /> API Gateway
          </span>
        </div>

        {/* Route Input Select */}
        <div className="flex-1 w-full flex items-center gap-1 border border-brand-border/60 bg-brand-obsidian rounded-lg px-2 py-1">
          <span className="text-[9px] font-bold text-amber-400 uppercase">
            {selectedRoute.split(' ')[0]}
          </span>
          <select
            value={selectedRoute}
            onChange={(e) => setSelectedRoute(e.target.value as Route)}
            className="flex-1 bg-transparent text-neutral-300 border-none outline-none focus:ring-0 text-[11px] cursor-pointer"
          >
            <option value="GET /v1/projects" className="bg-[#0B0B0F]">/v1/projects</option>
            <option value="GET /v1/skills" className="bg-[#0B0B0F]">/v1/skills</option>
            <option value="GET /v1/db/health" className="bg-[#0B0B0F]">/v1/db/health</option>
            <option value="POST /v1/handshake" className="bg-[#0B0B0F]">/v1/handshake</option>
          </select>
        </div>

        {/* Send Action */}
        <button
          onClick={handleSend}
          disabled={isExecuting}
          className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 active:scale-95 text-[#050507] font-bold px-3 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all text-[11px] disabled:opacity-50"
        >
          <Send className="w-3 h-3" /> Send
        </button>
      </div>

      {/* SQL Generator View */}
      <div className="bg-[#0A0A0E] px-4 py-2 border-b border-brand-border/50 text-[10px] text-neutral-400 flex items-center gap-2">
        <span className="text-amber-500 font-bold font-mono">SQL:</span>
        <span className="font-mono text-neutral-300 italic truncate w-full">
          {getSqlStatement(selectedRoute)}
        </span>
      </div>

      {/* Main Terminal Output Display */}
      <div className="relative flex-1 bg-black/95 p-4 min-h-[180px] max-h-[220px] overflow-y-auto terminal-overlay code-scrollbar select-text">
        <div className="absolute top-2 right-2 z-20">
          <button
            onClick={copyToClipboard}
            className="p-1 rounded bg-neutral-900 border border-brand-border text-neutral-400 hover:text-white transition-colors"
            title="Copy Output"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        <pre className="text-emerald-400 font-mono leading-relaxed whitespace-pre-wrap">
          <span className="text-neutral-500">// Response Body</span><br />
          {terminalOutput}
        </pre>
      </div>
    </div>
  );
};
