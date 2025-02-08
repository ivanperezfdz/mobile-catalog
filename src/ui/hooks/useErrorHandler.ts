import { AppError } from '@/utils/error/Error';
import { ErrorCode } from '@/utils/error/Error.types';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

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
          appError = new AppError(ErrorCode.NETWORK_ERROR);
        } else {
          appError = new AppError(ErrorCode.DEFAULT);
        }
      } else {
        appError = new AppError(ErrorCode.DEFAULT);
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
