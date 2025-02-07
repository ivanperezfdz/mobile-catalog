import type { CartServicePort } from '../ports/CartServicePort';
import type { CartRepository } from '@/domain/cart/repositories/CartRepository';
import type { Cart, CartItem } from '@/domain/cart/entities/Cart';

export class CartService implements CartServicePort {
  private cart: Cart | null = null;

  constructor(private readonly cartRepository: CartRepository) {}

  async getCart(): Promise<Cart> {
    if (!this.cart) {
      this.cart = await this.cartRepository.getCart();
    }
    return this.cart;
  }

  async addItem(item: CartItem): Promise<void> {
    await this.cartRepository.addItem(item);
    await this.loadCart();
  }

  async removeItem(phoneId: string): Promise<void> {
    await this.cartRepository.removeItem(phoneId);
    await this.loadCart();
  }

  async loadCart(): Promise<void> {
    this.cart = await this.cartRepository.getCart();
  }
}
