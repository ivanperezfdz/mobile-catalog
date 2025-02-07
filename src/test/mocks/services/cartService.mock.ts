import { CartService } from '@/application/cart/services/CartService';
import type { CartRepository } from '@/domain/cart/repositories/CartRepository';
import { mockCart } from '../data/cart.mock';

export const createMockCartService = () => {
  const mockCartRepository: jest.Mocked<CartRepository> = {
    getCart: jest.fn().mockResolvedValue(mockCart),
    addItem: jest.fn().mockResolvedValue(undefined),
    removeItem: jest.fn().mockResolvedValue(undefined),
    clearCart: jest.fn().mockResolvedValue(undefined),
  };

  return new CartService(mockCartRepository);
};
