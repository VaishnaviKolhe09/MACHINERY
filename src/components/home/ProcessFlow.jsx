// ProcessFlow.jsx
import React from 'react';
import { Leaf, Sliders, Flame, Box } from 'lucide-react';

const ProcessFlow = () => {
  const steps = [
    { icon: <Leaf size={24} />, title: "1. Automated Batch Mixing", desc: "Heavy-duty Stainless Steel SUS304 mixers blend raw materials uniformly to achieve perfect hydration and continuous feeding bases." },
    { icon: <Sliders size={24} />, title: "2. High-Tensile Extrusion", desc: "High-torque single/twin screw extruders shape, cook, and cut the food matrix dynamically via customized precision alloy dies." },
    { icon: <Flame size={24} />, title: "3. Continuous Thermal Processing", desc: "Integrated steam tunnel or roasting units parboil and crisp the structures uniformly under precise PLC-monitored pressure and temperature controls." },
    { icon: <Box size={24} />, title: "4. Moisture Control & Cooling", desc: "Cross-circulation hot air dryers and multi-tier cooling beds systematically reduce core moisture below 12% for extended retail shelf life." }
  ];

  return (
    <section className="bg-[var(--background)] py-10 text-[var(--text-dark)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION TITLE --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--primary)] font-black uppercase tracking-[0.25em] text-xs block mb-3"> 
            INTEGRATED WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase text-[var(--text-dark)]">
            THE AUTOMATION PROCESS FLOW
          </h2>
        </div>

        {/* --- FLOW STEPS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--border)] relative group hover:border-[var(--primary-light)] transition-all shadow-sm"
            >
              {/* Icon Container with Theme mapping */}
              <div className="w-12 h-12 bg-[var(--background)] border border-[var(--border)] rounded-xl flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-[var(--text-light)] transition-colors shadow-sm">
                {step.icon}
              </div>
              
              <h4 className="text-lg font-bold uppercase tracking-wider mb-3 text-[var(--text-dark)]">
                {step.title}
              </h4>
              
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessFlow;