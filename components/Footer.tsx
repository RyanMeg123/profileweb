'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border text-center text-sm text-muted">
      <p>© {new Date().getFullYear()} {t.hero.name}. All rights reserved.</p>
    </footer>
  );
}
