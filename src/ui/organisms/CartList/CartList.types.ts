import type { CartItem } from '@/domain/cart/entities/Cart';

export type CartListProps = {
  items: CartItem[];
  onRemoveItem: (phoneId: string) => Promise<void> | void;
  loading?: boolean;
};
