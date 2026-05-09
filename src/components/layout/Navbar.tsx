'use client';

import { useTranslations } from 'next-intl';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useState } from 'react';
import { motion } from 'framer-motion';
import CTAButton from '@/components/ui/CTAButton';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from '@/lib/i18n-navigation';

const navLinks = [
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'cases', href: '#cases' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const scrollPosition = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);

  const hasScroll = scrollPosition > 60;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScroll || isOpen ? 'backdrop-blur-md bg-navy-950/95 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-width py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-lg md:text-xl font-serif font-bold">
              <span className="text-white">D</span>
              <span className="text-gold">K</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-white/70 hover:text-gold transition-colors text-sm font-medium"
              >
                {t(link.key as any)}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <CTAButton variant="primary" href="#contact">
              {t('consultation')}
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gold/10 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4 pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/70 hover:text-gold transition-colors text-sm font-medium"
              >
                {t(link.key as any)}
              </Link>
            ))}
            <CTAButton variant="primary" href="#contact" className="w-full">
              {t('consultation')}
            </CTAButton>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
