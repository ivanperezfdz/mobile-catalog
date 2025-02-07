import styled from 'styled-components';
import { Text } from '@/ui/atoms/Text/Text.styles';

export const ColorOption = styled.button<{ color: string; selected?: boolean }>`
  width: ${({ theme }) => theme.sizes.colorOptionSize};
  height: ${({ theme }) => theme.sizes.colorOptionSize};
  border: ${({ theme }) => theme.spacing.px} solid
    ${({ theme, selected }) =>
      selected ? theme.colors.primary.main : theme.colors.border.light};
  padding: 2px;
  background-color: white;
  transition: ${({ theme }) =>
    theme.transitions.create(
      theme.transitions.properties.all,
      theme.transitions.duration.fast
    )};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
  }
`;

export const ColorName = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.xs};
`;
