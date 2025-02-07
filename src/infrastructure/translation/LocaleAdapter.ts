import type { LocaleRepository } from '@/domain/translation/repositories/LocaleRepository';
import type {
  Locale,
  Language,
} from '@/domain/translation/entities/Translation';
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from '@/domain/translation/entities/Translation';

export class LocaleAdapter implements LocaleRepository {
  private cachedLocale: Locale | null = null;
  private cachedPreferredLocales: Locale[] | null = null;

  async getCurrentLocale(): Promise<Locale> {
    if (this.cachedLocale) {
      return this.cachedLocale;
    }

    try {
      const browserLanguage = navigator.language.split('-')[0] as Language;
      this.cachedLocale = {
        language: this.isValidLanguage(browserLanguage)
          ? browserLanguage
          : DEFAULT_LANGUAGE,
        region: navigator.language.split('-')[1],
      };
      return this.cachedLocale;
    } catch {
      return { language: DEFAULT_LANGUAGE };
    }
  }

  private isValidLanguage(lang: string): boolean {
    return SUPPORTED_LANGUAGES.includes(lang as Language);
  }

  async getPreferredLocales(): Promise<Locale[]> {
    if (this.cachedPreferredLocales) {
      return this.cachedPreferredLocales;
    }

    try {
      this.cachedPreferredLocales = navigator.languages
        .map((lang) => ({
          language: lang.split('-')[0] as Language,
          region: lang.split('-')[1],
        }))
        .filter((locale) => this.isValidLanguage(locale.language));

      return this.cachedPreferredLocales;
    } catch {
      return [{ language: DEFAULT_LANGUAGE }];
    }
  }

  clearCache(): void {
    this.cachedLocale = null;
    this.cachedPreferredLocales = null;
  }
}
