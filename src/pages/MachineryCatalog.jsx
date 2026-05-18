// MachineryCatalog.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { machineryCategories } from '../MachineryData';
import { ArrowRight } from 'lucide-react';

const MachineryCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCatalog = activeCategory === "all" 
    ? machineryCategories 
    : machineryCategories.filter(cat => cat.id === activeCategory);

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-24 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[35vh] sm:h-[45vh] flex items-center justify-center bg-[#0f172a] text-center px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
        <div className="relative z-10 space-y-3">
          <span className="text-[#f59e0b] font-black uppercase tracking-[0.25em] text-[10px] sm:text-xs block"> HEAVY INDUSTRIAL PORTFOLIO</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none italic px-2">PROCESSING SYSTEMS</h1>
        </div>
      </section>

      {/* --- CATEGORY REFINEMENT BAR (Sticky Desktop / Scrollable Mobile) --- */}
      <div className="bg-white border-b border-slate-200 sticky top-[79px] z-30 shadow-sm overflow-x-auto whitespace-nowrap scrollbar-none">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex gap-2 md:justify-center min-w-max md:min-w-0">
          <button 
            onClick={() => setActiveCategory("all")} 
            className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${activeCategory === "all" ? "bg-[#f59e0b] text-white shadow-md shadow-amber-500/10" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            Show All Infrastructure
          </button>
          {machineryCategories.map((cat) => (
            <button 
              key={cat.id} 
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${activeCategory === cat.id ? "bg-[#f59e0b] text-white shadow-md shadow-amber-500/10" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* --- CATALOG SYSTEM GRID --- */}
      <section className="container mx-auto px-4 sm:px-6 mt-16">
        <div className="grid gap-20">
          {filteredCatalog.map((category) => (
            <div key={category.id} className="border-b border-slate-200/60 pb-16 last:border-0">
              <div className="mb-10 space-y-1">
                <span className="text-[#f59e0b] font-black uppercase text-[10px] sm:text-xs tracking-widest block"> CATEGORY SEGMENT</span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] uppercase tracking-tight">{category.name}</h2>
                <p className="text-slate-500 font-serif italic text-xs sm:text-sm">{category.tagline}</p>
              </div>

              {/* Responsive Cards Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {category.items.map((machine, i) => (
                  <Link 
                    to={`/machinery/${machine.slug}`} 
                    key={i} 
                    className="flex flex-col bg-white border border-slate-200/60 hover:border-amber-500/30 hover:shadow-2xl transition-all duration-300 group rounded-2xl overflow-hidden"
                  >
                    {/* Visual Render Wrapper */}
                    <div className="h-48 sm:h-52 bg-slate-50 overflow-hidden relative">
                      <img src={machine.img} alt={machine.name} loading="lazy" className="w-full h-full object-content group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    {/* Content Meta Space */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                      {/* FIXED: Removed line-clamp-1 and replaced with normal tracking rules for full display wrap */}
                      <h3 className="text-base sm:text-lg font-black text-[#0f172a] uppercase tracking-wide group-hover:text-[#f59e0b] transition-colors mb-2 leading-snug break-words">
                        {machine.name}
                      </h3>
                      
                      {/* <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{machine.desc}</p> */}
                      
                      {/* Tech Checklist Params */}
                      <div className="space-y-1 mb-6 mt-auto border-t border-slate-50 pt-4">
                        {machine.specs.slice(0, 2).map((sp, idx) => (
                          <div key={idx} className="text-[10px] uppercase font-black text-slate-400 flex items-center gap-1.5 truncate">
                            <span className="w-1 h-1 bg-[#f59e0b] rounded-full flex-shrink-0"></span> {sp}
                          </div>
                        ))}
                      </div>
                      
                      {/* Interactive Call Button Link */}
                      <span className="text-[9px] sm:text-[10px] font-black text-[#f59e0b] uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-2">
                        Request Blueprint Layout & Price <ArrowRight size={12} className="flex-shrink-0" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MachineryCatalog;