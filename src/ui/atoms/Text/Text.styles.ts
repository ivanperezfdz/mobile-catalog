import styled, { css } from 'styled-components';
import type { TextProps } from './Text.types';

export const Text = styled.span<TextProps>`
  ${({
    theme,
    size = 'base',
    $weight = 'regular',
    color = 'primary',
    transform = 'none',
  }) => css`
    font-family: ${theme.typography.family.base};
    font-size: ${theme.typography.size[size]};
    font-weight: ${theme.typography.weight[$weight]};
    color: ${theme.colors.text[color]};
    text-transform: ${theme.typography.transformation[transform]};
  `}
`;
