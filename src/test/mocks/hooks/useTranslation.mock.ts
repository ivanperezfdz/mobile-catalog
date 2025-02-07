export const mockTranslations: Record<string, string> = {
  'common.total': 'Total',
  'common.continueShopping': 'Continue Shopping',
  'common.pay': 'Pay',
  'common.removing': 'Removing...',
  'common.results': '{{count}} Results',
  'common.add': 'Add',
  'detail.addingToCart': 'Adding to Cart...',
  'detail.addToCart': 'Add to Cart',
  MBST: 'MBST',
  ES: 'ES',
  EN: 'EN',
  'Similar Items': 'Similar Items',
  'Test Brand': 'Test Brand',
  'Test Phone': 'Test Phone',
  'Test Phone 1': 'Test Phone 1',
  'Test Phone 2': 'Test Phone 2',
  '{{count}} Results': '{{count}} Results',
};

jest.mock('@/ui/hooks/useTranslation', () => ({
  useTranslation: () => ({
    t: (
      key: string,
      options?: { params?: Record<string, string | number> }
    ) => {
      if (options?.params) {
        let text = mockTranslations[key] || key;
        Object.entries(options.params).forEach(([param, value]) => {
          text = text.replace(`{{${param}}}`, value.toString());
        });
        return text;
      }
      return mockTranslations[key] || key;
    },
    i18n: {
      language: 'es',
      changeLanguage: jest.fn(),
    },
  }),
}));
