import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { blogPosts } from '@/data/blog-posts';
import { Link } from '@/lib/i18n-navigation';
import { formatDate } from '@/lib/date';

export const dynamic = 'force-dynamic';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

type Messages = {
  blog: { backToBlog: string; minRead: string };
  categories: Record<string, string>;
};

export async function generateStaticParams() {
  const locales = ['uz', 'ru', 'en'];
  return blogPosts.flatMap((post) =>
    locales.map((locale) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const post = blogPosts.find((p) => p.slug === slug);
  const messagesRaw = await import(`../../../../../messages/${locale}.json`);
  const messages = (messagesRaw.default ?? messagesRaw) as unknown as Messages;
  const backToBlog = messages.blog.backToBlog;
  const minRead = messages.blog.minRead;
  const categoryLabel = messages.categories[post!.category] ?? post!.category;

  if (!post) {
    notFound();
  }

  const getTitle = (): string => {
    if (locale === 'uz') return post!.titleUz;
    if (locale === 'ru') return post!.titleRu;
    return post!.titleEn;
  };

  const getContent = (): string => {
    if (locale === 'uz') return post!.contentUz;
    if (locale === 'ru') return post!.contentRu;
    return post!.contentEn;
  };

  const publishDate = formatDate(post!.publishedAt, locale);

  return (
    <div className="bg-navy-950 min-h-screen py-20 md:py-28">
      <div className="container-width max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {backToBlog}
        </Link>

        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs md:text-sm px-3 py-1 bg-gold/10 text-gold rounded-full">
              {categoryLabel}
            </span>
            <span className="text-xs md:text-sm text-white/50">{publishDate}</span>
            <span className="text-xs md:text-sm text-white/50">
              {post.readingTimeMinutes} {minRead}
            </span>
          </div>

          <h1 className="font-serif text-heading font-bold text-white leading-tight mb-4">
            {getTitle()}
          </h1>

          <div className="h-px bg-gold/10" />
        </div>

        <div className="prose prose-invert max-w-none mb-12 md:mb-16">
          <div
            className="text-white/70 leading-relaxed space-y-4 text-base md:text-lg"
            dangerouslySetInnerHTML={{ __html: getContent() }}
          />
        </div>

        <div className="border-t border-gold/10 pt-8 md:pt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gold/30 text-gold hover:bg-gold/10 transition-colors font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {backToBlog}
          </Link>
        </div>
      </div>
    </div>
  );
}
