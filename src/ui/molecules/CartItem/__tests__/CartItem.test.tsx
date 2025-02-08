import { screen, fireEvent } from '@testing-library/react';
import { CartItem } from '../CartItem';
import { renderWithProviders } from '@/test/utils/renderWithProviders';
import { mockCartItem as mockItem } from '@/test/mocks/data/cart.mock';

describe('CartItem', () => {
  const defaultProps = {
    item: mockItem,
    onRemove: jest.fn(),
    loading: false,
    isFirstItem: false,
  };

  it('should render cart item correctly', async () => {
    await renderWithProviders(<CartItem {...defaultProps} />);

    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockItem.storageCapacity} | ${mockItem.colorName}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`${mockItem.price} EUR`)).toBeInTheDocument();
  });

  it('should handle remove action', async () => {
    await renderWithProviders(<CartItem {...defaultProps} />);

    fireEvent.click(screen.getByTestId('remove-item-button'));
    expect(defaultProps.onRemove).toHaveBeenCalledWith(
      mockItem.phoneId,
      mockItem.colorName,
      mockItem.storageCapacity
    );
  });

  it('should show loading state', async () => {
    await renderWithProviders(<CartItem {...defaultProps} loading={true} />);

    expect(screen.getByText('common.removing')).toBeInTheDocument();
    expect(screen.getByTestId('remove-item-button')).toBeDisabled();
  });
});
