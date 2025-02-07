import type { Cart, CartItem } from '@/domain/cart/entities/Cart';

export const mockCartItem: CartItem = {
  phoneId: '1',
  name: 'Test Phone',
  colorName: 'Black',
  storageCapacity: '128GB',
  quantity: 1,
  price: 999,
  imageUrl: 'test.jpg',
};

export const mockCart: Cart = {
  items: [mockCartItem],
  total: 999,
};
