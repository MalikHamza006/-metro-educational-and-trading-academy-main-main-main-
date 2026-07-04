import React, { useEffect } from 'react';
import { Home, ArrowLeft, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

interface NotFoundProps {
  onGoHome: () => void;
}

export default function NotFound({ onGoHome }: NotFoundProps) {
  // Optional Upgrade: Automatic redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onGoHome();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onGoHome]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative">
      {/* Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="text-center max-w-md space-y-6 relative z-10">
        {/* Animated Error Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto border border-red-500/10"
        >
          <ShieldAlert className="w-8 h-8 text-primary-red" />
        </motion.div>

        {/* Glitch-style 404 text */}
        <div className="space-y-2">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-7xl font-display font-extrabold text-slate-950 tracking-tighter"
          >
            404
          </motion.h1>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-lg font-display font-bold text-slate-900"
          >
            Trading Floor Route Not Found
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-xs text-slate-500 leading-relaxed font-sans max-w-sm mx-auto"
          >
            The destination URL does not exist or may have been archived. You will be automatically redirected to the home terminal in 5 seconds.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center pt-4"
        >
          <button
            onClick={onGoHome}
            className="px-5 py-3 bg-primary-red hover:bg-red-700 text-white font-display font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home Terminal</span>
          </button>
          
          <button
            onClick={() => window.history.back()}
            className="px-5 py-3 bg-white border border-red-500/10 hover:border-primary-red text-slate-700 font-display font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-red-500/5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
