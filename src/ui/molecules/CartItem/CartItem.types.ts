import type { CartItem } from '@/domain/cart/entities/Cart';

export type CartItemProps = {
  item: CartItem;
  onRemove: (phoneId: string) => Promise<void> | void;
  loading?: boolean;
  isFirstItem?: boolean;
};
