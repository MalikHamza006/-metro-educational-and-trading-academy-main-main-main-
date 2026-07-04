import React from 'react';

const STATS = [
  { value: '12+', label: 'Active Courses' },
  { value: '100%', label: 'On-Site Focus' },
  { value: 'Daily', label: 'Live Drill Rooms', highlight: true }
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 border-t border-red-500/10 pt-6 mt-6 max-w-md font-mono">
      {STATS.map((stat, idx) => (
        <div key={idx} className="p-2 sm:p-3 bg-[#FAF9F9] border border-red-500/10 rounded-xl hover:border-primary-red/15 transition-colors text-left">
          <span className={`text-lg sm:text-2xl font-bold ${stat.highlight ? 'text-primary-red' : 'text-slate-950'} block tracking-tight`}>
            {stat.value}
          </span>
          <span className="text-[8px] xs:text-[9px] text-slate-500 uppercase font-bold mt-1 block leading-normal">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
