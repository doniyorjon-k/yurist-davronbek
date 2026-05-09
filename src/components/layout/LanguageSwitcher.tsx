'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/i18n-navigation';
import { useState, useEffect, useRef } from 'react';

const languages = [
  { code: 'uz', label: 'UZ', flagSrc: 'https://flagcdn.com/24x18/uz.png' },
  { code: 'ru', label: 'RU', flagSrc: 'https://flagcdn.com/24x18/ru.png' },
  { code: 'en', label: 'EN', flagSrc: 'https://flagcdn.com/24x18/gb.png' },
];

export default function LanguageSwitcher() {
  const locale = useLocale() as 'uz' | 'ru' | 'en';
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const current = languages.find(lang => lang.code === locale);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-1.5 px-2.5 h-10 rounded-lg border border-gold/40 hover:border-gold/80 hover:bg-gold/10 transition-all"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={current?.flagSrc} width={24} height={18} alt={current?.label} className="rounded-sm" />
        <span className="text-xs font-semibold text-white/80">{current?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 bg-navy-900 border border-gold/20 rounded-lg shadow-lg overflow-hidden z-50">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center justify-center gap-2 py-2.5 transition-colors ${
                locale === lang.code ? 'bg-gold/20' : 'hover:bg-gold/10'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lang.flagSrc} width={20} height={15} alt={lang.label} className="rounded-sm" />
              <span className="text-xs font-semibold text-white/80">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
