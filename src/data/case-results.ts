export interface CaseResult {
  id: string;
  categoryKey: string;
  outcomeKey: 'debt' | 'property' | 'custody';
  outcomeValue: string;
  descriptionUz: string;
  descriptionRu: string;
  descriptionEn: string;
}

export const caseResults: CaseResult[] = [
  {
    id: '1',
    categoryKey: 'business',
    outcomeKey: 'debt',
    outcomeValue: '450M',
    descriptionUz: 'Kompaniyaning qarzdorlik muammosi 6 oyda muvaffaqiyatli hal qilindi.',
    descriptionRu: 'Проблема задолженности компании успешно разрешена за 6 месяцев.',
    descriptionEn: 'Company debt issue successfully resolved in 6 months.',
  },
  {
    id: '2',
    categoryKey: 'property',
    outcomeKey: 'property',
    outcomeValue: '100%',
    descriptionUz: "Ko'chmas mulk huquqi sudda butunlay qaytarildi.",
    descriptionRu: 'Право на недвижимость полностью восстановлено в суде.',
    descriptionEn: 'Property right fully restored in court.',
  },
  {
    id: '3',
    categoryKey: 'family',
    outcomeKey: 'custody',
    outcomeValue: '3',
    descriptionUz: 'Ajralishda 3 bolani asrab olish huquqi misolada mahallisiga berildi.',
    descriptionRu: 'Право на опеку 3 детей присуждено истцу при разводе.',
    descriptionEn: 'Custody of 3 children awarded to plaintiff in divorce.',
  },
];
