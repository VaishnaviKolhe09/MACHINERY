// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ShieldCheck, Cpu } from 'lucide-react';
// MR Logo image ko import kiya gaya hai
import mrLogo from '../../public/assets/MRLogo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[var(--surface)] text-[var(--text-dark)] border-t border-[var(--border)] pt-10 pb-8">
      {/* Container ki padding-x class ko navbar se perfect line matching ke liye match rakha hai */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- TOP GRID INFRASTRUCTURE --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-2 border-b border-[var(--border)] text-[var(--text-muted)] text-xs leading-relaxed">
          
          {/* --- BRAND LOGO BLOCK --- */}
          <div className="space-y-4">
            {/* Yahan se negative margin (-ml-6 -mt-6) ko remove kar diya hai taaki edge grid line se perfect horizontal alignment me rahe */}
            <Link to="/" className="flex items-center gap-2 group min-w-0 -mb-3 -mt-10 ml-0 pl-0">
              <img 
                src={mrLogo} 
                alt="MR Food Machinery Logo" 
                className="flex-shrink-0 w-24 h-24 object-contain object-left transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="truncate">
                <span className="font-black tracking-tighter text-base block leading-none uppercase text-[var(--text-dark)]">
                  MR <span className="text-[var(--primary)]">FOOD</span>
                </span>
                <span className="text-[7px] font-black tracking-[0.25em] text-[var(--text-muted)] uppercase block mt-1">
                  MACHINERY
                </span>
              </div>
            </Link>
            
            <p className="font-serif italic text-[var(--text-muted)] max-w-sm">
              "Engineering certified global infrastructure and turnkey processing systems for modern industrial food automation units."
            </p>
            <div className="pt-2 flex flex-col gap-1">
              <span className="text-[10px] uppercase font-black text-[var(--text-muted)] opacity-70">Central Desk Email:</span>
              <span className="text-[var(--text-dark)] font-bold tracking-wide">vsenterprises631@gmail.com</span>
            </div>
          </div>

          {/* --- QUICK SHORTCUTS --- */}
          <div>
            <h5 className="font-black text-[var(--text-dark)] uppercase tracking-widest text-sm mb-5 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[var(--primary)] after:mt-1">
              Plant Operations
            </h5>
            <ul className="space-y-3 font-bold uppercase text-[10px] tracking-wider text-[var(--text-muted)]">
              <li><Link to="/" className="hover:text-[var(--primary)] transition-colors">Home Terminal</Link></li>
              <li><Link to="/about" className="hover:text-[var(--primary)] transition-colors">Corporate Overview</Link></li>
              <li><Link to="/machinery" className="hover:text-[var(--primary)] transition-colors">Machinery Showroom</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--primary)] transition-colors">Request Callback</Link></li>
            </ul>
          </div>

          {/* --- STANDARDS / ENGINEERING VERIFICATION --- */}
          <div>
            <h5 className="font-black text-[var(--text-dark)] uppercase tracking-widest text-sm mb-5 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[var(--primary)] after:mt-1">
              Compliance Codes
            </h5>
            <ul className="space-y-3 uppercase text-[9px] font-bold tracking-widest text-[var(--text-muted)]">
              <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-[var(--primary)]" /> Food-Grade SS 304 / 316</li>
              <li className="flex items-center gap-2"><Cpu size={14} className="text-[var(--primary)]" /> Integrated Delta PLC Panels</li>
              <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-[var(--primary)]" /> ASME Tested Pressure Welds</li>
              <li className="flex items-center gap-2"><Cpu size={14} className="text-[var(--primary)]" /> Non-IBR Solid Biomass Config</li>
            </ul>
          </div>

          {/* --- LOCATION / INDUSTRIAL OFFICE --- */}
          <div>
            <h5 className="font-black text-[var(--text-dark)] uppercase tracking-widest text-sm mb-5 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[var(--primary)] after:mt-1">
              Foundry Office
            </h5>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--text-muted)]">MR Food Machinery, Plot No. D-68, Malegaon MIDC Sinnar, Tal.- Sinnar, Dist.- Nashik, Maharashtra, 422103.</p>
              </div>
              
              {/* <div className="pt-2 border-t border-[var(--border)]">
                <span className="inline-block bg-[var(--background)] text-[var(--text-dark)] text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-[var(--border)] shadow-sm">
                  GST: 27CDIPG6290F1ZF
                </span>
              </div> */}

              <div className="flex gap-3 items-center pt-2 border-t border-[var(--border)]">
                <Phone size={16} className="text-[var(--primary)] flex-shrink-0" />
                <div>
                  <p className="text-[9px] uppercase font-black text-[var(--text-muted)] opacity-70">Procurement Hotline:</p>
                  <p className="text-[var(--text-dark)] font-black text-sm tracking-wide">+91 9930090554</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
       <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase font-black tracking-widest text-[var(--text-muted)] text-center sm:text-left">
  <div>
    © {new Date().getFullYear()} MR Food Machinery. All Rights Reserved.
  </div>
  <div className="flex gap-6 text-[var(--text-muted)] opacity-80">
    {/* <span className="hover:text-[var(--primary)] cursor-pointer transition-colors">ISO 9001:2015 Verified</span> */}
    <a 
      href="https://vaishnavikolhe.netlify.app/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-[var(--primary)] cursor-pointer transition-colors"
    >
      Designed by Vaishnavi Kolhe
    </a>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;