// Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
// MR Logo image ko import kiya gaya hai
import mrLogo from '../../public/assets/MRLogo.png'; 

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
    // Screen scroll par navbar ko top par fix rakhne ke liye fixed layout distributed width ke sath set hai
    // Note: Yahan se 'border-b' aur top lines completely remove kar di gayi hain taaki koi extra border na dikhe
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--background)] text-[var(--text-dark)] shadow-md backdrop-blur-md bg-opacity-95 border-none">
      {/* Container horizontal alignment standard layout rule ke mutabik wrapper layout se sync hai */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* --- BRAND LOGO --- */}
        <Link to="/" className="flex items-center gap-1 sm:gap-2 group min-w-0 z-50 ml-0 pl-0">
          <img 
            src={mrLogo} 
            alt="MR Food Machinery Logo" 
            className="flex-shrink-0 w-24 h-24 sm:w-24 sm:h-24 object-contain object-left group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="truncate">
            <span className="font-black tracking-tighter text-lg sm:text-base md:text-lg block leading-none uppercase text-[var(--text-dark)]">
              MR <span className="text-[var(--primary)]">FOOD</span>
            </span>
            <span className="text-[12px] sm:text-[8px] font-black tracking-[0.25em] sm:tracking-[0.35em] text-[var(--text-muted)] uppercase block mt-1 truncate">
              MACHINERY
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
                isActive(link.path) ? "text-[var(--primary)]" : "text-[var(--text-dark)] opacity-80 hover:opacity-100"
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--primary)] rounded-full"></span>
              )}
            </Link>
          ))}
          
          <Link 
            to="/machinery" 
            className="bg-[var(--primary)] text-[var(--text-light)] px-4 lg:px-5 py-2.5 rounded-xl hover:bg-[var(--primary-light)] transition-all shadow-md hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap font-black"
          >
            Get RFQ Pricing <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[var(--text-dark)] hover:text-[var(--primary)] focus:outline-none z-50 transition-colors flex-shrink-0 relative"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- BACKDROP OVERLAY FOR MOBILE DRAW --- */}
      <div 
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden z-30 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none invisible"
        }`}
      />

      {/* --- FIX RESPONSIVE MOBILE DRAWER SLIDEOVER --- */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-[var(--surface)] transform shadow-2xl transition-all duration-300 ease-in-out md:hidden z-40 flex flex-col justify-between pt-28 pb-8 px-6 overflow-y-auto h-screen ${
          isOpen ? "translate-x-0 opacity-100 block" : "translate-x-full opacity-0 pointer-events-none hidden"
        }`}
      >
        <div className="flex flex-col gap-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-base font-black uppercase tracking-widest py-3  ${
                isActive(link.path) ? "text-[var(--primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-dark)]"
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
            className="w-full block bg-[var(--primary)] text-[var(--text-light)] text-xs font-black uppercase tracking-widest py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform"
          >
            Request Instant Quote
          </Link>
          <p className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] font-black">
            Hotline Support: +91 98765 43210
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;