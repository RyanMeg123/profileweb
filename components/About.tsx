'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'motion/react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 border-t border-border">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-8"
      >
        {t.about.title}
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.about.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-xl hover:bg-white/[0.05] transition-colors"
          >
            <h4 className="text-lg font-medium mb-3 text-foreground">{item.title}</h4>
            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
