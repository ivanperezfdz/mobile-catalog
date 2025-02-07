import type { Cart, CartItem } from '@/domain/cart/entities/Cart';

export type CartServicePort = {
  getCart(): Promise<Cart>;
  addItem(item: CartItem): Promise<void>;
  removeItem(phoneId: string): Promise<void>;
  loadCart(): Promise<void>;
};
