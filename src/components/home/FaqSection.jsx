import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqSection = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    { q: "What steel grade guarantees are provided with the vessels?", a: "Every single contact element is strictly cast from certified Food-Grade SS 304 or SS 316. Mill test certificates are dispatched with final machine assembly packages." },
    { q: "Can we request custom cross-sectional dies for macaroni production?", a: "Yes. Our structural engineering cell develops highly precise customized toolings via multi-axis CNC workflows based on client dimensions." },
    { q: "What are the infrastructure requirements for the Wood Fired Boiler?", a: "Our Non-IBR solid biomass systems require standard level concrete bedding, water feedback plumbing, and high-altitude venting outlets as per local safety laws." }
  ];

  return (
    <section className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-[#f59e0b] font-black uppercase tracking-widest text-xs block mb-3"> TECHNICAL BRIEFINGS</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] uppercase tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setActive(active === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-sm sm:text-base uppercase tracking-wide text-[#0f172a]">{faq.q}</span>
                {active === idx ? <Minus size={18} className="text-[#f59e0b]" /> : <Plus size={18} className="text-[#f59e0b]" />}
              </button>
              {active === idx && (
                <div className="p-6 pt-0 text-slate-500 text-sm border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;