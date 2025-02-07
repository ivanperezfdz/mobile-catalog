import { createMockTranslationService } from '@/test/mocks/services/translationService.mock';
import type { TranslationService } from '../TranslationService';

describe('TranslationService', () => {
  let translationService: TranslationService;

  beforeEach(() => {
    translationService = createMockTranslationService();
  });

  describe('translate', () => {
    it('should return translation from repository', () => {
      const result = translationService.translate('common.add');
      expect(result).toBe('Add');
    });

    it('should return key if translation not found', () => {
      const result = translationService.translate('nonexistent.key');
      expect(result).toBe('nonexistent.key');
    });
  });

  describe('waitForInitialization', () => {
    it('should resolve when initialization is complete', async () => {
      await expect(
        translationService.waitForInitialization()
      ).resolves.toBeUndefined();
    });
  });
});
