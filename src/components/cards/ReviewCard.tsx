import React from 'react';
import { Star } from 'lucide-react';
import { AvatarDoodle } from '../shared/AvatarDoodle';

interface ReviewCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
  achievement: string;
}

export default function ReviewCard({ name, role, text, rating, achievement }: ReviewCardProps) {
  return (
    <div className="bg-[#FAF9F9] border border-red-500/10 p-5 sm:p-6 rounded-2xl text-left flex flex-col justify-between shadow-sm">
      <div className="space-y-4">
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-primary-red fill-primary-red" />
          ))}
        </div>
        <p className="text-xs text-slate-600 leading-relaxed font-sans">
          "{text}"
        </p>
      </div>
      
      <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-red-500/10">
        <AvatarDoodle name={name} size={40} />
        <div>
          <h4 className="font-display font-bold text-xs text-slate-900 leading-none">{name}</h4>
          <span className="text-[10px] font-mono text-slate-500 block mt-1 tracking-wide">{role}</span>
        </div>
      </div>
    </div>
  );
}
