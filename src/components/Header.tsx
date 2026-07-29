"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  
  // Shrink the height from 96px (24) to 76px (19) when scrolling
  const headerHeight = useTransform(scrollY, [0, 100], [96, 76]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      style={{ height: headerHeight }}
      className={`fixed top-0 left-0 right-0 z-50 bg-brand-blue flex items-center transition-shadow duration-250 ease-out ${
        isScrolled ? 'shadow-lg shadow-brand-blue/10 border-b border-white/10' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between h-full">
        <Link href="#home" className="flex items-center gap-3 focus:outline-none group">
          <div className="p-2 bg-white text-brand-blue rounded-xl border border-transparent group-hover:border-white/20 transition-colors">
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Phoenix Hospital
            </h1>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10 h-full">
          {['About', 'Departments', 'Doctors', 'Facilities', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative h-full flex items-center group text-sm font-semibold text-white/90 hover:text-white transition-colors">
              {item}
              <motion.span 
                className="absolute bottom-[28px] left-0 right-0 h-0.5 bg-brand-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              />
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <motion.a 
            href="tel:6287122293" 
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-sm font-bold rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            Emergency: 6287122293
          </motion.a>
          
          <button 
            aria-label="Toggle Menu" 
            className="p-2 md:hidden focus:outline-none transition-colors text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-brand-blue border-t border-white/10 shadow-lg px-4 py-6 flex flex-col items-center space-y-6"
        >
          {['About', 'Departments', 'Doctors', 'Facilities', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white/90 hover:text-white">
              {item}
            </a>
          ))}
          <a href="tel:6287122293" className="mt-4 px-8 py-4 bg-brand-red text-white rounded-full font-bold w-full text-center">
            Emergency Help: 6287122293
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
