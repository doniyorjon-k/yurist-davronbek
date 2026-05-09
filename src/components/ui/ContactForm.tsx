'use client';

import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  phone: string;
  message?: string;
}

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const t = useTranslations('cta.form');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder={t('name')}
          className="w-full px-4 md:px-6 py-3 md:py-4 bg-navy-800 border border-gold/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
        />
        {errors.name && <span className="text-red-400 text-sm mt-1">Required</span>}
      </div>

      <div>
        <input
          {...register('phone', {
            required: true,
            pattern: /^[+]?[\d\s-()]+$/i,
          })}
          type="tel"
          placeholder={t('phone')}
          className="w-full px-4 md:px-6 py-3 md:py-4 bg-navy-800 border border-gold/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
        />
        {errors.phone && <span className="text-red-400 text-sm mt-1">Valid phone required</span>}
      </div>

      <div>
        <textarea
          {...register('message')}
          placeholder={t('message')}
          rows={4}
          className="w-full px-4 md:px-6 py-3 md:py-4 bg-navy-800 border border-gold/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors resize-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileTap={{ scale: 0.97 }}
        className="w-full px-6 md:px-8 py-3 md:py-4 bg-gold text-navy-950 rounded-lg font-semibold text-sm md:text-base hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : t('submit')}
      </motion.button>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-3 md:p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-300 text-sm md:text-base text-center"
        >
          {t('success')}
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-3 md:p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-300 text-sm md:text-base text-center"
        >
          {t('error')}
        </motion.div>
      )}
    </form>
  );
}
