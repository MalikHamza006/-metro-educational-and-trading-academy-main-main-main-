// src/pages/CourseDetailsPage.tsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Award, Users, CheckCircle2, Download, Calendar, Star, BookOpen, Target, Trophy, Code2, Shield, BarChart3, Palette, Megaphone, GraduationCap, TrendingUp } from 'lucide-react';
import { COURSES } from '../constants/courses';
import Button from '../components/shared/Button';

interface CourseDetailsPageProps {
  courseSlug: string;
  onEnrollSuccess?: () => void;
}

// Detailed course content mapping
const COURSE_DETAILS: Record<string, any> = {
  'forex-trading': {
    longDesc: "Master the art of Forex trading with our comprehensive Smart Money Concepts (SMC) program. Learn to trade like institutional professionals, understand market structure, order blocks, liquidity sweeps, and fair value gaps. This flagship program transforms beginners into confident, profitable traders.",
    whatYouLearn: [
      "Smart Money Concepts (SMC) - Order Blocks, FVG, Liquidity Sweeps",
      "Technical Analysis - Candlestick patterns, Support/Resistance, Trends",
      "Fundamental Analysis - News trading, Economic indicators, Interest rates",
      "Risk Management - Position sizing, Stop-loss strategies, Drawdown control",
      "Trading Psychology - Emotional control, Discipline, Trading plan development",
      "Live Market Analysis - Real-time trade execution and journaling"
    ],
    curriculum: [
      "Week 1-2: Market Structure & Foundation Concepts",
      "Week 3-4: Smart Money Concepts Deep Dive",
      "Week 5-6: Advanced Entry Techniques & Order Blocks",
      "Week 7-8: Risk Management & Psychology Mastery",
      "Week 9-10: Live Trading Simulation & Execution",
      "Week 11-12: Advanced Strategies & Certification"
    ],
    benefits: [
      "Live trading sessions with professional mentors",
      "Access to trading community and signals",
      "Lifetime access to course materials",
      "Official certification upon completion",
      "Post-course support and mentorship"
    ]
  },
  'cyber-security': {
    longDesc: "Become a certified cybersecurity professional with our comprehensive program. Learn to protect networks, identify vulnerabilities, and defend against cyber threats using industry-standard tools and methodologies.",
    whatYouLearn: [
      "Network Security & Penetration Testing",
      "Ethical Hacking & Vulnerability Assessment",
      "Cryptography & Security Protocols",
      "Incident Response & Forensics",
      "OWASP Top 10 & Web Security",
      "Security Compliance & Risk Management"
    ],
    curriculum: [
      "Week 1-2: Networking Fundamentals & Security Basics",
      "Week 3-4: Ethical Hacking & Penetration Testing",
      "Week 5-6: Web Application Security",
      "Week 7-8: Security Operations & Monitoring",
      "Week 9-10: Incident Response & Forensics",
      "Week 11-12: Certification Prep & Final Project"
    ],
    benefits: [
      "Hands-on lab environment access",
      "Industry-recognized certification preparation",
      "Real-world case studies",
      "Career guidance and job placement assistance",
      "Practical penetration testing experience"
    ]
  },
  'web-development': {
    longDesc: "Build modern, responsive web applications from scratch. Master frontend and backend development with the latest technologies including React, Node.js, and databases. Become a full-stack developer ready for industry demands.",
    whatYouLearn: [
      "HTML5, CSS3, Tailwind CSS & Modern Styling",
      "JavaScript ES6+ & TypeScript Fundamentals",
      "React.js with Hooks, Context API & Redux",
      "Node.js & Express Backend Development",
      "MongoDB, PostgreSQL & Database Design",
      "Git, GitHub & Deployment Strategies"
    ],
    curriculum: [
      "Week 1-2: HTML, CSS, Tailwind & Responsive Design",
      "Week 3-4: JavaScript ES6+ & DOM Manipulation",
      "Week 5-6: React.js Fundamentals & Component Architecture",
      "Week 7-8: Advanced React & State Management",
      "Week 9-10: Backend Development with Node.js & Express",
      "Week 11-12: Full-Stack Projects & Deployment"
    ],
    benefits: [
      "Build 5+ real-world portfolio projects",
      "Freelancing and job preparation guidance",
      "Industry-relevant curriculum",
      "Code reviews and mentorship",
      "Career placement assistance"
    ]
  },
  'digital-marketing': {
    longDesc: "Master the art of digital marketing and become a certified marketing professional. Learn SEO, social media marketing, paid advertising, content strategy, and analytics to grow brands and businesses online.",
    whatYouLearn: [
      "Search Engine Optimization (SEO) Strategies",
      "Social Media Marketing (Facebook, Instagram, LinkedIn)",
      "Google Ads & PPC Campaign Management",
      "Content Marketing & Copywriting",
      "Email Marketing & Automation",
      "Analytics & Data-Driven Decision Making"
    ],
    curriculum: [
      "Week 1-2: Digital Marketing Fundamentals & Strategy",
      "Week 3-4: SEO & Content Marketing Mastery",
      "Week 5-6: Social Media Marketing & Management",
      "Week 7-8: Google Ads & Paid Advertising",
      "Week 9-10: Email Marketing & Automation",
      "Week 11-12: Analytics, Reporting & Certification"
    ],
    benefits: [
      "Google & Meta certifications preparation",
      "Live campaign management experience",
      "Portfolio of real marketing projects",
      "Freelancing and agency setup guidance",
      "Job placement assistance"
    ]
  },
  'graphic-design': {
    longDesc: "Unlock your creative potential with professional graphic design training. Master industry-standard tools like Adobe Photoshop, Illustrator, and InDesign. Learn to create stunning visuals for branding, social media, and marketing.",
    whatYouLearn: [
      "Adobe Photoshop - Photo Editing & Manipulation",
      "Adobe Illustrator - Vector Graphics & Logo Design",
      "Adobe InDesign - Layout & Print Design",
      "Branding & Identity Design",
      "Social Media Graphics & Marketing Materials",
      "Typography & Color Theory Fundamentals"
    ],
    curriculum: [
      "Week 1-2: Design Principles & Photoshop Basics",
      "Week 3-4: Advanced Photoshop & Photo Manipulation",
      "Week 5-6: Illustrator & Vector Graphics",
      "Week 7-8: Logo Design & Branding",
      "Week 9-10: InDesign & Print Layout",
      "Week 11-12: Portfolio Development & Freelancing"
    ],
    benefits: [
      "Create professional design portfolio",
      "Freelancing platform setup guidance",
      "Access to design resources and assets",
      "Real client project experience",
      "Career guidance in creative industry"
    ]
  },
  'ielts-preparation': {
    longDesc: "Achieve your target IELTS band score with our comprehensive preparation program. Master all four modules - Listening, Reading, Writing, and Speaking - with expert strategies, practice tests, and personalized feedback.",
    whatYouLearn: [
      "Listening Strategies - Note-taking & Question Types",
      "Reading Techniques - Skimming, Scanning & Time Management",
      "Academic Writing - Task 1 & Task 2 Structures",
      "Speaking Confidence - Part 1, 2 & 3 Strategies",
      "Vocabulary Building for Academic Context",
      "Mock Tests & Performance Analysis"
    ],
    curriculum: [
      "Week 1-2: Listening & Reading Foundation",
      "Week 3-4: Academic Writing Task 1 Mastery",
      "Week 5-6: Essay Writing Task 2 Techniques",
      "Week 7-8: Speaking Fluency & Pronunciation",
      "Week 9-10: Full Mock Tests & Analysis",
      "Week 11-12: Exam Strategies & Final Preparation"
    ],
    benefits: [
      "Personalized feedback on writing and speaking",
      "10+ full-length mock tests",
      "Study materials and vocabulary guides",
      "Exam day strategies and tips",
      "Post-course doubt clearing sessions"
    ]
  }
};

export default function CourseDetailsPage({ courseSlug, onEnrollSuccess }: CourseDetailsPageProps) {
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [courseDetails, setCourseDetails] = useState<any>(null);

  useEffect(() => {
    console.log('Looking for course with slug:', courseSlug);
    const foundCourse = COURSES.find(c => c.slug === courseSlug);
    console.log('Found course:', foundCourse);
    setCourse(foundCourse);
    
    // Get detailed content for the course
    const details = COURSE_DETAILS[courseSlug] || {
      longDesc: foundCourse?.shortDesc || "This comprehensive program is designed to equip you with industry-relevant skills through hands-on training, expert mentorship, and real-world projects.",
      whatYouLearn: [
        "Master core concepts and advanced techniques",
        "Hands-on practical projects and real-world applications",
        "Industry best practices and professional standards",
        "Portfolio development and career preparation",
        "Live mentorship and expert guidance",
        "Certification preparation and exam strategies"
      ],
      curriculum: [
        "Week 1-2: Foundation & Core Concepts",
        "Week 3-4: Advanced Techniques & Strategies",
        "Week 5-6: Practical Projects & Case Studies",
        "Week 7-8: Industry Tools & Best Practices",
        "Week 9-10: Portfolio Development",
        "Week 11-12: Final Project & Certification"
      ],
      benefits: [
        "Hands-on practical training",
        "Industry-recognized certification",
        "Expert mentorship and guidance",
        "Career placement assistance",
        "Lifetime access to materials"
      ]
    };
    setCourseDetails(details);
    setLoading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [courseSlug]);

  const handleBack = () => {
    if (onEnrollSuccess) {
      onEnrollSuccess();
    } else {
      window.history.back();
    }
  };

  const handleEnroll = () => {
    console.log('Enrolling in course:', course?.title);
    if (onEnrollSuccess) {
      onEnrollSuccess();
    }
  };

  const getCourseImage = (slug: string): string => {
    const images: Record<string, string> = {
      'forex-trading': 'https://i.postimg.cc/PqTq8YG4/trading-teaches1.jpg',
      'cyber-security': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
      'web-development': 'https://i.postimg.cc/8CNCrM8m/website-coding.jpg',
      'digital-marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
      'graphic-design': 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
      'ielts-preparation': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
    };
    return images[slug] || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600';
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, any> = {
      'forex': <TrendingUp className="w-5 h-5" />,
      'tech': <Code2 className="w-5 h-5" />,
      'marketing': <Megaphone className="w-5 h-5" />,
      'creative': <Palette className="w-5 h-5" />,
      'academic': <GraduationCap className="w-5 h-5" />
    };
    return icons[course?.category] || <BookOpen className="w-5 h-5" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Course Not Found</h2>
        <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        <button 
          onClick={handleBack}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Courses</span>
        </button>

        {/* Course Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-80 lg:h-full">
              <img 
                src={getCourseImage(course.slug)} 
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 lg:p-8">
              {course.isFlagship && (
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-4">
                  Flagship Program
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {course.title}
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                {course.shortDesc}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span>Duration: <strong>{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Award className="w-5 h-5 text-red-600" />
                  <span>Official Certification Included</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="w-5 h-5 text-red-600" />
                  <span>Limited Seats Available</span>
                </div>
              </div>
              
              <Button onClick={handleEnroll} size="lg" className="w-full lg:w-auto">
                Enroll Now →
              </Button>
            </div>
          </div>
        </div>

        {/* Course Details Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Course Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {courseDetails.longDesc}
              </p>
            </div>
            
            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {courseDetails.whatYouLearn.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Highlights */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Curriculum Highlights</h2>
              <div className="space-y-3">
                {courseDetails.curriculum.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Program Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {courseDetails.benefits.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Quick Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Program Type</span>
                  <span className="font-semibold text-gray-900">
                    {course.isFlagship ? 'Flagship' : 'Professional'}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Category</span>
                  <span className="font-semibold text-gray-900 capitalize">{course.category}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Duration</span>
                  <span className="font-semibold text-gray-900">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Mode</span>
                  <span className="font-semibold text-gray-900">On-Campus / Online</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Certificate</span>
                  <span className="font-semibold text-green-600">Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Seats</span>
                  <span className="font-semibold text-red-600">Limited</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <button
                  onClick={handleEnroll}
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Apply Now →
                </button>
                <button
                  onClick={() => window.print()}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}