// MachineryDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { machineryCategories } from '../MachineryData';
import { ArrowLeft, ShieldCheck, Cpu, Anchor, FileText } from 'lucide-react';

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
    <div className="min-h-screen bg-[#faf9f6] pb-24">
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
          
          {/* Left Block: Render Visual */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 rounded-3xl sticky top-28 shadow-sm">
            <div className="h-80 w-full bg-slate-50 rounded-2xl overflow-hidden mb-4">
              <img src={machine.img} alt={machine.name} className="w-full h-full object-cover" />
            </div>
            {/* <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
              <FileText className="text-[#f59e0b]" size={20} />
              <div>
                <p className="text-[10px] font-black uppercase text-[#0f172a]">Download PDF Brochure</p>
                <p className="text-[9px] text-slate-400 uppercase font-bold">Includes exact dimensions & power curves</p>
              </div>
            </div> */}
          </div>

          {/* Right Block: Tech Specifics & Inquiry */}
          <div className="lg:col-span-7">
            <span className="text-[#f59e0b] font-black uppercase tracking-[0.2em] text-[10px] block mb-2"> COMMERCIALLY CERTIFIED SYSTEMS</span>
            <h1 className="text-3xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tight leading-none mb-6 italic">{machine.name}</h1>
            <p className="text-lg text-slate-600 font-serif italic leading-relaxed mb-8 border-l-4 border-[#f59e0b] pl-6">"{machine.desc}"</p>

            {/* Spec Sheet Grid */}
            <div className="grid md:grid-cols-2 gap-8 bg-white p-8 border border-slate-200 rounded-3xl shadow-sm mb-8">
              <div>
                <h4 className="font-black uppercase tracking-wider text-[#0f172a] text-xs mb-4 flex items-center gap-2"><Cpu size={16} className="text-[#f59e0b]" /> Data Parameters:</h4>
                <ul className="space-y-3">
                  {machine.specs.map((sp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700 text-xs font-bold uppercase tracking-wide">
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