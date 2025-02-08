import { screen, fireEvent, waitFor, act } from '@testing-library/react';
import { SearchInput } from '../SearchInput';
import { renderWithProviders } from '@/test/utils/renderWithProviders';

jest.mock('@/ui/hooks/useTranslation', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('SearchInput', () => {
  const defaultProps = {
    onSearch: jest.fn(),
    resultsCount: 5,
    placeholder: 'Search...',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render search input correctly', async () => {
    await renderWithProviders(<SearchInput {...defaultProps} />);

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByText('common.results')).toBeInTheDocument();
  });

  it('should handle input change with debounce', async () => {
    await renderWithProviders(<SearchInput {...defaultProps} />);

    expect(defaultProps.onSearch).toHaveBeenCalledTimes(1);

    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(defaultProps.onSearch).toHaveBeenCalledTimes(1);

    await act(async () => {
      jest.advanceTimersByTime(500);
    });

    await waitFor(() => {
      expect(defaultProps.onSearch).toHaveBeenCalledTimes(2);
      expect(defaultProps.onSearch).toHaveBeenCalledWith('test');
    });
  });

  it('should clear input when clear button is clicked', async () => {
    await renderWithProviders(<SearchInput {...defaultProps} />);

    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'test' } });

    const clearButton = screen.getByRole('button');
    fireEvent.click(clearButton);

    expect(input).toHaveValue('');
    expect(defaultProps.onSearch).toHaveBeenCalledWith('');
  });

  it('should not show clear button when input is empty', async () => {
    await renderWithProviders(<SearchInput {...defaultProps} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should display results count', async () => {
    await renderWithProviders(
      <SearchInput {...defaultProps} resultsCount={10} />
    );
    expect(screen.getByText('common.results')).toBeInTheDocument();
  });
});
