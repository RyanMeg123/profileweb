'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'motion/react';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-border">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-8"
      >
        {t.skills.title}
      </motion.h3>
      
      <div className="flex flex-wrap gap-3">
        {t.skills.items.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="glass-panel px-4 py-2 rounded-lg text-sm text-foreground hover:bg-white/10 transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
