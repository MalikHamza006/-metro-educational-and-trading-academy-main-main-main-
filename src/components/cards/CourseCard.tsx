import React from 'react';
import { Check } from 'lucide-react';
import Button from '../shared/Button';
import Badge from '../shared/Badge';

interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  duration: string;
  slug: string;
  isFlagship?: boolean;
  onViewDetails: (slug: string) => void;
}

export default function CourseCard({
  title,
  category,
  description,
  image,
  duration,
  slug,
  isFlagship = false,
  onViewDetails,
}: CourseCardProps) {
  return (
    <div 
      className="cursor-pointer group relative flex h-full flex-col overflow-hidden outline-none rounded-3xl border border-red-200/40 bg-white/60 p-1 backdrop-blur-xl shadow-[0_25px_60px_-25px_rgba(227,30,36,0.12)] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_35px_80px_-30px_rgba(227,30,36,0.22)]"
      onClick={() => onViewDetails(slug)}
    >
      <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />
      
      <div className="flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-4px)] bg-white/95">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img 
            alt={title} 
            loading="lazy" 
            referrerPolicy="no-referrer"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-105" 
            src={image} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
          <div className="absolute left-4 top-4">
            <Badge variant="default">Course spotlight</Badge>
          </div>
          {isFlagship && (
            <div className="absolute right-4 top-4">
              <Badge variant="flagship">FLAGSHIP</Badge>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 px-5 py-6">
          <div className="space-y-1.5 text-center flex-1">
            <span className="text-[9px] font-mono tracking-widest text-primary-red uppercase font-bold block">
              {category} PATHWAY
            </span>
            <h3 className="text-base font-display font-extrabold leading-tight text-slate-900 transition-colors group-hover:text-primary-red">
              {title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-600 line-clamp-3 font-sans mt-2">
              {description}
            </p>
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-3 border-t border-red-500/5">
            <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-slate-500">
              <span>Duration: <strong className="text-slate-800">{duration}</strong></span>
            </div>
            
            <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-primary-red font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-red animate-pulse" />
              Ready to explore
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(slug);
              }}
              className="w-full"
            >
              View Course Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}