'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TrustStatProps {
  value: string;
  label: string;
}

export default function TrustStat({ value, label }: TrustStatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const displayValue = useTransform(motionValue, (v) => Math.round(v).toString());

  // Extract numeric part from value (e.g., "500+" => 500)
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;

  useEffect(() => {
    if (isInView) {
      animate(motionValue, numericValue, { duration: 2, ease: 'easeOut' });
    }
  }, [isInView, motionValue, numericValue]);

  return (
    <motion.div ref={ref} className="text-center">
      <motion.div className="font-serif text-display font-bold text-gold mb-2">
        <motion.span>{displayValue}</motion.span>
        <span>{value.replace(/[0-9]/g, '')}</span>
      </motion.div>
      <p className="text-sm md:text-base text-white/70">{label}</p>
    </motion.div>
  );
}
