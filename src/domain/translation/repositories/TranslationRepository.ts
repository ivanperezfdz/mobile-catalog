import type { Language, TranslationParams } from '../entities/Translation';

export type TranslationRepository = {
  translate(
    key: string,
    language: Language,
    params?: TranslationParams
  ): string;
  getAvailableLanguages(): Language[];
};
