// Contact.jsx
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-[#faf9f6] text-[#1e293b] min-h-screen pb-24">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[45vh] flex items-center justify-center bg-[#0f172a] text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="relative z-10">
          <span className="text-[#f59e0b] font-black uppercase tracking-[0.3em] text-xs block mb-3">GLOBAL PROCUREMENT OFFICE</span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">CONNECT WITH ENGINEERS</h1>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-16 max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Plant Core Address Details */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <span className="text-[#f59e0b] font-black text-xs uppercase tracking-widest"> GLOBAL DESK</span>
              <h2 className="text-2xl font-black uppercase text-[#0f172a] tracking-tight mt-1">HEADQUARTERS</h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="text-[#f59e0b] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-black text-xs uppercase tracking-wider text-[#0f172a]">Manufacturing Foundry Address:</h4>
                  <p className="text-sm text-slate-500 font-serif mt-1">Plot 41B, Industrial Heavy Engineering Zone, Sector 4, MIDC Area, India.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="text-[#f59e0b] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-black text-xs uppercase tracking-wider text-[#0f172a]">Sales & Tenders Hotline:</h4>
                  <p className="text-sm text-slate-500 font-bold mt-1">+91 98765 43210 / +91 22 2456 7890</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail className="text-[#f59e0b] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-black text-xs uppercase tracking-wider text-[#0f172a]">Commercial Engineering Mail:</h4>
                  <p className="text-sm text-slate-500 font-bold mt-1">tenders@industrialmachinery.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="text-[#f59e0b] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-black text-xs uppercase tracking-wider text-[#0f172a]">Operational Evaluation Hours:</h4>
                  <p className="text-sm text-slate-500 mt-1">Monday – Saturday: 09:00 Hrs to 18:00 Hrs IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Scale Infrastructure Plant RFP Form */}
          <div className="md:col-span-7 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
            <h3 className="font-black text-xl text-[#0f172a] uppercase tracking-tight mb-2">SCHEDULE AN INFRASTRUCTURE DEPLOYMENT CALL</h3>
            <p className="text-xs text-slate-400 uppercase font-black mb-6"> OUR INDUSTRIAL CONSULTANTS WILL EVALUATE YOUR REQUIREMENTS WITHIN 24 HOURS.</p>
            
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="text-xs font-bold p-3 border border-slate-200 bg-slate-50 rounded-xl w-full focus:outline-none focus:border-[#f59e0b]" />
              <input type="text" placeholder="Last Name" className="text-xs font-bold p-3 border border-slate-200 bg-slate-50 rounded-xl w-full focus:outline-none focus:border-[#f59e0b]" />
              <input type="email" placeholder="Corporate Email" className="text-xs font-bold p-3 border border-slate-200 bg-slate-50 rounded-xl w-full focus:outline-none focus:border-[#f59e0b]" />
              <input type="text" placeholder="Company Name" className="text-xs font-bold p-3 border border-slate-200 bg-slate-50 rounded-xl w-full focus:outline-none focus:border-[#f59e0b]" />
              <div className="sm:col-span-2">
                <select className="text-xs font-bold p-3 border border-slate-200 bg-slate-50 rounded-xl w-full focus:outline-none focus:border-[#f59e0b]">
                  <option>Select Expected Target Production Output</option>
                  <option>Under 200 kg/hr batch</option>
                  <option>500 kg/hr - 1 Ton/hr line</option>
                  <option>Turnkey Full Scale Automated Facility</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <textarea rows="4" placeholder="Describe layout customization options, material grade changes or custom extrusion die demands..." className="text-xs font-bold p-3 border border-slate-200 bg-slate-50 rounded-xl w-full focus:outline-none focus:border-[#f59e0b]"></textarea>
              </div>
              <div className="sm:col-span-2">
                <button type="button" className="w-full bg-[#0f172a] hover:bg-[#f59e0b] text-white font-black uppercase text-xs tracking-widest py-4 rounded-xl transition-colors shadow-lg">
                  Submit Formal Tender / Request For Proposal
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;