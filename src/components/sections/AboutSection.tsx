'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { IconCheck } from '@/components/icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('about');

  const credentials = [
    t('credentials.edu'),
    t('credentials.member'),
    t('credentials.cert'),
  ];

  return (
    <section id="about" className="bg-navy-900 section-padding">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] md:h-[560px] w-full"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-gold/40 ring-2 ring-gold/20 ring-offset-2 ring-offset-navy-900 relative">
              <Image
                src="https://storage.kun.uz/source/6/BB7zCXoKQXKfLzKChUH7ftraHXPM94Q7.jpg"
                alt="Davronbek Qo'chqorov — Yurist"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent rounded-3xl pointer-events-none" />
          </motion.div>

          {/* Content */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="font-serif text-heading font-semibold text-white mb-4">
                  {t('heading')}
                </h2>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gold mb-2">
                  {t('name')}
                </h3>
                <p className="text-sm md:text-base text-white/70 font-semibold">
                  {t('title')}
                </p>
              </div>

              <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                <p>{t('bio1')}</p>
                <p>{t('bio2')}</p>
              </div>

              {/* Credentials */}
              <div className="space-y-3 pt-6 border-t border-gold/10">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <IconCheck className="w-5 h-5 md:w-6 md:h-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm md:text-base">
                      {credential}
                    </span>
                  </motion.div>
                ))}
              </div>

              <CTAButton href="#contact" className="mt-8">
                {t('ctaConsult')}
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
