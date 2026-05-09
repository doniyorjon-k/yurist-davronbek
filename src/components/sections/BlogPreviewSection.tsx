'use client';

import { useTranslations, useLocale } from 'next-intl';
import SectionHeading from '@/components/ui/SectionHeading';
import BlogCard from '@/components/ui/BlogCard';
import CTAButton from '@/components/ui/CTAButton';
import { blogPosts } from '@/data/blog-posts';

export default function BlogPreviewSection() {
  const t = useTranslations('blog');
  const locale = useLocale();

  // Get 3 latest posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-navy-900 section-padding">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 mb-12">
          <div>
            <h2 className="font-serif text-heading font-semibold text-white mb-3 md:mb-4">
              {t('heading')}
            </h2>
            <p className="text-base md:text-lg text-white/70">
              {t('subheading')}
            </p>
          </div>
          <CTAButton href="/blog" variant="outline" className="flex-shrink-0">
            {t('viewAll')} →
          </CTAButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
