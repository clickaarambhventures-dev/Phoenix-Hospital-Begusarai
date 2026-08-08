"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const doctors = [
  {
    avatar: "RKC",
    department: "Medicine",
    name: "Dr. Ravindra kumar Chaudhry",
    qualification: "MBBS",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "MK",
    department: "Medicine",
    name: "Dr. Mritunjay kumar",
    qualification: "MBBS, MD Medicine",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "RK",
    department: "Cardiology",
    name: "Dr. Rajnish kumar",
    qualification: "MD Medicine, DM Cardiology",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "PK",
    department: "Cardiology",
    name: "Dr. Prashant Kashyap",
    qualification: "MD Medicine, DM Cardiology",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "SK",
    department: "Neuro",
    name: "Dr. Shashwat Kumar",
    qualification: "MS. MCH Neurosurgery",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "MK",
    department: "Orthopaedics & Spine",
    name: "Dr. Manish Kumar",
    qualification: "",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "VKS",
    department: "Surgery",
    name: "Dr. vijay kumar Singh",
    qualification: "MBBS. MS Surgery",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "RK",
    department: "Surgery",
    name: "Dr. Ravi Kumar",
    qualification: "MBBS. MS Surgery",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "SK",
    department: "OBS & Gynaecology",
    name: "Dr. Sanju kumar",
    qualification: "MBBS. MS obs & Gyne, Gold Medalist",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "RK",
    department: "Pediatrics",
    name: "Dr. Rajeev Kumar",
    qualification: "MBBS Ranchi, Dch Patna",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "MKS",
    department: "Dental",
    name: "Dr. Mukesh Kumar Singh",
    qualification: "BDS Dental Surgeon",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "MK",
    department: "E.N.T",
    name: "Dr. Mukesh Kumar",
    qualification: "MBBS, MS ENT",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "DKS",
    department: "Gastroenterology",
    name: "Dr. Deepak Kumar singh",
    qualification: "MBBS. MD Medicine",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "SK",
    department: "Diabetes",
    name: "Dr. Shankar Kumar",
    qualification: "MBBS PMCH. M.D. Medicine",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "NK",
    department: "Diabetes",
    name: "Dr. Niranjan kumar",
    qualification: "MBBS",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "MJ",
    department: "Physiotherapy",
    name: "Dr. Mussarat Jahan",
    qualification: "BPT. MIAP",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "DK",
    department: "Anesthesia",
    name: "Dr. Dilip Kumar",
    qualification: "MBBS. MD Anesthesia, ICU intensivist",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  },
  {
    avatar: "SM",
    department: "Dietetics",
    name: "Dr. Supriya Mandal",
    qualification: "Dietician",
    designation: "",
    experience: "Consultant",
    specialties: ["Specialist Care"],
    languages: "-",
    consultation: ["Contact for timings"]
  }
];

