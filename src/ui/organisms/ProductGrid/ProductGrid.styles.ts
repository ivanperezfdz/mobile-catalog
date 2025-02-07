import styled from 'styled-components';

export const Grid = styled.div<{ $loading: boolean }>`
  display: ${({ $loading }) => ($loading ? 'none' : 'grid')};
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  transition: ${({ theme }) => theme.transitions.create('opacity')};
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;
