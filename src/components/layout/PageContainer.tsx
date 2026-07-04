import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export default function PageContainer({ 
  children, 
  className = '', 
  size = 'default' 
}: PageContainerProps) {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-9xl',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
