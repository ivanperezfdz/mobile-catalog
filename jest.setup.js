import '@testing-library/jest-dom';
import 'jest-styled-components';

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    query: {},
  }),
}));
