import { screen } from '@testing-library/react';
import { RelatedProducts } from '../RelatedProducts';
import { renderWithProviders } from '@/test/utils/renderWithProviders';
import { mockPhones } from '@/test/mocks/data/phones.mock';

describe('RelatedProducts', () => {
  const defaultProps = {
    products: mockPhones,
  };

  it('should render related products correctly', async () => {
    await renderWithProviders(<RelatedProducts {...defaultProps} />);

    expect(screen.getByText('common.similarItems')).toBeInTheDocument();
    mockPhones.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`${product.basePrice} EUR`)).toBeInTheDocument();
    });
  });

  it('should filter out duplicate products', async () => {
    const duplicatedProducts = [...mockPhones, mockPhones[0]];
    await renderWithProviders(
      <RelatedProducts products={duplicatedProducts} />
    );

    const productElements = screen.getAllByTestId('product-card');
    expect(productElements).toHaveLength(mockPhones.length);
  });
});
