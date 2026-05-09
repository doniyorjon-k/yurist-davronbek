'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

const whyChooseItems = ['experience', 'individual', 'transparency', 'speed', 'result'];

export default function WhyChooseSection() {
  const t = useTranslations('whyUs');

  return (
    <section className="bg-navy-950 section-padding">
      <div className="container-width">
        <SectionHeading
          heading={t('heading')}
          subheading={t('subheading')}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyChooseItems.map((itemKey, index) => (
            <AnimatedSection
              key={itemKey}
              delay={index * 0.1}
              className="card-base p-6 md:p-8 group"
            >
              <motion.div whileHover={{ x: 4 }}>
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <span className="font-serif text-lg font-bold text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-white mb-3">
                  {t(`items.${itemKey as any}.title`)}
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {t(`items.${itemKey as any}.description`)}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
