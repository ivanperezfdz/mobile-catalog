import styled from 'styled-components';
import { Input } from '@/ui/atoms/Input/Input.styles';
import { Text } from '@/ui/atoms/Text/Text.styles';

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  margin: ${({ theme }) => `${theme.spacing.lg} 0`};
`;

export const SearchInput = styled(Input)`
  padding-right: ${({ theme }) => theme.spacing['4xl']};
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  opacity: ${({ theme }) => theme.opacities.intense};
  transition: ${({ theme }) =>
    theme.transitions.create(
      theme.transitions.properties.opacity,
      theme.transitions.duration.fast
    )};

  &:hover {
    opacity: ${({ theme }) => theme.opacities.opaque};
  }
`;

export const ResultsCount = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;
