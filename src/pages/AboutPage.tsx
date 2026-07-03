import React from "react";
import { Target, Award, Users, BookOpen, TrendingUp, Shield, Clock, Globe, ChevronRight } from "lucide-react";

interface AboutPageProps {
  setPath?: (path: string) => void;
}

export default function AboutPage({ setPath }: AboutPageProps) {
  const stats = [
    { number: "5,000+", label: "Students Trained", icon: Users },
    { number: "97%", label: "Success Rate", icon: TrendingUp },
    { number: "15+", label: "Expert Mentors", icon: Award },
    { number: "24/7", label: "Community Support", icon: Clock },
  ];

  const values = [
    {
      icon: Shield,
      title: "Risk-First Education",
      description: "We prioritize capital preservation and risk management before profit generation."
    },
    {
      icon: BookOpen,
      title: "Practical Learning",
      description: "Live market sessions, real-time trading, and hands-on experience."
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Trade Forex, Crypto, Indices, and Commodities across international markets."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a supportive community of traders sharing insights and strategies."
    }
  ];

  const milestones = [
    { year: "2020", title: "Academy Founded", description: "Started with 50 students in Islamabad" },
    { year: "2021", title: "First Batch Graduates", description: "85% students became consistently profitable" },
    { year: "2022", title: "Expansion", description: "Opened online trading floor & community" },
    { year: "2023", title: "Prop Trading Partnership", description: "Partnered with FTMO & The Funded Trader" },
    { year: "2024", title: "10,000+ Community", description: "Crossed 10,000 active traders community" },
  ];

  // Navigation handlers using the setPath from props
  const handleNavigateToContact = () => {
    if (setPath) {
      setPath('contact');
    }
  };

  const handleNavigateToSuccessStories = () => {
    if (setPath) {
      setPath('success');
    }
  };

  const handleNavigateToCourses = () => {
    if (setPath) {
      setPath('courses');
    }
  };

  const handleNavigateToTradingAcademy = () => {
    if (setPath) {
      setPath('trading');
    }
  };

  return (
    <div className="bg-white">
      
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <TrendingUp className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium">Pakistan's Leading Trading Academy</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
            Master the Markets
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Empowering students with professional trading education, 
            real-time market experience, and proven strategies for long-term success.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={handleNavigateToContact}
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 cursor-pointer"
            >
              Start Your Journey
            </button>
            <button 
              onClick={handleNavigateToSuccessStories}
              className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all cursor-pointer"
            >
              Watch Success Stories
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-red-50 rounded-2xl mb-4 group-hover:bg-red-100 transition-colors">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Are - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-2xl -z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-50 rounded-full -z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop"
                alt="Trading Floor"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Live Trading Sessions</div>
                    <div className="text-xs text-gray-500">Daily market analysis</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
                Who We Are
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pakistan's Most Trusted Trading Academy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Meta Academy is dedicated to transforming passionate individuals into 
                disciplined, profitable traders through comprehensive education, live mentorship, 
                and practical market exposure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Unlike traditional courses, we focus on real-time trading, psychological discipline, 
                and risk management - the three pillars of trading success. Our students learn to 
                trade Forex, Crypto, Indices, and Commodities across global markets.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Live market sessions with professional traders</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Proprietary trading strategies & risk frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">One-on-one mentorship & portfolio review</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Values / Core Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
              Core Principles
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-600">
              Our unique approach combines technical expertise with psychological mastery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="text-center md:text-left">
              <Target className="w-12 h-12 mx-auto md:mx-0 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-red-100 leading-relaxed">
                To democratize professional trading education and create financially independent 
                individuals who can consistently generate returns while managing risk effectively.
              </p>
            </div>

            <div className="text-center md:text-left">
              <Award className="w-12 h-12 mx-auto md:mx-0 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-red-100 leading-relaxed">
                To become Pakistan's premier trading academy, recognized globally for producing 
                disciplined, profitable traders who excel in financial markets.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Journey Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600">
              From a small classroom to Pakistan's leading trading academy
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-200 hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  <div className="flex-1 text-center md:text-right">
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                      <div className="text-red-600 font-bold text-2xl mb-2">{milestone.year}</div>
                      <h4 className="font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses We Offer Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programs We Offer
            </h2>
            <p className="text-gray-600">
              Comprehensive courses designed for all skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Forex Trading Card */}
            <div 
              onClick={handleNavigateToCourses}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Forex Trading</h3>
              <p className="text-gray-600 text-sm mb-3">Master currency markets with professional strategies</p>
              <div className="text-xs text-gray-500">Duration: 8-12 weeks</div>
            </div>
            
            {/* Crypto Trading Card */}
            <div 
              onClick={handleNavigateToCourses}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="text-3xl mb-3">₿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Crypto Trading</h3>
              <p className="text-gray-600 text-sm mb-3">Navigate volatile crypto markets with confidence</p>
              <div className="text-xs text-gray-500">Duration: 6-10 weeks</div>
            </div>
            
            {/* Prop Trading Card */}
            <div 
              onClick={handleNavigateToTradingAcademy}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="text-3xl mb-3">🏦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Prop Trading</h3>
              <p className="text-gray-600 text-sm mb-3">Get funded and trade with firm capital</p>
              <div className="text-xs text-gray-500">Duration: 4-8 weeks</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={handleNavigateToCourses}
              className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center gap-2 cursor-pointer transition-colors"
            >
              View All Courses <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of successful traders who started with Meta Academy
          </p>
          <button 
            onClick={handleNavigateToContact}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
          >
            Enroll Now <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}