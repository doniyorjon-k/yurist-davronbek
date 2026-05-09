'use client';

import { useTranslations } from 'next-intl';

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  centered?: boolean;
  accentWord?: string;
}

export default function SectionHeading({
  heading,
  subheading,
  centered = true,
  accentWord,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-serif text-heading font-semibold text-white mb-3 md:mb-4">
        {accentWord ? (
          <>
            {heading.split(accentWord)[0]}
            <span className="text-gold">{accentWord}</span>
            {heading.split(accentWord)[1]}
          </>
        ) : (
          heading
        )}
      </h2>
      {subheading && (
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
          {subheading}
        </p>
      )}
    </div>
  );
}
