import { screen, fireEvent } from '@testing-library/react';
import { CartFooter } from '../CartFooter';
import { renderWithProviders } from '@/test/utils/renderWithProviders';

describe('CartFooter', () => {
  const defaultProps = {
    total: 999,
    onContinue: jest.fn(),
    onPay: jest.fn(),
  };

  it('should render cart footer correctly', async () => {
    await renderWithProviders(<CartFooter {...defaultProps} />);

    expect(screen.getByText('common.total')).toBeInTheDocument();
    expect(screen.getByText('999 EUR')).toBeInTheDocument();
    expect(screen.getByText('common.continueShopping')).toBeInTheDocument();
    expect(screen.getByText('common.pay')).toBeInTheDocument();
  });

  it('should handle continue shopping action', async () => {
    await renderWithProviders(<CartFooter {...defaultProps} />);

    fireEvent.click(screen.getByText('common.continueShopping'));
    expect(defaultProps.onContinue).toHaveBeenCalled();
  });

  it('should handle pay action', async () => {
    await renderWithProviders(<CartFooter {...defaultProps} />);

    fireEvent.click(screen.getByText('common.pay'));
    expect(defaultProps.onPay).toHaveBeenCalled();
  });
});
