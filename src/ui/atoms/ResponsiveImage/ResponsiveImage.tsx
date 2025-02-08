import * as S from './ResponsiveImage.styles';
import Image from 'next/image';
import type { ResponsiveImageProps } from './ResponsiveImage.types';

export const ResponsiveImage = ({
  containerClassName,
  customSizes,
  style,
  isLCP,
  ...props
}: ResponsiveImageProps) => {
  const defaultSizes = props.fill
    ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    : undefined;

  return (
    <S.ImageContainer className={containerClassName}>
      <Image
        {...props}
        sizes={customSizes || defaultSizes}
        style={{ objectFit: 'contain', ...style }}
        priority={isLCP}
        data-priority={isLCP}
      />
    </S.ImageContainer>
  );
};
