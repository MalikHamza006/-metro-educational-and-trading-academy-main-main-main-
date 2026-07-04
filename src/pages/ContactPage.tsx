import { MapPin, Phone, Mail, Send, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Select Course Path',
    experience: 'Experience Rating',
    message: ''
  });
  const [complete, setComplete] = useState(false);
  
  // Anti-spam and API loading states
  const [renderTime] = useState<number>(() => Date.now());
  const [honeypot, setHoneypot] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    if (formData.course === 'Select Course Path') {
      setStatus('error');
      setErrorMsg('Please select a course path.');
      return;
    }
    if (formData.experience === 'Experience Rating') {
      setStatus('error');
      setErrorMsg('Please select an experience rating.');
      return;
    }

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
          course: formData.course,
          experience: formData.experience,
          message: formData.message,
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
      setErrorMsg('Network error. Please verify your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6">

      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium">
          Limited Seats Available
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Admissions Portal
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Secure your placement desk and register your interest for specialized training programs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Left Info Card - Improved */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 hover:shadow-xl transition-shadow text-left">

          {/* Location */}
          <div className="flex gap-4">
            <div className="bg-red-50 rounded-xl p-2.5 h-fit">
              <MapPin className="text-red-600 w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Institutional Campus
              </h2>
              <p className="text-gray-600">Islamabad, Pakistan</p>
              <button className="text-red-600 text-sm mt-2 hover:text-red-700 font-medium">
                Get Directions →
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="bg-green-50 rounded-xl p-2.5 h-fit">
              <Phone className="text-green-600 w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Registrations Call
              </h3>
              <div className="text-gray-600 space-y-1">
                <div>+92 337 4442000</div>
                <div>+92 337 4443000</div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>Mon-Sat, 9AM - 6PM</span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <div className="bg-purple-50 rounded-xl p-2.5 h-fit">
              <Mail className="text-purple-600 w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Academic Queries
              </h3>
              <p className="text-gray-600">metaacademy313@gmail.com</p>
              <p className="text-xs text-gray-500 mt-2">Response within 24 hours</p>
            </div>
          </div>

          {/* Notice - Improved */}
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <div className="flex gap-3">
              <AlertCircle className="text-amber-600 w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">
                Due to limited seating in live training environments, admissions are
                prioritized based on eligibility and registration timestamp.
              </p>
            </div>
          </div>

        </div>

        {/* Form Card - Improved / Success state logic */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {complete ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Application Logged!</h3>
              <p className="text-gray-600 max-w-sm mx-auto">
                Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your executive credentials have been registered in our admissions directory. An academic advisor will coordinate with you shortly.
              </p>
              <button 
                onClick={() => {
                  setComplete(false);
                  setStatus('idle');
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    course: 'Select Course Path',
                    experience: 'Experience Rating',
                    message: ''
                  });
                }}
                className="mt-6 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-md"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-200 p-3 rounded-xl 
                             focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 
                             transition-all bg-gray-50/50 focus:bg-white text-gray-800"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-200 p-3 rounded-xl 
                             focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 
                             transition-all bg-gray-50/50 focus:bg-white text-gray-800"
                  placeholder="+92 XXX XXX XXX"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-200 p-3 rounded-xl 
                             focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 
                             transition-all bg-gray-50/50 focus:bg-white text-gray-800"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Select Course</label>
                <select 
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full border border-gray-200 p-3 rounded-xl 
                                  focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 
                                  transition-all bg-gray-50/50 cursor-pointer text-gray-800"
                >
                  <option value="Select Course Path">Select Course Path</option>
                  <option value="Forex Trading Mastery">Forex Trading Mastery</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Freelancing Program">Freelancing Program</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Experience Level</label>
                <select 
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full border border-gray-200 p-3 rounded-xl 
                                  focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 
                                  transition-all bg-gray-50/50 cursor-pointer text-gray-800"
                >
                  <option value="Experience Rating">Experience Rating</option>
                  <option value="Complete Beginner (0 Exp)">Complete Beginner (0 Exp)</option>
                  <option value="Some Knowledge">Some Knowledge</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Additional Inquiries</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-200 p-3 rounded-xl 
                             focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 
                             transition-all bg-gray-50/50 focus:bg-white resize-none text-gray-800"
                  rows={4}
                  placeholder="Tell us about your goals or any questions..."
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
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm flex items-center gap-2">
                  <span className="font-bold">⚠️ Error:</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl 
                           font-semibold transition-all duration-200 transform hover:scale-[1.02] 
                           active:scale-[0.98] shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
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
                    <span>Submit Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-400">
                By submitting, you agree to our terms and privacy policy
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}