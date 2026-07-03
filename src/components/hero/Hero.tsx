import React from 'react';
import HeroStats from './HeroStats';
import HeroButtons from './HeroButtons';
import { 
  FaArrowTrendUp, 
  FaCode, 
  FaBullhorn, 
  FaRobot, 
  FaCrown, 
  FaUsers, 
  FaFire,
  FaCircleCheck,
  FaShieldHalved,
  FaBrain,
  FaArrowRight
} from 'react-icons/fa6';

interface HeroProps {
  onStartJourney: () => void;
  onExploreCourses: () => void;
}

export default function Hero({ onStartJourney, onExploreCourses }: HeroProps) {
  // Helper function to handle course navigation
  const handleCourseClick = (slug: string) => {
    // If you have a navigation function from your router
    // For React Router:
    // navigate(`/courses/${slug}`);
    
    // For Next.js:
    // router.push(`/courses/${slug}`);
    
    // Or use window.location if you're not using a router:
    window.location.href = `/courses/${slug}`;
  };

  return (
    <div className="relative pt-6 pb-16 sm:pt-12 sm:pb-20 md:py-28 overflow-hidden border-b border-red-500/10">
      {/* Visual background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(227,30,36,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(227,30,36,0.015)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/[0.008] rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-red-500/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600/10 text-primary-red border border-red-500/15 rounded-full font-mono text-[9px] xs:text-[10px] uppercase font-bold tracking-widest leading-none shadow-md backdrop-blur-sm w-fit">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="truncate">Pakistan's Leading Trading Authority</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl xl:text-6xl text-slate-950 tracking-tight leading-[1.1] md:leading-[1.05] max-w-xl">
              Two Powerful Paths. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-primary-red relative">One Premier </span> Academy.
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-sans leading-relaxed max-w-xl">
              Professional Forex Trading (SMC & Institutional Strategies) and Future-Ready Tech Skills (Development, Security, Marketing) Live on-site training in Islamabad with senior industry mentors.
            </p>

            <HeroButtons onStartJourney={onStartJourney} onExploreCourses={onExploreCourses} />
            <HeroStats />
          </div>

          {/* Right Column - Course Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 bg-white/40 backdrop-blur-sm p-4 rounded-3xl border border-red-500/10 shadow-xl">
              
              {/* Course 1 - SMC & Institutional (slug: 'forex-trading' or 'advanced-forex') */}
              <div 
                onClick={() => handleCourseClick('forex-trading')}
                className="group bg-white/80 backdrop-blur-sm border border-red-500/15 rounded-2xl p-4 hover:border-red-500 hover:-translate-y-1.5 transition-all cursor-pointer shadow-lg hover:shadow-red-500/10"
              >
                <FaArrowTrendUp className="text-3xl text-red-600 mb-2 drop-shadow-[0_0_8px_rgba(227,30,36,0.2)]" />
                <h4 className="text-slate-900 font-semibold text-lg">SMC & Institutional</h4>
                <p className="text-slate-600 text-xs flex items-center gap-1.5 mt-1">
                  <FaCircleCheck className="text-red-600 text-[10px]" /> Smart Money Concepts
                </p>
                <span className="inline-block mt-3 bg-red-600/10 text-red-600 text-[10px] font-bold px-3 py-0.5 rounded-full border border-red-500/20">PRO</span>
              </div>

              {/* Course 2 - Dev & Security (slug: 'cyber-security' or 'web-development') */}
              <div 
                onClick={() => handleCourseClick('cyber-security')}
                className="group bg-white/80 backdrop-blur-sm border border-red-500/15 rounded-2xl p-4 hover:border-red-500 hover:-translate-y-1.5 transition-all cursor-pointer shadow-lg hover:shadow-red-500/10"
              >
                <FaCode className="text-3xl text-red-600 mb-2 drop-shadow-[0_0_8px_rgba(227,30,36,0.2)]" />
                <h4 className="text-slate-900 font-semibold text-lg">Dev & Security</h4>
                <p className="text-slate-600 text-xs flex items-center gap-1.5 mt-1">
                  <FaShieldHalved className="text-red-600 text-[10px]" /> Full-stack · Pentest
                </p>
                <span className="inline-block mt-3 bg-red-600/10 text-red-600 text-[10px] font-bold px-3 py-0.5 rounded-full border border-red-500/20">TECH</span>
              </div>

              {/* Course 3 - Growth Marketing (slug: 'digital-marketing' or 'meta-ads') */}
              <div 
                onClick={() => handleCourseClick('digital-marketing')}
                className="group bg-white/80 backdrop-blur-sm border border-red-500/15 rounded-2xl p-4 hover:border-red-500 hover:-translate-y-1.5 transition-all cursor-pointer shadow-lg hover:shadow-red-500/10"
              >
                <FaBullhorn className="text-3xl text-red-600 mb-2 drop-shadow-[0_0_8px_rgba(227,30,36,0.2)]" />
                <h4 className="text-slate-900 font-semibold text-lg">Growth Marketing</h4>
                <p className="text-slate-600 text-xs flex items-center gap-1.5 mt-1">
                  <FaArrowRight className="text-red-600 text-[10px]" /> Funnel · Analytics
                </p>
                <span className="inline-block mt-3 bg-red-600/10 text-red-600 text-[10px] font-bold px-3 py-0.5 rounded-full border border-red-500/20">DIGITAL</span>
              </div>

              {/* Course 4 - Automation & AI (slug: 'python-programming' or 'full-stack-development') */}
              <div 
                onClick={() => handleCourseClick('python-programming')}
                className="group bg-white/80 backdrop-blur-sm border border-red-500/15 rounded-2xl p-4 hover:border-red-500 hover:-translate-y-1.5 transition-all cursor-pointer shadow-lg hover:shadow-red-500/10"
              >
                <FaRobot className="text-3xl text-red-600 mb-2 drop-shadow-[0_0_8px_rgba(227,30,36,0.2)]" />
                <h4 className="text-slate-900 font-semibold text-lg">Automation & AI</h4>
                <p className="text-slate-600 text-xs flex items-center gap-1.5 mt-1">
                  <FaBrain className="text-red-600 text-[10px]" /> Trading bots · ML
                </p>
                <span className="inline-block mt-3 bg-red-600/10 text-red-600 text-[10px] font-bold px-3 py-0.5 rounded-full border border-red-500/20">
                  AI <span className="bg-red-500/20 text-red-600 px-1.5 py-0.5 rounded-full text-[8px] ml-1">LIVE</span>
                </span>
              </div>

              {/* Full Width - Prop Trading Mastery (slug: 'forex-trading') */}
              <div 
                onClick={() => handleCourseClick('advanced-forex')}
                className="col-span-2 bg-gradient-to-r from-red-600 to-primary-red rounded-2xl p-4 hover:-translate-y-1 transition-all cursor-pointer shadow-lg hover:shadow-red-500/30 flex items-center justify-between flex-wrap gap-3"
              >
                <div className="flex items-center gap-3">
                  <FaCrown className="text-2xl text-white" />
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      Prop-Trading Mastery 
                      <span className="font-light text-xs bg-white/20 px-2 py-0.5 rounded-full ml-2">Phase-4</span>
                    </h4>
                    <p className="text-white/80 text-xs flex items-center gap-1.5">
                      <FaUsers /> On-site · Islamabad 
                      <span className="bg-white/20 px-2 py-0.5 rounded-full text-[8px] font-semibold ml-1">mentor</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <FaFire /> 10 slots left
                  </span>
                  <span className="bg-white text-red-600 text-xs font-bold px-4 py-1.5 rounded-full hover:bg-slate-100 transition-colors">
                    Vision
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}