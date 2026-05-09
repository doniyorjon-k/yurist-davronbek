'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/date';

interface BlogCardProps {
  post: BlogPost;
  locale: string;
}

function getTitle(post: BlogPost, locale: string): string {
  if (locale === 'uz') return post.titleUz;
  if (locale === 'ru') return post.titleRu;
  return post.titleEn;
}

function getExcerpt(post: BlogPost, locale: string): string {
  if (locale === 'uz') return post.excerptUz;
  if (locale === 'ru') return post.excerptRu;
  return post.excerptEn;
}

export default function BlogCard({ post, locale }: BlogCardProps) {
  const t = useTranslations('blog');
  const tCat = useTranslations('categories');
  const title = getTitle(post, locale);
  const excerpt = getExcerpt(post, locale);
  const publishDate = formatDate(post.publishedAt, locale);

  return (
    <Link href={`/${locale}/blog/${post.slug}`}>
      <div className="card-base p-6 md:p-8 h-full hover:border-gold/50 transition-colors group cursor-pointer">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs md:text-sm px-3 py-1 bg-gold/10 text-gold rounded-full">
            {tCat(post.category as any)}
          </span>
          <span className="text-xs md:text-sm text-white/50">{publishDate}</span>
        </div>

        <h3 className="font-serif text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">
          {title}
        </h3>

        <p className="text-sm md:text-base text-white/70 mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gold/10">
          <span className="text-xs md:text-sm text-gold font-semibold">
            {t('readMore')} →
          </span>
          <span className="text-xs md:text-sm text-white/50">
            {post.readingTimeMinutes} {t('minRead')}
          </span>
        </div>
      </div>
    </Link>
  );
}
