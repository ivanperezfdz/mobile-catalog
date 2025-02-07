import { render, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/ui/styles/theme';
import { TranslationProvider } from '@/ui/context/TranslationContext';
import { PhoneProvider } from '@/ui/context/PhoneContext';
import { CartProvider } from '@/ui/context/CartContext';
import {
  createMockTranslationService,
  createMockPhoneService,
  createMockCartService,
} from '../mocks/services';

type RenderOptions = {
  withTheme?: boolean;
  withTranslation?: boolean;
  withPhone?: boolean;
  withCart?: boolean;
};

export const renderWithProviders = async (
  ui: React.ReactElement,
  options: RenderOptions = {
    withTheme: true,
    withTranslation: true,
    withPhone: true,
    withCart: true,
  }
) => {
  const mockTranslationService = createMockTranslationService();
  const mockPhoneService = createMockPhoneService();
  const mockCartService = createMockCartService();

  let result;
  await act(async () => {
    result = render(ui, {
      wrapper: ({ children }) => {
        let wrapped = children;

        if (options.withCart) {
          wrapped = (
            <CartProvider cartService={mockCartService}>{wrapped}</CartProvider>
          );
        }

        if (options.withPhone) {
          wrapped = (
            <PhoneProvider phoneService={mockPhoneService}>
              {wrapped}
            </PhoneProvider>
          );
        }

        if (options.withTranslation) {
          wrapped = (
            <TranslationProvider translationService={mockTranslationService}>
              {wrapped}
            </TranslationProvider>
          );
        }

        if (options.withTheme) {
          wrapped = <ThemeProvider theme={theme}>{wrapped}</ThemeProvider>;
        }

        return <>{wrapped}</>;
      },
    });
  });

  return {
    ...result!,
    mockTranslationService,
    mockPhoneService,
    mockCartService,
  };
};
