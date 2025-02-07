import { screen } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import { renderWithProviders } from '@/test/utils/renderWithProviders';

describe('ProductCard', () => {
  const defaultProps = {
    id: '1',
    brand: 'Test Brand',
    name: 'Test Phone',
    imageUrl: '/test.jpg',
    price: 999,
    vertical: false,
    isFirstItem: false,
  };

  it('should render product card correctly', async () => {
    await renderWithProviders(<ProductCard {...defaultProps} />);

    expect(screen.getByText('Test Brand')).toBeInTheDocument();
    expect(screen.getByText('Test Phone')).toBeInTheDocument();
    expect(screen.getByText('999 EUR')).toBeInTheDocument();
  });

  it('should link to product detail page', async () => {
    await renderWithProviders(<ProductCard {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/products/1');
  });
});
