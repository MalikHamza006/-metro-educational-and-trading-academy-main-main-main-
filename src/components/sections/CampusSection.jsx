import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Users, Award, Clock, ArrowRight } from 'lucide-react';

const CampusSection = () => {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "500+", label: "Active Students" },
    { icon: <Award className="w-5 h-5" />, value: "92%", label: "Success Rate" },
    { icon: <GraduationCap className="w-5 h-5" />, value: "15+", label: "Expert Mentors" },
    { icon: <Clock className="w-5 h-5" />, value: "8+", label: "Years of Excellence" }
  ];

  const features = [
    {
      title: "Practical Learning",
      description: "Hands-on projects, real case studies and implementation-based training with live market exposure.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      delay: 0
    },
    {
      title: "Skill Development",
      description: "Focus on high-income digital skills, trading mastery, and modern industry-standard tools.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      delay: 0.1
    },
    {
      title: "Career Growth",
      description: "Freelancing guidance, job readiness, portfolio building, and business mindset development.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      delay: 0.2
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-red-50 rounded-full mb-4"
          >
            <span className="text-xs font-mono font-bold text-red-600 tracking-wider">WORLD-CLASS INSTITUTION</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            About Our{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Campus
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            Our trading and educational academy is designed to bridge the gap between learning and real-world execution. 
            We focus on building practical, job-ready and income-generating skills.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mx-auto mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                <button className="text-red-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-700 font-medium">Trusted by 500+ professionals across Pakistan</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusSection;