import React, { useState } from 'react';
import { Course } from '../types';
import { Clock, GraduationCap, Award, BookOpen, Star, UserCheck, ShieldCheck, Mail, Send, CheckCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { AvatarDoodle } from './AvatarDoodle';

interface CourseDetailProps {
  course: Course;
  onEnrollSuccess: () => void;
}

export default function CourseDetail({ course, onEnrollSuccess }: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', comments: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Anti-spam & API integration states
  const [renderTime] = useState<number>(() => Date.now());
  const [honeypot, setHoneypot] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.comments,
          course: course.title,
          experience: '', // No specific selector on course detail
          x7f_93a: honeypot,
          renderTime
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setSubmitted(true);
        setTimeout(() => {
          onEnrollSuccess();
        }, 2000);
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Submission failed. Please check inputs and retry.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-white pt-8 pb-16">
      {/* Premium Dynamic Hero Banner */}
      <div className="relative border-b border-red-500/10 bg-[#FAF9F9] overflow-hidden py-16 md:py-24">
        {/* Glow accent */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-red-500/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Banner Titles */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-widest uppercase bg-red-600/10 text-primary-red border border-red-500/15 px-3 py-1 rounded-full">
                  {course.category} program
                </span>
                {course.isFlagship && (
                  <span className="text-xs font-mono font-bold tracking-widest uppercase bg-primary-red text-white border border-red-600 px-3 py-1 rounded-full">
                    Flagship Offering
                  </span>
                )}
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight md:leading-none">
                {course.title}
              </h1>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
                {course.shortDesc}
              </p>

              {/* Badges strip */}
              <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary-red" />
                  <span>Duration: <strong className="text-slate-950">{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary-red" />
                  <span>Level: <strong className="text-slate-950">{course.level}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary-red fill-primary-red" />
                  <span>Rating: <strong className="text-slate-950">{course.rating} / 5.0</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Academic Details widget card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 border border-red-500/10 shadow-sm relative">
                <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase block mb-1">PROGRAM CREDENTIAL</span>
                <div className="text-xl font-display font-extrabold text-slate-950 mb-3 leading-none">
                  Official Skill Certification
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-xs font-sans mb-5 pb-5 border-b border-red-500/10">
                  <Award className="w-4 h-4 text-primary-red shrink-0 animate-none" />
                  <span>Includes international: <strong className="text-slate-950">{course.certification}</strong></span>
                </div>

                <div className="space-y-2.5 text-left text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Permanent Live Dashboard Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Free examiner mock assessments</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>On-Site Interactive Physical Classes</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Detailed Course Content */}
          <div className="lg:col-span-7 space-y-10 text-left">
            
            {/* Overview section */}
            <div className="space-y-4">
              <h2 className="font-display font-bold text-xl text-slate-950 border-l-2 border-primary-red pl-3">Program Overview</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-sans whitespace-pre-line">
                {course.overview}
              </p>
            </div>

            {/* Learning outcomes bento block */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-lg text-slate-950">What You Will Achieve</h3>
              <div className="grid grid-cols-1 gap-3.5">
                {course.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-[#FAF9F9] rounded-xl border border-red-500/10 shadow-sm">
                    <div className="p-1 bg-red-600/10 text-primary-red rounded-lg mt-0.5 animate-none">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-slate-800 leading-normal font-sans font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Curriculum Tabs */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-lg text-slate-950">Interactive Curriculum Roadmap</h3>
              <div className="flex gap-2 sm:gap-2.5 overflow-x-auto pb-2 border-b border-red-500/10 scrollbar-none">
                {course.curriculum.map((section, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-mono font-bold shrink-0 cursor-pointer transition-all duration-200 ${
                      activeTab === idx 
                        ? 'bg-primary-red text-white shadow-sm border border-primary-red scale-[1.02]' 
                        : 'bg-white text-slate-600 hover:text-[#E31E24] hover:bg-red-500/5 border border-red-500/10'
                    }`}
                  >
                    Phase {idx + 1}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-5 bg-[#FAF9F9] rounded-xl border border-red-500/10 space-y-3">
                <span className="text-xs font-mono text-primary-red block uppercase font-bold tracking-wider">
                  {course.curriculum[activeTab]?.section}
                </span>
                <ul className="space-y-3 font-sans text-xs text-slate-700">
                  {course.curriculum[activeTab]?.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-primary-red opacity-80 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certified Lead Instructor card */}
            <div className="p-5 sm:p-6 bg-[#FAF9F9] rounded-2xl border border-red-500/10 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start text-center sm:text-left shadow-sm">
              <div className="shrink-0">
                <AvatarDoodle name={course.instructor.name} size={64} />
              </div>
              <div className="space-y-2 w-full font-sans">
                <div className="flex flex-col xs:flex-row items-center sm:items-start gap-1.5 sm:gap-2 justify-center sm:justify-start">
                  <h4 className="font-display font-extrabold text-slate-950 text-base leading-snug">{course.instructor.name}</h4>
                  <span className="text-[8px] xs:text-[9px] font-mono tracking-wider text-primary-red uppercase border border-red-500/10 bg-red-600/5 px-2 py-0.5 rounded w-fit font-bold">Faculty chair</span>
                </div>
                <p className="text-xs text-slate-600 leading-none font-bold font-sans mt-0.5">{course.instructor.title}</p>
                <p className="text-xs text-slate-500 leading-normal font-sans">
                  {course.instructor.bio}
                </p>
              </div>
            </div>

            {/* Course Specific FAQs */}
            {course.faq.length > 0 && (
              <div className="space-y-4 pt-4">
                <h3 className="font-display font-semibold text-lg text-slate-950">Course Queries & Answers</h3>
                <div className="space-y-3">
                  {course.faq.map((fq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="bg-[#FAF9F9] rounded-xl border border-red-500/10 overflow-hidden shadow-sm">
                        <button 
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-4 flex justify-between items-center text-left text-xs font-display font-bold text-slate-900 cursor-pointer hover:bg-red-500/5 transition-all"
                        >
                          <span>{fq.q}</span>
                          <ChevronDown className={`w-4 h-4 text-primary-red transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <p className="px-4 pb-4 px-4 pb-4.5 text-xs text-slate-650 leading-relaxed font-sans text-slate-600 border-t border-red-500/5 pt-3">
                            {fq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Secure Enrollment Contact side widget */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-[#FAF9F9] rounded-2xl p-6 border border-red-500/10 shadow-sm relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full filter blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 border-b border-red-500/10 pb-4.5 mb-5 text-left">
                <div className="p-2 bg-red-600/10 text-primary-red rounded-xl border border-red-500/10">
                  <UserCheck className="w-5 h-5 animate-none" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-slate-950 text-base">Admissions Directory</h3>
                  <p className="text-[11px] text-slate-500 font-sans font-medium">Secure custom reservation seat and counselor slot.</p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-3 bg-red-600/5 rounded-xl border border-red-500/10 p-4">
                  <ShieldCheck className="w-10 h-10 text-primary-red mx-auto animate-pulse" />
                  <h4 className="font-display font-bold text-slate-950 text-sm">Application Logged</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    An academic advisor has booked a placement routing for the client profile. A secure SMS/Email ticket has registered to your phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Your Professional Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Abdullah Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-red-500/20 rounded-xl px-4 py-2.5 text-xs text-slate-950 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Secure Contact Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-red-500/20 rounded-xl px-4 py-2.5 text-xs text-slate-950 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="admissions@student.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-red-500/20 rounded-xl px-4 py-2.5 text-xs text-slate-950 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Aspirations or Prior Experience (Optional)</label>
                    <textarea 
                      placeholder="Provide previous asset exposure or current goals..."
                      rows={3}
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full bg-white border border-red-500/20 rounded-xl px-4 py-2.5 text-xs text-slate-950 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red font-sans"
                    />
                  </div>

                  {/* Honeypot field (hidden from screen, used for bot protection) */}
                  <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                    <label htmlFor="x7f_93a">Do not fill this field</label>
                    <input 
                      id="x7f_93a"
                      type="text" 
                      name="x7f_93a"
                      value={honeypot} 
                      onChange={(e) => setHoneypot(e.target.value)} 
                      tabIndex={-1} 
                      autoComplete="off" 
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-[10px] flex items-center gap-2 font-sans">
                      <span className="font-bold">⚠️ Error:</span>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full bg-[#E31E24] hover:bg-red-700 text-white font-display font-semibold text-xs py-3 rounded-xl transition-all shadow-lg hover:shadow-red-950/25 flex items-center justify-center gap-2 cursor-pointer ${
                      status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Executive Reservation</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
