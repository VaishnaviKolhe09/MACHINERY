// Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home Base", path: "/" },
    { name: "Corporate Profile", path: "/about" },
    { name: "Machinery Plant", path: "/machinery" },
    { name: "Contact Office", path: "/contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a] text-white border-b border-slate-800 shadow-xl backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* --- BRAND LOGO --- */}
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0 z-50">
          <Layers className="text-[#f59e0b] group-hover:rotate-90 transition-transform duration-500 flex-shrink-0 w-6 h-6 sm:w-[26px] sm:h-[26px]" />
          <div className="truncate">
            <span className="font-black tracking-tighter text-sm sm:text-base md:text-lg block leading-none uppercase text-white">
              NEXUS <span className="text-[#f59e0b]">HEAVY</span>
            </span>
            <span className="text-[6px] sm:text-[8px] font-black tracking-[0.25em] sm:tracking-[0.35em] text-slate-400 uppercase block mt-1 truncate">
              MACHINERY ECOSYSTEM
            </span>
          </div>
        </Link>

        {/* --- DESKTOP NAV-LINKS --- */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 text-[11px] font-black uppercase tracking-widest flex-shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors py-2 relative whitespace-nowrap ${
                isActive(link.path) ? "text-[#f59e0b]" : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f59e0b] rounded-full"></span>
              )}
            </Link>
          ))}
          
          <Link 
            to="/machinery" 
            className="bg-[#f59e0b] text-white px-4 lg:px-5 py-2.5 rounded-xl hover:bg-amber-600 transition-all shadow-md hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap"
          >
            Get RFQ Pricing <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none z-50 transition-colors flex-shrink-0 relative"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- BACKDROP OVERLAY FOR MOBILE DRAW (Fixes page widening bugs completely) --- */}
      <div 
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden z-30 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none invisible"
        }`}
      />

      {/* --- FIX RESPONSIVE MOBILE DRAWER SLIDEOVER (Using conditional rendering to completely stop side whitespace leakage) --- */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-[#0f172a] border-l border-slate-800/80 transform shadow-2xl transition-all duration-300 ease-in-out md:hidden z-40 flex flex-col justify-between pt-28 pb-8 px-6 overflow-y-auto h-screen ${
          isOpen ? "translate-x-0 opacity-100 block" : "translate-x-full opacity-0 pointer-events-none hidden"
        }`}
      >
        <div className="flex flex-col gap-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-base font-black uppercase tracking-widest py-3 border-b border-slate-800/50 ${
                isActive(link.path) ? "text-[#f59e0b]" : "text-slate-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="space-y-4 text-center mt-8">
          <Link
            to="/machinery"
            onClick={() => setIsOpen(false)}
            className="w-full block bg-[#f59e0b] text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform"
          >
            Request Instant Quote
          </Link>
          <p className="text-[9px] uppercase tracking-widest text-slate-500 font-black">
            Hotline Support: +91 98765 43210
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;