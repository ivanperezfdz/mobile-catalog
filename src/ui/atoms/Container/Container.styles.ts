import styled, { css } from 'styled-components';
import type { ContainerProps } from './Container.types';

const getMaxWidth = ($maxWidth: ContainerProps['$maxWidth']) => {
  switch ($maxWidth) {
    case 'sm':
      return '640px';
    case 'md':
      return '768px';
    case 'lg':
      return '1024px';
    case 'xl':
      return '1280px';
    case '2xl':
      return '1536px';
    case 'full':
      return '100%';
    default:
      return '1200px';
  }
};

export const Container = styled.div<ContainerProps>`
  ${({ $maxWidth = '2xl', $padding = true }) => css`
    width: 100%;
    max-width: ${getMaxWidth($maxWidth)};
    margin: 0 auto;
    padding: ${$padding ? ({ theme }) => theme.spacing.xl : 0};

    ${({ theme }) => theme.mediaQueries.lg} {
      padding: ${$padding ? ({ theme }) => theme.spacing['3xl'] : 0};
    }
  `}
`;
