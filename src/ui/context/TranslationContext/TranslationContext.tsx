import type {
  Language,
  TranslationOptions,
} from '@/domain/translation/entities/Translation';
import type { TranslationService } from '@/application/translation/services/TranslationService';
import { createContext, useCallback, useEffect, useState } from 'react';
import { DEFAULT_LANGUAGE } from '@/domain/translation/entities/Translation';
import type { TranslationContextProps } from './TranslationContext.types';
import { LANGUAGE_KEY } from './TranslationContext.types';

export const TranslationContext = createContext<
  TranslationContextProps | undefined
>(undefined);

export const TranslationProvider: React.FC<{
  children: React.ReactNode;
  translationService: TranslationService;
}> = ({ children, translationService }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] =
    useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const initializeLanguage = async () => {
      await translationService.waitForInitialization();
      const savedLanguage = localStorage.getItem(LANGUAGE_KEY) as Language;
      if (savedLanguage) {
        translationService.changeLanguage(savedLanguage);
        setCurrentLanguage(savedLanguage);
      } else {
        setCurrentLanguage(translationService.getCurrentLanguage());
      }
      setIsLoading(false);
    };
    void initializeLanguage();
  }, [translationService]);

  const translate = useCallback(
    (key: string, options?: TranslationOptions) => {
      return translationService.translate(key, options);
    },
    [translationService]
  );

  const changeLanguage = useCallback(
    (language: Language) => {
      translationService.changeLanguage(language);
      localStorage.setItem(LANGUAGE_KEY, language);
      setCurrentLanguage(language);
    },
    [translationService]
  );

  if (isLoading) {
    return null;
  }

  return (
    <TranslationContext.Provider
      value={{
        translate,
        changeLanguage,
        currentLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
