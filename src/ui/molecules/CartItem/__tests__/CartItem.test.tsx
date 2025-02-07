import { screen, fireEvent } from '@testing-library/react';
import { CartItem } from '../CartItem';
import { renderWithProviders } from '@/test/utils/renderWithProviders';

describe('CartItem', () => {
  const mockItem = {
    phoneId: '1',
    name: 'Test Phone',
    colorName: 'Black',
    storageCapacity: '128GB',
    price: 999,
    imageUrl: '/test.jpg',
    quantity: 1,
  };

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
    expect(defaultProps.onRemove).toHaveBeenCalledWith(mockItem.phoneId);
  });

  it('should show loading state', async () => {
    await renderWithProviders(<CartItem {...defaultProps} loading={true} />);

    expect(screen.getByText('common.removing')).toBeInTheDocument();
    expect(screen.getByTestId('remove-item-button')).toBeDisabled();
  });
});
