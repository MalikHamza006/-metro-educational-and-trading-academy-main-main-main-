import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ 
  badge, 
  title, 
  description, 
  centered = true,
  className = '' 
}: SectionHeadingProps) {
  return (
    <motion.div 
      className={`max-w-3xl mx-auto space-y-3 ${centered ? 'text-center' : 'text-left'} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <span className="text-xs font-mono font-bold tracking-widest text-primary-red uppercase block">
          {badge}
        </span>
      )}
      <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-xs md:text-sm text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}