'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQItem from '@/components/ui/FAQItem';
import AnimatedSection from '@/components/ui/AnimatedSection';

const faqItems = ['q1', 'q2', 'q3', 'q4', 'q5'];

export default function FAQSection() {
  const t = useTranslations('faq');

  return (
    <section className="bg-navy-900 section-padding">
      <div className="container-width">
        <SectionHeading
          heading={t('heading')}
          subheading={t('subheading')}
          centered
        />

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          {faqItems.map((itemKey, index) => (
            <AnimatedSection key={itemKey} delay={index * 0.05}>
              <FAQItem
                question={t(`items.${itemKey as any}.question`)}
                answer={t(`items.${itemKey as any}.answer`)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
