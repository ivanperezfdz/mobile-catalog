import { useRouter } from 'next/router';
import { useCallback } from 'react';

export type ErrorCode =
  | 'PHONE_NOT_FOUND'
  | 'PHONE_DETAILS_FAILED'
  | 'PHONE_LIST_FAILED'
  | 'PHONE_SEARCH_FAILED'
  | 'CART_ADD_FAILED'
  | 'CART_REMOVE_FAILED'
  | 'CART_LOAD_FAILED'
  | 'NETWORK_ERROR'
  | 'DEFAULT';

export class AppError extends Error {
  constructor(public code: ErrorCode) {
    super(code);
    this.name = 'AppError';
  }
}

export const useErrorHandler = () => {
  const router = useRouter();

  const handleError = useCallback(
    (error: unknown) => {
      let appError: AppError;

      if (error instanceof AppError) {
        appError = error;
      } else if (error instanceof Error) {
        if (
          error.message.includes('Failed to fetch') ||
          error.message.includes('Network Error')
        ) {
          appError = new AppError('NETWORK_ERROR');
        } else {
          appError = new AppError('DEFAULT');
        }
      } else {
        appError = new AppError('DEFAULT');
      }

      void router.push({
        pathname: '/error',
        query: { code: appError.code },
      });
    },
    [router]
  );

  return { handleError };
};
