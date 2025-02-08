import type {
  TranslationOptions,
  Language,
} from '@/domain/translation/entities/Translation';

export const LANGUAGE_KEY = 'app_language';

export type TranslationContextProps = {
  translate: (key: string, options?: TranslationOptions) => string;
  changeLanguage: (language: Language) => void;
  currentLanguage: Language;
};
