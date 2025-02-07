import type { Phone, ProductListItem } from '../entities/Phone';

export type PhoneRepository = {
  getPhones(page: number, limit?: number): Promise<ProductListItem[]>;
  searchPhones(
    query: string,
    page?: number,
    limit?: number
  ): Promise<ProductListItem[]>;
  getPhoneById(id: string): Promise<Phone | null>;
};
