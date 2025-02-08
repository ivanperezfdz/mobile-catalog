import { SectionContainer } from '@/ui/atoms/SectionContainer/SectionContainer.styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;

  ${({ theme }) => theme.mediaQueries.xs} {
    grid-template-columns: auto 1fr;
  }

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
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.cartImages.medium};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: ${({ theme }) => theme.sizes.cartImages.small};
    height: ${({ theme }) => theme.sizes.cartImages.small};
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: ${({ theme }) => theme.sizes.cartImages.medium};
    height: ${({ theme }) => theme.sizes.cartImages.medium};
  }
`;
