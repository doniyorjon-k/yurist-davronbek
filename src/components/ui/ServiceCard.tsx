'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, borderColor: 'rgba(201, 168, 76, 0.6)' }}
      className="card-base p-6 md:p-8 group cursor-pointer"
    >
      <div className="bg-gold/10 rounded-lg p-3 md:p-4 w-fit mb-4 group-hover:bg-gold/15 transition-colors">
        <div className="w-8 h-8 md:w-10 md:h-10 text-gold">{icon}</div>
      </div>
      <h3 className="font-serif text-lg md:text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-base text-white/70 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
