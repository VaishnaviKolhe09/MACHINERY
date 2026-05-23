// FaqSection.jsx
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
    <section className="py-10 bg-[var(--background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* --- HEADER TITLE SECTION --- */}
        <div className="text-center mb-10">
          <span className="text-[var(--primary)] font-black uppercase tracking-widest text-xs block mb-3">
            TECHNICAL BRIEFINGS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-dark)] uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* --- ACCORDION GRID LAYOUT --- */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Accordion Trigger Button */}
              <button 
                onClick={() => setActive(active === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center bg-[var(--surface)] hover:bg-[var(--accent)] hover:bg-opacity-40 transition-colors"
              >
                <span className="font-bold text-sm sm:text-base uppercase tracking-wide text-[var(--text-dark)] pr-4">
                  {faq.q}
                </span>
                <div className="flex-shrink-0">
                  {active === idx ? (
                    <Minus size={18} className="text-[var(--primary)]" />
                  ) : (
                    <Plus size={18} className="text-[var(--primary)]" />
                  )}
                </div>
              </button>
              
              {/* Accordion Content Block */}
              {active === idx && (
                <div className="p-6 pt-0 text-[var(--text-muted)] text-sm border-t border-[var(--border)] bg-[var(--background)] bg-opacity-50 leading-relaxed">
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