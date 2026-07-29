"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-50/50 border-b border-slate-150 scroll-mt-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Information */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Header */}
            <div className="space-y-5">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue text-[11px] font-bold uppercase tracking-widest">
                Find Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue tracking-tight leading-tight">
                Contact & Directions
              </h2>
              <p className="text-base text-slate-500 leading-relaxed font-medium">
                We are strategically situated in Begusarai, Bihar. Reach out directly or plan your route to our campus.
              </p>
            </div>

            {/* Emergency Contacts - High Priority */}
            <motion.div variants={item} className="bg-white rounded-[24px] border border-slate-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-[16px] flex items-center justify-center shrink-0">
                  <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                </div>
                <div className="space-y-3">
                  <h4 className="font-extrabold text-brand-blue text-xs uppercase tracking-widest">
                    Helplines & Appointments
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a className="text-brand-blue hover:text-brand-red font-black text-lg transition-colors flex flex-col" href="tel:6287122293">
                      6287122293
                      <span className="text-xs text-brand-red font-bold uppercase tracking-wider">Critical / 24x7</span>
                    </a>
                    <div className="h-px w-full bg-slate-100 my-1"></div>
                    <a className="text-slate-700 hover:text-brand-blue font-bold text-base transition-colors flex flex-col" href="tel:9905936876">
                      9905936876
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">OPD Desk</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Information Blocks */}
            <motion.div variants={item} className="bg-white rounded-[24px] border border-slate-200 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] space-y-8">
              
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 text-brand-blue rounded-[12px] flex items-center justify-center shrink-0">
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-1.5">
                    Campus Address
                  </h4>
                  <p className="leading-relaxed text-slate-700 font-medium text-sm">
                    <span className="font-bold text-brand-blue block mb-1">Phoenix Hospital</span>
                    Managed by Veda Foundation<br/>
                    D.P.S School Campus, Near Jail Gate<br/>
                    NH-31, Mohammadpur<br/>
                    Begusarai, Bihar
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 text-brand-blue rounded-[12px] flex items-center justify-center shrink-0">
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-1.5">
                    Email Correspondence
                  </h4>
                  <a className="text-brand-blue hover:text-brand-red font-bold text-sm transition-colors block" href="mailto:info@phoenixhospital.in">
                    info@phoenixhospital.in
                  </a>
                  <span className="text-[10px] text-slate-400 font-medium italic mt-1 block">
                    (Placeholder Email)
                  </span>
                </div>
              </div>

              {/* Clinical Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 text-brand-blue rounded-[12px] flex items-center justify-center shrink-0">
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-1.5">
                    Clinical Hours
                  </h4>
                  <div className="space-y-2 text-sm text-slate-700 font-medium">
                    <div>
                      <span className="font-bold text-slate-900 block">Mon - Sat: 9:00 AM - 4:00 PM</span>
                      <span className="text-xs text-slate-500">OPD Consultations</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Emergency Services: 24/7</span>
                      <span className="text-xs text-slate-500">Operations (ICU, Trauma, Pharmacy)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Premium Form & Map */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* The Form */}
            <motion.div variants={item} className="bg-white rounded-[24px] border border-slate-200 p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <form className="space-y-8 text-left">
                <div className="border-b border-slate-100 pb-6">
                  <h3 className="font-extrabold text-2xl text-brand-blue tracking-tight">
                    Patient Feedback & Inquiry Form
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 font-medium">
                    Submit your message or clinical inquiry directly to our administration office.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input 
                        className="w-full px-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue focus:bg-white text-sm font-medium transition-all shadow-sm outline-none placeholder:text-slate-400" 
                        name="name" 
                        placeholder="Your name" 
                        required 
                        type="text" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Mobile Number <span className="text-brand-red">*</span>
                      </label>
                      <input 
                        className="w-full px-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue focus:bg-white text-sm font-medium transition-all shadow-sm outline-none placeholder:text-slate-400" 
                        name="phone" 
                        placeholder="10-digit mobile number" 
                        required 
                        type="tel" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Email Address <span className="text-slate-400 normal-case font-medium">(Optional)</span>
                      </label>
                      <input 
                        className="w-full px-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue focus:bg-white text-sm font-medium transition-all shadow-sm outline-none placeholder:text-slate-400" 
                        name="email" 
                        placeholder="name@example.com" 
                        type="email" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Topic of Subject
                      </label>
                      <div className="relative">
                        <select className="w-full px-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue focus:bg-white text-sm font-medium transition-all shadow-sm outline-none appearance-none cursor-pointer">
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Appointment Help">Appointment Help</option>
                          <option value="Billing & Pricing">Billing & Pricing</option>
                          <option value="Feedback / Complaints">Feedback / Complaints</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Your Message <span className="text-brand-red">*</span>
                    </label>
                    <textarea 
                      className="w-full px-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue focus:bg-white text-sm font-medium transition-all shadow-sm outline-none resize-none placeholder:text-slate-400" 
                      name="message" 
                      placeholder="Write your detailed questions, complaints, or feedback here..." 
                      required 
                      rows={4}
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    className="w-full py-4 bg-brand-blue hover:bg-blue-900 text-white font-bold text-sm rounded-xl transition-all shadow-[0_4px_14px_0_rgba(20,40,95,0.39)] hover:shadow-[0_6px_20px_rgba(20,40,95,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer" 
                    type="submit"
                  >
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    Submit Message
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Map & Transit Information Card */}
            <motion.div variants={item} className="bg-white rounded-[24px] border border-slate-200 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] space-y-8">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-extrabold text-lg text-brand-blue flex items-center gap-2">
                  <svg aria-hidden="true" className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                  Campus Access & Transit
                </h3>
                <a 
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-brand-blue border border-slate-200 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer" 
                  href="https://maps.google.com/?q=Phoenix+Hospital+NH-31+Mohammadpur+Begusarai+Bihar" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  Open Maps
                  <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue rounded-[12px] flex items-center justify-center">
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M8 6v6"></path><path d="M15 6v6"></path><path d="M2 12h19.6"></path><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path><circle cx="7" cy="18" r="2"></circle><path d="M9 18h5"></path><circle cx="16" cy="18" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-800 mb-1">Local Bus / Railway Connections</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Accessible via nearby local Begusarai bus stations and passenger train stations.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue rounded-[12px] flex items-center justify-center">
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-800 mb-1">Parking & Mobility</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Large dedicated vehicle parking lot is located on campus grounds. Wheelchair accessible entrance, ramp, and stretchers are available at OPD/Emergency entrance.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue rounded-[12px] flex items-center justify-center shrink-0">
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-brand-blue mb-1">NH-31 Highway Location</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Situated near DPS School Campus and the Jail Gate on National Highway 31, providing highly accessible links for ambulances and vehicles.</p>
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
