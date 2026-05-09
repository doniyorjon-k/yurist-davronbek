'use client';

import { useTranslations, useLocale } from 'next-intl';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const locale = useLocale();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function getName(testimonial: typeof testimonials[0]): string {
    if (locale === 'uz') return testimonial.nameUz;
    if (locale === 'ru') return testimonial.nameRu;
    return testimonial.nameEn;
  }

  function getRole(testimonial: typeof testimonials[0]): string {
    if (locale === 'uz') return testimonial.roleUz;
    if (locale === 'ru') return testimonial.roleRu;
    return testimonial.roleEn;
  }

  function getQuote(testimonial: typeof testimonials[0]): string {
    if (locale === 'uz') return testimonial.quoteUz;
    if (locale === 'ru') return testimonial.quoteRu;
    return testimonial.quoteEn;
  }

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    if (!paused) {
      startInterval();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setPaused(true);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setPaused(true);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setPaused(true);
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' as const } },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.35, ease: 'easeIn' as const } }),
  };

  return (
    <section
      className="bg-navy-950 section-padding"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-width">
        <SectionHeading
          heading={t('heading')}
          subheading={t('subheading')}
          centered
        />

        <div className="max-w-2xl mx-auto">
          {/* Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <TestimonialCard
                  name={getName(testimonials[current])}
                  role={getRole(testimonials[current])}
                  quote={getQuote(testimonials[current])}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              aria-label="Previous"
              className="p-2 md:p-3 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'w-8 bg-gold' : 'w-2 bg-gold/30 hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              aria-label="Next"
              className="p-2 md:p-3 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
