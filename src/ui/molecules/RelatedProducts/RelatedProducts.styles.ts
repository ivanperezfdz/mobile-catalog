import styled from 'styled-components';

export const Container = styled.section`
  margin-top: ${({ theme }) => theme.spacing['4xl']};
  overflow: visible;
`;

export const GridWrapper = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing['4xl']};
`;

export const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80%;
  overflow-x: auto;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(
    -50vw + 50% + (${({ theme }) => theme.typography.size.xs} / 2)
  );
  padding-inline: calc(50vw - 50%);
  padding-bottom: 1px;
  margin-top: ${({ theme }) => theme.spacing.xl};

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-auto-columns: 45%;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-auto-columns: 30%;
  }
`;

export const ScrollBar = styled.div`
  position: relative;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border.light};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const ScrollThumb = styled.div`
  position: absolute;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  top: 0;
  left: 0;
  cursor: pointer;
`;
