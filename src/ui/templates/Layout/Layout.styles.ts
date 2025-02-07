import styled from 'styled-components';
import { Container } from '@/ui/atoms/Container/Container.styles';

export const Main = styled(Container)`
  margin-top: ${({ theme }) => theme.sizes.headerHeight};
  padding-top: ${({ theme }) => theme.spacing['3xl']};
  padding-bottom: ${({ theme }) => theme.spacing[16]};
`;
