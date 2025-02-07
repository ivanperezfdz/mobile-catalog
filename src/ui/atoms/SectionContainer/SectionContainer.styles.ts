import styled, { css } from 'styled-components';
import type { SectionContainerProps } from './SectionContainer.types';

export const SectionContainer = styled.div<SectionContainerProps>`
  ${({ theme, direction = 'row', $gap = 'md' }) => css`
    display: flex;
    flex-direction: ${direction};
    gap: ${theme.spacing[$gap]};
  `}
`;
