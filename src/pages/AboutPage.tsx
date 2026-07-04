import React from "react";
import { Target, Award, Users, BookOpen, TrendingUp, Shield, Clock, Globe, ChevronRight, Mail, MapPin, Phone } from "lucide-react";

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
    <div className="bg-[#FAF9F9]">
      
      {/* Hero Section - Changed to white background with red accents */}
      <section className="relative bg-white text-gray-900 overflow-hidden border-b border-red-500/10">
        {/* Animated Background Pattern - Light version */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-1.5 mb-6 border border-red-500/10">
            <TrendingUp className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-600">Pakistan's Leading Educational Academy</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
            About Metro Academy
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join us at Metro Academy where expert instructors guide you through the intricacies of strategies,
            theoretical knowledge, comprehensive courses, and market analysis for a successful career.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={handleNavigateToContact}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 cursor-pointer"
            >
              Get Started
            </button>
            <button 
              onClick={handleNavigateToCourses}
              className="border border-red-500/30 hover:bg-red-50 px-8 py-3 rounded-xl font-semibold transition-all cursor-pointer text-gray-700 hover:text-red-600"
            >
              Explore Courses
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-red-500/10">
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
      <section className="py-20 bg-[#FAF9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-2xl -z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-50 rounded-full -z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop"
                alt="Academy"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-red-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Expert Instructors</div>
                    <div className="text-xs text-gray-500">Professional guidance</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4 border border-red-500/10">
                About Us
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Metro Academy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Join us at Metro Academy where expert instructors guide you through the intricacies of 
                strategies, theoretical knowledge, comprehensive courses, and market analysis for a successful career.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide top-notch services designed to enhance your operational efficiency and drive your success.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Expert instructors with industry experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Comprehensive courses and theoretical knowledge</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Practical market analysis and strategies</span>
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
            <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4 border border-red-500/10">
              Core Principles
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-600">
              Our unique approach combines theoretical knowledge with practical application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group p-6 bg-[#FAF9F9] rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-red-500/10 hover:border-red-200">
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

      {/* Mission & Vision - Changed to white background */}
      <section className="py-20 bg-white border-y border-red-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="text-center md:text-left p-8 bg-[#FAF9F9] rounded-2xl border border-red-500/10">
              <Target className="w-12 h-12 mx-auto md:mx-0 mb-4 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide expert guidance and comprehensive education that empowers students 
                to achieve successful careers through practical knowledge and strategic thinking.
              </p>
            </div>

            <div className="text-center md:text-left p-8 bg-[#FAF9F9] rounded-2xl border border-red-500/10">
              <Award className="w-12 h-12 mx-auto md:mx-0 mb-4 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Pakistan's premier educational academy, recognized globally for producing 
                skilled professionals who excel in their respective fields.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Courses We Offer Preview */}
      <section className="py-20 bg-[#FAF9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4 border border-red-500/10">
              Our Programs
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Courses We Offer
            </h2>
            <p className="text-gray-600">
              Comprehensive courses designed for all skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Graphic Design Card */}
            <div 
              onClick={handleNavigateToCourses}
              className="bg-white border border-red-500/10 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Graphic Designing</h3>
              <p className="text-gray-600 text-sm mb-3">Master creative design with professional tools</p>
              <div className="text-xs text-gray-500">Duration: 8-12 weeks</div>
            </div>
            
            {/* Video Editing Card */}
            <div 
              onClick={handleNavigateToCourses}
              className="bg-white border border-red-500/10 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Video Editing</h3>
              <p className="text-gray-600 text-sm mb-3">Learn professional video editing techniques</p>
              <div className="text-xs text-gray-500">Duration: 6-10 weeks</div>
            </div>
            
            {/* Web Development Card */}
            <div 
              onClick={handleNavigateToCourses}
              className="bg-white border border-red-500/10 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Web Development</h3>
              <p className="text-gray-600 text-sm mb-3">Build modern websites and applications</p>
              <div className="text-xs text-gray-500">Duration: 10-16 weeks</div>
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

      {/* CTA Section - Changed to white background with red accent */}
      <section className="py-20 bg-white border-t border-red-500/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bg-[#FAF9F9] p-12 rounded-3xl border border-red-500/10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Join Metro Academy and take the first step towards a successful career
            </p>
            <button 
              onClick={handleNavigateToContact}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
            >
              Contact Us Today <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}