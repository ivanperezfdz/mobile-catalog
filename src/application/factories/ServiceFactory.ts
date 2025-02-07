import { PhoneService } from '../phones/services/PhoneService';
import { CartService } from '../cart/services/CartService';
import { TranslationService } from '../translation/services/TranslationService';
import type { PhoneRepository } from '@/domain/phones/repositories/PhoneRepository';
import type { CartRepository } from '@/domain/cart/repositories/CartRepository';
import type { TranslationRepository } from '@/domain/translation/repositories/TranslationRepository';
import type { LocaleRepository } from '@/domain/translation/repositories/LocaleRepository';

export class ServiceFactory {
  static createPhoneService(phoneRepository: PhoneRepository): PhoneService {
    return new PhoneService(phoneRepository);
  }

  static createCartService(cartRepository: CartRepository): CartService {
    return new CartService(cartRepository);
  }

  static createTranslationService(
    translationRepository: TranslationRepository,
    localeRepository: LocaleRepository
  ): TranslationService {
    return new TranslationService(translationRepository, localeRepository);
  }
}
