// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { machineryCategories } from '../MachineryData';
import { ArrowRight, Settings, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

// Sub-sections Layer Injections
import ClientLogos from '../components/home/ClientLogos';
import ProcessFlow from '../components/home/ProcessFlow';
import FaqSection from '../components/home/FaqSection';

const Home = () => {
  const featuredMachinery = machineryCategories.flatMap(cat => cat.items).filter(item => item.isFeatured);

  return (
    <div className="bg-[#faf9f6] text-[#1e293b] font-sans antialiased overflow-x-hidden">
      
      {/* --- HERO SECTION (Optimized text sizes & tracking for small devices) --- */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:h-[95vh] flex items-center justify-center bg-[#0f172a] overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/75 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <span className="inline-flex items-center gap-2 bg-amber-500/10 text-[#f59e0b] border border-amber-500/20 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[9px] sm:text-xs max-w-full text-center">
            ✦ Precision-Engineered Industrial Fabrication
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none italic px-2">
            HEAVY DUTY <span className="text-[#f59e0b] not-italic block md:inline">PROCESSING</span> SYSTEMS
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-normal px-2 sm:px-4">
            Turnkey engineering automation for large-scale noodle factories, non-IBR industrial boilers, structural vessels, and premium commercial kitchen utilities worldwide.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none px-4 sm:px-0">
            <Link 
              to="/machinery" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#f59e0b] text-white font-black uppercase tracking-widest text-[10px] sm:text-xs rounded-xl hover:bg-amber-600 transition-all shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Explore Processing Catalog <ArrowRight size={14} />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-slate-700 text-white font-black uppercase tracking-widest text-[10px] sm:text-xs rounded-xl hover:bg-white hover:text-[#0f172a] hover:border-white transition-all flex items-center justify-center gap-2"
            >
              Request Plant Layout RFP
            </Link>
          </div>
        </div>
      </section>

      {/* --- BRAND LOOPS TRUST BADGES --- */}
      <ClientLogos />

      {/* --- INDUSTRIAL METRICS GRID (Fluid column wrapping for standard mobiles) --- */}
      <section className="py-12 sm:py-16 bg-[#1e293b] text-white border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-8 text-center">
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f59e0b] tracking-tight">25+</h3>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-slate-400">Years Industry Experience</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f59e0b] tracking-tight">1400+</h3>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-slate-400">Plants Commissioned Globally</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f59e0b] tracking-tight">100%</h3>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-slate-400">Certified SS 304 Metallurgy</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f59e0b] tracking-tight">24/7</h3>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-slate-400">On-Site Deployment Care</p>
          </div>
        </div>
      </section>

      {/* --- TOP HIGH-DEMAND MACHINERY CATALOG --- */}
      <section className="py-20 sm:py-24 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-[#f59e0b] font-black uppercase tracking-widest text-xs block"> HIGH CAPACITY ASSEMBLIES</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0f172a] uppercase tracking-tight">TOP LINE MACHINERY</h2>
          </div>
          <Link 
            to="/machinery" 
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#f59e0b] hover:text-amber-600 transition-colors border-b-2 border-transparent hover:border-amber-600 pb-1 self-start md:self-end"
          >
            View Complete 18 Plant Matrix <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredMachinery.map((machine, i) => (
            <div key={i} className="bg-white border border-slate-200/60 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden flex flex-col group transition-all duration-300">
              <div className="h-48 sm:h-60 bg-slate-100 relative overflow-hidden">
                <img 
                  src={machine.img} 
                  alt={machine.name} 
                  loading="lazy" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 bg-[#0f172a] text-[#f59e0b] border border-slate-800 px-2.5 py-1 text-[8px] sm:text-[9px] font-black uppercase tracking-widest rounded-lg">
                  Top Seller
                </span>
              </div>
              
              <div className="p-5 sm:p-6 flex flex-col flex-grow space-y-4">
                {/* line-clamp-1 removed to show full title */}
                <h3 className="text-base sm:text-lg font-black uppercase text-[#0f172a] group-hover:text-[#f59e0b] transition-colors tracking-wide">
                  {machine.name}
                </h3>
                {/* line-clamp-3 removed to show full description */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {machine.desc}
                </p>
                
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <Link 
                    to={`/machinery/${machine.slug}`} 
                    className="w-full text-center flex items-center justify-center gap-1.5 bg-[#0f172a] text-white font-black text-[10px] uppercase tracking-widest py-3.5 rounded-xl group-hover:bg-[#f59e0b] transition-all shadow-md"
                  >
                    Technical Specifications <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEW FLOW INJECTION LAYER --- */}
      <ProcessFlow />

      {/* --- INDUSTRIAL CORE ADVANTAGES --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-32 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-2">
            <span className="text-[#f59e0b] font-black uppercase tracking-widest text-xs block"> PERFORMANCE MATRIX</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0f172a] uppercase tracking-tight">ENGINEERED FOR ENDURANCE</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
            <div className="space-y-3 sm:space-y-4 p-2">
              <div className="w-12 h-12 bg-amber-50 text-[#f59e0b] rounded-xl flex items-center justify-center"><Cpu size={24} /></div>
              <h4 className="text-base sm:text-lg font-black uppercase tracking-wide text-[#0f172a]">Smart PLC Integration</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Delta/Siemens precision screens enable precise logic sequences tracking temperature curves and pressure profiles live.</p>
            </div>
            <div className="space-y-3 sm:space-y-4 p-2">
              <div className="w-12 h-12 bg-amber-50 text-[#f59e0b] rounded-xl flex items-center justify-center"><ShieldCheck size={24} /></div>
              <h4 className="text-base sm:text-lg font-black uppercase tracking-wide text-[#0f172a]">ASME-Grade Stainless Steel</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">No low-tier composites. All pressure chambers, pipelines, and shredding modules feature robust certified food grade SS 304 sheets.</p>
            </div>
            <div className="space-y-3 sm:space-y-4 p-2">
              <div className="w-12 h-12 bg-amber-50 text-[#f59e0b] rounded-xl flex items-center justify-center"><Settings size={24} /></div>
              <h4 className="text-base sm:text-lg font-black uppercase tracking-wide text-[#0f172a]">Turnkey Infrastructure Layout</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">From initial design layouts to high pressure testing and physical factory commissioning, our team handles the full loop lifecycle.</p>
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