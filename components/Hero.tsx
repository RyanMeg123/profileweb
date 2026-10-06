'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Mail, Phone, GraduationCap } from 'lucide-react';

type HeroProps = {
  portraitSrc?: string;
};

export default function Hero({ portraitSrc }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:gap-14">
      <div className="flex flex-col items-start">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-4xl font-bold tracking-tight md:text-6xl"
      >
        {t.hero.name}
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 text-xl text-muted md:text-2xl"
      >
        {t.hero.title}
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
      >
        {t.hero.description}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-4 text-sm text-muted"
      >
        <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5">
          <Mail size={16} />
          <span>{t.hero.email}</span>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5">
          <Phone size={16} />
          <span>{t.hero.phone}</span>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5">
          <GraduationCap size={16} />
          <span>{t.hero.education} ({t.hero.ielts})</span>
        </div>
      </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative mx-auto w-full max-w-[360px]"
      >
        <div className="absolute inset-6 -z-10 rounded-full bg-white/10 blur-3xl" />
        <div className="glass-panel overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
            {portraitSrc ? (
              <Image
                src={portraitSrc}
                alt={`${t.hero.name} portrait`}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 360px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-8 text-center text-sm leading-6 text-muted">
                Put your photo file at <span className="mx-1 text-foreground">public/profile-photo.jpg</span> and it will appear here.
              </div>
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
