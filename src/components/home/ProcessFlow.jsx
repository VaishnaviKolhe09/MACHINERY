import React from 'react';
import { Leaf, Sliders, Flame, Box } from 'lucide-react';

const ProcessFlow = () => {
  const steps = [
    { icon: <Leaf size={24} />, title: "1. Raw Intake & Mixing", desc: "Stainless Steel Dough mixers prepare unified continuous starch hydration bases." },
    { icon: <Sliders size={24} />, title: "2. Heavy Extrusion", desc: "High-torque twin screw extruders shape material via customized precision dies." },
    { icon: <Flame size={24} />, title: "3. Thermal Steaming", desc: "Tunnel systems parboil product structures uniformly under monitored bar pressure." },
    { icon: <Box size={24} />, title: "4. Air Moisture Controls", desc: "Cross-circulation hot air cabinets reduce core humidity below strict 12% levels." }
  ];

  return (
    <section className="bg-[#0f172a] py-24 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#f59e0b] font-black uppercase tracking-[0.25em] text-xs block mb-3"> INTEGRATED WORKFLOW</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">THE AUTOMATION PROCESS FLOW</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-[#1e293b] p-8 rounded-2xl border border-slate-800 relative group hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-[#f59e0b] mb-6 group-hover:bg-[#f59e0b] group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider mb-3 text-white">{step.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;