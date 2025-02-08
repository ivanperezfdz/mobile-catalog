import { useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext/TranslationContext';
import type {
  Language,
  TranslationOptions,
} from '@/domain/translation/entities/Translation';

export const useTranslation = () => {
  const context = useContext(TranslationContext);

  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }

  const { translate, changeLanguage, currentLanguage } = context;

  return {
    t: (key: string, options?: TranslationOptions) => translate(key, options),
    changeLanguage: (language: Language) => changeLanguage(language),
    currentLanguage,
  };
};
