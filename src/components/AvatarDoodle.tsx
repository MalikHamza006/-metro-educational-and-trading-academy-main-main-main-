import { motion } from 'motion/react';

interface AvatarDoodleProps {
  name: string;
  size?: number;
  className?: string;
}

export const AvatarDoodle = ({ name, size = 44, className = "" }: AvatarDoodleProps) => {
  // Select thematic palettes and doodle models based on a string character hash
  const colors = [
    { bg: "from-red-600/10 to-red-100/10", border: "border-primary-red/20", text: "text-primary-red" },
    { bg: "from-red-500/5 to-white", border: "border-red-500/15", text: "text-primary-red" },
    { bg: "from-red-600/15 to-white", border: "border-red-500/25", text: "text-primary-red" },
    { bg: "from-white to-red-500/5", border: "border-red-500/10", text: "text-primary-red" },
    { bg: "from-red-500/10 to-red-600/5", border: "border-red-500/20", text: "text-primary-red" }
  ];

  const initial = name.charAt(0).toUpperCase();
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const color = colors[hash % colors.length];

  // A suite of 5 creative abstract line-art SVG doodles
  const SVG_DOODLES = [
    // 0: Constellations & Galactic Orbits (Ideal for tech & analytical thinkers)
    (textClass: string) => (
      <svg className={`w-full h-full ${textClass} opacity-85`} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="20" cy="20" r="14" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M10 20 L30 20 M20 10 L20 30" strokeWidth="0.8" opacity="0.4" />
        <circle cx="20" cy="20" r="6" />
        <circle cx="20" cy="11" r="2.5" fill="currentColor" />
        <circle cx="20" cy="29" r="2" fill="currentColor" />
        <circle cx="11" cy="20" r="1.5" fill="currentColor" />
        <circle cx="29" cy="20" r="1.5" fill="currentColor" />
        <path d="M14 14 Q20 8 26 14" />
      </svg>
    ),
    // 1: Minimalist Symmetric Geometric Columns (Modern structural vibe)
    (textClass: string) => (
      <svg className={`w-full h-full ${textClass} opacity-85`} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 28 L20 12 L28 28 Z" />
        <circle cx="20" cy="18" r="3.5" />
        <path d="M9 30 H31" strokeWidth="2.5" />
        <line x1="20" y1="23" x2="20" y2="28" strokeWidth="1" />
      </svg>
    ),
    // 2: Friendly Modern Line Smile-Art (Lighthearted abstract student/educator doodle)
    (textClass: string) => (
      <svg className={`w-full h-full ${textClass} opacity-85`} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="20" cy="20" r="15" />
        <path d="M14 16 L17 19 M26 16 L23 19" strokeWidth="2" />
        <path d="M15 23.5 C16.5 26.5 23.5 26.5 25 23.5" />
        <path d="M11 11 Q15 9 18 12" />
        <path d="M29 11 Q25 9 22 12" />
      </svg>
    ),
    // 3: Concentric Tech Matrix Waves (Perfect for programmers & analysts)
    (textClass: string) => (
      <svg className={`w-full h-full ${textClass} opacity-85`} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="20" cy="20" r="16" strokeDasharray="1.5 1.5" />
        <circle cx="20" cy="20" r="11" />
        <circle cx="20" cy="20" r="5" fill="currentColor" />
        <path d="M6 14 C12 10, 28 10, 34 14" opacity="0.3" strokeWidth="1" />
        <path d="M6 26 C12 30, 28 30, 34 26" opacity="0.3" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    // 4: Minimalist Abstract Balance Pattern (Balanced structure & logic doodle)
    (textClass: string) => (
      <svg className={`w-full h-full ${textClass} opacity-85`} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <circle cx="28" cy="28" r="4" />
        <path d="M12 16 Q12 28 24 28" />
        <circle cx="20" cy="20" r="15" strokeDasharray="4 4" opacity="0.5" />
        <path d="M12 12 L28 28" opacity="0.3" />
      </svg>
    )
  ];

  const doodleDrawer = SVG_DOODLES[hash % SVG_DOODLES.length];

  return (
    <div 
      style={{ width: size, height: size }}
      className={`rounded-xl bg-gradient-to-br ${color.bg} border ${color.border} shrink-0 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300 ${className}`}
    >
      {doodleDrawer(color.text)}
      
      {/* Small floating human signifier / letter badge made translucent to look incredibly editorial */}
      <span className="absolute bottom-1 right-1 bg-[#FAF9F9] px-1 py-0.5 rounded text-[8px] font-mono leading-none tracking-tight text-slate-800 border border-red-500/10 opacity-90 select-none font-bold">
        {initial}
      </span>
    </div>
  );
};
