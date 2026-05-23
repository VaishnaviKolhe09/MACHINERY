// About.jsx
import React from 'react';
import { Shield, Award, Users, Factory, Wrench, Settings, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[var(--background)] text-[var(--text-dark)] pt-10">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[45vh] flex items-center justify-center bg-[var(--secondary)] text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="relative z-10">
          <span className="text-[var(--primary-light)] font-black uppercase tracking-[0.3em] text-xs block mb-3">INDUSTRIAL PLANT SUPPLIERS</span>
          <h1 className="text-4xl md:text-6xl font-black text-[var(--text-light)] uppercase tracking-tighter italic">FOOD MACHINERY SOLUTIONS</h1>
        </div>
      </section>

      {/* --- CORPORATE VISION --- */}
      <section className="py-10 container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h2 className="text-3xl font-black uppercase text-[var(--text-dark)] tracking-tight mb-6">YOUR TRADING PARTNER FOR COMMERCIAL-GRADE FOOD PROCESSING SYSTEMS</h2>
            <p className="text-[var(--text-muted)] font-serif text-lg leading-relaxed mb-6">
              We specialize in sourcing, supplying, and setting up high-yield food processing units, automatic snack extruders, industrial boilers, and commercial jacketed processing kettles designed for peak business scalability.
            </p>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Whether you are expanding a processing line or launching a brand-new turnkey food production factory, we deliver high-efficiency automated machinery that slashes overhead costs and increases output metrics.
            </p>
          </div>
          <div className="md:col-span-5 bg-gradient-to-br from-[var(--secondary-light)] to-[var(--secondary)] p-8 text-[var(--text-light)] rounded-3xl shadow-xl border-t-4 border-[var(--primary-light)]">
            <h3 className="font-black text-xl uppercase mb-4 text-[var(--primary-light)]">Sourcing Standards</h3>
            <ul className="space-y-4 text-xs tracking-wider uppercase font-bold text-slate-300">
              <li className="flex items-center gap-3"><Factory className="text-[var(--primary-light)]" size={16} /> Food-Grade SUS304/316 Steel</li>
              <li className="flex items-center gap-3"><Shield className="text-[var(--primary-light)]" size={16} /> Certified High-Pressure Weldments</li>
              <li className="flex items-center gap-3"><Award className="text-[var(--primary-light)]" size={16} /> Fully Automated PLC Controls</li>
            </ul>
          </div>
        </div>
      </section>


      {/* --- CORE MACHINERY PORTFOLIO (NEW SECTION) --- */}
      <section className="py-10 bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-[var(--primary)] font-black text-xs uppercase tracking-widest">PRODUCT CATEGORIES</span>
            <h2 className="text-3xl font-black uppercase text-[var(--text-dark)] tracking-tight mt-2">MACHINERY PORTFOLIO WE SUPPLY</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border)] shadow-sm">
              <Settings className="text-[var(--primary)] mb-4" size={28} />
              <h3 className="font-black text-base uppercase text-[var(--text-dark)] mb-2">Automated Extruders</h3>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">High-pressure single and twin-screw extrusion systems optimized for snacks, core-filled foods, and textured soy proteins.</p>
            </div>
            <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border)] shadow-sm">
              <Wrench className="text-[var(--primary)] mb-4" size={28} />
              <h3 className="font-black text-base uppercase text-[var(--text-dark)] mb-2">Thermal Processing</h3>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">Steam boilers, double-jacketed heating kettles, and automated pasteurization lines with accurate heat controls.</p>
            </div>
            <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border)] shadow-sm">
              <Factory className="text-[var(--primary)] mb-4" size={28} />
              <h3 className="font-black text-base uppercase text-[var(--text-dark)] mb-2">Turnkey Plant Lines</h3>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">Complete end-to-end processing lines from materials raw batching, mixing, frying, air-drying to centralized automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MANUFACTURING VALUE SEGMENT --- */}
      <section className="bg-[var(--text-light)] border-y border-[var(--border)] py-20">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <div className="w-12 h-12 bg-[var(--accent)] text-[var(--primary)] rounded-xl flex items-center justify-center font-black text-xl mb-4 mx-auto md:mx-0">01</div>
            <h4 className="font-black uppercase tracking-wider text-[var(--text-dark)] mb-2">Custom Die Layouts</h4>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">Get tailored molds, customized extrusion shapes, and output capacity configurations optimized for your exact product line.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="w-12 h-12 bg-[var(--accent)] text-[var(--primary)] rounded-xl flex items-center justify-center font-black text-xl mb-4 mx-auto md:mx-0">02</div>
            <h4 className="font-black uppercase tracking-wider text-[var(--text-dark)] mb-2">Quality Guaranteed</h4>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">Every piece of machinery undergoes rigorous pre-shipment trials and load stress testing to assure complete on-site operational safety.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="w-12 h-12 bg-[var(--accent)] text-[var(--primary)] rounded-xl flex items-center justify-center font-black text-xl mb-4 mx-auto md:mx-0">03</div>
            <h4 className="font-black uppercase tracking-wider text-[var(--text-dark)] mb-2">Turnkey Deployment</h4>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">Our execution engineers handle the complete process: from delivery on your factory floor to system configuration and trial runs.</p>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIAL CLIENT JOURNEY (NEW SECTION) --- */}
      <section className="py-14 container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-[var(--primary)] font-black text-xs uppercase tracking-widest">DEPLOYMENT PROCESS</span>
          <h2 className="text-3xl font-black uppercase text-[var(--text-dark)] tracking-tight mt-2">HOW WE EXECUTE YOUR BLUEPRINTS</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-10 relative">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[var(--primary)] font-black uppercase text-xs tracking-wider">
              <CheckCircle2 size={16} /> Step 01
            </div>
            <h4 className="font-black text-sm uppercase text-[var(--text-dark)]">Requirement Evaluation</h4>
            <p className="text-[var(--text-muted)] text-xs leading-relaxed">Our engineers analyze your baseline output targets, layout area availability, and raw material attributes.</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[var(--primary)] font-black uppercase text-xs tracking-wider">
              <CheckCircle2 size={16} /> Step 02
            </div>
            <h4 className="font-black text-sm uppercase text-[var(--text-dark)]">Mold & Layout Engineering</h4>
            <p className="text-[var(--text-muted)] text-xs leading-relaxed">Custom die designs and equipment footprints are rendered via multi-axis simulations to match facility layouts.</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[var(--primary)] font-black uppercase text-xs tracking-wider">
              <CheckCircle2 size={16} /> Step 03
            </div>
            <h4 className="font-black text-sm uppercase text-[var(--text-dark)]">Procurement & Testing</h4>
            <p className="text-[var(--text-muted)] text-xs leading-relaxed">Machinery is sourced to strict specifications and run through structural high-load stress trials prior to packing.</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[var(--primary)] font-black uppercase text-xs tracking-wider">
              <CheckCircle2 size={16} /> Step 04
            </div>
            <h4 className="font-black text-sm uppercase text-[var(--text-dark)]">On-Site Activation</h4>
            <p className="text-[var(--text-muted)] text-xs leading-relaxed">Full installation, configuration of PLC nodes, dynamic system testing, and operational orientation for plant staff.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;