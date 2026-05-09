'use client';

import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/ui/AnimatedSection';

const steps = ['step1', 'step2', 'step3', 'step4'];

export default function ProcessSection() {
  const t = useTranslations('process');

  return (
    <section className="bg-navy-950 section-padding">
      <div className="container-width">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-heading font-semibold text-white mb-3">
            {t('heading')}
          </h2>
          <p className="text-white/60 text-base md:text-lg">{t('subheading')}</p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          {/* Circles row */}
          <div className="flex items-center justify-between mb-8 relative">
            {/* Dashed connector line — perfectly centered */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-gold/40 z-0" />

            {steps.map((stepKey, index) => (
              <AnimatedSection key={stepKey} delay={index * 0.1} className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-navy-950 border-2 border-gold flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-gold">{index + 1}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Text row */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((stepKey, index) => (
              <AnimatedSection key={stepKey} delay={index * 0.15} className="text-center">
                <h3 className="font-serif text-base md:text-lg font-semibold text-white mb-2">
                  {t(`steps.${stepKey as any}.title`)}
                </h3>
                <p className="text-sm md:text-base text-white/70">
                  {t(`steps.${stepKey as any}.description`)}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((stepKey, index) => (
            <div key={stepKey} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy-950 border-2 border-gold flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-semibold">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div style={{ width: 2, minHeight: 48, borderLeft: '2px dashed rgba(201,168,76,0.4)', margin: '8px auto' }} />
                )}
              </div>
              <div className="pb-4 pt-1">
                <h3 className="font-serif text-base font-semibold text-white mb-2">
                  {t(`steps.${stepKey as any}.title`)}
                </h3>
                <p className="text-sm text-white/70">
                  {t(`steps.${stepKey as any}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
