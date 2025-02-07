import { Button } from '@/ui/atoms/Button/Button.styles';
import type { CartItemProps } from './CartItem.types';
import { ResponsiveImage } from '@/ui/atoms/ResponsiveImage/ResponsiveImage';
import { SectionContainer } from '@/ui/atoms/SectionContainer/SectionContainer.styles';
import { Text } from '@/ui/atoms/Text/Text.styles';
import { useTranslation } from '@/ui/hooks/useTranslation';
import * as S from './CartItem.styles';

export const CartItem = ({
  item,
  onRemove,
  loading,
  isFirstItem,
}: CartItemProps) => {
  const { t } = useTranslation();

  return (
    <S.Container data-testid={`cart-item-${item.phoneId}`}>
      <S.ImageContainer>
        <ResponsiveImage
          src={item.imageUrl || '/placeholder.svg'}
          alt={item.name}
          fill
          isLCP={isFirstItem}
        />
      </S.ImageContainer>

      <S.InfoSectionContainer direction="column" $gap="xl">
        <SectionContainer direction="column" $gap="xl">
          <SectionContainer direction="column" $gap="sm">
            <Text transform="uppercase" size="sm">
              {item.name}
            </Text>
            <Text transform="uppercase" size="sm">
              {item.storageCapacity} | {item.colorName}
            </Text>
          </SectionContainer>
          <Text transform="uppercase" size="sm">
            {item.price} EUR
          </Text>
        </SectionContainer>

        <Button
          data-testid="remove-item-button"
          $variant="default"
          onClick={() => onRemove(item.phoneId)}
          disabled={loading}
        >
          <Text color="error" size="sm">
            {loading ? t('common.removing') : t('common.remove')}
          </Text>
        </Button>
      </S.InfoSectionContainer>
    </S.Container>
  );
};
