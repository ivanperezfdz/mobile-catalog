import Image from 'next/image';
import styled from 'styled-components';
import type { ResponsiveImageProps } from './ResponsiveImage.types';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

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
    <ImageContainer className={containerClassName}>
      <Image
        {...props}
        sizes={customSizes || defaultSizes}
        style={{ objectFit: 'contain', ...style }}
        priority={isLCP}
        data-priority={isLCP}
      />
    </ImageContainer>
  );
};
