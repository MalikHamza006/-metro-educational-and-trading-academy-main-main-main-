import React from 'react';

export default function GlowBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(227,30,36,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(227,30,36,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/[0.015] rounded-full filter blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[25%] left-[-10%] w-[450px] h-[450px] bg-red-600/[0.01] rounded-full filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[55%] right-[-10%] w-[500px] h-[500px] bg-red-600/[0.01] rounded-full filter blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-red-600/[0.005] rounded-full filter blur-[160px] pointer-events-none z-0" />
    </>
  );
}