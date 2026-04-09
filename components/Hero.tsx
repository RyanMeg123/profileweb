'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'motion/react';
import { Mail, Phone, GraduationCap } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 flex flex-col items-start">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
      >
        {t.hero.name}
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl md:text-2xl text-muted mb-6"
      >
        {t.hero.title}
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base md:text-lg text-muted max-w-2xl leading-relaxed mb-8"
      >
        {t.hero.description}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-4 text-sm text-muted"
      >
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
          <Mail size={16} />
          <span>{t.hero.email}</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
          <Phone size={16} />
          <span>{t.hero.phone}</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
          <GraduationCap size={16} />
          <span>{t.hero.education} ({t.hero.ielts})</span>
        </div>
      </motion.div>
    </section>
  );
}
