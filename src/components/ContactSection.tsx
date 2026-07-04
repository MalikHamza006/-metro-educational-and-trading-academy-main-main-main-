import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, GraduationCap, CheckCircle2, ChevronDown } from 'lucide-react';
import { COURSES } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'forex-trading',
    experience: 'no-experience',
    message: ''
  });
  const [complete, setComplete] = useState(false);

  // States to control beautiful custom dropdown folders
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = () => {
      setIsCourseOpen(false);
      setIsExperienceOpen(false);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  const EXPERIENCE_OPTIONS = [
    { value: 'no-experience', label: 'Complete Beginner (0 Exp)' },
    { value: 'some-exposure', label: 'Retail Exposure (Charts level)' },
    { value: 'active-trader', label: 'Active Trader (Struggling profit)' },
    { value: 'expert-consistent', label: 'Experienced Consistent Trader' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setComplete(true);
  };

  return (
    <div className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
          <span className="text-xs font-mono font-bold tracking-widest text-primary-red uppercase block">Admissions Portal</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight md:leading-none">
            Secure Your Placement Desk
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-sans leading-relaxed">
            Register your interest, select a specialized career channel, and coordinate directly with our regional academic advisory core. Only serious candidates are selected for physical desk slots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Campus metadata & contacts */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#FAF9F9] rounded-2xl p-6 border border-red-500/10 space-y-6 shadow-sm">
              <h3 className="font-display font-extrabold text-lg text-slate-950">Islamabad Corporate Headquarters</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-red-600/10 text-primary-red rounded-xl border border-red-500/15 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-xs font-bold text-slate-950 font-mono uppercase tracking-wider">Institutional Campus</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-normal">
                      Islamabad, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-red-600/10 text-primary-red rounded-xl border border-red-500/15 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-xs font-bold text-slate-950 font-mono uppercase tracking-wider">Registrations Call</h4>
                    <p className="text-xs text-slate-600 mt-1 font-mono tracking-wider">
                      +92 337 4442000 / +92 337 4443000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-red-600/10 text-primary-red rounded-xl border border-red-500/15 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-xs font-bold text-slate-950 font-mono uppercase tracking-wider">Academic Queries</h4>
                    <p className="text-xs text-slate-600 mt-1 font-mono">
                      metaacademy313@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick reminder card */}
            <div className="p-5 bg-red-600/5 rounded-2xl border border-red-500/10 space-y-2">
              <span className="text-xs font-mono font-bold text-primary-red block uppercase">Admissions Guideline:</span>
              <p className="text-xs text-slate-600 leading-normal font-sans">
                Due to restricted seating limits in our live institutional FX trading rooms, desk vacancies are prioritized based on profile eligibility and enrollment date timestamps. Secure your slot early.
              </p>
            </div>
          </div>

          {/* Right Column: Multi-field premium Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F9] rounded-2xl p-6 sm:p-8 border border-red-500/10 relative shadow-sm">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/5 rounded-full filter blur-[100px] pointer-events-none" />

              {complete ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-primary-red mx-auto animate-bounce" />
                  <h3 className="font-display font-extrabold text-xl text-slate-950">Enrollment Slate Ticketed</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                    Thank you, <strong className="text-slate-950">{formData.name}</strong>. Your executive credentials have been logged into our admissions directory under ticket: <strong className="text-slate-950 font-mono">MET-#{Date.now().toString().slice(-6)}</strong>. An educational advisor will secure a placement evaluation route with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Candidate Name</label>
                      <input 
                        id="name"
                        type="text" 
                        required
                        placeholder="e.g. Hammad Qureshi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-red-500/10 hover:border-red-500/20 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary-red font-sans"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Contact Number</label>
                      <input 
                        id="phone"
                        type="tel" 
                        required
                        placeholder="e.g. +92 333 1254768"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-red-500/10 hover:border-red-500/20 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary-red font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Active Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      placeholder="e.g. hammad@tradingdesk.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-red-500/10 hover:border-red-500/20 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary-red font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* ENHANCED Course dropdown selector with animation & sub-option design */}
                    <div className="space-y-1.5 relative">
                      <label className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Select Course Path</label>
                      
                      <div className="relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsCourseOpen(!isCourseOpen);
                            setIsExperienceOpen(false);
                          }}
                          className="w-full bg-white border border-red-500/10 hover:border-primary-red rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary-red font-sans flex items-center justify-between transition-all cursor-pointer text-left"
                        >
                          <span className="truncate">
                            {COURSES.find(c => c.slug === formData.course)?.title || "Select Academy Course"}
                          </span>
                          <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${isCourseOpen ? 'rotate-180 text-primary-red' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isCourseOpen && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.98 }}
                              transition={{ duration: 0.15 }}
                              className="absolute z-20 mt-1.5 w-full bg-white border border-red-500/15 rounded-xl shadow-2xl max-h-56 overflow-y-auto divide-y divide-red-500/5 overflow-hidden"
                            >
                              {COURSES.map(c => {
                                const isSelected = formData.course === c.slug;
                                return (
                                  <button
                                    key={c.id}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setFormData({ ...formData, course: c.slug });
                                      setIsCourseOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 text-xs flex items-center justify-between transition-all hover:bg-red-500/5 cursor-pointer ${isSelected ? 'text-primary-red bg-red-500/10 font-bold' : 'text-slate-600'}`}
                                  >
                                    <span className="flex items-center gap-2 truncate">
                                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-primary-red' : 'bg-transparent'}`} />
                                      <span className="truncate">{c.title}</span>
                                      {c.isFlagship && (
                                        <span className="text-[8px] font-mono leading-none tracking-tight text-primary-red bg-red-600/10 px-1.5 py-0.5 rounded border border-red-500/15 shrink-0 uppercase font-bold">
                                          Flagship
                                        </span>
                                      )}
                                    </span>
                                    {isSelected && <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0" />}
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* ENHANCED Experience rating slider/option with animation & sub-option design */}
                    <div className="space-y-1.5 relative">
                      <label className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Experience Rating</label>
                      
                      <div className="relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsExperienceOpen(!isExperienceOpen);
                            setIsCourseOpen(false);
                          }}
                          className="w-full bg-white border border-red-500/10 hover:border-primary-red rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary-red font-sans flex items-center justify-between transition-all cursor-pointer text-left"
                        >
                          <span className="truncate">
                            {EXPERIENCE_OPTIONS.find(opt => opt.value === formData.experience)?.label || "Select Level"}
                          </span>
                          <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${isExperienceOpen ? 'rotate-180 text-primary-red' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isExperienceOpen && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.98 }}
                              transition={{ duration: 0.15 }}
                              className="absolute z-20 mt-1.5 w-full bg-white border border-red-500/15 rounded-xl shadow-2xl overflow-hidden divide-y divide-red-500/5"
                            >
                              {EXPERIENCE_OPTIONS.map(opt => {
                                const isSelected = formData.experience === opt.value;
                                return (
                                  <button
                                    key={opt.value}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setFormData({ ...formData, experience: opt.value });
                                      setIsExperienceOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 text-xs flex items-center justify-between transition-all hover:bg-red-500/5 cursor-pointer ${isSelected ? 'text-primary-red bg-red-500/10 font-bold' : 'text-slate-600'}`}
                                  >
                                    <span className="flex items-center gap-2 truncate">
                                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-primary-red' : 'bg-transparent'}`} />
                                      <span className="truncate">{opt.label}</span>
                                    </span>
                                    {isSelected && <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0" />}
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Additional Inquiries or Target Band/Goals</label>
                    <textarea 
                      id="message"
                      rows={4}
                      placeholder="Comment on your unique background, timeline restrictions, or target CIE grades..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-red-500/10 hover:border-red-500/20 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary-red font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-red hover:bg-red-700 text-white font-display font-bold text-xs py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Secured Application</span>
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
