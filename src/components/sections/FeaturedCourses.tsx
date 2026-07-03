import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../shared/SectionHeading';
import CourseCard from '../cards/CourseCard';

const ACADEMY_PROGRAMS = [
  { title: "Forex Trading", category: "MARKETS & SMC", desc: "Master Smart Money Concepts, interbank liquidity patterns, and advanced risk engineering frameworks.", image: "https://i.postimg.cc/PqTq8YG4/trading-teaches1.jpg", slug: "forex-trading", duration: "12 Weeks", isHot: true },
  { title: "Cyber Security", category: "ENGINEERING SHIELD", desc: "Deploy penetration architectures, perform OWASP threat scans, and secure server networking structures.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600", slug: "cyber-security", duration: "8 Weeks" },
  { title: "Web Development", category: "SOFTWARE DEVELOPMENT", desc: "Build lightning-fast responsive full-stack applications with React, Tailwind CSS, Express, and databases.", image: "https://i.postimg.cc/8CNCrM8m/website-coding.jpg", slug: "web-development", duration: "10 Weeks" },
  { title: "Digital Marketing", category: "GROWTH STRATEGIES", desc: "Master SEO, social media marketing, paid advertising, and content strategy.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", slug: "digital-marketing", duration: "8 Weeks" },
  { title: "Graphic Design", category: "CREATIVE ARTS", desc: "Professional design skills including branding, social media graphics, and marketing materials.", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600", slug: "graphic-design", duration: "6 Weeks" },
  { title: "IELTS Preparation", category: "ACADEMIC EXCELLENCE", desc: "Comprehensive preparation for all modules with expert guidance and practice tests.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600", slug: "ielts-preparation", duration: "8 Weeks", isHot: true }
];

interface FeaturedCoursesProps {
  onViewCourse: (slug: string) => void;
  onViewAllCourses?: () => void; // Optional prop
}

export default function FeaturedCourses({ onViewCourse, onViewAllCourses }: FeaturedCoursesProps) {
  
  const handleViewAllPrograms = () => {
    if (onViewAllCourses) {
      onViewAllCourses(); // This will call setPath('courses')
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Featured Academies"
          title="Explore Our Professional Pathways"
          description="Join Pakistan's premier professional institute. Gain actual-world, terminal-directed execution skills across 11 key industry domains."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {ACADEMY_PROGRAMS.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <CourseCard
                title={program.title}
                category={program.category}
                description={program.desc}
                image={program.image}
                duration={program.duration}
                slug={program.slug}
                isFlagship={program.isHot}
                onViewDetails={onViewCourse}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            onClick={handleViewAllPrograms}
            className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            View All Programs →
          </button>
        </motion.div>
      </div>
    </div>
  );
}