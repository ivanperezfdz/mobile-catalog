import type {
  Language,
  TranslationOptions,
} from '@/domain/translation/entities/Translation';

export type TranslationServicePort = {
  translate(key: string, options?: TranslationOptions): string;
  changeLanguage(language: Language): void;
  getCurrentLanguage(): Language;
};
