import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/layout/MobileCTA';
import { Metadata } from 'next';
import type { AbstractIntlMessages } from 'next-intl';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

type Messages = {
  meta: { title: string; description: string };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messagesRaw = await import(`../../../messages/${locale}.json`);
  const messages = (messagesRaw.default ?? messagesRaw) as unknown as Messages;
  const meta = messages.meta;

  return {
    title: {
      default: meta.title,
      template: `%s | ${meta.title}`,
    },
    description: meta.description,
    alternates: {
      canonical: `https://yurist-davronbek.uz/${locale}`,
      languages: {
        uz: 'https://yurist-davronbek.uz/uz',
        ru: 'https://yurist-davronbek.uz/ru',
        en: 'https://yurist-davronbek.uz/en',
      },
    },
    openGraph: {
      locale: locale === 'uz' ? 'uz_UZ' : locale === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messagesModule = await import(`../../../messages/${locale}.json`);
  const messages = (messagesModule.default ?? messagesModule) as unknown as AbstractIntlMessages;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
      <MobileCTA />
    </NextIntlClientProvider>
  );
}
