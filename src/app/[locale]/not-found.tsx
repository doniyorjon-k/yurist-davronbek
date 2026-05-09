import { Link } from '@/lib/i18n-navigation';

export default function NotFound() {
  return (
    <div className="bg-navy-950 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="font-serif text-6xl font-bold text-white">404</h1>
        <p className="text-xl text-white/70">Page not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gold text-navy-950 rounded-lg font-semibold hover:bg-gold-light transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
