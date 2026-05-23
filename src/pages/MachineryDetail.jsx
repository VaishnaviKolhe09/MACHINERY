// MachineryDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { machineryCategories } from '../MachineryData';
import { ArrowLeft, ShieldCheck, Cpu, Anchor, Tag } from 'lucide-react';

const MachineryDetail = () => {
  const { slug } = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const machine = machineryCategories
    .flatMap(cat => cat.items)
    .find(m => m.slug === slug);

  if (!machine) {
    return (
      <div className="py-32 text-center bg-[#faf9f6] text-[#0f172a]">
        <h3 className="text-2xl font-black uppercase">Industrial Item Not Found</h3>
        <Link to="/machinery" className="text-[#f59e0b] font-bold underline mt-4 block">Return to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] pt-12 pb-24">
      {/* --- HERO BANNER --- */}
      <section className="relative h-[30vh] flex items-center justify-center bg-[#0f172a] text-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${machine.img})` }}></div>
        <div className="relative z-10">
          <Link to="/machinery" className="inline-flex items-center gap-2 bg-[#f59e0b] text-white px-5 py-2 rounded-full font-black text-[9px] uppercase tracking-widest hover:bg-amber-600 transition-all shadow-lg hover:-translate-y-0.5 mb-2">
            <ArrowLeft size={12} /> Back to Catalog
          </Link>
        </div>
      </section>

      {/* --- CORE DATA LAYOUT --- */}
      <div className="container mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Image View */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 rounded-3xl sticky top-28 shadow-sm">
            <div className="h-80 w-full bg-slate-50 rounded-2xl overflow-hidden mb-4 flex items-center justify-center p-4 border border-slate-100">
              <img src={machine.img} alt={machine.name} className="max-w-full max-h-full object-contain" />
            </div>
          </div>

          {/* Right Block: Tech Specifics & Pricing Panel */}
          <div className="lg:col-span-7">
            <span className="text-[#f59e0b] font-black uppercase tracking-[0.2em] text-[10px] block mb-2"> COMMERCIALLY CERTIFIED SYSTEMS</span>
            <h1 className="text-2xl md:text-4xl font-black text-[#0f172a] uppercase tracking-tight leading-none mb-4 italic">{machine.name}</h1>
            
            {/* Commercial Valuation Container */}
            <div className="mb-6 flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-3 rounded-xl w-fit">
              <Tag size={18} className="text-[#f59e0b]" />
              <span className="text-xs uppercase font-black text-slate-500 tracking-wider">Industrial Valuation:</span>
              <span className="text-xl font-black text-[#0f172a] ml-1">{machine.price}</span>
            </div>

            <p className="text-lg text-slate-600 font-serif italic leading-relaxed mb-8 border-l-4 border-[#f59e0b] pl-6">"{machine.desc}"</p>

            {/* Spec Sheet & Request Form Matrix */}
            <div className="grid md:grid-cols-2 gap-8 bg-white p-8 border border-slate-200 rounded-3xl shadow-sm mb-8">
              <div>
                <h4 className="font-black uppercase tracking-wider text-[#0f172a] text-xs mb-4 flex items-center gap-2"><Cpu size={16} className="text-[#f59e0b]" /> Data Parameters:</h4>
                <ul className="space-y-3">
                  {machine.specs.map((sp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700 text-xs font-bold uppercase tracking-wide leading-tight">
                      <ShieldCheck size={14} className="text-[#f59e0b] mt-0.5 flex-shrink-0" /> {sp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instant Plant Inquiry Setup Form */}
              <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
                <h4 className="font-black uppercase tracking-wider text-[#0f172a] text-xs mb-4 flex items-center gap-2"><Anchor size={16} className="text-[#f59e0b]" /> RFQ - Request Pricing:</h4>
                
                {formSubmitted ? (
                  <div className="p-4 bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-wider rounded-xl text-center">
                    Engineering Request Logged! Our technical team will call within 4 hours.
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-3">
                    <input required type="text" placeholder="Corporate Name / Buyer" className="w-full text-xs font-bold p-3 border border-slate-200 bg-slate-50 focus:outline-none focus:border-[#f59e0b] rounded-xl" />
                    <input required type="email" placeholder="Business Email Address" className="w-full text-xs font-bold p-3 border border-slate-200 bg-slate-50 focus:outline-none focus:border-[#f59e0b] rounded-xl" />
                    <input required type="tel" placeholder="Contact/WhatsApp Number" className="w-full text-xs font-bold p-3 border border-slate-200 bg-slate-50 focus:outline-none focus:border-[#f59e0b] rounded-xl" />
                    <button type="submit" className="w-full bg-[#f59e0b] text-white font-black uppercase text-[10px] tracking-widest py-3.5 rounded-xl hover:bg-amber-600 transition-colors shadow-lg">
                      Submit Technical Inquiry Form
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MachineryDetail;