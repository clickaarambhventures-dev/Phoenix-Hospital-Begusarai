import React from 'react';
import Link from 'next/link';

export default function EmergencyBanner() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 overflow-hidden border-b border-slate-100">
<div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-50/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3">
</div>
<div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-indigo-50/20 rounded-full blur-2xl -z-10 -translate-x-1/3 translate-y-1/3">
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 space-y-6 text-center lg:text-left">
<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-brand-blue text-xs font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse">
</span>
       Now Open &amp; serving Begusarai, Bihar
      </div>
<div className="space-y-3">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-blue tracking-tight leading-[1.1]">
        Phoenix Hospital
       </h1>
<h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue tracking-tight leading-none">
        A Support For Life
       </h2>
<p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal pt-2">
        Providing compassionate, evidence-based healthcare through experienced specialists, modern medical technology, 24/7 emergency care, and patient-first treatment.
       </p>
</div>
<div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 pt-2">
<button className="w-full sm:w-auto px-6 py-3.5 bg-blue-750 hover:bg-brand-red text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
<svg aria-hidden="true" className="lucide lucide-calendar w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4">
</path>
<path d="M16 2v4">
</path>
<rect height="18" rx="2" width="18" x="3" y="4">
</rect>
<path d="M3 10h18">
</path>
</svg>
        Book Appointment
       </button>
<a className="w-full sm:w-auto px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer" href="tel:6287122293">
<svg aria-hidden="true" className="lucide lucide-phone w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
</path>
</svg>
        Emergency Helpline
       </a>
<button className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-300 text-slate-750 font-bold text-sm rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer">
<svg aria-hidden="true" className="lucide lucide-search w-4 h-4 text-slate-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34">
</path>
<circle cx="11" cy="11" r="8">
</circle>
</svg>
        Find a Doctor
       </button>
</div>
<p className="text-xs text-slate-500 font-medium">
       Need immediate assistance? Our emergency trauma units operate
       <span className="text-red-600 font-bold">
        24 hours a day, 7 days a week
       </span>
       .
      </p>
</div>
<div className="lg:col-span-5">
<div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
<div>
<h3 className="text-lg font-bold text-brand-blue tracking-tight">
         Hospital Capabilities
        </h3>
<p className="text-xs text-slate-500">
         Fully integrated clinical standards and emergency support systems.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
<div className="flex gap-4 items-start p-3 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-100">
<div className="p-2.5 rounded-lg shrink-0 text-red-600 bg-red-50">
<svg aria-hidden="true" className="lucide lucide-heart-pulse w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5">
</path>
<path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27">
</path>
</svg>
</div>
<div className="space-y-0.5">
<h4 className="text-sm font-bold text-slate-800">
           Emergency &amp; Trauma Center
          </h4>
<p className="text-xs text-slate-500 font-medium leading-normal">
           Equipped 24/7 for acute clinical care
          </p>
</div>
</div>
<div className="flex gap-4 items-start p-3 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-100">
<div className="p-2.5 rounded-lg shrink-0 text-blue-750 bg-blue-50">
<svg aria-hidden="true" className="lucide lucide-layers w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z">
</path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12">
</path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17">
</path>
</svg>
</div>
<div className="space-y-0.5">
<h4 className="text-sm font-bold text-slate-800">
           OPD &amp; IPD Services
          </h4>
<p className="text-xs text-slate-500 font-medium leading-normal">
           Comprehensive inpatient and outpatient wings
          </p>
</div>
</div>
<div className="flex gap-4 items-start p-3 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-100">
<div className="p-2.5 rounded-lg shrink-0 text-indigo-600 bg-indigo-50">
<svg aria-hidden="true" className="lucide lucide-shield w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
</svg>
</div>
<div className="space-y-0.5">
<h4 className="text-sm font-bold text-slate-800">
           ICU &amp; NICU Units
          </h4>
<p className="text-xs text-slate-500 font-medium leading-normal">
           Level II newborn monitoring and life support
          </p>
</div>
</div>
<div className="flex gap-4 items-start p-3 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-100">
<div className="p-2.5 rounded-lg shrink-0 text-emerald-600 bg-emerald-50">
<svg aria-hidden="true" className="lucide lucide-circle-check w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10">
</circle>
<path d="m9 12 2 2 4-4">
</path>
</svg>
</div>
<div className="space-y-0.5">
<h4 className="text-sm font-bold text-slate-800">
           In-House Pharmacy
          </h4>
<p className="text-xs text-slate-500 font-medium leading-normal">
           24/7 prescription and drug supplies
          </p>
</div>
</div>
<div className="flex gap-4 items-start p-3 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-100">
<div className="p-2.5 rounded-lg shrink-0 text-amber-600 bg-amber-50">
<svg aria-hidden="true" className="lucide lucide-truck w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2">
</path>
<path d="M15 18H9">
</path>
<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14">
</path>
<circle cx="17" cy="18" r="2">
</circle>
<circle cx="7" cy="18" r="2">
</circle>
</svg>
</div>
<div className="space-y-0.5">
<h4 className="text-sm font-bold text-slate-800">
           Ambulance Support
          </h4>
<p className="text-xs text-slate-500 font-medium leading-normal">
           Rapid transport with on-board assistance
          </p>
</div>
</div>
<div className="flex gap-4 items-start p-3 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-100">
<div className="p-2.5 rounded-lg shrink-0 text-purple-600 bg-purple-50">
<svg aria-hidden="true" className="lucide lucide-eye w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0">
</path>
<circle cx="12" cy="12" r="3">
</circle>
</svg>
</div>
<div className="space-y-0.5">
<h4 className="text-sm font-bold text-slate-800">
           Advanced Diagnostics
          </h4>
<p className="text-xs text-slate-500 font-medium leading-normal">
           Precision lab analysis &amp; investigative profiles
          </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
  );
}
