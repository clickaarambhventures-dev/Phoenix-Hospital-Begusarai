"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPreview() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-white scroll-mt-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Intro & Fast Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left: Intro Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue text-xs font-bold uppercase tracking-widest">
              Caring Beyond Treatment
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight leading-[1.1]">
              A Trusted Center for Family Health & Multispecialty Care
            </motion.h2>
            
            <motion.div variants={fadeUp} className="space-y-6 text-slate-600 text-base leading-relaxed max-w-2xl">
              <p>
                Phoenix Hospital is committed to delivering accessible, ethical, and high-quality healthcare for individuals and families in Begusarai and surrounding districts. Managed by the esteemed <strong>Veda Foundation</strong>, the hospital combines experienced medical professionals, robust medical infrastructure, and a compassionate, patient-first approach under one roof.
              </p>
              <p>
                Whether it is rapid emergency trauma intervention, specialized medical consultation, routine or complicated surgeries, neonatal care, or preventive wellness health profiles, our clinical team works in unison to guarantee every patient receives timely, personalized, and scientific treatment.
              </p>
            </motion.div>

            {/* Veda Foundation Badge */}
            <motion.div variants={fadeUp} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-4 max-w-2xl">
              <div className="p-3 bg-brand-blue text-white rounded-xl shadow-sm shrink-0">
                <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 13v8"></path>
                  <path d="M12 3v3"></path>
                  <path d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"></path>
                </svg>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-brand-blue">Managed by Veda Foundation</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Guided by the foundational motto <span className="font-bold text-slate-700">"नई सोच • नई शुरुआत"</span> (New Thinking • New Beginnings), the foundation drives medical accessibility, quality, and community health empowerment programs.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Fast Facts Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 bg-white rounded-[24px] border border-slate-150 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <h3 className="text-xl font-bold text-brand-blue tracking-tight border-b border-slate-100 pb-5 flex items-center gap-3">
              <div className="p-2 bg-brand-blue/5 rounded-lg text-brand-blue">
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              Fast Facts & Certifications
            </h3>
            
            <div className="mt-2 divide-y divide-slate-100 text-sm">
              {[
                { label: 'Years of Service', value: '[To Be Updated]', valueClass: 'text-brand-red italic font-medium text-xs' },
                { label: 'Bed Capacity', value: '[To Be Updated]', valueClass: 'text-brand-red italic font-medium text-xs' },
                { label: 'Specialist Doctors', value: '15+ Specialists' },
                { label: 'Departments', value: '12+ Clinical Departments' },
                { label: 'Emergency Support', value: '24×7 Active Care' },
                { label: 'ICU / NICU Facilities', value: 'Fully Operational' },
                { label: 'Ambulance Support', value: '24×7 Dispatch' },
                { label: 'In-House Pharmacy', value: 'Available 24×7' },
                { label: 'Quality Certification', value: 'ISO 9001:2015' }
              ].map((fact, idx) => (
                <div key={idx} className="py-3.5 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg">
                  <span className="text-slate-500 font-medium">{fact.label}</span>
                  <span className={`font-bold text-right ${fact.valueClass || 'text-brand-blue'}`}>
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs text-slate-500 bg-slate-50 p-4 rounded-xl">
              <div className="flex justify-between gap-2">
                <span className="font-semibold text-slate-700">Reg. No:</span>
                <span className="font-medium">104/2022</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="font-semibold text-slate-700">ISO Cert No:</span>
                <span className="font-medium">QC-MHBX-25-375</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision (Tonal Blue Layers) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Mission */}
          <motion.div variants={fadeUp} className="bg-[#0A1430] text-white rounded-[24px] p-8 md:p-10 space-y-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-lg">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-blue rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-200 border border-white/10 backdrop-blur-sm">
              <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">Institutional Mission</h3>
            <p className="text-base text-white/70 leading-relaxed font-medium">
              To provide affordable, ethical, and evidence-based healthcare with compassion, integrity, and clinical excellence to all sections of the community, prioritizing safety above all else.
            </p>
          </motion.div>
          
          {/* Vision */}
          <motion.div variants={fadeUp} className="bg-brand-blue text-white rounded-[24px] p-8 md:p-10 space-y-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-lg">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-200 border border-white/10 backdrop-blur-sm">
              <svg aria-hidden="true" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">Future Vision</h3>
            <p className="text-base text-white/70 leading-relaxed font-medium">
              To become one of the most trusted multispecialty healthcare institutions in Bihar by delivering advanced medical care with a patient-centered approach, modern medical infrastructure, and continuous quality advancement.
            </p>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto space-y-4">
            <h3 className="text-3xl font-bold text-brand-blue tracking-tight">Our Core Clinical Values</h3>
            <p className="text-base text-slate-500">The fundamental principles guiding every medical judgment and consultation at Phoenix.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Compassion', desc: 'Placing patient comfort, emotional support, and dignity at the heart of our medical actions.' },
              { title: 'Integrity', desc: 'Adhering strictly to moral codes, medical ethics, and honest communication with our clients.' },
              { title: 'Clinical Excellence', desc: 'Pursuing high evidence-based standards of safety, hygiene, and specialist medical care.' },
              { title: 'Patient Safety', desc: 'Maintaining zero-compromise protocols on infection control, sterilization, and precise diagnostics.' },
              { title: 'Transparency', desc: 'Providing clear billing breakdown, clear treatment explanations, and explicit medical options.' },
              { title: 'Respect & Teamwork', desc: 'Collaborating seamlessly across departments to serve individuals of all backgrounds.' }
            ].map((value, idx) => (
              <motion.div key={idx} variants={fadeUp} className="p-8 bg-white rounded-2xl border border-slate-150 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-brand-blue/5 flex items-center justify-center mb-5">
                  <svg aria-hidden="true" className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-brand-blue mb-2">{value.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto space-y-4">
            <h3 className="text-3xl font-bold text-brand-blue tracking-tight">Executive Clinical Leadership</h3>
            <p className="text-base text-slate-500">Governed by experienced physicians dedicated to higher medical benchmarks.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* MD Card */}
            <motion.div variants={fadeUp} className="bg-white border border-slate-150 rounded-[24px] overflow-hidden p-8 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-28 h-28 bg-brand-blue/5 rounded-[20px] flex items-center justify-center text-brand-blue text-3xl font-black shrink-0 border border-brand-blue/10">
                BK
              </div>
              <div className="space-y-3 pt-2">
                <span className="inline-block text-xs uppercase font-bold tracking-wider px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                  Managing Director
                </span>
                <h4 className="text-xl font-bold text-brand-blue">Dr. Birendra Kumar</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Leading strategic clinical development, hospital operations, and Veda Foundation integration projects.
                </p>
                <p className="text-xs text-slate-400 font-medium italic pt-1">
                  [Profile details to be updated by administration]
                </p>
              </div>
            </motion.div>

            {/* Medical Director Card */}
            <motion.div variants={fadeUp} className="bg-white border border-slate-150 rounded-[24px] overflow-hidden p-8 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-28 h-28 bg-brand-blue/5 rounded-[20px] flex items-center justify-center text-brand-blue text-3xl font-black shrink-0 border border-brand-blue/10">
                RC
              </div>
              <div className="space-y-3 pt-2">
                <span className="inline-block text-xs uppercase font-bold tracking-wider px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                  Medical Director
                </span>
                <h4 className="text-xl font-bold text-brand-blue">Dr. Rabindra Kumar Chaudhary</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Supervising clinical protocols, evidence-based medication safety, and quality certified operations.
                </p>
                <p className="text-xs text-slate-400 font-medium italic pt-1">
                  [Profile details to be updated by administration]
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Community Health Banner */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="bg-brand-blue text-white rounded-[24px] p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Commitment to Community Health
                </h3>
                <p className="text-base text-white/70 leading-relaxed font-medium">
                  Phoenix Hospital believes healthcare extends beyond clinical rooms. Under Veda Foundation, we routinely organize and run public health empowerment campaigns across nearby subdivisions.
                </p>
              </div>
              <div className="lg:col-span-7 bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm font-medium">
                  {[
                    'Free Screening Camps',
                    'School Health Programs',
                    'Blood Donation Drives',
                    'Vaccination Drives',
                    'Health Awareness Seminars',
                    'Woman & Child Nutrition'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/90">
                      <div className="w-2 h-2 rounded-full bg-brand-red shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
