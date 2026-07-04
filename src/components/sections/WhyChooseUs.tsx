import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, BookOpen, Briefcase, 
  Target, Shield, Calendar,
  Star, TrendingUp, Users
} from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const FEATURES = [
  { 
    icon: <Award className="w-6 h-6" />, 
    title: 'Expert Mentors', 
    desc: 'Curriculums authored and led directly by certified portfolio managers and senior CIE faculty.',
    highlight: 'Industry Leaders'
  },
  { 
    icon: <BookOpen className="w-6 h-6" />, 
    title: 'Practical Learning', 
    desc: 'Bypassing generic lectures, students build active portfolio directories and execution charts.',
    highlight: 'Hands-on Training'
  },
  { 
    icon: <Briefcase className="w-6 h-6" />, 
    title: 'Industry-Oriented', 
    desc: 'Funnels mapping exactly to real-world interbank mechanics and professional standards.',
    highlight: 'Job Ready'
  },
  { 
    icon: <Target className="w-6 h-6" />, 
    title: 'Career Guidance', 
    desc: 'Coordinate placement tracks and build independent trade journals for professional growth.',
    highlight: 'Placement Support'
  },
  { 
    icon: <Shield className="w-6 h-6" />, 
    title: 'Official Certifications', 
    desc: 'Secure stamped dual certifications backing your conceptual execution on global markets.',
    highlight: 'Recognized Credentials'
  },
  { 
    icon: <Calendar className="w-6 h-6" />, 
    title: 'Flexible Schedulings', 
    desc: 'Attend physical regional labs or stream live digital lecture portals with logged archives.',
    highlight: 'Weekend Batches'
  }
];

export default function WhyChooseUs() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Institute Pillars"
          title="Why Choose METRO Academy?"
          description="METRO Educational & Trading Academy treats professional education with corporate rigor. We provide dual credentials and live on-site practice sessions."
        />

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Users />, value: "500+", label: "Active Students" },
            { icon: <Star />, value: "92%", label: "Success Rate" },
            { icon: <TrendingUp />, value: "15+", label: "Expert Trainers" },
            { icon: <Award />, value: "8+", label: "Years Excellence" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-4 bg-white rounded-xl shadow-sm"
            >
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mx-auto mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{feature.title}</h3>
                    <span className="text-[10px] font-mono text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}