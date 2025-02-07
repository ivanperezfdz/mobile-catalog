import { Header } from '@/ui/organisms/Header/Header';
import { useEffect } from 'react';
import { useCart } from '@/ui/hooks/useCart';
import { usePhones } from '@/ui/hooks/usePhones';
import { useTranslation } from '@/ui/hooks/useTranslation';
import * as S from './Layout.styles';
import type { LayoutProps } from './Layout.types';

export const Layout = ({ children, showCart = true }: LayoutProps) => {
  const { loadCart, cart, loading: loadingCart } = useCart();
  const { loading: loadingPhones } = usePhones();
  const { currentLanguage, changeLanguage } = useTranslation();

  useEffect(() => {
    void loadCart();
  }, [loadCart]);

  return (
    <>
      <Header
        cartItemsCount={cart.items.length}
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
        showCart={showCart}
        loading={loadingCart || loadingPhones}
      />
      <S.Main>{children}</S.Main>
    </>
  );
};
