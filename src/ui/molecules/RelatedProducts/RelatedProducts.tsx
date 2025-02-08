import { ProductCard } from '@/ui/organisms/ProductCard/ProductCard';
import type { RelatedProductsProps } from './RelatedProducts.types';
import { Text } from '@/ui/atoms/Text/Text.styles';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useTranslation } from '@/ui/hooks/useTranslation';
import * as S from './RelatedProducts.styles';

export const RelatedProducts = ({ products }: RelatedProductsProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [thumbWidth, setThumbWidth] = useState(20);
  const [thumbLeft, setThumbLeft] = useState(0);
  const { t } = useTranslation();

  const productsWithoutRepeated = useMemo(() => {
    return products.filter(
      (product, index, self) =>
        self.findIndex((p) => p.id === product.id) === index
    );
  }, [products]);

  useEffect(() => {
    const updateScrollThumb = () => {
      if (gridRef.current && thumbRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = gridRef.current;
        const scrollableWidth = scrollWidth - clientWidth;
        const newThumbWidth = (clientWidth / scrollWidth) * 100;
        const newThumbLeft =
          (scrollLeft / scrollableWidth) * (100 - newThumbWidth);

        setThumbWidth(newThumbWidth);
        setThumbLeft(newThumbLeft);
      }
    };

    const handleScroll = () => {
      updateScrollThumb();
    };

    const gridElement = gridRef.current;
    if (gridElement) {
      gridElement.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', updateScrollThumb);
      updateScrollThumb();
    }

    return () => {
      if (gridElement) {
        gridElement.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', updateScrollThumb);
    };
  }, []);

  return (
    <S.Container>
      <Text size="lg" transform="uppercase">
        {t('common.similarItems')}
      </Text>
      <S.GridWrapper>
        <S.Grid ref={gridRef}>
          {productsWithoutRepeated.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              brand={product.brand}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.basePrice}
            />
          ))}
        </S.Grid>
      </S.GridWrapper>
      <S.ScrollBar>
        <S.ScrollThumb
          ref={thumbRef}
          style={{
            width: `${thumbWidth}%`,
            left: `${thumbLeft}%`,
          }}
        />
      </S.ScrollBar>
    </S.Container>
  );
};
