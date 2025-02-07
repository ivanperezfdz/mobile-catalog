import { Container } from '@/ui/atoms/Container/Container.styles';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: ${({ theme }) => theme.sizes.headerHeight};
  left: 0;
  padding: 0 ${({ theme }) => theme.spacing['3xl']};
  height: ${({ theme }) => theme.sizes.topBarDetailHeight};
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing['3xl']};
  padding-bottom: ${({ theme }) => theme.spacing['6xl']};
`;
