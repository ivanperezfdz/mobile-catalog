import { screen } from '@testing-library/react';
import { ProductGrid } from '../ProductGrid';
import { renderWithProviders } from '@/test/utils/renderWithProviders';
import { mockPhones } from '@/test/mocks/data/phones.mock';

describe('ProductGrid', () => {
  const defaultProps = {
    products: mockPhones.map((phone) => ({
      id: phone.id,
      brand: phone.brand,
      name: phone.name,
      imageUrl: phone.imageUrl,
      price: phone.basePrice,
    })),
    loading: false,
  };

  it('should render product grid correctly', async () => {
    await renderWithProviders(<ProductGrid {...defaultProps} />);

    mockPhones.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`${product.basePrice} EUR`)).toBeInTheDocument();
    });
  });

  it('should handle empty products array', async () => {
    await renderWithProviders(<ProductGrid {...defaultProps} products={[]} />);
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
  });

  it('should mark first item for LCP optimization', async () => {
    await renderWithProviders(<ProductGrid {...defaultProps} />);

    const firstProduct = screen.getAllByTestId('product-card')[0];
    expect(firstProduct).toHaveAttribute('data-first-item', 'true');
  });
});
