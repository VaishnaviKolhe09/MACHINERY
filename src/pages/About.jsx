// About.jsx
import React from 'react';
import { Shield, Award, Users, Factory } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#faf9f6] text-[#1e293b]">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[45vh] flex items-center justify-center bg-[#0f172a] text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="relative z-10">
          <span className="text-[#f59e0b] font-black uppercase tracking-[0.3em] text-xs block mb-3">WHO WE ARE</span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">ENGINEERING EXCELLENCE</h1>
        </div>
      </section>

      {/* --- CORPORATE VISION --- */}
      <section className="py-24 container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h2 className="text-3xl font-black uppercase text-[#0f172a] tracking-tight mb-6">WE ARE THE BACKBONE OF HIGH-CAPACITY AGRO & FOOD PROCESSING INDUSTRIES</h2>
            <p className="text-slate-600 font-serif text-lg leading-relaxed mb-6">
              Founded on industrial principles of structural integrity and structural endurance, our organization manufactures high-performance food processing machines, automated extruders, steam boilers, and high-pressure jacketed storage vessels.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We operate a massive state-of-the-art CNC precision casting and fabrication foundry, transforming certified steel sheets into heavy machinery lines capable of uninterrupted heavy plant execution cycles.
            </p>
          </div>
          <div className="md:col-span-5 bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 text-white rounded-3xl shadow-xl border-t-4 border-[#f59e0b]">
            <h3 className="font-black text-xl uppercase mb-4 text-[#f59e0b]">Our Standards</h3>
            <ul className="space-y-4 text-xs tracking-wider uppercase font-bold text-slate-300">
              <li className="flex items-center gap-3"><Factory className="text-[#f59e0b]" size={16} /> ISO 9001:2015 Manufacturing</li>
              <li className="flex items-center gap-3"><Shield className="text-[#f59e0b]" size={16} /> ASME Boiler & Vessel Welds</li>
              <li className="flex items-center gap-3"><Award className="text-[#f59e0b]" size={16} /> CE Compliant Electrics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- MANUFACTURING VALUE SEGMENT --- */}
      <section className="bg-white border-y border-slate-100 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <div className="w-12 h-12 bg-amber-50 text-[#f59e0b] rounded-xl flex items-center justify-center font-black text-xl mb-4 mx-auto md:mx-0">01</div>
            <h4 className="font-black uppercase tracking-wider text-[#0f172a] mb-2">Precision Design</h4>
            <p className="text-slate-500 text-sm leading-relaxed">All extruders and dies pass rigorous multi-axis CAD-stress modeling simulations before hitting our production floor.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="w-12 h-12 bg-amber-50 text-[#f59e0b] rounded-xl flex items-center justify-center font-black text-xl mb-4 mx-auto md:mx-0">02</div>
            <h4 className="font-black uppercase tracking-wider text-[#0f172a] mb-2">Tested Under Stress</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Pressure vessels and steam jacketed kettles are hydro-tested at double their atmospheric ratings to guarantee total workplace safety.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="w-12 h-12 bg-amber-50 text-[#f59e0b] rounded-xl flex items-center justify-center font-black text-xl mb-4 mx-auto md:mx-0">03</div>
            <h4 className="font-black uppercase tracking-wider text-[#0f172a] mb-2">On-Site Commissioning</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Our qualified electrical and mechanical layout engineers deploy dynamically to your actual facility floor to execute setup protocols.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;