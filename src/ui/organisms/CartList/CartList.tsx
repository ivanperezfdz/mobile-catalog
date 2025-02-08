import { CartItem } from '@/ui/molecules/CartItem/CartItem';
import type { CartListProps } from './CartList.types';
import * as S from './CartList.styles';

export const CartList = ({ items, onRemoveItem, loading }: CartListProps) => {
  return (
    <S.Container>
      {items.map((item, index) => (
        <CartItem
          key={`${item.phoneId}-${item.colorName}-${item.storageCapacity}`}
          item={item}
          onRemove={onRemoveItem}
          loading={loading}
          isFirstItem={index === 0}
        />
      ))}
    </S.Container>
  );
};
