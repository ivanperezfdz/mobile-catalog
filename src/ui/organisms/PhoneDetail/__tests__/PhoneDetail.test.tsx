import { screen, fireEvent } from '@testing-library/react';
import { PhoneDetail } from '../PhoneDetail';
import { renderWithProviders } from '@/test/utils/renderWithProviders';
import { mockPhoneDetail } from '@/test/mocks/data/phones.mock';

jest.mock('@/ui/hooks/useTranslation', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('PhoneDetail', () => {
  const defaultProps = {
    phone: mockPhoneDetail,
    onAddToCart: jest.fn(),
    loading: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render phone details correctly', async () => {
    await renderWithProviders(<PhoneDetail {...defaultProps} />);

    expect(screen.getByTestId('phone-title')).toHaveTextContent(
      mockPhoneDetail.name
    );
    expect(screen.getByText(mockPhoneDetail.brand)).toBeInTheDocument();
    expect(screen.getByText(mockPhoneDetail.description)).toBeInTheDocument();
  });

  it('should handle color selection', async () => {
    await renderWithProviders(<PhoneDetail {...defaultProps} />);

    const colorOption = screen.getByTestId('color-option-Black');
    fireEvent.click(colorOption);
    expect(colorOption).toHaveAttribute('aria-selected', 'true');
  });

  it('should handle storage selection', async () => {
    await renderWithProviders(<PhoneDetail {...defaultProps} />);

    const storageOption = screen.getByTestId('storage-option-128GB');
    fireEvent.click(storageOption);
    expect(storageOption).toHaveAttribute('aria-selected', 'true');
  });

  it('should enable add to cart when options are selected', async () => {
    await renderWithProviders(<PhoneDetail {...defaultProps} />);

    const addButton = screen.getByTestId('add-to-cart-button');
    expect(addButton).toBeDisabled();

    fireEvent.click(screen.getByTestId('color-option-Black'));
    fireEvent.click(screen.getByTestId('storage-option-128GB'));

    expect(addButton).not.toBeDisabled();
  });

  it('should handle add to cart action', async () => {
    await renderWithProviders(<PhoneDetail {...defaultProps} />);

    fireEvent.click(screen.getByTestId('color-option-Black'));
    fireEvent.click(screen.getByTestId('storage-option-128GB'));
    fireEvent.click(screen.getByTestId('add-to-cart-button'));

    expect(defaultProps.onAddToCart).toHaveBeenCalledWith(
      mockPhoneDetail.colorOptions[0],
      mockPhoneDetail.storageOptions[0]
    );
  });

  it('should show loading state', async () => {
    await renderWithProviders(<PhoneDetail {...defaultProps} loading={true} />);
    expect(screen.getByTestId('add-to-cart-button')).toBeDisabled();
    expect(screen.getByText('detail.addingToCart')).toBeInTheDocument();
  });
});
