import type { PhoneServicePort } from '../ports/PhoneServicePort';
import type { PhoneRepository } from '@/domain/phones/repositories/PhoneRepository';
import type { Phone, ProductListItem } from '@/domain/phones/entities/Phone';

export class PhoneService implements PhoneServicePort {
  constructor(private readonly phoneRepository: PhoneRepository) {}

  async getPhones(page: number): Promise<ProductListItem[]> {
    return this.phoneRepository.getPhones(page);
  }

  async searchPhones(query: string): Promise<ProductListItem[]> {
    return this.phoneRepository.searchPhones(query);
  }

  async getPhoneDetail(id: string): Promise<Phone | null> {
    return this.phoneRepository.getPhoneById(id);
  }
}
