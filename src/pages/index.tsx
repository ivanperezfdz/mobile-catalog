import { SearchInput } from '@/ui/molecules/SearchInput/SearchInput';
import { ProductGrid } from '@/ui/organisms/ProductGrid/ProductGrid';
import { usePhones } from '@/ui/hooks/usePhones';
import { useTranslation } from '@/ui/hooks/useTranslation';

export default function HomePage() {
  const { phones, loading, searchPhones } = usePhones();
  const { t } = useTranslation();

  return (
    <>
      <SearchInput
        placeholder={t('home.search')}
        onSearch={searchPhones}
        resultsCount={phones.length}
      />
      <ProductGrid
        data-testid="product-grid"
        products={phones.map((phone) => ({
          id: phone.id,
          brand: phone.brand,
          name: phone.name,
          imageUrl: phone.imageUrl,
          price: phone.basePrice,
        }))}
        loading={loading}
      />
    </>
  );
}
