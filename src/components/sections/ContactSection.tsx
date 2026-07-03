import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, GraduationCap, CheckCircle2, ChevronDown, Clock, Shield } from 'lucide-react';
import { COURSES } from '../../data';
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
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  // Anti-spam & loading states
  const [renderTime] = useState<number>(() => Date.now());
  const [honeypot, setHoneypot] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

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
          ...formData,
          x7f_93a: honeypot,
          renderTime
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setComplete(true);
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
      setErrorMsg('Network error. Please verify your internet connection and retry.');
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-red-50 rounded-full mb-4"
          >
            <span className="text-xs font-mono font-bold text-red-600 tracking-wider">LIMITED SEATS AVAILABLE</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Secure Your{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Placement Desk
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base"
          >
            Register your interest for specialized training programs and coordinate with our academic advisory core.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Islamabad Headquarters</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Institutional Campus</h4>
                    <p className="text-sm text-gray-600 mt-1">Islamabad, Pakistan</p>
                    <button className="text-red-600 text-sm mt-2 font-medium hover:underline">Get Directions →</button>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Registrations Call</h4>
                    <p className="text-sm text-gray-600 font-mono">+92 337 4442000 / +92 337 4443000</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>Mon-Sat, 9AM - 6PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                    <Mail className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Academic Queries</h4>
                    <p className="text-sm text-gray-600">metaacademy313@gmail.com</p>
                    <p className="text-xs text-green-600 mt-1">✓ Response within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-2xl border border-red-100">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Limited Seating Notice</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Due to restricted seating in live training environments, admissions are prioritized 
                    based on eligibility and registration timestamp.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              {complete ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Application Submitted!</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your application has been received. 
                    An advisor will contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => {
                      setComplete(false);
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        course: 'forex-trading',
                        experience: 'no-experience',
                        message: ''
                      });
                    }}
                    className="mt-4 text-red-600 font-semibold hover:underline"
                  >
                    Submit another application →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Contact Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+92 XXX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Select Course</label>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsCourseOpen(!isCourseOpen);
                          setIsExperienceOpen(false);
                        }}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-left flex justify-between items-center hover:border-red-500 transition-all"
                      >
                        <span className="text-gray-900">
                          {COURSES.find(c => c.slug === formData.course)?.title || "Select Academy Course"}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isCourseOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isCourseOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto"
                          >
                            {COURSES.map(c => (
                              <button
                                key={c.id}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, course: c.slug });
                                  setIsCourseOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex justify-between items-center ${
                                  formData.course === c.slug ? 'bg-red-50 text-red-600' : 'text-gray-700'
                                }`}
                              >
                                <span>{c.title}</span>
                                {c.isFlagship && (
                                  <span className="text-[10px] px-2 py-0.5 bg-red-100 text-red-600 rounded-full">Flagship</span>
                                )}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative">
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Experience Level</label>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsExperienceOpen(!isExperienceOpen);
                          setIsCourseOpen(false);
                        }}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-left flex justify-between items-center hover:border-red-500 transition-all"
                      >
                        <span className="text-gray-900">
                          {EXPERIENCE_OPTIONS.find(opt => opt.value === formData.experience)?.label}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isExperienceOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isExperienceOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden"
                          >
                            {EXPERIENCE_OPTIONS.map(opt => (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, experience: opt.value });
                                  setIsExperienceOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                                  formData.experience === opt.value ? 'bg-red-50 text-red-600' : 'text-gray-700'
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Additional Inquiries</label>
                    <textarea 
                      rows={3}
                      placeholder="Tell us about your goals or any questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all resize-none"
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
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs flex items-center gap-2">
                      <span className="font-bold">⚠️ Error:</span>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-3.5 rounded-xl font-semibold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center justify-center gap-2 ${
                      status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    By submitting, you agree to our terms and privacy policy
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}