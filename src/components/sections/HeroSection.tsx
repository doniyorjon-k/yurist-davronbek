'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import CTAButton from '@/components/ui/CTAButton';
import TrustStat from '@/components/ui/TrustStat';
import { IconPhone, IconTelegram } from '@/components/icons';
import Image from 'next/image';

const IMAGE_SRC = 'https://frankfurt.apollo.olxcdn.com/v1/files/ss4lc60v35di-UZ/image;s=644x461';

export default function HeroSection() {
  const t = useTranslations('hero');

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <section className="bg-navy-950 py-16 md:py-28 relative overflow-hidden min-h-[600px] md:min-h-0">
      {/* Mobile blurred background image */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={IMAGE_SRC}
          alt=""
          fill
          className="object-cover object-center scale-105 blur-sm"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-navy-950/80" />
      </div>

      {/* Desktop background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10 hidden md:block" />

      <div className="container-width grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div initial="hidden" animate="visible" className="space-y-6 md:space-y-8">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={textVariants}
            className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full"
          >
            <p className="text-xs md:text-sm font-semibold text-gold">{t('badge')}</p>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2">
            <motion.h1
              custom={1}
              variants={textVariants}
              className="font-serif text-hero font-bold text-white leading-tight"
            >
              {t('headline')}
            </motion.h1>
            <motion.h1
              custom={2}
              variants={textVariants}
              className="font-serif text-hero font-bold text-gold leading-tight"
            >
              {t('headlineAccent')}
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            custom={3}
            variants={textVariants}
            className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed"
          >
            {t('subheadline')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="https://t.me/davronbek_kuchkorov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <CTAButton variant="primary" icon={<IconTelegram className="w-5 h-5" />}>
                {t('ctaTelegram')}
              </CTAButton>
            </a>
            <a href="tel:+998945254525" className="inline-flex">
              <CTAButton variant="outline" icon={<IconPhone className="w-5 h-5" />}>
                {t('ctaPhone')}
              </CTAButton>
            </a>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            custom={5}
            variants={textVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-gold/10"
          >
            <TrustStat value={t('stat1Value')} label={t('stat1Label')} />
            <TrustStat value={t('stat2Value')} label={t('stat2Label')} />
            <TrustStat value={t('stat3Value')} label={t('stat3Label')} />
            <TrustStat value={t('stat4Value')} label={t('stat4Label')} />
          </motion.div>
        </motion.div>

        {/* Right Image — desktop only */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative h-[560px] w-full hidden md:block"
        >
          <div className="w-full h-full rounded-3xl overflow-hidden border border-gold/20 relative">
            <Image
              src={IMAGE_SRC}
              alt="Davronbek Qo'chqorov — Yurist"
              fill
              className="object-cover object-center"
              sizes="50vw"
              priority
              unoptimized
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent rounded-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