export default function DoctorsGrid() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const uniqueDepartments = Array.from(new Set(doctors.map(d => d.department))).sort();

  const filteredDoctors = doctors.filter(doctor => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = doctor.name.toLowerCase().includes(searchLower) || 
                          doctor.qualification.toLowerCase().includes(searchLower) ||
                          doctor.specialties.join(' ').toLowerCase().includes(searchLower);
    const matchesDept = selectedDepartment === "" || doctor.department === selectedDepartment;
    return matchesSearch && matchesDept;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="py-20 bg-slate-50/50 scroll-mt-20 relative" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-brand-red rounded-full"></div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue text-xs font-bold uppercase tracking-widest">
            Specialist Register
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue tracking-tight">
            Meet Our Specialist Medical Panel
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Phoenix Hospital features highly qualified and experienced consultants providing modern evidence-based clinical counseling.
          </p>
        </div>

        {/* Sticky Floating Filter Bar */}
        <div className="sticky top-24 z-30 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-150 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
          <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-3 mb-4">
            <h3 className="font-bold text-sm text-brand-blue flex items-center gap-2">
              <svg aria-hidden="true" className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
              </svg>
              Filter Specialists
            </h3>
            <div className="text-xs text-slate-500 font-medium bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
              Showing <span className="font-bold text-brand-blue">{filteredDoctors.length}</span> doctors
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-7 relative group">
              <label className="sr-only">Search Doctor</label>
              <svg aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-blue transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>
              </svg>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search specialists by name, credentials, or areas of expertise..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm font-medium transition-all shadow-sm"
              />
            </div>
            <div className="lg:col-span-5 relative group">
              <label className="sr-only">Select Department</label>
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm font-semibold text-slate-700 transition-all shadow-sm appearance-none"
              >
                <option value="">-- All Departments --</option>
                {uniqueDepartments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors Premium Tile Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <motion.div 
                key={index}
              variants={item}
              className="group relative flex flex-col h-full bg-white rounded-[32px] border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 isolate p-2"
            >
              {/* Decorative background glow */}
              <div className="absolute inset-0 rounded-[32px] overflow-hidden -z-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-brand-blue/10 transition-colors duration-500"></div>
              </div>

              {/* TOP: Identity Panel */}
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-[24px] p-6 pb-6 relative border border-white flex-1 flex flex-col shadow-[inset_0_1px_4px_rgba(255,255,255,0.5)]">
                
                {/* Department Floating Badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex px-3 py-1 bg-white border border-slate-200 shadow-sm text-[9px] font-bold text-slate-500 rounded-full uppercase tracking-widest group-hover:border-brand-blue/30 group-hover:text-brand-blue transition-colors">
                    {doctor.department}
                  </span>
                </div>

                {/* Avatar Composition */}
                <div className="relative mb-6 w-16 h-16 sm:w-20 sm:h-20">
                  <div className="absolute inset-0 bg-brand-blue/10 rounded-[16px] sm:rounded-[20px] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="relative w-full h-full bg-white border border-slate-100 shadow-sm rounded-[16px] sm:rounded-[20px] flex items-center justify-center text-brand-blue font-black text-2xl sm:text-3xl group-hover:scale-105 transition-transform duration-500">
                    {doctor.avatar}
                  </div>
                </div>

                <div className="space-y-1.5 relative z-10 pr-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none group-hover:text-brand-blue transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500">
                    {doctor.qualification}
                  </p>
                  {doctor.designation && (
                    <div className="pt-1">
                      <span className="inline-block text-[9px] sm:text-[10px] font-bold text-brand-red uppercase tracking-widest px-2.5 py-1 bg-brand-red/5 rounded-md border border-brand-red/10">
                        {doctor.designation}
                      </span>
                    </div>
                  )}
                </div>

                {/* Specialties */}
                <div className="mt-5 pt-5 border-t border-slate-200/60 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.specialties.map((spec, sIdx) => (
                      <span key={sIdx} className="px-2 py-1 bg-white border border-slate-200 rounded-[6px] text-[9px] font-bold text-slate-600 shadow-sm leading-none">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOM: Action Tile */}
              <div className="mt-2 bg-slate-900 rounded-[24px] p-5 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="space-y-1.5">
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5 mb-2">
                      <svg aria-hidden="true" className="w-3.5 h-3.5 text-brand-blue" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path>
                      </svg>
                      Consultation Schedule
                    </div>
                    {doctor.consultation.map((line, cIdx) => (
                      <p key={cIdx} className={cIdx === 0 ? "text-[11px] font-bold text-white leading-tight" : "text-[9px] font-medium text-slate-400 leading-tight"}>
                        {line}
                      </p>
                    ))}
                  </div>

                  <a href="#contact" className="w-full py-3 bg-brand-blue hover:bg-white text-white hover:text-brand-blue font-bold text-sm rounded-xl transition-all shadow-[0_4px_14px_0_rgba(20,40,95,0.39)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    Book Consultation
                  </a>
                </div>
              </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-24 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-[20px] shadow-sm flex items-center justify-center text-slate-300 mb-4 border border-slate-100">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-700 tracking-tight">No specialists found</h3>
              <p className="text-sm font-medium text-slate-500 max-w-sm leading-relaxed">
                We couldn't find any specialists matching your current search criteria.
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedDepartment(''); }} 
                className="mt-6 px-6 py-2.5 bg-brand-blue text-white text-sm font-bold rounded-xl shadow-[0_4px_14px_0_rgba(20,40,95,0.39)] hover:-translate-y-0.5 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </motion.div>

      </div>
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="fixed bottom-6 left-6 z-[9999] w-[52px] h-[52px] rounded-2xl bg-[#14285F] text-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(20,40,95,0.4)] border border-white/10"
            aria-label="Back to Top"
          >
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
