import styled, { css } from 'styled-components';
import type { ButtonProps } from './Button.types';

const getButtonSize = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
        font-size: ${({ theme }) => theme.typography.size.sm};
      `;
    case 'medium':
      return css`
        padding: ${({ theme }) =>
          `${theme.spacing['2lg']} ${theme.spacing.xl}`};
        font-size: ${({ theme }) => theme.typography.size.base};
      `;
    case 'large':
      return css`
        padding: ${({ theme }) =>
          `${theme.spacing.xl} ${theme.spacing['3xl']}`};
        font-size: ${({ theme }) => theme.typography.size.lg};
      `;
    case 'default':
      return css`
        font-size: ${({ theme }) => theme.typography.size.sm};
      `;
  }
};

const getButtonVariant = ($variant: ButtonProps['$variant']) => {
  switch ($variant) {
    case 'secondary':
      return css`
        background: transparent;
        border: ${({ theme }) =>
          `${theme.spacing.px} solid ${theme.colors.primary}`};
        color: ${({ theme }) => theme.colors.text.primary};
      `;
    case 'primary':
      return css`
        background: ${({ theme }) => theme.colors.primary};
        border> ${({ theme }) => `${theme.spacing.px} solid ${theme.colors.primary}`};
        color: ${({ theme }) => theme.colors.text.white};
      `;
    case 'default':
      return css`
        background: transparent;
        color: ${({ theme }) => theme.colors.text.primary};
      `;
  }
};

export const Button = styled.button<ButtonProps>`
  ${({
    $variant = 'primary',
    size = 'medium',
    $fullWidth,
    disabled = false,
    $inline = false,
  }) => css`
    align-items: center;
    justify-content: center;
    width: ${$fullWidth ? '100%' : 'auto'};
    max-width: ${({ theme }) => ($inline ? theme.sizes.buttonWidth : 'unset')};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? 0.5 : 1};
    white-space: ${$inline ? 'nowrap' : 'initial'};
    transition: ${({ theme }) =>
      theme.transitions.create(
        theme.transitions.properties.all,
        theme.transitions.duration.fast
      )};

    ${getButtonSize(size)}
    ${getButtonVariant($variant)}
    
    &:hover {
      opacity: ${disabled ? 0.5 : 0.8};
    }
  `}
`;
