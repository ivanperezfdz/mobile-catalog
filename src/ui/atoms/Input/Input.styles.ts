import styled, { css } from 'styled-components';
import type { InputProps } from './Input.types';

export const Input = styled.input<InputProps>`
  ${({ theme, $fullWidth }) => css`
    width: ${$fullWidth ? '100%' : 'auto'};
    padding: ${theme.spacing.sm} 0;
    border: none;
    border-bottom: ${theme.spacing.px} solid ${theme.colors.border.light};
    font-size: ${theme.typography.size.base};
    font-weight: ${theme.typography.weight.regular};
    transition: ${theme.transitions.create(
      theme.transitions.properties.borderColor,
      theme.transitions.duration.fast
    )};
    background: transparent;

    &:focus {
      outline: none;
      border-bottom-color: ${theme.colors.border.dark};
    }

    &::placeholder {
      color: ${theme.colors.text.secondary};
      opacity: ${({ theme }) => theme.opacities.opaque};
    }

    &:-webkit-spelling-error,
    &:-webkit-grammar-error,
    &::-webkit-validation-bubble-message {
      display: none;
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    &:-moz-spelling-error,
    &:-moz-grammar-error {
      text-decoration: none;
    }
  `}
`;
