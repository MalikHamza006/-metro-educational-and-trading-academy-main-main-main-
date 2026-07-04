import { motion } from 'motion/react';

interface AvatarDoodleProps {
  name: string;
  size?: number;
  className?: string;
}

const SVG_DOODLES = [
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
  // Add other doodles...
];

export const AvatarDoodle = ({ name, size = 44, className = "" }: AvatarDoodleProps) => {
  const colors = [
    { bg: "from-red-600/10 to-red-100/10", border: "border-primary-red/20", text: "text-primary-red" },
    { bg: "from-red-500/5 to-white", border: "border-red-500/15", text: "text-primary-red" },
  ];

  const initial = name.charAt(0).toUpperCase();
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const color = colors[hash % colors.length];
  const doodleDrawer = SVG_DOODLES[hash % SVG_DOODLES.length];

  return (
    <div 
      style={{ width: size, height: size }}
      className={`rounded-xl bg-gradient-to-br ${color.bg} border ${color.border} shrink-0 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300 ${className}`}
    >
      {doodleDrawer(color.text)}
      <span className="absolute bottom-1 right-1 bg-[#FAF9F9] px-1 py-0.5 rounded text-[8px] font-mono leading-none tracking-tight text-slate-800 border border-red-500/10 opacity-90 select-none font-bold">
        {initial}
      </span>
    </div>
  );
};