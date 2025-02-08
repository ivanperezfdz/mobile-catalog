import type { AppProps } from 'next/app';
import { ServiceFactory } from '@/application/factories/ServiceFactory';
import { PhoneApiRepository } from '@/infrastructure/phones/PhoneApiRepository';
import { LocalStorageCartRepository } from '@/infrastructure/cart/LocalStorageCartRepository';
import { TranslationAdapter } from '@/infrastructure/translation/TranslationAdapter';
import { LocaleAdapter } from '@/infrastructure/translation/LocaleAdapter';
import { PhoneProvider } from '@/ui/context/PhoneContext/PhoneContext';
import { CartProvider } from '@/ui/context/CartContext/CartContext';
import { TranslationProvider } from '@/ui/context/TranslationContext/TranslationContext';
import { GlobalStyles } from '@/ui/styles/theme/GlobalStyles';
import { theme } from '@/ui/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Layout } from '@/ui/templates/Layout/Layout';
import '@/ui/styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  const phoneService = ServiceFactory.createPhoneService(
    new PhoneApiRepository()
  );
  const cartService = ServiceFactory.createCartService(
    new LocalStorageCartRepository()
  );
  const translationService = ServiceFactory.createTranslationService(
    new TranslationAdapter(),
    new LocaleAdapter()
  );

  return (
    <TranslationProvider translationService={translationService}>
      <PhoneProvider phoneService={phoneService}>
        <CartProvider cartService={cartService}>
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CartProvider>
      </PhoneProvider>
    </TranslationProvider>
  );
}

export default MyApp;
