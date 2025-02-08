/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppError } from '@/utils/error/Error';
import type { CartContextProps } from './CartContext.types';
import { createContext, useCallback, useState } from 'react';
import { ErrorCode } from '@/utils/error/Error.types';
import { useErrorHandler } from '../../hooks/useErrorHandler';
import type { Cart, CartItem } from '@/domain/cart/entities/Cart';
import type { CartService } from '@/application/cart/services/CartService';
import type { ReactNode } from 'react';

export const CartContext = createContext<CartContextProps | undefined>(
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
      handleError(new AppError(ErrorCode.CART_LOAD_FAILED));
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
        handleError(new AppError(ErrorCode.CART_ADD_FAILED));
      } finally {
        setLoading(false);
      }
    },
    [cartService, loadCart, handleError]
  );

  const removeItem = useCallback(
    async (phoneId: string, colorName: string, storageCapacity: string) => {
      try {
        setLoading(true);
        await cartService.removeItem(phoneId, colorName, storageCapacity);
        await loadCart();
      } catch (_error) {
        handleError(new AppError(ErrorCode.CART_REMOVE_FAILED));
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
