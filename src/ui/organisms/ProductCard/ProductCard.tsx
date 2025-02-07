import type { ProductCardProps } from './ProductCard.types';
import { ResponsiveImage } from '@/ui/atoms/ResponsiveImage/ResponsiveImage';
import * as S from './ProductCard.styles';
import Link from 'next/link';

export const ProductCard = ({
  id,
  brand,
  name,
  imageUrl,
  price,
  vertical,
  isFirstItem,
}: ProductCardProps) => {
  return (
    <Link href={`/products/${id}`} passHref legacyBehavior>
      <S.Card
        data-testid="product-card"
        data-product-id={id}
        $vertical={vertical}
        data-first-item={isFirstItem}
      >
        <S.Overlay />
        <S.ImageContainer>
          <S.ImageWrapper>
            <ResponsiveImage
              src={imageUrl || '/placeholder.svg'}
              alt={`${brand} ${name}`}
              fill
              style={{ objectFit: 'contain' }}
              isLCP={isFirstItem}
            />
          </S.ImageWrapper>
        </S.ImageContainer>
        <S.Info>
          <S.TextContainer>
            <S.Brand
              size="2xs"
              $weight="light"
              color="secondary"
              transform="uppercase"
            >
              {brand}
            </S.Brand>
            <S.Name size="sm" transform="uppercase">
              {name}
            </S.Name>
          </S.TextContainer>
          <S.Price size="sm" transform="uppercase">
            {price} EUR
          </S.Price>
        </S.Info>
      </S.Card>
    </Link>
  );
};
