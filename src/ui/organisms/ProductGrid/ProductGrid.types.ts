import type { ProductCardProps } from '../ProductCard/ProductCard.types';

export type ProductGridProps = {
  products: Omit<ProductCardProps, 'vertical'>[];
  loading?: boolean;
};
