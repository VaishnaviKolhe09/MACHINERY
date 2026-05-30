// MachineryCatalog.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Navigation ke liye import kiya
import { machineryCategories } from '../MachineryData';
import { ArrowRight, X, MessageSquare, Mail } from 'lucide-react';

const MachineryCatalog = () => {
  const navigate = useNavigate(); // Router navigation instance
  const [activeCategory, setActiveCategory] = useState("all");
  // Modal state jo selected machine ka data store karega (Image click par chalega)
  const [selectedMachine, setSelectedMachine] = useState(null);

  const filteredCatalog = activeCategory === "all" 
    ? machineryCategories 
    : machineryCategories.filter(cat => cat.id === activeCategory);

  // --- OWNER DETAILS CONFIGURATION ---
  const ownerWhatsApp = "919270935931";
  const ownerEmail = "owner@example.com";

  return (
    <div className="bg-[#faf9f6] min-h-screen pt-10 pb-24 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[35vh] sm:h-[45vh] flex items-center justify-center bg-[#0f172a] text-center px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
        <div className="relative z-10 space-y-3">
          <span className="text-[#f59e0b] font-black uppercase tracking-[0.25em] text-[10px] sm:text-xs block"> HEAVY INDUSTRIAL PORTFOLIO</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none italic px-2">PROCESSING SYSTEMS</h1>
        </div>
      </section>

      {/* --- CATEGORY REFINEMENT BAR --- */}
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
                  <div 
                    key={i} 
                    className="flex flex-col bg-white border border-slate-200/60 hover:border-amber-500/30 hover:shadow-2xl transition-all duration-300 group rounded-2xl overflow-hidden"
                  >
                    {/* Visual Render Wrapper - IMAGE CLICK: Opens Contact Popup */}
                    <div 
                      onClick={() => setSelectedMachine(machine)}
                      title="Click to view contact options"
                      className="h-56 bg-slate-50 overflow-hidden relative flex items-center justify-center p-4 border-b border-slate-100 cursor-pointer"
                    >
                      <img src={machine.img} alt={machine.name} loading="lazy" className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[8px] font-bold px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                        Quick Inquiry
                      </span>
                    </div>

                    {/* Content Meta Space */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                      <h3 className="text-base sm:text-lg font-black text-[#0f172a] uppercase tracking-wide transition-colors mb-2 leading-snug break-words">
                        {machine.name}
                      </h3>
                      
                      {/* Price Element */}
                      <div className="mb-4">
                        <span className="text-xs font-black px-3 py-1 bg-amber-50 text-[#f59e0b] border border-amber-200/60 rounded-xl inline-block">
                          {machine.price}
                        </span>
                      </div>
                      
                      {/* Tech Checklist Params */}
                      <div className="space-y-1 mb-6 mt-auto border-t border-slate-100 pt-4">
                        {machine.specs.slice(0, 2).map((sp, idx) => (
                          <div key={idx} className="text-[10px] uppercase font-black text-slate-400 flex items-center gap-1.5 truncate">
                            <span className="w-1 h-1 bg-[#f59e0b] rounded-full flex-shrink-0"></span> {sp}
                          </div>
                        ))}
                      </div>
                      
                      {/* BUTTON CLICK: Navigates to Detail Page */}
                      <button 
                        onClick={() => navigate(`/machinery/${machine.slug || machine.id}`)}
                        className="text-[9px] sm:text-[10px] font-black text-[#f59e0b] hover:text-amber-600 uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-2 text-left w-max"
                      >
                        Get Owner Details <ArrowRight size={12} className="flex-shrink-0" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- OWNER DETAILS MODAL POPUP (Triggered by Image Click) --- */}
      {selectedMachine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative border border-slate-100 animate-scale-up">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMachine(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="bg-slate-50 p-6 flex flex-col items-center border-b border-slate-100 pt-10">
              <div className="h-28 w-28 bg-white p-2 rounded-xl border border-slate-200/60 flex items-center justify-center mb-4 shadow-sm">
                <img src={selectedMachine.img} alt={selectedMachine.name} className="max-w-full max-h-full object-contain" />
              </div>
              <span className="text-[#f59e0b] font-black uppercase text-[9px] tracking-widest block mb-1">Inquiry For</span>
              <h3 className="text-md font-black text-[#0f172a] uppercase text-center tracking-wide px-4 line-clamp-2">
                {selectedMachine.name}
              </h3>
            </div>

            {/* Modal Body / Contact Action Buttons */}
            <div className="p-6 space-y-4">
              <p className="text-center text-xs text-slate-500 font-medium">
                Connect directly with the owner to get blueprints or pricing details.
              </p>

              {/* WhatsApp Button */}
              <a 
                href={`https://wa.me/${ownerWhatsApp}?text=Hi,%20I%20am%20interested%20in%20your%20machinery:%20${encodeURIComponent(selectedMachine.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black uppercase text-xs tracking-wider py-3.5 rounded-xl transition-all shadow-md shadow-green-500/20"
              >
                <MessageSquare size={16} fill="white" />
                Chat on WhatsApp
              </a>

              {/* Email Button */}
              <a 
                href={`mailto:${ownerEmail}?subject=Inquiry%20for%20${encodeURIComponent(selectedMachine.name)}&body=Hi,%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(selectedMachine.name)}.`}
                className="flex items-center justify-center gap-3 w-full bg-[#0f172a] hover:bg-slate-800 text-white font-black uppercase text-xs tracking-wider py-3.5 rounded-xl transition-all shadow-md shadow-slate-900/20"
              >
                <Mail size={16} />
                Send Email Inquiry
              </a>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex justify-between text-[10px] text-slate-400 font-bold uppercase">
              <span>Email: {ownerEmail}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MachineryCatalog;