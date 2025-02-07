import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: ${({ theme }) => theme.sizes.headerHeight};
  left: 0;
  padding: 0 2rem;
  height: ${({ theme }) => theme.sizes.topBarDetailHeight};
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContent = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing['4xl']};
    margin-bottom: ${({ theme }) => theme.spacing['6xl']};
  }
`;

export const ImageSection = styled.div`
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  max-height: 600px;

  ${({ theme }) => theme.mediaQueries.lg} {
    aspect-ratio: auto;
    height: 600px;
  }
`;

export const Specifications = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-column: 1 / -1;
    margin-top: 0;
  }
`;

export const SpecsList = styled.div`
  display: grid;
  gap: 0;
  margin-top: ${({ theme }) => theme.spacing['4xl']};
`;

export const SpecItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: ${({ theme }) => theme.spacing['2lg']} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.main};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.main};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;
