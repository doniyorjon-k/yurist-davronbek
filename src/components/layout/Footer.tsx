'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n-navigation';
import { IconPhone, IconTelegram } from '@/components/icons';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-navy-950 border-t border-gold/10">
      <div className="container-width py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-lg font-serif font-bold">
                <span className="text-white">D</span>
                <span className="text-gold">K</span>
              </div>
            </div>
            <p className="text-white/70 text-sm md:text-base">{t('tagline')}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">{t('links')}</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link href="/" className="text-white/70 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-gold transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">{t('contact')}</h3>
            <div className="space-y-3 text-sm md:text-base">
              <p className="text-white/70">{t('address')}</p>
              <div className="flex gap-4">
                <a
                  href="tel:+998945254525"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                >
                  <IconPhone className="w-4 h-4" />
                  <span>+998945254525</span>
                </a>
                <a
                  href="https://t.me/davronbek_kuchkorov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                >
                  <IconTelegram className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </div>
              <div className="mt-4">
                <p className="text-white/70 text-xs md:text-sm mb-2 font-semibold">{t('hours')}</p>
                <p className="text-white/50 text-xs md:text-sm whitespace-pre-line">
                  {t('hoursDetail')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/50">
          <p>{t('copyright')}</p>
          <Link href="#" className="hover:text-gold transition-colors">
            {t('privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
