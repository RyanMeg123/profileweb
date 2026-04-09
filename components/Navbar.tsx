'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'motion/react';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-6 md:gap-8 shadow-lg">
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="w-px h-4 bg-border hidden md:block"></div>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
        >
          <span className={language === 'zh' ? 'text-accent' : 'text-muted'}>中</span>
          <span className="text-border">/</span>
          <span className={language === 'en' ? 'text-accent' : 'text-muted'}>EN</span>
        </button>
      </div>
    </motion.nav>
  );
}
