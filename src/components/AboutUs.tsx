import { ShieldCheck, Award, Zap, Users, GraduationCap, Clock, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutUs() {
  const pillars = [
    {
      icon: <Users className="w-6 h-6 text-primary-red" />,
      title: 'Expert Mentors',
      desc: 'All training pathways are authored and led by active global portfolio analysts, forensic scientists, and Certified CIE instructors.'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-red" />,
      title: 'Practical Learning',
      desc: 'We bypass outdated theoretical lectures. Over 80% of our course milestones require live simulated trading or server scans.'
    },
    {
      icon: <Award className="w-6 h-6 text-primary-red" />,
      title: 'Certifications',
      desc: 'Graduates carry stamped dual-credentials valid under modern international industry standards.'
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-red" />,
      title: 'Flexible Learning',
      desc: 'Our physical classroom setups are backed by active digital support groups and local terminal simulations.'
    }
  ];

  const statistics = [
    { value: '2,400+', label: 'Registered On-Site Alumni' },
    { value: '100%', label: 'Hands-On Practical Drill Labs' },
    { value: '18+', label: 'Executive Faculty Members' },
    { value: 'Daily', label: 'On-Site Live Session Batches' }
  ];

  return (
    <div className="min-h-screen bg-white py-16 space-y-20">
      
      {/* Structural Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sans relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-600/5 rounded-full filter blur-[100px] pointer-events-none" />
        
        <motion.span 
          className="text-xs font-mono font-bold tracking-widest text-[#E31E24] uppercase block mb-3.5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Executive Institution
        </motion.span>
        <motion.h2 
          className="font-display font-extrabold text-4xl md:text-5xl text-slate-950 tracking-tight leading-none max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Pakistan's Premier Professional Trading & Skills Academy
        </motion.h2>
        <motion.p 
          className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto mt-5 leading-relaxed font-sans"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          METRO Educational & Trading Academy was built to bridge the gap between traditional textbooks and active, hands-on professional skills inside our physical Islamabad campus. Bypassing theoretical frameworks, we engineer active execution portfolios inside Forex, cyber defense, web development, marketing, graphic design, and school/college academics.
        </motion.p>

        {/* Dynamic counts grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 bg-[#FAF9F9] p-8 rounded-2xl border border-red-500/10 shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {statistics.map((s, idx) => (
            <div key={idx} className="text-center font-mono">
              <span className="text-2xl md:text-4xl font-extrabold text-primary-red tracking-tight block">{s.value}</span>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1 block">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Why Choose Section pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <span className="text-xs font-mono font-bold text-slate-500 tracking-widest uppercase">Aesthetic Framework</span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950 mt-1.5">Why Students Choose METRO Educational & Trading Academy</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <motion.div 
              key={idx} 
              className="bg-[#FAF9F9] border border-red-500/10 p-6 rounded-2xl text-left flex flex-col justify-between shadow-sm hover:border-red-500/30 transition-all cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className="p-2.5 bg-red-600/10 text-primary-red rounded-xl border border-red-500/10 w-fit mb-4">
                  {p.icon}
                </div>
                <h4 className="font-display font-bold text-base text-slate-950 mb-2">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Academy Core Intent values card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F9] rounded-2xl p-8 relative border border-red-500/10 text-left shadow-sm">
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/5 rounded-full filter blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary-red font-bold">The Educational Vow</span>
              <h4 className="font-display font-extrabold text-xl text-slate-950">Adhering To Strict Professional Sourcing Standards</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Our mission is modeled strictly on delivering professional knowledge, technical competency, and solid risk management principles on-site in Islamabad. We enforce capital defense ethics, explicitly advising that we never take personal capital, deposit holdings, or sell funds. Our candidates establish true diagnostic competency before independent market execution.
              </p>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-600 bg-white px-3.5 py-1.5 rounded-lg border border-red-500/10 w-fit shadow-sm">
                <ShieldCheck className="w-4 h-4 text-primary-red animate-none" />
                <span className="font-bold">Certified professional skills and training institute</span>
              </div>
            </div>
            
            {/* Visual seal block */}
            <div className="md:col-span-4 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border-2 border-red-500/20 flex flex-col items-center justify-center p-3 relative text-center bg-white shadow-sm">
                <div className="absolute inset-0 border-2 border-dashed border-red-500/40 rounded-full animate-spin-slow pointer-events-none" />
                <GraduationCap className="w-8 h-8 text-primary-red mb-1.5 animate-none" />
                <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-slate-900">METRO SEAL</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
