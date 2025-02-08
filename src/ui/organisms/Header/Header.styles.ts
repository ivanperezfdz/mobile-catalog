import styled, { css, keyframes } from 'styled-components';
import { Text } from '@/ui/atoms/Text/Text.styles';
import { Button } from '@/ui/atoms/Button/Button.styles';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  height: ${({ theme }) => theme.sizes.headerHeight};
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
  background-color: ${({ theme }) => theme.colors.background};

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing['3xl']}`};
  }
`;

export const Logo = styled(Text)`
  font-size: ${({ theme }) => theme.typography.size['2xl']};
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LanguageButton = styled(Button)<{ $active: boolean }>`
  ${({ theme, $active }) => css`
    color: ${$active ? theme.colors.text.primary : theme.colors.text.secondary};
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: ${theme.typography.size.base};

    &:hover {
      color: ${theme.colors.text.primary};
    }
  `}
`;

export const CartButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const progressAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const LoadingBar = styled.div<{ $isFinishing: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.spacing.px};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    animation: ${progressAnimation} 300ms ease-in-out forwards;
    opacity: ${({ $isFinishing }) => ($isFinishing ? 0 : 1)};
    transition: opacity 300ms ease-in-out;
  }
`;
