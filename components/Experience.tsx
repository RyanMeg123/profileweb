'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'motion/react';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-border">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-8"
      >
        {t.experience.title}
      </motion.h3>
      
      <div className="space-y-12">
        {t.experience.jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-6 md:pl-0"
          >
            <div className="hidden md:block absolute left-0 top-2 w-2 h-2 rounded-full bg-accent"></div>
            <div className="md:pl-8 flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h4 className="text-lg font-medium text-foreground">{job.role}</h4>
              <span className="text-sm text-muted shrink-0">{job.date}</span>
            </div>
            <div className="md:pl-8 mb-3">
              <span className="text-accent font-medium">{job.company}</span>
            </div>
            <p className="md:pl-8 text-sm text-muted leading-relaxed max-w-3xl">
              {job.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
