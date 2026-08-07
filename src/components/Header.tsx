"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
      className={`fixed top-0 left-0 right-0 z-50 bg-sky-50 flex items-center transition-shadow duration-250 ease-out ${
        isScrolled ? 'shadow-lg shadow-brand-blue/10 border-b border-white/10' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between h-full">
        <Link href="/" className="flex items-center focus:outline-none group">
          <div className="transition-transform duration-300 group-hover:scale-[1.02]">
            <Image 
              src="/logo.png" 
              alt="Phoenix Hospital Logo" 
              width={240} 
              height={60} 
              className="h-16 md:h-20 w-auto object-contain py-1"
              priority
            />
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10 h-full">
          {['About', 'Departments', 'Doctors', 'Facilities', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative h-full flex items-center group text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors">
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
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-sm font-bold rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            Emergency: 6287122293
          </motion.a>
          
          <button 
            aria-label="Toggle Menu" 
            className="p-2 md:hidden focus:outline-none transition-colors text-slate-800"
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
          className="md:hidden absolute top-full left-0 right-0 bg-sky-50 border-t border-sky-100 shadow-lg px-4 py-6 flex flex-col items-center space-y-6"
        >
          {['About', 'Departments', 'Doctors', 'Facilities', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600 hover:text-brand-blue">
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
