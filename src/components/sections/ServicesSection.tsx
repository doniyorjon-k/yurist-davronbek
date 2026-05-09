'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  IconFamily,
  IconBriefcase,
  IconScale,
  IconHome,
  IconDocument,
  IconGlobe,
  IconBuilding,
} from '@/components/icons';
import { serviceKeys } from '@/data/services';

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  family: IconFamily,
  labor: IconBriefcase,
  corporate: IconScale,
  realestate: IconHome,
  tax: IconDocument,
  contracts: IconBuilding,
  court: IconGlobe,
};

export default function ServicesSection() {
  const t = useTranslations('services');

  return (
    <section id="services" className="bg-navy-900 section-padding">
      <div className="container-width">
        <SectionHeading
          heading={t('heading')}
          subheading={t('subheading')}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceKeys.map((serviceKey, index) => {
            const Icon = serviceIcons[serviceKey];
            return (
              <AnimatedSection key={serviceKey} delay={index * 0.1}>
                <ServiceCard
                  icon={<Icon className="w-6 h-6 md:w-8 md:h-8" />}
                  title={t(`items.${serviceKey}.title`)}
                  description={t(`items.${serviceKey}.description`)}
                />
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
