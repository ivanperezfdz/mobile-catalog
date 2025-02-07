import { createGlobalStyle } from 'styled-components';
import { theme } from '.';

const { colors, typography, mediaQueries } = theme;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${typography.family.base};
    background-color: ${colors.background};
    color: ${colors.text.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  ::-webkit-scrollbar {
    width: ${typography.size.xs};
    height: ${typography.size.xs};
    background-color: ${colors.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.primary};
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  * {
    scrollbar-width: ${typography.size.xs};
  }

  [data-next-image-wrapper] {
    img {
      --image-size: 100vw;
      
      ${mediaQueries.md} {
        --image-size: 50vw;
      }
      
      ${mediaQueries.lg} {
        --image-size: 33vw;
      }
      
      sizes: var(--image-size) !important;
    }
  }
`;
