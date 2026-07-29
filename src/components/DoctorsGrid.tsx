"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const doctors = [
  {
    avatar: "GC",
    department: "Internal Medicine",
    name: "Dr. Gautam Choudhary",
    qualification: "MD (Internal Medicine)",
    designation: "Senior Consultant Physician",
    experience: "12+ Years",
    specialties: ["Infectious Diseases", "Geriatric Medicine", "Chronic Illness Care"],
    languages: "Hindi, English, Maithili",
    consultation: ["Mon - Sat: 10:00 AM - 4:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "MK",
    department: "Internal Medicine",
    name: "Dr. Mrityunjay Kumar",
    qualification: "MD (Medicine)",
    designation: "Consultant Physician",
    experience: "8+ Years",
    specialties: ["Lifestyle Diseases", "Cardiorespiratory Medicine", "Acute Critical Care"],
    languages: "Hindi, English",
    consultation: ["Mon - Sat: 9:00 AM - 3:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "PK",
    department: "Internal Medicine",
    name: "Dr. Prashant Kashyap",
    qualification: "MD (General Medicine)",
    designation: "Consultant Physician",
    experience: "6+ Years",
    specialties: ["Autoimmune Disorders", "Fever Panels", "Hypertension Control"],
    languages: "Hindi, English",
    consultation: ["Mon - Sat: 11:00 AM - 5:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "RK",
    department: "Cardiology",
    name: "Dr. Rajneesh Kumar",
    qualification: "MD, DM (Cardiology)",
    designation: "Consultant Cardiologist",
    experience: "10+ Years",
    specialties: ["Heart Failure Management", "Arrhythmia Diagnosis", "Hypertensive Heart Disease"],
    languages: "Hindi, English",
    consultation: ["Mon - Fri: 11:00 AM - 3:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri"]
  },
  {
    avatar: "AK",
    department: "Neurology",
    name: "Dr. Ajay Kumar",
    qualification: "MD, DM (Neurology)",
    designation: "Consultant Neurologist",
    experience: "11+ Years",
    specialties: ["Stroke Management", "Epilepsy", "Movement Disorders"],
    languages: "Hindi, English",
    consultation: ["Mon - Sat: 10:00 AM - 2:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "RK",
    department: "Neurosurgery",
    name: "Dr. Ritesh Kumar",
    qualification: "MS, MCh (Neurosurgery)",
    designation: "Consultant Neurosurgeon",
    experience: "9+ Years",
    specialties: ["Spinal Corrective Surgery", "Traumatic Brain Injury", "Cerebral Surgeries"],
    languages: "Hindi, English",
    consultation: ["Mon - Sat: 12:00 PM - 5:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "VKR",
    department: "General Surgery",
    name: "Dr. Vijay Kumar Rai",
    qualification: "MS (General Surgery)",
    designation: "Senior General &amp; Laparoscopic Surgeon",
    experience: "15+ Years",
    specialties: ["Laparoscopic Hernia Repair", "Appendectomy", "Trauma and Emergency Procedures"],
    languages: "Hindi, English",
    consultation: ["Mon - Sat: 10:00 AM - 4:00 PM (Emergency 24x7)", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "MK",
    department: "Orthopedic Surgery",
    name: "Dr. Manish Kumar",
    qualification: "MS (Orthopedics)",
    designation: "Consultant Orthopedic Surgeon",
    experience: "8+ Years",
    specialties: ["Complex Fracture Care", "Joint Replacement Consultation", "Sports Injury Care"],
    languages: "Hindi, English",
    consultation: ["Mon - Sat: 9:30 AM - 3:30 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "RK",
    department: "Obstetrics &amp; Gynecology",
    name: "Dr. Rinki Kumari",
    qualification: "MS (Obstetrics &amp; Gynecology)",
    designation: "Consultant Gynecologist &amp; Obstetrician",
    experience: "10+ Years",
    specialties: ["High-Risk Pregnancy", "Normal Delivery Care", "Laparoscopic Gynecology"],
    languages: "Hindi, English",
    consultation: ["Mon - Sat: 10:00 AM - 5:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "MKS",
    department: "Dental Department",
    name: "Dr. Mukesh Kumar Singh",
    qualification: "BDS, MDS (Oral &amp; Maxillofacial Surgery)",
    designation: "Dental &amp; Maxillofacial Surgeon",
    experience: "9+ Years",
    specialties: ["Impacted Tooth Extractions", "Orthodontic Aligners", "Cosmetic Dentistry"],
    languages: "Hindi, English",
    consultation: ["Mon - Sat: 10:00 AM - 6:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "RK",
    department: "Pediatrics &amp; Neonatal Care",
    name: "Dr. Rajiv Kumar",
    qualification: "MD (Pediatrics), Fellowship in Neonatology",
    designation: "Consultant Pediatrician &amp; Neonatologist",
    experience: "11+ Years",
    specialties: ["Neonatal Intensive Care (NICU)", "Childhood Growth &amp; Nutrition", "Pediatric Allergy"],
    languages: "Hindi, English, Bhojpuri",
    consultation: ["Mon - Sat: 11:00 AM - 4:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "MK",
    department: "ENT",
    name: "Dr. Mukesh Kumar",
    qualification: "MS (Otorhinolaryngology)",
    designation: "Consultant ENT Specialist",
    experience: "7+ Years",
    specialties: ["Microscopic Ear Surgeries", "Nasal Endoscopy", "Voice and Thyroid Screenings"],
    languages: "Hindi, English",
    consultation: ["Mon - Sat: 12:00 PM - 5:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "AKR",
    department: "Gastroenterology",
    name: "Dr. Ajay Kumar Rai",
    qualification: "MD, DM (Gastroenterology)",
    designation: "Consultant Gastroenterologist",
    experience: "8+ Years",
    specialties: ["Acid Reflux Management", "Chronic Liver Conditions", "IBD Management"],
    languages: "Hindi, English",
    consultation: ["Mon, Wed, Fri: 12:00 PM - 4:00 PM", "Consulting: Mon, Wed, Fri"]
  },
  {
    avatar: "SK",
    department: "Diabetology",
    name: "Dr. Shankar Kumar",
    qualification: "MD (Medicine), PG Dip in Diabetology",
    designation: "Consultant Diabetologist",
    experience: "12+ Years",
    specialties: ["Geriatric Diabetes", "Diabetic Foot Care", "Gestational Diabetes Control"],
    languages: "Hindi, English",
    consultation: ["Mon - Sat: 10:00 AM - 4:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "SJ",
    department: "Physiotherapy &amp; Rehab",
    name: "Dr. Surendra Jha",
    qualification: "BPT, MPT (Orthopedic Physiotherapy)",
    designation: "Senior Physiotherapist",
    experience: "13+ Years",
    specialties: ["Neuro-rehabilitation", "Post-Surgical Mobilization", "Chronic Pain Management"],
    languages: "Hindi, English, Maithili",
    consultation: ["Mon - Sat: 9:00 AM - 5:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
  {
    avatar: "M",
    department: "Dietetics &amp; Nutrition",
    name: "Supriya Mandal",
    qualification: "MSc (Food and Nutrition), Registered Dietitian",
    designation: "Clinical Nutritionist",
    experience: "5+ Years",
    specialties: ["Inpatient Dietetics", "Diabetic Meal Formulation", "Childhood Obesity Guidance"],
    languages: "Hindi, English",
    consultation: ["Mon - Fri: 10:00 AM - 3:00 PM", "Consulting: Mon, Tue, Wed, Thu, Fri"]
  },
  {
    avatar: "SKT",
    department: "Anesthesia &amp; Critical Care",
    name: "Dr. S. K. Tiwari",
    qualification: "MD (Anesthesiology)",
    designation: "Consultant Anesthesiologist",
    experience: "14+ Years",
    specialties: ["General Anesthesia", "Spinal Block", "Critical Care Medicine Support"],
    languages: "Hindi, English",
    consultation: ["On-Call / Emergency / Surgical Hours", "Consulting: Mon, Tue, Wed, Thu, Fri, Sat"]
  },
];

export default function DoctorsGrid() {
  const [showTopBtn, setShowTopBtn] = useState(false);

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
              Showing <span className="font-bold text-brand-blue">{doctors.length}</span> doctors
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
                placeholder="Search specialists by name, credentials, or areas of expertise..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm font-medium transition-all shadow-sm"
              />
            </div>
            <div className="lg:col-span-5 relative group">
              <label className="sr-only">Select Department</label>
              <select className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm font-semibold text-slate-700 transition-all shadow-sm appearance-none">
                <option value="">-- All Departments --</option>
                <option value="internal-medicine">Internal Medicine</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="neurosurgery">Neurosurgery</option>
                <option value="general-surgery">General Surgery</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="obstetrics-gynecology">Obstetrics & Gynecology</option>
                <option value="pediatrics-nicu">Pediatrics & Neonatal Care (NICU)</option>
                <option value="dental">Dental Department</option>
                <option value="ent">ENT</option>
                <option value="gastroenterology">Gastroenterology</option>
                <option value="diabetology">Diabetology</option>
                <option value="physiotherapy">Physiotherapy & Rehab</option>
                <option value="dietetics">Dietetics & Nutrition</option>
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
          {doctors.map((doctor, index) => (
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

              {/* CENTER: Quick Info Chips */}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="bg-white rounded-[20px] p-3.5 border border-slate-150 shadow-sm flex flex-col justify-center relative overflow-hidden group/chip hover:border-brand-blue/30 transition-colors">
                  <div className="absolute -right-2 -bottom-2 opacity-5 group-hover/chip:opacity-10 transition-opacity">
                    <svg aria-hidden="true" className="w-12 h-12 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 relative z-10">Experience</span>
                  <span className="text-sm font-black text-slate-800 relative z-10">{doctor.experience}</span>
                </div>
                <div className="bg-white rounded-[20px] p-3.5 border border-slate-150 shadow-sm flex flex-col justify-center relative overflow-hidden group/chip hover:border-brand-blue/30 transition-colors">
                  <div className="absolute -right-2 -bottom-2 opacity-5 group-hover/chip:opacity-10 transition-opacity">
                    <svg aria-hidden="true" className="w-12 h-12 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 relative z-10">Languages</span>
                  <span className="text-xs sm:text-sm font-black text-slate-800 line-clamp-1 relative z-10">{doctor.languages}</span>
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

                  <button className="w-full py-3 bg-brand-blue hover:bg-white text-white hover:text-brand-blue font-bold text-sm rounded-xl transition-all shadow-[0_4px_14px_0_rgba(20,40,95,0.39)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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
