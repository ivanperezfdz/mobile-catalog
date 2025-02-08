import { ResponsiveImage } from '@/ui/atoms/ResponsiveImage/ResponsiveImage';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './Header.styles';
import BagIcon from '@/ui/styles/icons/bag-icon.svg';
import Link from 'next/link';
import type { HeaderProps } from './Header.types';

export const Header = ({
  cartItemsCount = 0,
  currentLanguage,
  onLanguageChange,
  loading,
}: HeaderProps) => {
  const [showLoadingBar, setShowLoadingBar] = useState<boolean>(false);
  const router = useRouter();
  const showCart = !router.pathname.includes('/cart');

  useEffect(() => {
    if (loading) {
      setShowLoadingBar(true);
    } else {
      const timer = setTimeout(() => {
        setShowLoadingBar(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <S.HeaderContainer>
      <Link href="/">
        <S.Logo size="sm" $weight="bold">
          MBST
        </S.Logo>
      </Link>

      <S.ActionsContainer>
        <S.LanguageSelector>
          <S.LanguageButton
            $variant="default"
            $active={currentLanguage === 'es'}
            onClick={() => onLanguageChange('es')}
          >
            ES
          </S.LanguageButton>
          |
          <S.LanguageButton
            $variant="default"
            $active={currentLanguage === 'en'}
            onClick={() => onLanguageChange('en')}
          >
            EN
          </S.LanguageButton>
        </S.LanguageSelector>

        {showCart && (
          <Link href="/cart">
            <S.CartButton $variant="default" size="default">
              <ResponsiveImage src={BagIcon} alt="Shopping cart" />
              <span>{cartItemsCount}</span>
            </S.CartButton>
          </Link>
        )}
      </S.ActionsContainer>

      {showLoadingBar && (
        <S.LoadingBar data-testid="progressbar" $isFinishing={!loading} />
      )}
    </S.HeaderContainer>
  );
};
