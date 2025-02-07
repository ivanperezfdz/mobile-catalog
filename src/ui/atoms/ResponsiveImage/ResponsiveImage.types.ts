import type { ImageProps } from 'next/image';

export type ResponsiveImageProps = {
  containerClassName?: string;
  customSizes?: string;
  isLCP?: boolean;
} & Omit<ImageProps, 'sizes'>;
