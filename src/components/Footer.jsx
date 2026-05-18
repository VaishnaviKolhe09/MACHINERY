// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Phone, Mail, MapPin, ShieldCheck, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- TOP GRID INFRASTRUCTURE --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-slate-800 text-slate-400 text-xs leading-relaxed">
          
          {/* Brand Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Layers className="text-[#f59e0b]" size={22} />
              <span className="font-black tracking-tighter text-base uppercase">NEXUS INDUSTRIAL</span>
            </div>
            <p className="font-serif italic text-slate-400 max-w-sm">
              "Engineering certified global infrastructure and turnkey processing systems for modern industrial food automation units."
            </p>
            <div className="pt-2 flex flex-col gap-1">
              <span className="text-[10px] uppercase font-black text-slate-500">Global Registry Desk:</span>
              <span className="text-white font-bold tracking-wide">tenders@industrialmachinery.com</span>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div>
            <h5 className="font-black text-white uppercase tracking-widest text-sm mb-5 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[#f59e0b] after:mt-1">
              Plant Operations
            </h5>
            <ul className="space-y-3 font-bold uppercase text-[10px] tracking-wider">
              <li><Link to="/" className="hover:text-white transition-colors">Home Terminal</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Corporate Overview</Link></li>
              <li><Link to="/machinery" className="hover:text-white transition-colors">Machinery Showroom</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request Callback</Link></li>
            </ul>
          </div>

          {/* Standards / Engineering Verification */}
          <div>
            <h5 className="font-black text-white uppercase tracking-widest text-sm mb-5 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[#f59e0b] after:mt-1">
              Compliance Codes
            </h5>
            <ul className="space-y-3 uppercase text-[9px] font-bold tracking-widest text-slate-400">
              <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#f59e0b]" /> Food-Grade SS 304 / 316</li>
              <li className="flex items-center gap-2"><Cpu size={14} className="text-[#f59e0b]" /> Integrated Delta PLC Panels</li>
              <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#f59e0b]" /> ASME Tested Pressure Welds</li>
              <li className="flex items-center gap-2"><Cpu size={14} className="text-[#f59e0b]" /> Non-IBR Solid Biomass Config</li>
            </ul>
          </div>

          {/* Location / Physical Registry */}
          <div>
            <h5 className="font-black text-white uppercase tracking-widest text-sm mb-5 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[#f59e0b] after:mt-1">
              Foundry Office
            </h5>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#f59e0b] mt-0.5 flex-shrink-0" />
                <p className="text-slate-400">Plot 41B, Industrial Heavy Engineering Zone, Sector 4, MIDC Area, India.</p>
              </div>
              <div className="flex gap-3 items-center pt-2 border-t border-slate-900">
                <Phone size={16} className="text-[#f59e0b] flex-shrink-0" />
                <div>
                  <p className="text-[9px] uppercase font-black text-slate-500">Procurement Hotline:</p>
                  <p className="text-white font-black text-sm tracking-wide">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase font-black tracking-widest text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Nexus Heavy Engineering Ltd. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-slate-600">
            <span className="hover:text-slate-400 cursor-pointer">ISO 9001:2015 Verified</span>
            <span className="hover:text-slate-400 cursor-pointer">TUV Certified Plant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;