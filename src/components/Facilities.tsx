"use client";

import React from 'react';
import { motion } from 'framer-motion';

const facilities = [
  {
    id: '01',
    title: 'Intensive Care Unit (ICU)',
    description: 'Continuous physiological monitoring, invasive and non-invasive respirators, and 24/7 dedicated nursing specialists.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'Neonatal Care (NICU)',
    description: 'Specialized Level II incubator cribs, newborn phototherapy, and respiratory assistance for pre-term babies.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'Advanced Operation Theatre',
    description: 'Positive-pressure sterile ventilation, modern surgical lighting, and micro-instrumentation for neurological and bone surgeries.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: '04',
    title: 'In-House Pharmacy',
    description: 'Open 24 hours a day, stocking certified medications, pediatric syrups, surgical dressings, and emergency cardiac life support drugs.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: '05',
    title: 'Pathology Diagnostics Laboratory',
    description: 'Equipped with calibrated biochemical analyzers and hematology devices for rapid blood profiling and diagnostics.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: '06',
    title: '24/7 Ambulance Fleet',
    description: 'Equipped with transport oxygen, critical monitors, and emergency medical kits for safely moving patient admissions.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
];

export default function Facilities() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC] border-b border-slate-150 scroll-mt-24 relative overflow-hidden" id="facilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-5">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue text-[11px] font-bold uppercase tracking-widest">
              Medical Infrastructure
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Advanced Clinical Facilities
          </h2>
          <p className="text-base text-slate-500 leading-relaxed font-medium">
            Phoenix Hospital is engineered to support life through clean, sterile physical environments, state-of-the-art diagnostic monitoring, and strict clinical protocols.
          </p>
        </div>

        {/* Premium Segmented Tab Control */}
        <div className="flex justify-center max-w-xl mx-auto">
          <div className="flex p-1.5 bg-slate-200/50 rounded-2xl w-full border border-slate-200 shadow-inner">
            <button className="flex-1 py-2.5 px-4 text-sm font-bold bg-white text-brand-blue rounded-xl shadow-sm border border-slate-100 transition-all cursor-pointer relative z-10">
              Capabilities & Setup
            </button>
            <button className="flex-1 py-2.5 px-4 text-sm font-bold text-slate-500 hover:text-slate-700 transition-all cursor-pointer">
              Patient Rooms
            </button>
            <button className="flex-1 py-2.5 px-4 text-sm font-bold text-slate-500 hover:text-slate-700 transition-all cursor-pointer">
              Clinical Safety
            </button>
          </div>
        </div>

        {/* Facilities Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility) => (
            <motion.div 
              key={facility.id}
              variants={item}
              className="bg-white p-8 rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:border-brand-blue/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-150 text-brand-blue rounded-[14px] flex items-center justify-center font-bold shadow-inner group-hover:scale-105 group-hover:bg-brand-blue/5 transition-transform">
                    {facility.icon}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-400 text-[10px] font-extrabold tracking-widest border border-slate-200">
                    FACILITY {facility.id}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-brand-blue group-hover:text-brand-red transition-colors leading-tight">
                    {facility.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
