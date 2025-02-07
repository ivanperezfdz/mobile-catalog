/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CartService } from '../CartService';
import { createMockCartService } from '@/test/mocks/services/cartService.mock';
import { mockCart, mockCartItem } from '@/test/mocks/data/cart.mock';

describe('CartService', () => {
  let cartService: CartService;

  beforeEach(() => {
    cartService = createMockCartService();
  });

  describe('getCart', () => {
    it('should return cart from repository', async () => {
      const result = await cartService.getCart();
      expect(result).toEqual(mockCart);
    });

    it('should cache cart after first call', async () => {
      await cartService.getCart();
      await cartService.getCart();
      expect((cartService as any).cartRepository.getCart).toHaveBeenCalledTimes(
        1
      );
    });
  });

  describe('addItem', () => {
    it('should add item to cart and reload cart', async () => {
      await cartService.addItem(mockCartItem);
      expect((cartService as any).cartRepository.addItem).toHaveBeenCalledWith(
        mockCartItem
      );
      expect((cartService as any).cartRepository.getCart).toHaveBeenCalled();
    });

    it('should throw error if add item fails', async () => {
      const mockCartRepository = (cartService as any).cartRepository;
      mockCartRepository.addItem.mockRejectedValue(
        new Error('Failed to add item')
      );
      await expect(cartService.addItem(mockCartItem)).rejects.toThrow(
        'Failed to add item'
      );
    });
  });

  describe('removeItem', () => {
    it('should remove item from cart and reload cart', async () => {
      await cartService.removeItem('1');
      expect(
        (cartService as any).cartRepository.removeItem
      ).toHaveBeenCalledWith('1');
      expect((cartService as any).cartRepository.getCart).toHaveBeenCalled();
    });

    it('should throw error if remove item fails', async () => {
      const mockCartRepository = (cartService as any).cartRepository;
      mockCartRepository.removeItem.mockRejectedValue(
        new Error('Failed to remove item')
      );
      await expect(cartService.removeItem('1')).rejects.toThrow(
        'Failed to remove item'
      );
    });
  });

  describe('loadCart', () => {
    it('should load cart from repository', async () => {
      await cartService.loadCart();
      expect((cartService as any).cartRepository.getCart).toHaveBeenCalled();
    });

    it('should update cached cart', async () => {
      const initialCart = await cartService.getCart();
      expect(initialCart).toEqual(mockCart);

      const updatedCart = { items: [], total: 0 };
      (cartService as any).cartRepository.getCart.mockResolvedValueOnce(
        updatedCart
      );

      await cartService.loadCart();
      const result = await cartService.getCart();
      expect(result).toEqual(updatedCart);
    });

    it('should throw error if load cart fails', async () => {
      const mockCartRepository = (cartService as any).cartRepository;
      mockCartRepository.getCart.mockRejectedValueOnce(
        new Error('Failed to load cart')
      );
      await expect(cartService.loadCart()).rejects.toThrow(
        'Failed to load cart'
      );
    });
  });
});
