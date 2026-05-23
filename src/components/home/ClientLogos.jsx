// ClientLogos.jsx
import React from 'react';

const ClientLogos = () => {
  const sectors = ["Agro Industries", "Global Food Labs", "Milling Corp", "Mega Kitchen Chains", "Export Logistics"];
  
  return (
    <section className="bg-[var(--background)] py-12 border-y border-[var(--border)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtitle text ko text-slate-400 se var(--text-muted) par map kiya hai */}
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)] mb-8">
          Trusted by Market Leaders in Commercial Food Processing
        </p>
        
        {/* Sectors text ko primary/secondary contrast scaling di gayi hai */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
          {sectors.map((sector, i) => (
            <div key={i} className="text-xl font-black tracking-tighter text-[var(--secondary)] uppercase italic">
              <span className="text-[var(--primary)] mr-1">✦</span> {sector}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;