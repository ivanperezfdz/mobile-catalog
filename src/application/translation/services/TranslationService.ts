import type { TranslationServicePort } from '../ports/TranslationServicePort';
import type { TranslationRepository } from '@/domain/translation/repositories/TranslationRepository';
import type { LocaleRepository } from '@/domain/translation/repositories/LocaleRepository';
import type {
  Language,
  TranslationOptions,
} from '@/domain/translation/entities/Translation';
import { DEFAULT_LANGUAGE } from '@/domain/translation/entities/Translation';

export class TranslationService implements TranslationServicePort {
  private currentLanguage: Language = DEFAULT_LANGUAGE;
  private initializationPromise: Promise<void>;

  constructor(
    private readonly translationRepository: TranslationRepository,
    private readonly localeRepository: LocaleRepository
  ) {
    this.initializationPromise = this.initializeLanguage();
  }

  private async initializeLanguage(): Promise<void> {
    const locale = await this.localeRepository.getCurrentLocale();
    this.currentLanguage = locale.language;
  }

  async waitForInitialization(): Promise<void> {
    await this.initializationPromise;
  }

  translate(key: string, options?: TranslationOptions): string {
    const targetLanguage = options?.language || this.currentLanguage;
    return this.translationRepository.translate(
      key,
      targetLanguage,
      options?.params
    );
  }

  changeLanguage(language: Language): void {
    this.currentLanguage = language;
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage;
  }
}
