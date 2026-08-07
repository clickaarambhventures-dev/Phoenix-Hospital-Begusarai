"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-sky-50 text-black font-sans selection:bg-brand-red selection:text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center">
              <div className="inline-block">
                <Image 
                  src="/logo.png" 
                  alt="Phoenix Hospital Logo" 
                  width={320} 
                  height={80} 
                  className="h-20 md:h-28 w-auto object-contain"
                />
              </div>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Phoenix Hospital is committed to delivering accessible, ethical, and high-quality clinical care in Begusarai, Bihar. Managed by Veda Foundation.
            </p>
            
            <div className="space-y-1">
              <div className="text-xs text-slate-400 font-medium">ISO 9001:2015 Certified Hospital</div>
              <div className="text-xs text-slate-400 font-medium">Reg. No: 104/2022 | Cert No: QC-MHBX-25-375</div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {['Home', 'About Us', 'Departments', 'Doctors', 'Facilities', 'Patient Info', 'Checkups', 'Careers', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-sm text-slate-600 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 block w-fit">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Helplines (Primary Visual Anchor) */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Direct Helplines</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Emergency Card */}
              <motion.a 
                href="tel:6287122293"
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.25, ease: "easeOut" as const }}
                className="block p-6 bg-sky-100/50 border border-sky-100 rounded-[20px] hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <span className="block text-[10px] text-brand-red font-bold uppercase tracking-wider mb-2">24/7 Critical Trauma Dispatch</span>
                <span className="block text-2xl font-bold text-slate-800 group-hover:text-brand-red transition-colors">6287122293</span>
              </motion.a>

              {/* OPD Card */}
              <motion.a 
                href="tel:9905936876"
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.25, ease: "easeOut" as const }}
                className="block p-6 bg-sky-100/50 border border-sky-100 rounded-[20px] hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">OPD Reception Consult Desk</span>
                <span className="block text-2xl font-bold text-slate-800 transition-colors">9905936876</span>
              </motion.a>

            </div>
          </div>

        </div>
      </div>

      {/* Disclaimer Bar */}
      <div className="border-t border-sky-100 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-slate-500 text-xs leading-relaxed">
            <svg aria-hidden="true" className="w-5 h-5 text-amber-500/80 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <p className="max-w-4xl">
              <span className="font-semibold text-slate-600">Medical Disclaimer:</span> The information provided on this website is for general educational purposes only and should not replace consultation with a qualified healthcare professional. Diagnosis and treatment recommendations are based on individual clinical evaluation. In case of a medical emergency, please contact the hospital immediately or seek emergency medical assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <div>© 2026 Phoenix Hospital. All clinical rights reserved.</div>
          <div className="flex gap-2 items-center">
            <span>Managed by Veda Foundation</span>
            <span>•</span>
            <span className="font-semibold">"नई सोच • नई शुरुआत"</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
