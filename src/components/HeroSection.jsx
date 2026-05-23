// HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Shield, Zap, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    // Base core background using raw variable injection
    <section className="relative min-h-screen flex items-center bg-[var(--background)] overflow-hidden px-4 sm:px-6 lg:px-8 py-24 lg:py-24">
      
      {/* --- ULTRA-PREMIUM AMBIENT BACKGROUND SYSTEM --- */}
      {/* Industrial Overlay Image with Deep Cinematic Luminosity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.04] mix-blend-multiply scale-110 pointer-events-none" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80')" }}
      />
      
      {/* Futuristic Neo-Grid Vector (Fine lines using border variable) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-40" />
      
      {/* High-End Tech Glow Points */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--primary)]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[var(--primary-light)]/10 to-[var(--accent)]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[var(--surface)] rounded-full blur-[100px] pointer-events-none" />

      {/* --- CORE CONTENT LAYOUT --- */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Industrial Authority, Clear Value Proposition & Actionable CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left max-w-3xl mx-auto lg:mx-0">
          
          {/* Futuristic Premium Tag */}
          <div className="inline-flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] backdrop-blur-md px-4 py-2 rounded-xl shadow-sm group">
            <Sparkles size={14} className="text-[var(--primary)] animate-pulse" />
            <span className="text-[var(--text-muted)] font-bold tracking-[0.25em] text-[10px] uppercase">
              Industrial Grade <span className="text-[var(--text-dark)] font-black">MR FOOD MACHINERY</span>
            </span>
          </div>
          
          {/* High-Impact Master Title */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[var(--secondary)] uppercase tracking-tighter leading-[0.85]">
              COMMERCIAL
            </h1>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.85]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]">
                FOOD MACHINES
              </span>
            </h1>
           
          </div>
          
          {/* Sophisticated Corporate Description */}
          <p className="text-[var(--text-dark)] opacity-90 text-base sm:text-md md:text-lg leading-relaxed max-w-2xl font-normal">
            High-output engineering for modern food factories. Specializing in automated noodle lines, non-IBR steam boilers, heavy stainless steel mixing vessels, and turnkey kitchen processing setups engineered to international safety standards.
          </p>
          
          {/* Ultra-Modern Interactive CTA Row */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <Link 
              to="/machinery" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-[var(--text-light)] font-black uppercase tracking-[0.15em] text-xs rounded-xl hover:opacity-90 transition-all duration-300 shadow-xl shadow-[var(--primary)]/20 hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              View Machine Catalog 
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-[var(--surface)] backdrop-blur border border-[var(--border)] text-[var(--text-dark)] font-black uppercase tracking-[0.15em] text-xs rounded-xl hover:bg-[var(--accent)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Request Plant Layout RFP
            </Link>
          </div>

          {/* Quick trust metrics row */}
          <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[var(--border)] max-w-md">
            <div>
              <p className="text-xl font-black text-[var(--text-dark)]">SUS 304</p>
              <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-mono font-bold">Food-Grade Steel</p>
            </div>
            <div>
              <p className="text-xl font-black text-[var(--text-dark)]">CE & ISO</p>
              <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-mono font-bold">Compliant Build</p>
            </div>
            <div>
              <p className="text-xl font-black text-[var(--text-dark)]">24/7</p>
              <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-mono font-bold">Technical Support</p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Asymmetric Floating Tech Cards */}
        <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[500px] flex items-center justify-center mt-10 lg:mt-0">
          
          {/* Decorative Cyber Ring in Center Background */}
          <div className="absolute w-72 h-72 rounded-full border border-[var(--border)] pointer-events-none animate-[spin_40s_linear_infinite] flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border-2 border-dashed border-[var(--surface)]" />
          </div>

          {/* MACHINERY CARD 1: Automated Production Line Status */}
          <div className="absolute top-4 left-4 sm:left-10 w-[85%] sm:w-[320px] bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 shadow-xl backdrop-blur-xl hover:border-[var(--primary)]/30 transition-all duration-500 group transform hover:-translate-y-1 z-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-[var(--accent)] text-[var(--primary)] group-hover:rotate-45 transition-transform duration-500">
                <Settings size={18} />
              </div>
              <div>
                <h3 className="text-[var(--text-dark)] text-xs font-black uppercase tracking-wider">Noodle Automation</h3>
                <p className="text-[10px] text-[var(--text-muted)] font-mono font-bold">HIGH-OUTPUT LINE</p>
              </div>
            </div>
            <p className="text-[var(--text-muted)] text-xs leading-relaxed">
              Fully automated mixing, rolling, steaming, and cutting belts with synchronized smart-sync PLC panels.
            </p>
            <div className="mt-4 flex items-center justify-between text-[9px] font-mono text-[var(--text-dark)] font-bold border-t border-[var(--border)] pt-3">
              <span>OUTPUT: UP TO 10T/DAY</span>
              <span className="text-emerald-600 flex items-center gap-1">
                <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" /> READY
              </span>
            </div>
          </div>

          {/* MACHINERY CARD 2: Industrial Boilers and Thermal Vessels */}
          <div className="absolute bottom-4 right-4 sm:right-10 w-[85%] sm:w-[320px] bg-white border border-[var(--border)] rounded-2xl p-6 shadow-xl backdrop-blur-md hover:border-[var(--primary)]/30 transition-all duration-500 group transform hover:-translate-y-1 z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-[var(--accent)] text-[var(--primary)]">
                <Shield size={18} />
              </div>
              <div>
                <h3 className="text-[var(--text-dark)] text-xs font-black uppercase tracking-wider">Non-IBR Boilers</h3>
                <p className="text-[10px] text-[var(--text-muted)] font-mono font-bold">THERMAL SYSTEMS</p>
              </div>
            </div>
            <p className="text-[var(--text-muted)] text-xs leading-relaxed">
              Certified steam boilers and heavy jacketed cooking kettles built without compliance bottlenecks.
            </p>
            <div className="mt-4 flex items-center justify-between text-[9px] font-mono text-[var(--text-muted)] font-bold border-t border-[var(--border)] pt-3">
              <span>MATERIAL: 100% STAINLESS STEEL</span>
            </div>
          </div>

          {/* INDUSTRIAL BADGE 3: Floating Micro Badge */}
          <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-light)] text-[var(--text-light)] font-mono text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl z-30 flex items-center gap-1.5 tracking-wider uppercase animate-bounce pointer-events-none">
            <Zap size={10} className="text-[var(--primary-light)]" fill="currentColor" /> CE CERTIFIED PLANTS
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;