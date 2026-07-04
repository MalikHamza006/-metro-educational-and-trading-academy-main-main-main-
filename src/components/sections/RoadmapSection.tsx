import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Trophy, TrendingUp, Clock, Users, Award, BookOpen, Code2, Shield, Palette, BarChart3, Database, Smartphone, Globe, Lock } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

// Complete Roadmap Data - Mixed Trading & Tech
const ROADMAP_DATA = [
  // Trading Phases
  {
    step: "Phase 1",
    title: "Market Foundation",
    description: "Understand basic market structures, terminology, and how financial markets operate globally.",
    milestone: "Complete market fundamentals quiz",
    duration: "2 Weeks",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    step: "Phase 2",
    title: "Technical Analysis",
    description: "Master candlestick patterns, support/resistance, trendlines, and technical indicators.",
    milestone: "Analyze 10 different currency pairs",
    duration: "2 Weeks",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    step: "Phase 3",
    title: "Smart Money Concepts",
    description: "Learn institutional order flow, order blocks, liquidity sweeps, and fair value gaps.",
    milestone: "Identify SMC patterns on live charts",
    duration: "3 Weeks",
    icon: <Target className="w-5 h-5" />
  },
  {
    step: "Phase 4",
    title: "Frontend Development",
    description: "Master HTML5, CSS3, Tailwind CSS, and responsive design principles.",
    milestone: "Build responsive portfolio website",
    duration: "3 Weeks",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    step: "Phase 5",
    title: "Risk Management",
    description: "Master position sizing, stop-loss placement, risk-reward ratios, and drawdown control.",
    milestone: "Create personal risk management plan",
    duration: "2 Weeks",
    icon: <Shield className="w-5 h-5" />
  },
  {
    step: "Phase 6",
    title: "JavaScript & React",
    description: "Deep dive into JavaScript ES6+, React.js, hooks, and state management.",
    milestone: "Build 3 interactive React apps",
    duration: "4 Weeks",
    icon: <Globe className="w-5 h-5" />
  },
  {
    step: "Phase 7",
    title: "Trading Psychology",
    description: "Develop emotional discipline, overcome fear and greed, and build consistent trading habits.",
    milestone: "Complete 30-day trading journal",
    duration: "2 Weeks",
    icon: <Users className="w-5 h-5" />
  },
  {
    step: "Phase 8",
    title: "Backend & Databases",
    description: "Learn Node.js, Express, MongoDB, and RESTful API development.",
    milestone: "Create full-stack application",
    duration: "3 Weeks",
    icon: <Database className="w-5 h-5" />
  },
  {
    step: "Phase 9",
    title: "Live Trading",
    description: "Execute live trades with proper risk management and record performance metrics.",
    milestone: "Achieve 60% win rate on demo account",
    duration: "3 Weeks",
    icon: <Trophy className="w-5 h-5" />
  },
  {
    step: "Phase 10",
    title: "Portfolio Management",
    description: "Learn to manage multiple positions, hedge strategies, and build a sustainable trading portfolio.",
    milestone: "Manage $10k virtual portfolio",
    duration: "2 Weeks",
    icon: <Clock className="w-5 h-5" />
  },
  {
    step: "Phase 11",
    title: "Professional Trading",
    description: "Prepare for prop firm challenges, funding programs, and professional trading careers.",
    milestone: "Pass prop firm evaluation",
    duration: "2 Weeks",
    icon: <Award className="w-5 h-5" />
  },
  {
    step: "Phase 12",
    title: "Freelancing & Career",
    description: "Portfolio building, freelancing platforms, interview prep, and job placement.",
    milestone: "Land first client or job",
    duration: "2 Weeks",
    icon: <Award className="w-5 h-5" />
  }
];

export default function RoadmapSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Dual Track System"
          title="Career Roadmap: Trading & Tech"
          description="Follow our structured journey combining Forex trading mastery AND tech skills development. Complete both tracks to become a versatile professional."
        />

        {/* Progress Summary */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600">12</div>
              <div className="text-xs text-gray-600">Learning Phases</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600">30</div>
              <div className="text-xs text-gray-600">Total Weeks</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600">200+</div>
              <div className="text-xs text-gray-600">Learning Hours</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600">Dual</div>
              <div className="text-xs text-gray-600">Certification</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-red-400 to-red-300 transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-8">
            {ROADMAP_DATA.map((point, idx) => (
              <motion.div 
                key={idx} 
                className={`relative flex flex-col md:flex-row gap-4 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6 z-10">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">{idx + 1}</span>
                  </div>
                </div>
                
                {/* Content Box - Left Side (Desktop) */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12">
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-red-600 bg-red-50 px-3 py-1 rounded-full">
                        {point.step} • {point.duration}
                      </span>
                      <div className="text-red-600">
                        {point.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{point.description}</p>
                    
                    <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-gray-600">
                        <span className="font-semibold">Goal:</span> {point.milestone}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for right side layout */}
                <div className="hidden md:block md:w-1/2 md:pl-12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* What You'll Achieve */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-6">What You'll Achieve</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
              <Trophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-900">Professional Trader</p>
              <p className="text-xs text-gray-600">Master SMC & consistent profitability</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
              <Code2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-900">Full-Stack Developer</p>
              <p className="text-xs text-gray-600">Build production-ready applications</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center border border-purple-100">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-900">Dual Certification</p>
              <p className="text-xs text-gray-600">Industry-recognized credentials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}