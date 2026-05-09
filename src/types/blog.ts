export interface BlogPost {
  slug: string;
  category: 'biznes' | 'mol-mulk' | 'oila' | 'jinoiy' | 'umumiy';
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
