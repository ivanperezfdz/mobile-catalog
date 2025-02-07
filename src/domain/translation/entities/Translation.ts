export type Language = 'en' | 'es';
export const DEFAULT_LANGUAGE: Language = 'en';
export const SUPPORTED_LANGUAGES: Language[] = ['en', 'es'];

export type Translation = {
  key: string;
  value: string;
  language: Language;
};

export type TranslationParams = {
  count?: number;
  value?: string | number;
  name?: string;
};

export type TranslationOptions = {
  language?: Language;
  params?: TranslationParams;
};

export type Locale = {
  language: Language;
  region?: string;
};
