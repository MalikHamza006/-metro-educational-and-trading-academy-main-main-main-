import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureCardProps {
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({ title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div 
      className="p-5 bg-[#FAF9F9] rounded-2xl border border-red-500/10 space-y-2 font-sans shadow-sm hover:border-red-500/20 transition-all"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <CheckCircle2 className="w-5 h-5 text-primary-red mb-2" />
      <h4 className="font-display font-bold text-sm text-slate-900">{title}</h4>
      <p className="text-xs text-slate-600 leading-relaxed font-sans">{description}</p>
    </motion.div>
  );
}