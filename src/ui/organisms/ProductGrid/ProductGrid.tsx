import { ProductCard } from '../ProductCard/ProductCard';
import * as S from './ProductGrid.styles';
import type { ProductGridProps } from './ProductGrid.types';

export const ProductGrid = ({ products, loading }: ProductGridProps) => {
  return (
    <S.Grid $loading={loading || !products.length}>
      {products.map((product, index) => (
        <ProductCard
          data-testid="product-card"
          key={product.id}
          isFirstItem={index === 0}
          {...product}
        />
      ))}
    </S.Grid>
  );
};
