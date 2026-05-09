'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CTAButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function CTAButton({
  variant = 'primary',
  href,
  onClick,
  icon,
  children,
  className = '',
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 font-sans';

  const variantClasses = {
    primary: 'bg-gold text-navy-950 hover:bg-gold-light shadow-lg hover:shadow-gold-lg',
    outline: 'border-2 border-gold text-gold hover:bg-gold/10 hover:border-gold-light',
    ghost: 'text-gold hover:bg-gold/5 underline',
  };

  const content = (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
