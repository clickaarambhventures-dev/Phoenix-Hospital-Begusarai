"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const departments = [
  { id: 'cardiology', image: '/departments/cardiology.jpg', name: 'Cardiology' },
  { id: 'neurology', image: '/departments/neurology.jpg', name: 'Neurology' },
  { id: 'orthopedics', image: '/departments/orthopedics.jpg', name: 'Orthopedics' },
  { id: 'pediatrics', image: '/departments/pediatrics.jpg', name: 'Pediatrics' },
  { id: 'gynecology', image: '/departments/gynecology.jpg', name: 'Gynecology' },
  { id: 'surgery', image: '/departments/surgery.jpg', name: 'General Surgery' }
];

export default function DepartmentsList() {
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
    <section className="py-24 bg-white relative overflow-hidden" id="departments">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-brand-red/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-brand-red rounded-full"></div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue text-xs font-bold uppercase tracking-widest">
            Clinical Departments
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue tracking-tight">
            Centers of Excellence
          </h2>
          <p className="text-base text-slate-500 font-medium">
            World-class medical specialties tailored for your health and well-being.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {departments.map((dept) => (
            <motion.div 
              key={dept.id} 
              variants={item}
              className="group bg-white rounded-2xl cursor-pointer shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col text-left border border-slate-150 relative overflow-hidden"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={dept.image}
                  alt={dept.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
