import { screen, fireEvent } from '@testing-library/react';
import { Header } from '../Header';
import { renderWithProviders } from '@/test/utils/renderWithProviders';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Header', () => {
  const defaultProps = {
    cartItemsCount: 2,
    currentLanguage: 'es',
    onLanguageChange: jest.fn(),
    loading: false,
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/',
      push: jest.fn(),
    });
  });

  it('should render header correctly', async () => {
    await renderWithProviders(<Header {...defaultProps} />);

    expect(screen.getByText('MBST')).toBeInTheDocument();
    expect(screen.getByText('ES')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should handle language change', async () => {
    await renderWithProviders(<Header {...defaultProps} />);

    fireEvent.click(screen.getByText('EN'));
    expect(defaultProps.onLanguageChange).toHaveBeenCalledWith('en');
  });

  it('should show loading bar when loading', async () => {
    await renderWithProviders(<Header {...defaultProps} loading={true} />);
    expect(screen.getByTestId('progressbar')).toBeInTheDocument();
  });

  it('should hide cart when showCart is false', async () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/cart',
      push: jest.fn(),
    });

    await renderWithProviders(<Header {...defaultProps} />);
    expect(
      screen.queryByRole('link', { name: /shopping cart/i })
    ).not.toBeInTheDocument();
  });
});
