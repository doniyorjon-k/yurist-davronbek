'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevron } from '@/components/icons';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-base p-6 md:p-8 cursor-pointer hover:border-gold/50 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <h3 className="font-serif text-base md:text-lg font-semibold text-white pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-gold mt-1"
        >
          <IconChevron className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-white/70 text-sm md:text-base mt-4 pt-4 border-t border-gold/10">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
