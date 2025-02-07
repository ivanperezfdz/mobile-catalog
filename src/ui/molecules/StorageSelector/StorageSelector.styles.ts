import styled from 'styled-components';

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

export const Option = styled.button<{ selected?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing['2lg']} ${theme.spacing.xl}`};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.border.dark : theme.colors.border.light};
  margin-right: ${({ selected }) => (selected ? 0 : '-1px')};
  padding-right: ${({ selected, theme }) =>
    selected ? `calc(${theme.spacing.xl} - 1px)` : theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.size.sm};
  text-transform: uppercase;
  transition: all 0.2s ease;
`;
