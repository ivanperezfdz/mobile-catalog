import type { Locale } from '../entities/Translation';

export type LocaleRepository = {
  getCurrentLocale(): Promise<Locale>;
  getPreferredLocales(): Promise<Locale[]>;
  clearCache(): void;
};
