import type { CartRepository } from '@/domain/cart/repositories/CartRepository';
import type { Cart, CartItem } from '@/domain/cart/entities/Cart';

export class LocalStorageCartRepository implements CartRepository {
  private readonly CART_KEY = 'mobile_catalog_cart';

  async getCart(): Promise<Cart> {
    if (typeof window === 'undefined') {
      return { items: [], total: 0 };
    }

    const cartData = localStorage.getItem(this.CART_KEY);
    if (!cartData) {
      return { items: [], total: 0 };
    }

    const cart: Cart = JSON.parse(cartData);
    return {
      items: cart.items,
      total: this.calculateTotal(cart.items),
    };
  }

  async addItem(item: CartItem): Promise<void> {
    const cart = await this.getCart();
    const existingItem = cart.items.find((i) => i.phoneId === item.phoneId);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.items.push(item);
    }

    cart.total = this.calculateTotal(cart.items);
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }

  async removeItem(phoneId: string): Promise<void> {
    const cart = await this.getCart();
    cart.items = cart.items.filter((item) => item.phoneId !== phoneId);
    cart.total = this.calculateTotal(cart.items);
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }

  private calculateTotal(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  async clearCart(): Promise<void> {
    localStorage.removeItem(this.CART_KEY);
  }
}
