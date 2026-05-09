'use client';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
        <span className="font-serif text-xl md:text-2xl font-bold text-gold">
          {number}
        </span>
      </div>
      <h3 className="font-serif text-base md:text-lg font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base text-white/70 max-w-xs">
        {description}
      </p>
    </div>
  );
}
