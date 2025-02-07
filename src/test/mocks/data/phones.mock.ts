import type { Phone, ProductListItem } from '@/domain/phones/entities/Phone';

export const mockPhones: ProductListItem[] = [
  {
    id: '1',
    brand: 'Test Brand',
    name: 'Test Phone 1',
    basePrice: 999,
    imageUrl: '/placeholder.svg',
  },
  {
    id: '2',
    brand: 'Test Brand',
    name: 'Test Phone 2',
    basePrice: 899,
    imageUrl: '/placeholder.svg',
  },
];

export const mockPhoneDetail: Phone = {
  id: '1',
  brand: 'Test Brand',
  name: 'Test Phone',
  basePrice: 999,
  imageUrl: 'test.jpg',
  description: 'Test description',
  rating: 4.5,
  specs: {
    screen: '6.1"',
    resolution: '2532 x 1170',
    processor: 'Test Processor',
    mainCamera: '12 MP',
    selfieCamera: '12 MP',
    battery: '3240 mAh',
    os: 'Test OS',
    screenRefreshRate: '60 Hz',
  },
  colorOptions: [
    { name: 'Black', hexCode: '#000000', imageUrl: '/placeholder.svg' },
  ],
  storageOptions: [{ capacity: '128GB', price: 999 }],
  similarProducts: [],
};
