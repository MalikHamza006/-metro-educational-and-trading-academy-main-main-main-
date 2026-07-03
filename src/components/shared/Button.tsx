import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-primary-red hover:bg-red-700 text-white shadow-lg shadow-red-200',
    secondary: 'bg-[#FAF9F9] hover:bg-zinc-100 text-slate-800 border border-red-500/10 hover:border-red-500/20',
    outline: 'bg-transparent border-2 border-primary-red text-primary-red hover:bg-red-500/5',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };

  const baseStyles = `font-display font-bold rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group ${
    variantStyles[variant]
  } ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5 active:translate-y-0'
  } ${className}`;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseStyles}>
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? icon : iconPosition === 'right' && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}