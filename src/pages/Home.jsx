// Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { machineryCategories } from '../MachineryData';
import { ArrowRight, Settings, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

// Sub-sections Layer Injections
import ClientLogos from '../components/home/ClientLogos';
import ProcessFlow from '../components/home/ProcessFlow';
import FaqSection from '../components/home/FaqSection';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const featuredMachinery = machineryCategories.flatMap(cat => cat.items).filter(item => item.isFeatured);

  // States for animated counters
  const [yearsExp, setYearsExp] = useState(0);
  const [plantsComm, setPlantsComm] = useState(0);
  const [metallurgy, setMetallurgy] = useState(0);

  useEffect(() => {
    // Animation Duration setup
    const duration = 5000; // 2 seconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      
      // Target values: 25, 1400, 100
      const progressYears = Math.min(Math.round((25 / totalFrames) * frame), 25);
      const progressPlants = Math.min(Math.round((1400 / totalFrames) * frame), 1400);
      const progressMetal = Math.min(Math.round((100 / totalFrames) * frame), 100);

      setYearsExp(progressYears);
      setPlantsComm(progressPlants);
      setMetallurgy(progressMetal);

      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[var(--background)] text-[var(--text-dark)] font-sans antialiased overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <HeroSection />

      {/* --- BRAND LOOPS TRUST BADGES --- */}
      <ClientLogos />

      {/* --- INDUSTRIAL METRICS GRID --- */}
      <section className="py-12 sm:py-16 bg-[var(--secondary)] text-[var(--text-light)] border-b border-[var(--secondary-light)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-8 text-center">
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--primary-light)] tracking-tight">{yearsExp}+</h3>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-[var(--text-muted)]">Years Industry Experience</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--primary-light)] tracking-tight">{plantsComm}+</h3>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-[var(--text-muted)]">Plants Commissioned Globally</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--primary-light)] tracking-tight">{metallurgy}%</h3>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-[var(--text-muted)]">Certified SS 304 Metallurgy</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--primary-light)] tracking-tight">24/7</h3>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-[var(--text-muted)]">On-Site Deployment Care</p>
          </div>
        </div>
      </section>

      {/* --- TOP HIGH-DEMAND MACHINERY CATALOG --- */}
      <section className="py-10 sm:py-8 lg:py-14 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-[var(--primary)] font-black uppercase tracking-widest text-xs block"> HIGH CAPACITY ASSEMBLIES</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[var(--text-dark)] uppercase tracking-tight">TOP LINE MACHINERY</h2>
          </div>
          <Link 
            to="/machinery" 
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-black uppercase tracking-widest text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors border-b-2 border-transparent hover:border-[var(--primary-light)] pb-1 self-start md:self-end"
          >
            View Complete 18 Plant Matrix <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredMachinery.map((machine, i) => (
            <div key={i} className="bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-xl rounded-2xl overflow-hidden flex flex-col group transition-all duration-300">
              <div className="h-48 sm:h-60 bg-[var(--background)] relative overflow-hidden p-4 flex items-center justify-center">
                <img 
                  src={machine.img} 
                  alt={machine.name} 
                  loading="lazy" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 bg-[var(--secondary)] text-[var(--primary-light)] border border-[var(--secondary-light)] px-2.5 py-1 text-[8px] sm:text-[9px] font-black uppercase tracking-widest rounded-lg">
                  Top Seller
                </span>
              </div>
              
              <div className="p-5 sm:p-6 flex flex-col flex-grow space-y-4">
                <h3 className="text-base sm:text-lg font-black uppercase text-[var(--text-dark)] group-hover:text-[var(--primary)] transition-colors tracking-wide">
                  {machine.name}
                </h3>
                <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">
                  {machine.desc}
                </p>
                
                <div className="pt-4 border-t border-[var(--border)] mt-auto">
                  <Link 
                    to={`/machinery/${machine.slug}`} 
                    className="w-full text-center flex items-center justify-center gap-1.5 bg-[var(--secondary)] text-[var(--text-light)] hover:bg-[var(--primary)] font-black text-[10px] uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-md"
                  >
                    Technical Specifications <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROCESS FLOW INJECTION LAYER --- */}
      <ProcessFlow />

      {/* --- INDUSTRIAL CORE ADVANTAGES --- */}
      <section className="bg-[var(--surface)] py-8 sm:py-8 lg:py-14 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-2">
            <span className="text-[var(--primary)] font-black uppercase tracking-widest text-xs block"> PERFORMANCE MATRIX</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[var(--text-dark)] uppercase tracking-tight">ENGINEERED FOR ENDURANCE</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
            <div className="space-y-3 sm:space-y-4 p-2">
              <div className="w-12 h-12 bg-[var(--accent)] text-[var(--primary)] rounded-xl flex items-center justify-center"><Cpu size={24} /></div>
              <h4 className="text-base sm:text-lg font-black uppercase tracking-wide text-[var(--text-dark)]">Smart PLC Integration</h4>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">Delta/Siemens precision screens enable precise logic sequences tracking temperature curves and pressure profiles live.</p>
            </div>
            <div className="space-y-3 sm:space-y-4 p-2">
              <div className="w-12 h-12 bg-[var(--accent)] text-[var(--primary)] rounded-xl flex items-center justify-center"><ShieldCheck size={24} /></div>
              <h4 className="text-base sm:text-lg font-black uppercase tracking-wide text-[var(--text-dark)]">ASME-Grade Stainless Steel</h4>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">No low-tier composites. All pressure chambers, pipelines, and shredding modules feature robust certified food grade SS 304 sheets.</p>
            </div>
            <div className="space-y-3 sm:space-y-4 p-2">
              <div className="w-12 h-12 bg-[var(--accent)] text-[var(--primary)] rounded-xl flex items-center justify-center"><Settings size={24} /></div>
              <h4 className="text-base sm:text-lg font-black uppercase tracking-wide text-[var(--text-dark)]">Turnkey Infrastructure Layout</h4>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">From initial design layouts to high pressure testing and physical factory commissioning, our team handles the full loop lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL FAQS LAYER --- */}
      <FaqSection />

    </div>
  );
};

export default Home;