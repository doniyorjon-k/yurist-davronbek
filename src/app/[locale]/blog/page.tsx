import SectionHeading from '@/components/ui/SectionHeading';
import BlogCard from '@/components/ui/BlogCard';
import { blogPosts } from '@/data/blog-posts';
import { Metadata } from 'next';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

type Messages = {
  blog: { pageTitle: string; pageSubheading: string };
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog',
    description: 'Legal articles and advice',
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const messagesRaw = await import(`../../../../messages/${locale}.json`);
  const messages = (messagesRaw.default ?? messagesRaw) as unknown as Messages;
  const blog = messages.blog;

  return (
    <div className="bg-navy-950 min-h-screen">
      <div className="container-width py-20 md:py-28">
        <SectionHeading
          heading={blog.pageTitle}
          subheading={blog.pageSubheading}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}
