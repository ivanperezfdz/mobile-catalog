import type { Cart, CartItem } from '../entities/Cart';

export type CartRepository = {
  getCart(): Promise<Cart>;
  addItem(item: CartItem): Promise<void>;
  removeItem(phoneId: string): Promise<void>;
  clearCart(): Promise<void>;
};
