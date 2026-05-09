export default function IconScale({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h18M3 12v8c0 1 .5 2 1.5 2h16c1 0 1.5-1 1.5-2v-8M3 12L8 4h8l5 8M12 12v8M8 4h8" />
    </svg>
  );
}
