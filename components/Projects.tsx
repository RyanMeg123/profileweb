'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'motion/react';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-border">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-8"
      >
        {t.projects.title}
      </motion.h3>
      
      <div className="space-y-8">
        {t.projects.items.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-6 md:p-8 rounded-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <h4 className="text-xl font-medium text-foreground">{project.name}</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p><strong className="text-foreground font-medium">Background:</strong> {project.bg}</p>
              <p><strong className="text-foreground font-medium">Solution:</strong> {project.solution}</p>
              {project.result && (
                <p><strong className="text-foreground font-medium">Result:</strong> {project.result}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
