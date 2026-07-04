import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'flagship' | 'success';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-red-600/10 text-primary-red border border-red-500/15',
    flagship: 'bg-primary-red text-white border border-red-600',
    success: 'bg-green-600/10 text-green-700 border border-green-500/15',
  };

  return (
    <span className={`text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}