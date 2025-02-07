import type { HeaderProps } from './Header.types';
import { useEffect, useState } from 'react';
import * as S from './Header.styles';
import BagIcon from '@/ui/styles/icons/bag-icon.svg';
import { ResponsiveImage } from '@/ui/atoms/ResponsiveImage/ResponsiveImage';
import Link from 'next/link';

export const Header = ({
  cartItemsCount = 0,
  currentLanguage,
  onLanguageChange,
  showCart = true,
  loading,
}: HeaderProps) => {
  const [showLoadingBar, setShowLoadingBar] = useState<boolean>(false);

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
            <S.CartButton $variant="default">
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
