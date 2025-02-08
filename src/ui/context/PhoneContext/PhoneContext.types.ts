import type { ProductListItem, Phone } from '@/domain/phones/entities/Phone';

export type PhoneContextProps = {
  phones: ProductListItem[];
  loading: boolean;
  loadPhones: (page: number) => Promise<void>;
  searchPhones: (query: string) => Promise<void>;
  getPhoneDetail: (id: string) => Promise<Phone | null>;
};
