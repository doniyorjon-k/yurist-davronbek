export type Locale = 'uz' | 'ru' | 'en';

export interface ServiceItem {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface TestimonialItem {
  id: string;
  nameUz: string;
  nameRu: string;
  nameEn: string;
  roleUz: string;
  roleRu: string;
  roleEn: string;
  quoteUz: string;
  quoteRu: string;
  quoteEn: string;
}

export interface CaseResult {
  id: string;
  categoryKey: string;
  outcomeValue: string;
  outcomeLabel: string;
  descriptionUz: string;
  descriptionRu: string;
  descriptionEn: string;
}
