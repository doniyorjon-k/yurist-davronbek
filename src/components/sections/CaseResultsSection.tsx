'use client';

import { useTranslations, useLocale } from 'next-intl';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { caseResults } from '@/data/case-results';

export default function CaseResultsSection() {
  const t = useTranslations('cases');
  const tCat = useTranslations('categories');
  const locale = useLocale();

  function getDescription(result: typeof caseResults[0]): string {
    if (locale === 'uz') return result.descriptionUz;
    if (locale === 'ru') return result.descriptionRu;
    return result.descriptionEn;
  }

  return (
    <section id="cases" className="bg-navy-900 section-padding">
      <div className="container-width">
        <SectionHeading
          heading={t('heading')}
          subheading={t('subheading')}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseResults.map((result, index) => (
            <AnimatedSection
              key={result.id}
              delay={index * 0.1}
              className="card-base p-6 md:p-8 group hover:border-gold/50 transition-colors"
            >
              <p className="text-xs md:text-sm text-gold/70 uppercase tracking-wider font-semibold mb-4">
                {tCat(result.categoryKey as any)}
              </p>
              <div className="mb-6">
                <p className="font-serif text-3xl md:text-4xl font-bold text-gold leading-tight mb-2">
                  {result.outcomeValue}
                </p>
                <p className="text-sm md:text-base text-white/70">
                  {t(`outcomes.${result.outcomeKey}`)}
                </p>
              </div>
              <p className="text-white/70 text-sm md:text-base leading-relaxed border-t border-gold/10 pt-6">
                {getDescription(result)}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
