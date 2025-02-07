import type { TranslationRepository } from '@/domain/translation/repositories/TranslationRepository';
import type {
  Language,
  TranslationParams,
} from '@/domain/translation/entities/Translation';
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from '@/domain/translation/entities/Translation';
import i18next from 'i18next';

export class TranslationAdapter implements TranslationRepository {
  private static instance: TranslationAdapter;
  private initialized = false;

  constructor() {
    if (!TranslationAdapter.instance) {
      TranslationAdapter.instance = this;
      this.initI18N();
    }
    return TranslationAdapter.instance;
  }

  private initI18N(): void {
    if (this.initialized) return;

    void i18next.init({
      resources: {
        en: { translation: require('../locale/en.json') },
        es: { translation: require('../locale/es.json') },
      },
      lng: DEFAULT_LANGUAGE,
      fallbackLng: DEFAULT_LANGUAGE,
      interpolation: {
        escapeValue: false,
      },
    });

    this.initialized = true;
  }

  translate(
    key: string,
    language: Language,
    params?: TranslationParams
  ): string {
    if (!this.initialized) {
      this.initI18N();
    }

    return (
      i18next.t(key, {
        lng: language,
        ...params,
      }) || key
    );
  }

  getAvailableLanguages(): Language[] {
    return SUPPORTED_LANGUAGES;
  }
}
