/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PhoneService } from '../PhoneService';
import { createMockPhoneService } from '@/test/mocks/services/phoneService.mock';
import { mockPhones, mockPhoneDetail } from '@/test/mocks/data/phones.mock';

describe('PhoneService', () => {
  let phoneService: PhoneService;

  beforeEach(() => {
    phoneService = createMockPhoneService();
  });

  describe('getPhones', () => {
    it('should return phones from repository', async () => {
      const result = await phoneService.getPhones(1);
      expect(result).toEqual({ phones: mockPhones, total: mockPhones.length });
    });

    it('should throw error if get phones fails', async () => {
      const mockPhoneRepository = (phoneService as any).phoneRepository;
      mockPhoneRepository.getPhones.mockRejectedValue(
        new Error('Failed to get phones')
      );
      await expect(phoneService.getPhones(1)).rejects.toThrow(
        'Failed to get phones'
      );
    });
  });

  describe('searchPhones', () => {
    it('should return search results from repository', async () => {
      const result = await phoneService.searchPhones('test');
      expect(result).toEqual({ phones: mockPhones, total: mockPhones.length });
    });

    it('should throw error if search phones fails', async () => {
      const mockPhoneRepository = (phoneService as any).phoneRepository;
      mockPhoneRepository.searchPhones.mockRejectedValue(
        new Error('Failed to search phones')
      );
      await expect(phoneService.searchPhones('test')).rejects.toThrow(
        'Failed to search phones'
      );
    });
  });

  describe('getPhoneDetail', () => {
    it('should return phone detail from repository', async () => {
      const result = await phoneService.getPhoneDetail('1');
      expect(result).toEqual(mockPhoneDetail);
    });

    it('should throw error if get phone detail fails', async () => {
      const mockPhoneRepository = (phoneService as any).phoneRepository;
      mockPhoneRepository.getPhoneById.mockRejectedValue(
        new Error('Failed to get phone detail')
      );
      await expect(phoneService.getPhoneDetail('1')).rejects.toThrow(
        'Failed to get phone detail'
      );
    });
  });
});
