import { screen } from '@testing-library/react';
import { ResponsiveImage } from '../ResponsiveImage';
import { renderWithProviders } from '@/test/utils/renderWithProviders';

describe('ResponsiveImage', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: 'Test image',
    fill: true,
  };

  it('should render image with default props', async () => {
    await renderWithProviders(<ResponsiveImage {...defaultProps} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('should handle fill mode with correct sizes', async () => {
    await renderWithProviders(<ResponsiveImage {...defaultProps} fill />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute(
      'sizes',
      '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    );
  });

  it('should apply custom sizes when provided', async () => {
    const customSizes = '100vw';
    await renderWithProviders(
      <ResponsiveImage {...defaultProps} customSizes={customSizes} />
    );
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('sizes', customSizes);
  });

  it('should set priority for LCP images', async () => {
    await renderWithProviders(<ResponsiveImage {...defaultProps} isLCP />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('data-priority', 'true');
  });
});
