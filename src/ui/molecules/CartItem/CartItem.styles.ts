import { SectionContainer } from '@/ui/atoms/SectionContainer/SectionContainer.styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  padding: ${({ theme }) => theme.spacing.xl} 0;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const InfoSectionContainer = styled(SectionContainer)`
  padding: ${({ theme }) => theme.spacing.lg} 0;
  justify-content: space-between;
  align-items: start;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.sizes.cartImages.small};
  height: ${({ theme }) => theme.sizes.cartImages.small};

  ${({ theme }) => theme.mediaQueries.md} {
    width: ${({ theme }) => theme.sizes.cartImages.medium};
    height: ${({ theme }) => theme.sizes.cartImages.medium};
  }
`;
