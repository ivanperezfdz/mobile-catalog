import { PhoneService } from '@/application/phones/services/PhoneService';
import type { PhoneRepository } from '@/domain/phones/repositories/PhoneRepository';
import { mockPhones, mockPhoneDetail } from '../data/phones.mock';

export const createMockPhoneService = () => {
  const mockPhoneRepository: jest.Mocked<PhoneRepository> = {
    getPhones: jest
      .fn()
      .mockResolvedValue({ phones: mockPhones, total: mockPhones.length }),
    searchPhones: jest
      .fn()
      .mockResolvedValue({ phones: mockPhones, total: mockPhones.length }),
    getPhoneById: jest.fn().mockResolvedValue(mockPhoneDetail),
  };

  return new PhoneService(mockPhoneRepository);
};
