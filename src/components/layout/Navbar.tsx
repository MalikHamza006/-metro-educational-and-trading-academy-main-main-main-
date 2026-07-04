import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  setPath: (path: string) => void;
  onEnrollClick: () => void;
}

export default function Navbar({ currentPath, setPath, onEnrollClick }: NavbarProps) {
  const navItems = [
    { label: 'Home', path: 'home' },
    { label: 'Trading Academy', path: 'trading' },
    { label: 'Courses', path: 'courses' },
    { label: 'About Us', path: 'about' },
    { label: 'Success Stories', path: 'success' },
    { label: 'Contact', path: 'contact' }
  ];

  const isMobileMenuOpen = currentPath === 'menu';

  // Updated handler for the button to navigate to contact page
  const handleStartJourney = () => {
    setPath('contact');
    onEnrollClick(); // Keep your existing enroll click handler if needed
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-red-100 shadow-sm">
      {/* Dynamic top news flashing ribbon */}
      <div className="bg-[#E31E24] text-white py-1.5 px-4 text-[9px] sm:text-[11px] font-mono font-medium overflow-hidden tracking-wider text-center flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <span className="truncate">LIMITED SLOTS: METRO PROP-TRADING MASTERY PHASE-4 ENROLLMENT OPEN NOW</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Main Logo & Branding */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => setPath('home')}>
            <div className="relative group">
              <div className="absolute inset-x-0 -inset-y-1 bg-gradient-to-r from-primary-red to-accent-red rounded-xl opacity-10 group-hover:opacity-35 blur-md transition duration-500" />
              <div className="relative p-1.5 bg-white rounded-xl border border-primary-red/20 flex items-center justify-center">
                <img 
                  src="https://i.postimg.cc/1XNjTcsL/717643e0-cde9-4c5f-a612-da3f119e068f.png" 
                  alt="METRO Educational & Trading Academy Logo" 
                  className="w-8 h-8 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-display font-bold text-lg tracking-tight text-slate-900 leading-none">METRO</h1>
              </div>
              <span className="text-[9px] text-[#E31E24] uppercase tracking-widest font-bold hidden sm:block mt-0.5">Educational & Trading Academy</span>
              <span className="text-[8px] text-[#E31E24] uppercase tracking-widest font-bold sm:hidden block mt-0.5">Educational & Trading Academy</span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 bg-zinc-100/80 p-1.5 rounded-full border border-red-500/10">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => setPath(item.path)}
                  className={`px-4.5 py-2 text-xs font-display font-medium rounded-full cursor-pointer transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-red text-white shadow-md shadow-red-200'
                      : 'text-slate-600 hover:text-primary-red hover:bg-red-500/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleStartJourney}
              className="bg-primary-red hover:bg-red-700 text-white py-2 px-4 rounded-xl font-display text-xs font-bold shadow-md shadow-red-200 cursor-pointer transition-all"
            >
              Start Trading Journey
            </button>
          </div>

          {/* Mobile responsive toggle button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={handleStartJourney}
              className="bg-primary-red hover:bg-[#B71C1C] text-white py-1.5 px-3 rounded-lg font-display text-[11px] font-bold cursor-pointer transition-all"
            >
              Join Free
            </button>
            <button 
              onClick={() => setPath(isMobileMenuOpen ? 'home' : 'menu')} 
              className="p-1.5 text-slate-600 hover:text-primary-red rounded-lg border border-red-500/10 cursor-pointer bg-[#FAF9F9]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Responsive Navigation overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-red-100 p-4 space-y-2 animate-fadeIn shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => setPath(item.path)}
              className="w-full text-left p-3 rounded-xl bg-[#FAF9F9] text-slate-700 hover:text-primary-red hover:bg-[#E31E24]/5 text-sm font-display font-medium border border-red-500/5 cursor-pointer block"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2 border-t border-red-100">
            <button
              onClick={handleStartJourney}
              className="w-full bg-primary-red text-center text-white py-2.5 rounded-xl font-display font-bold text-xs cursor-pointer block"
            >
              Start Trading Journey
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}