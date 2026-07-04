import React, { useState } from 'react';
import { Layers, Award, ShieldCheck, TrendingUp, Target, Activity, Brain, Zap, BookOpen, Clock, ChevronDown, ChevronUp, CheckCircle2, AlertTriangle } from 'lucide-react';
import TradingDashboard from '../components/TradingDashboard';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';

interface TradingPageProps {
  onEnroll: () => void;
}

export default function TradingPage({ onEnroll }: TradingPageProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const pillars = [
    { 
      icon: <Layers className="w-5 h-5" />, 
      title: 'Smart Money Concepts (SMC)', 
      desc: 'Retire simple support and resistance configurations. Trace market maker stops sweeps, Fair Value Gaps (FVG), interbank order pools, and institutional block deliveries.',
      strategies: ['Liquidity Sweeps', 'Order Blocks', 'FVG', 'Breaker Blocks']
    },
    { 
      icon: <Award className="w-5 h-5" />, 
      title: 'On-Site Live Practice', 
      desc: 'Our Phase 4 coordinates explicitly on live real-time execution in classroom terminals, aligning with tight risk ratios, strict volume control rules, and execution tracking.',
      strategies: ['Real-time Execution', 'Risk Management', 'Volume Analysis']
    },
    { 
      icon: <ShieldCheck className="w-5 h-5" />, 
      title: 'Advanced Portfolio Guard', 
      desc: 'Understand leverage fractions, dynamic pip value ratios, correlative hedging mechanisms, and neural psychology designed to enforce trade discipline.',
      strategies: ['Position Sizing', 'Hedging', 'Psychology Training']
    }
  ];

  const strategies = [
    {
      title: 'Liquidity Sweep Strategy',
      description: 'Identify and capitalize on stop-loss hunts by institutional traders.',
      steps: [
        'Identify key liquidity zones (previous highs/lows)',
        'Wait for price to sweep liquidity with a wick',
        'Look for displacement and order block formation',
        'Enter on retracement to Fair Value Gap (FVG)',
        'Target opposite liquidity pool'
      ],
      winRate: '68-75%',
      timeframe: '15m - 1H'
    },
    {
      title: 'Order Block Trading',
      description: 'Trade from institutional supply/demand zones where large orders are placed.',
      steps: [
        'Identify bullish/bearish order blocks from strong moves',
        'Wait for price to return to order block zone',
        'Look for mitigation (touching the block)',
        'Enter with confirmation candlestick pattern',
        'Place stop loss beyond order block'
      ],
      winRate: '72-80%',
      timeframe: '1H - 4H'
    },
    {
      title: 'Fair Value Gap (FVG) Strategy',
      description: 'Exploit price inefficiencies caused by aggressive institutional moves.',
      steps: [
        'Identify FVG (3-candle pattern with gap)',
        'Wait for price to retrace into FVG zone',
        'Look for bullish/bearish confirmation',
        'Enter within the gap zone',
        'Target next liquidity level'
      ],
      winRate: '75-82%',
      timeframe: '5m - 1H'
    }
  ];

  const curriculumModules = [
    {
      weeks: '1-2',
      title: 'Foundation & Market Structure',
      topics: ['Market Structure (HH, HL, LH, LL)', 'Trend Direction Analysis', 'Order Blocks Basics', 'Introduction to Liquidity']
    },
    {
      weeks: '3-4',
      title: 'Smart Money Concepts Deep Dive',
      topics: ['Order Blocks Advanced', 'Fair Value Gaps (FVG)', 'Liquidity Pools', 'Break of Structure (BOS)']
    },
    {
      weeks: '5-6',
      title: 'Advanced Entry Techniques',
      topics: ['Breaker Blocks', 'Premium/Discount Arrays', 'Optimal Trade Entry (OTE)', 'Multi-Timeframe Analysis']
    },
    {
      weeks: '7-8',
      title: 'Risk Management & Psychology',
      topics: ['Position Sizing', 'Risk-Reward Optimization', 'Drawdown Management', 'Trading Psychology']
    },
    {
      weeks: '9-10',
      title: 'Live Simulation & Execution',
      topics: ['Real-time Analysis', 'Trade Execution', 'Managing Open Positions', 'News Event Trading']
    },
    {
      weeks: '11-12',
      title: 'Advanced Strategies & Certification',
      topics: ['Institutional Order Flow', 'Hedging Strategies', 'Building Trading System', 'Final Assessment']
    }
  ];

  const riskRules = [
    'Risk 1-2% per trade',
    'Maintain 1:2 minimum risk-reward',
    'Daily loss limit: 6%',
    'Use stop losses on every trade'
  ];

  return (
    <div className="py-16 space-y-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading 
          badge="Institutional Authority"
          title="The Flagship Forex Trading Mastery System"
          description="We train candidates on advanced interbank metrics, Smart Money Concepts (SMC) order flow, and strict risk parameters to build consistent independent strategies."
          centered={true}
        />
      </div>

      {/* Trading Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TradingDashboard />
      </div>

      {/* Three Pillars - White Cards with Black Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">The Three Pillars of Success</h2>
          <p className="text-sm text-gray-600">Master these core components to become a consistent profitable trader</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                {pillar.icon}
              </div>
              <h3 className="font-display font-bold text-base text-gray-900">{pillar.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">{pillar.desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {pillar.strategies.map((strategy, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 bg-red-50 text-red-600 rounded-full border border-red-200">
                    {strategy}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trading Strategies Section - White Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full mb-3">
            <Zap className="w-3 h-3 text-red-600" />
            <span className="text-[10px] font-mono text-red-600 tracking-wider font-semibold">INSTITUTIONAL STRATEGIES</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Professional Trading Strategies</h2>
          <p className="text-sm text-gray-600">Master the same strategies used by institutional traders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-gray-900 font-semibold text-base">{strategy.title}</h3>
                <div className="flex gap-1">
                  <span className="text-[10px] px-1.5 py-0.5 bg-green-50 text-green-700 rounded-full font-medium">
                    {strategy.winRate}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{strategy.description}</p>
              <div className="space-y-1.5 mb-3">
                {strategy.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-500">⏱ {strategy.timeframe}</span>
                <button onClick={onEnroll} className="text-xs text-red-600 hover:text-red-700 transition-colors font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Management Section - White Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base">Risk Management Framework</h3>
              <p className="text-sm text-gray-600">The #1 difference between profitable and losing traders</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {riskRules.map((rule, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-2 text-center border border-gray-200">
                <span className="text-xs text-gray-800 font-medium">{rule}</span>
              </div>
            ))}
          </div>
          
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-3 h-3 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-700">"Protect your capital first. Profits will follow. Without risk management, no strategy works consistently."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Section - White Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <BookOpen className="w-6 h-6 text-red-600 mx-auto mb-2" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">12-Week Curriculum Roadmap</h2>
          <p className="text-sm text-gray-600">Progressive learning path from beginner to institutional trader</p>
        </div>

        <div className="space-y-3">
          {curriculumModules.map((module, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => setExpandedModule(expandedModule === idx ? null : idx)}
                className="w-full px-5 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 text-xs font-bold">W{module.weeks}</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-gray-900 text-sm font-semibold">{module.title}</h3>
                    <p className="text-xs text-gray-500">{module.topics.length} core topics</p>
                  </div>
                </div>
                {expandedModule === idx ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
              
              {expandedModule === idx && (
                <div className="px-5 pb-3 pt-2 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 mt-2">
                    {module.topics.map((topic, topicIdx) => (
                      <div key={topicIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-2.5 h-2.5 text-red-600" />
                        <span className="text-xs text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Performance Stats - White Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-3 text-center border border-gray-200 shadow-sm">
            <TrendingUp className="w-5 h-5 text-red-600 mx-auto mb-1" />
            <div className="text-xl font-bold text-gray-900">68-82%</div>
            <p className="text-xs text-gray-600">Strategy Win Rate</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center border border-gray-200 shadow-sm">
            <Target className="w-5 h-5 text-red-600 mx-auto mb-1" />
            <div className="text-xl font-bold text-gray-900">1:2+</div>
            <p className="text-xs text-gray-600">Risk-Reward Ratio</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center border border-gray-200 shadow-sm">
            <Activity className="w-5 h-5 text-red-600 mx-auto mb-1" />
            <div className="text-xl font-bold text-gray-900">500+</div>
            <p className="text-xs text-gray-600">Successful Graduates</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center border border-gray-200 shadow-sm">
            <Clock className="w-5 h-5 text-red-600 mx-auto mb-1" />
            <div className="text-xl font-bold text-gray-900">12</div>
            <p className="text-xs text-gray-600">Weeks to Mastery</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-white border border-red-200 rounded-2xl shadow-md flex flex-col md:flex-row gap-5 items-center justify-between text-left">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-gray-900 text-base leading-tight">Ready to Master Institutional Trading?</h4>
            <p className="text-sm text-gray-600 font-sans">Join our flagship program and learn professional Smart Money Concepts.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5 text-green-600" />
                <span className="text-xs text-gray-600">12-Week Curriculum</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5 text-green-600" />
                <span className="text-xs text-gray-600">Live Trading Sessions</span>
              </div>
            </div>
          </div>
          <Button onClick={onEnroll} variant="primary">Enroll To Program Now</Button>
        </div>
      </div>
    </div>
  );
}