"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';



export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div id="home" className="relative bg-white overflow-hidden">
      
      {/* Subtle Parallax Background Shapes */}
      <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-blue/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-brand-red/5 rounded-full blur-2xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <section className="relative pt-4 pb-12 md:pt-6 md:pb-16 border-b border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            
            {/* Left Column: Text & CTA */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="lg:col-span-6 space-y-10 text-center lg:text-left z-10"
            >
              <div className="space-y-6">
                <motion.div variants={fadeUp} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue text-[11px] font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                  Now Open & serving Begusarai, Bihar
                </motion.div>
                
                <div className="space-y-4">
                  <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-[5rem] font-bold text-brand-blue tracking-tight leading-[1.05]">
                    Phoenix<br />Hospital
                  </motion.h1>
                  <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-medium text-slate-500 tracking-tight leading-tight">
                    A Support For Life
                  </motion.h2>
                </div>
                
                <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Providing compassionate, evidence-based healthcare through experienced specialists, modern medical technology, 24/7 emergency care, and patient-first treatment.
                </motion.p>
              </div>

              {/* CTA Area */}
              <motion.div variants={fadeUp} className="space-y-8">
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                  <a 
                    href="tel:6287122293"
                    className="group w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold text-sm rounded-[16px] shadow-[0_4px_14px_0_rgba(225,29,72,0.39)] hover:shadow-[0_6px_20px_rgba(225,29,72,0.23)] hover:-translate-y-0.5 transition-all duration-250 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg aria-hidden="true" className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                    Emergency Helpline
                  </a>
                  <button 
                    className="w-full sm:w-auto px-8 py-4 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-brand-blue font-bold text-sm rounded-[16px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-250 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg aria-hidden="true" className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path>
                    </svg>
                    Book Appointment
                  </button>
                  <button 
                    className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-sm rounded-[16px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-250 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>
                    </svg>
                    Find a Doctor
                  </button>
                </div>

                {/* Trust Bar Strip */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 text-[11px] font-bold text-slate-500 uppercase tracking-widest pt-2">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-brand-blue shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    24×7 Emergency Care
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-brand-blue shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    Expert Specialists
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-brand-blue shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    Advanced Technology
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-brand-blue shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    Trusted Healthcare
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Premium Image Presentation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
              className="lg:col-span-6 relative w-full aspect-[4/3] flex justify-center lg:justify-end items-center mt-8 lg:mt-0 z-10"
            >
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                whileHover={{ rotate: 1 }}
                transition={{ 
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
                  rotate: { duration: 0.4, ease: "easeOut" as const }
                }}
                className="relative w-full h-full max-w-[540px] lg:max-w-none rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]"
              >
                <img 
                  src="/hospital-night.jpg" 
                  alt="Phoenix Hospital at Night"
                  className="w-full h-full object-cover rounded-[24px]"
                />
                
                {/* Floating Accent Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 -left-4 md:-left-10 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_12px_30px_-4px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-red/10 text-brand-red">
                    <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-blue uppercase tracking-wider">24×7 Emergency</div>
                    <div className="text-xs font-medium text-slate-500 mt-0.5">Always here for you</div>
                  </div>
                </motion.div>
                
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
