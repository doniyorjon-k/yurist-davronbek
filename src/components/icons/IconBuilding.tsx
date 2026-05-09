export default function IconBuilding({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="2" width="18" height="20" rx="2" />
      <line x1="9" y1="2" x2="9" y2="22" />
      <line x1="15" y1="2" x2="15" y2="22" />
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="13" x2="21" y2="13" />
      <line x1="3" y1="19" x2="21" y2="19" />
      <circle cx="7" cy="5" r="0.5" fill="currentColor" />
      <circle cx="7" cy="11" r="0.5" fill="currentColor" />
      <circle cx="7" cy="17" r="0.5" fill="currentColor" />
    </svg>
  );
}
