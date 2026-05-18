import React from 'react';

const ClientLogos = () => {
  const sectors = ["Agro Industries", "Global Food Labs", "Milling Corp", "Mega Kitchen Chains", "Export Logistics"];
  
  return (
    <section className="bg-white py-12 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Trusted by Market Leaders in Commercial Food Processing</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
          {sectors.map((sector, i) => (
            <div key={i} className="text-xl font-black tracking-tighter text-[#0f172a] uppercase italic">
              ✦ {sector}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;