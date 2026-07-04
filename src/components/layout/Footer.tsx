import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  setPath: (path: string) => void;
}

export default function Footer({ setPath }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F9] border-t border-red-500/15 relative overflow-hidden text-slate-600">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-600/[0.02] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Column 1: Core Academy Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1 bg-white rounded-lg border border-red-500/15">
                <img 
                  src="https://i.postimg.cc/1XNjTcsL/717643e0-cde9-4c5f-a612-da3f119e068f.png" 
                  alt="METRO Educational & Trading Academy Logo" 
                  className="w-6 h-6 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-slate-900 tracking-tight text-sm leading-none">METRO</span>
                <span className="text-[9px] text-[#E31E24] uppercase tracking-widest font-bold block mt-1">Educational & Trading Academy</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              Serving as Pakistan's premier, metrics-focused professional skills and Forex on-site educational academy. Offering physical interactive classes and live session drills in Islamabad.
            </p>

            <div className="space-y-2 pt-2 text-[11px] font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary-red shrink-0" />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary-red shrink-0" />
                <span>+92 337 4442000 / +92 337 4443000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary-red shrink-0" />
                <span>metaacademy313@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Flagship Forex Program */}
          <div>
            <h4 className="text-sm font-display font-medium text-slate-900 tracking-widest uppercase mb-4 text-left">Trading Programs</h4>
            <ul className="space-y-2.5 text-xs text-left">
              <li>
                <button onClick={() => setPath('course-forex-trading')} className="hover:text-primary-red transition-colors cursor-pointer flex items-center gap-1.5 font-bold text-slate-900">
                  <span>Forex Trading Mastery (Flagship)</span>
                  <span className="text-[8px] bg-red-600/10 text-primary-red px-1 rounded border border-red-500/10 font-bold">POPULAR</span>
                </button>
              </li>
              <li><button onClick={() => setPath('trading')} className="hover:text-primary-red text-slate-700 transition-colors cursor-pointer">Live Simulator Terminal</button></li>
              <li><button onClick={() => setPath('courses')} className="hover:text-primary-red text-slate-700 transition-colors cursor-pointer">SMC (Smart Money Concepts)</button></li>
              <li><button onClick={() => setPath('courses')} className="hover:text-primary-red text-slate-700 transition-colors cursor-pointer">Classroom Execution Rules</button></li>
              <li><button onClick={() => setPath('courses')} className="hover:text-primary-red text-slate-700 transition-colors cursor-pointer">Risk Management Systems</button></li>
            </ul>
          </div>

          {/* Column 3: Skill Categories */}
          <div>
            <h4 className="text-sm font-display font-medium text-slate-900 tracking-widest uppercase mb-4 text-left">Professional Pathways</h4>
            <ul className="space-y-2.5 text-xs text-left">
              <li><button onClick={() => setPath('courses')} className="hover:text-primary-red text-slate-700 transition-colors cursor-pointer">Cyber Security Defense</button></li>
              <li><button onClick={() => setPath('courses')} className="hover:text-primary-red text-slate-700 transition-colors cursor-pointer">Full-Stack Web Development</button></li>
              <li><button onClick={() => setPath('courses')} className="hover:text-primary-red text-slate-700 transition-colors cursor-pointer">Digital Marketing Campaigns</button></li>
              <li><button onClick={() => setPath('courses')} className="hover:text-primary-red text-slate-700 transition-colors cursor-pointer">Cinematic Video Production</button></li>
              <li><button onClick={() => setPath('courses')} className="hover:text-primary-red text-slate-700 transition-colors cursor-pointer">Cambridge O/A Level Prep</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom divider with legal warnings */}
        <div className="border-t border-red-500/10 mt-12 pt-8 text-[11px] leading-relaxed space-y-4 text-slate-500">
          <p className="text-left">
            <span className="text-slate-900 font-bold uppercase inline opacity-75">Important Disclosure & Risk Warning:</span> METRO Educational & Trading Academy is an educational institute based in Islamabad. We teach trading and professional skills via physical classes and online classes across Pakistan. **We do not collect customer deposits, handle public investment funds, or engage in currency/asset management of any kind.** Forex and CFD trading involve high risk, and our services are strictly for educational and training purposes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-red-500/10 pt-6 text-[11px] font-mono">
            <span>&copy; {currentYear} METRO Educational & Trading Academy. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}