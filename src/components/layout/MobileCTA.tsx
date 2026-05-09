'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconPhone, IconTelegram } from '@/components/icons';

export default function MobileCTA() {
  const t = useTranslations('cta');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled near the final CTA section
      const finalCTA = document.getElementById('contact');
      if (finalCTA) {
        const rect = finalCTA.getBoundingClientRect();
        setIsVisible(rect.top > 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 sm:hidden bg-navy-950/95 backdrop-blur-sm border-t border-gold/10 z-40"
        >
          <div className="flex gap-3 p-4">
            <a
              href="https://t.me/davronbek_kuchkorov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gold text-navy-950 rounded-lg font-semibold transition-colors hover:bg-gold-light"
            >
              <IconTelegram className="w-5 h-5" />
              {t('telegram')}
            </a>
            <a
              href="tel:+998945254525"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gold text-gold rounded-lg font-semibold transition-colors hover:bg-gold/10"
            >
              <IconPhone className="w-5 h-5" />
              {t('phone')}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
