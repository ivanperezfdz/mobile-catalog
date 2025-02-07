import styled, { keyframes } from 'styled-components';
import { Text } from '@/ui/atoms/Text/Text.styles';

const overlayAnimation = {
  in: keyframes`
    0% { transform: translateY(100%); }
    100% { transform: translateY(0); }
  `,
  out: keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(100%); }
  `,
};

export const Card = styled.a<{ $vertical?: boolean }>`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border: ${({ theme }) => `${theme.spacing.px} solid ${theme.colors.primary}`};
  margin-right: -${({ theme }) => theme.spacing.px};
  margin-bottom: -${({ theme }) => theme.spacing.px};
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ theme }) => theme.opacities.transparent};
  transform: translateY(100%);

  ${Card}:hover & {
    opacity: ${({ theme }) => theme.opacities.opaque};
    animation: ${overlayAnimation.in}
      ${({ theme }) => theme.transitions.duration.slow}
      cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  }

  ${Card}:not(:hover) & {
    animation: ${overlayAnimation.out}
      ${({ theme }) => theme.transitions.duration.slow}
      cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: ${({ theme }) => theme.spacing.lg};
  align-items: end;
  position: relative;
  z-index: 1;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Brand = styled(Text)`
  transition: ${({ theme }) =>
    theme.transitions.create(
      theme.transitions.properties.color,
      theme.transitions.duration.slow
    )};

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.text.white};
  }
`;

export const Name = styled(Text)`
  transition: ${({ theme }) =>
    theme.transitions.create(
      theme.transitions.properties.color,
      theme.transitions.duration.slow
    )};

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.text.white};
  }
`;

export const Price = styled(Text)`
  transition: ${({ theme }) =>
    theme.transitions.create(
      theme.transitions.properties.color,
      theme.transitions.duration.slow
    )};

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.text.white};
  }
`;
