/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppError } from '@/utils/error/Error';
import { createContext, useCallback, useState } from 'react';
import { ErrorCode } from '@/utils/error/Error.types';
import type { PhoneContextProps } from './PhoneContext.types';
import { useErrorHandler } from '../../hooks/useErrorHandler';
import type { ProductListItem } from '@/domain/phones/entities/Phone';
import type { PhoneService } from '@/application/phones/services/PhoneService';
import type { ReactNode } from 'react';

export const PhoneContext = createContext<PhoneContextProps | undefined>(
  undefined
);

export const PhoneProvider = ({
  children,
  phoneService,
}: {
  children: ReactNode;
  phoneService: PhoneService;
}) => {
  const [phones, setPhones] = useState<ProductListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { handleError } = useErrorHandler();

  const loadPhones = useCallback(
    async (page: number) => {
      try {
        setLoading(true);
        const result = await phoneService.getPhones(page);
        setPhones(result);
      } catch (_error) {
        handleError(new AppError(ErrorCode.PHONE_LIST_FAILED));
      } finally {
        setLoading(false);
      }
    },
    [phoneService, handleError]
  );

  const searchPhones = useCallback(
    async (query: string) => {
      try {
        setLoading(true);
        const result = await phoneService.searchPhones(query);
        setPhones(result);
      } catch (_error) {
        handleError(new AppError(ErrorCode.PHONE_SEARCH_FAILED));
      } finally {
        setLoading(false);
      }
    },
    [phoneService, handleError]
  );

  const getPhoneDetail = useCallback(
    async (id: string) => {
      try {
        const phone = await phoneService.getPhoneDetail(id);
        if (!phone) {
          throw new AppError(ErrorCode.PHONE_NOT_FOUND);
        }
        return phone;
      } catch (error) {
        if (error instanceof AppError) {
          handleError(error);
        } else {
          handleError(new AppError(ErrorCode.PHONE_DETAILS_FAILED));
        }
        return null;
      }
    },
    [phoneService, handleError]
  );

  return (
    <PhoneContext.Provider
      value={{
        phones,
        loading,
        loadPhones,
        searchPhones,
        getPhoneDetail,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};
