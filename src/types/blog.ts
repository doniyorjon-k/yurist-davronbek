export interface BlogPost {
  slug: string;
  category: 'business' | 'property' | 'family' | 'general' | 'labor' | 'corporate' | 'tax' | 'contracts' | 'court';
  publishedAt: string;
  readingTimeMinutes: number;
  titleUz: string;
  titleRu: string;
  titleEn: string;
  excerptUz: string;
  excerptRu: string;
  excerptEn: string;
  contentUz: string;
  contentRu: string;
  contentEn: string;
  coverImage?: string;
}
