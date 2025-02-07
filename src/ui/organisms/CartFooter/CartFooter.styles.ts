import styled from 'styled-components';
import { SectionContainer } from '@/ui/atoms/SectionContainer/SectionContainer.styles';

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  display: grid;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'total total'
    'continue pay';
  $gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  padding-bottom: calc(
    ${({ theme }) => theme.spacing.xl} + env(safe-area-inset-bottom)
  );

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: ${({ theme }) =>
      `${theme.sizes.buttonWidth} 1fr ${theme.sizes.buttonWidth}`};
    $gap: ${({ theme }) => theme.spacing['3xl']};
    padding: ${({ theme }) => theme.spacing['3xl']};
    padding-bottom: calc(
      ${({ theme }) => theme.spacing['3xl']} + env(safe-area-inset-bottom)
    );
  }
`;

export const TotalContainer = styled(SectionContainer).attrs({
  $gap: 'xl',
  direction: 'row',
})`
  grid-area: total;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: flex-end;
    grid-area: unset;
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.spacing['2xl']};
  }
`;

export const ContinueButtonWrapper = styled.div`
  grid-area: continue;
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-area: unset;
  }
`;

export const PayButtonWrapper = styled.div`
  grid-area: pay;
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-area: unset;
  }
`;
