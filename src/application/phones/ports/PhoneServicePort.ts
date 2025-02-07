import type { Phone, ProductListItem } from '@/domain/phones/entities/Phone';

export type PhoneServicePort = {
  getPhones(page: number): Promise<ProductListItem[]>;
  searchPhones(query: string): Promise<ProductListItem[]>;
  getPhoneDetail(id: string): Promise<Phone | null>;
};
