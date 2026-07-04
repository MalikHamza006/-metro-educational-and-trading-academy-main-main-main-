import React from 'react';

interface CampusCardProps {
  title: string;
  badge: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  onViewDetails?: () => void;
}

export default function CampusCard({ title, badge, description, image, icon }: CampusCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden outline-none rounded-3xl border border-red-200/40 bg-white/60 p-1 backdrop-blur-xl shadow-[0_25px_60px_-25px_rgba(227,30,36,0.12)] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_35px_80px_-30px_rgba(227,30,36,0.22)]">
      <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />
      
      <div className="flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-4px)] bg-white/95">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img 
            alt={title} 
            loading="lazy" 
            className="object-cover w-full h-full transition duration-700 group-hover:scale-105" 
            src={image} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-primary-red shadow-sm">
            {badge}<span className="h-1.5 w-1.5 rounded-full bg-primary-red animate-pulse"></span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 px-5 py-5 text-left">
          <div className="space-y-1 w-full">
            <div className="flex items-center gap-1.5">
              {icon}
              <h4 className="text-sm font-display font-extrabold text-slate-900 transition-colors group-hover:text-primary-red leading-none">
                {title}
              </h4>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-600 font-sans mt-2">
              {description}
            </p>
          </div>

          <div className="mt-auto pt-3 border-t border-red-500/5 flex items-center justify-between">
            <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider">
              Professional Grade
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}