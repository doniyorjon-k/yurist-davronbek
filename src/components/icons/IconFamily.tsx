export default function IconFamily({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="4" r="2" />
      <circle cx="6" cy="8" r="2" />
      <circle cx="18" cy="8" r="2" />
      <path d="M12 6v4M6 10v10M18 10v10M12 10v10M6 20h12" />
    </svg>
  );
}
