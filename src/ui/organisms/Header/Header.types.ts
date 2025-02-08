import type { Language } from '@/domain/translation/entities/Translation';

export type HeaderProps = {
  cartItemsCount?: number;
  currentLanguage: string;
  onLanguageChange: (lang: Language) => void;
  loading: boolean;
};
