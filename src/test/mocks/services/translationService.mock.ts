import { TranslationService } from '@/application/translation/services/TranslationService';
import type { TranslationRepository } from '@/domain/translation/repositories/TranslationRepository';
import type { LocaleRepository } from '@/domain/translation/repositories/LocaleRepository';
import { translations } from '../data/translations.mock';
import type { Language } from '@/domain/translation/entities/Translation';

export const createMockTranslationService = () => {
  const mockTranslationRepository: jest.Mocked<TranslationRepository> = {
    translate: jest
      .fn()
      .mockImplementation((key: string) => translations[key] || key),
    getAvailableLanguages: jest
      .fn()
      .mockReturnValue(['en', 'es'] as Language[]),
  };

  const mockLocaleRepository: jest.Mocked<LocaleRepository> = {
    getCurrentLocale: jest.fn().mockReturnValue('es' as Language),
    getPreferredLocales: jest.fn().mockReturnValue(['es'] as Language[]),
    clearCache: jest.fn().mockResolvedValue(undefined),
  };

  return new TranslationService(
    mockTranslationRepository,
    mockLocaleRepository
  );
};
