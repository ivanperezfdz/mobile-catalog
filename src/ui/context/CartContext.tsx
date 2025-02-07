/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ReactNode } from 'react';
import { createContext, useCallback, useState } from 'react';
import type { CartService } from '@/application/cart/services/CartService';
import type { Cart, CartItem } from '@/domain/cart/entities/Cart';
import { useErrorHandler } from '../hooks/useErrorHandler';
import { AppError } from '../hooks/useErrorHandler';

type CartContextType = {
  cart: Cart;
  loading: boolean;
  addItem: (item: CartItem) => Promise<void>;
  removeItem: (phoneId: string) => Promise<void>;
  loadCart: () => Promise<void>;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({
  children,
  cartService,
}: {
  children: ReactNode;
  cartService: CartService;
}) => {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });
  const [loading, setLoading] = useState(false);
  const { handleError } = useErrorHandler();

  const loadCart = useCallback(async () => {
    try {
      setLoading(true);
      const data = await cartService.getCart();
      setCart(data);
    } catch (_error) {
      handleError(new AppError('CART_LOAD_FAILED'));
    } finally {
      setLoading(false);
    }
  }, [cartService, handleError]);

  const addItem = useCallback(
    async (item: CartItem) => {
      try {
        setLoading(true);
        await cartService.addItem(item);
        await loadCart();
      } catch (_error) {
        handleError(new AppError('CART_ADD_FAILED'));
      } finally {
        setLoading(false);
      }
    },
    [cartService, loadCart, handleError]
  );

  const removeItem = useCallback(
    async (phoneId: string) => {
      try {
        setLoading(true);
        await cartService.removeItem(phoneId);
        await loadCart();
      } catch (_error) {
        handleError(new AppError('CART_REMOVE_FAILED'));
      } finally {
        setLoading(false);
      }
    },
    [cartService, loadCart, handleError]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addItem,
        removeItem,
        loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
