'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';
import ContactForm from '@/components/ui/ContactForm';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { IconPhone, IconTelegram } from '@/components/icons';
import { motion } from 'framer-motion';

interface FinalCTASectionProps {
  id?: string;
}

export default function FinalCTASection({ id }: FinalCTASectionProps) {
  const t = useTranslations('cta');

  return (
    <section
      id={id}
      className="bg-navy-950 section-padding relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />

      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              heading={t('heading')}
              subheading={t('subheading')}
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
            {/* Form */}
            <AnimatedSection delay={0.1} className="card-base p-6 md:p-8">
              <h3 className="font-serif text-lg md:text-xl font-semibold text-white mb-6">
                Form
              </h3>
              <ContactForm />
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2} className="space-y-6 md:space-y-8 flex flex-col justify-center">
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {t('orContact')}
              </p>

              <div className="space-y-4">
                <a
                  href="https://t.me/davronbek_kuchkorov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card-base p-6 md:p-8 hover:border-gold/50 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                        <IconTelegram className="w-6 h-6 md:w-8 md:h-8 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">
                          {t('telegram')}
                        </p>
                        <p className="text-white/70 text-sm">@davronbek_kuchkorov</p>
                      </div>
                    </div>
                  </motion.div>
                </a>

                <a href="tel:+998945254525" className="block">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card-base p-6 md:p-8 hover:border-gold/50 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                        <IconPhone className="w-6 h-6 md:w-8 md:h-8 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">
                          {t('phone')}
                        </p>
                        <p className="text-white/70 text-sm">+998 94 525 45 25</p>
                      </div>
                    </div>
                  </motion.div>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
