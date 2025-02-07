/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ReactNode } from 'react';
import { createContext, useCallback, useState } from 'react';
import type { PhoneService } from '@/application/phones/services/PhoneService';
import type { Phone, ProductListItem } from '@/domain/phones/entities/Phone';
import { useErrorHandler } from '../hooks/useErrorHandler';
import { AppError } from '../hooks/useErrorHandler';

type PhoneContextType = {
  phones: ProductListItem[];
  loading: boolean;
  loadPhones: (page: number) => Promise<void>;
  searchPhones: (query: string) => Promise<void>;
  getPhoneDetail: (id: string) => Promise<Phone | null>;
};

export const PhoneContext = createContext<PhoneContextType | undefined>(
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
        handleError(new AppError('PHONE_LIST_FAILED'));
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
        handleError(new AppError('PHONE_SEARCH_FAILED'));
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
          throw new AppError('PHONE_NOT_FOUND');
        }
        return phone;
      } catch (error) {
        if (error instanceof AppError) {
          handleError(error);
        } else {
          handleError(new AppError('PHONE_DETAILS_FAILED'));
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
