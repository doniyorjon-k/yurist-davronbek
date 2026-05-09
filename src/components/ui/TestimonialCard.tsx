'use client';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <div className="card-base p-6 md:p-10">
      <svg className="w-8 h-8 text-gold/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-white/80 mb-6 italic text-sm md:text-base leading-relaxed">
        &quot;{quote}&quot;
      </p>
      <div>
        <p className="font-semibold text-white text-sm md:text-base">{name}</p>
        <p className="text-gold text-xs md:text-sm mt-1">{role}</p>
      </div>
    </div>
  );
}
