import type { Cart, CartItem } from '@/domain/cart/entities/Cart';

export type CartContextProps = {
  cart: Cart;
  loading: boolean;
  addItem: (item: CartItem) => Promise<void>;
  removeItem: (
    phoneId: string,
    colorName: string,
    storageCapacity: string
  ) => Promise<void>;
  loadCart: () => Promise<void>;
};
