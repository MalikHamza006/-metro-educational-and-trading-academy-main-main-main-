import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, BarChart3, Shield, Brain, 
  Users, Layers, Zap, Target 
} from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const FEATURES = [
  { 
    icon: <TrendingUp className="w-6 h-6" />, 
    title: 'Technical Analysis', 
    desc: 'Surgical candlestick study, Break of Structure patterns, Fair Value Gaps, and price algorithms.',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: <BarChart3 className="w-6 h-6" />, 
    title: 'Fundamental Analysis', 
    desc: 'Central bank interest rates, CPI macroeconomic tables, and G10 asset report tracking.',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    icon: <Shield className="w-6 h-6" />, 
    title: 'Risk Management', 
    desc: 'Mathematical position sizing, dynamic leverage guidelines, and strict capital drawdowns.',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    icon: <Brain className="w-6 h-6" />, 
    title: 'Trading Psychology', 
    desc: 'Behavioral templates to master emotional control and eliminate fear or FOMO.',
    color: 'from-orange-500 to-red-500'
  },
  { 
    icon: <Users className="w-6 h-6" />, 
    title: 'Live Sessions', 
    desc: 'Join physical trading rooms to track live execution and order blocks in real time.',
    color: 'from-indigo-500 to-purple-500'
  },
  { 
    icon: <Layers className="w-6 h-6" />, 
    title: 'Market Structure', 
    desc: 'Deconstruct smart money concepts, liquidity sweeps, and systemic stop hunts.',
    color: 'from-red-500 to-orange-500'
  }
];

export default function TradingFeatures() {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Advanced FX Capabilities"
          title="Trading Education Methodology"
          description="Say goodbye to generic oscillators and trendline breakout templates. Our structural program guides candidates straight through interbank mechanics."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {FEATURES.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              {/* Module Number */}
              <div className="text-xs font-mono text-red-600 font-bold mb-2">Module 0{idx + 1}</div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              
              {/* Learn More Link */}
              <button className="mt-4 text-red-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <Zap className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}