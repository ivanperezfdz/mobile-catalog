import { Button } from '@/ui/atoms/Button/Button.styles';
import { ColorSelector } from '@/ui/molecules/ColorSelector/ColorSelector';
import { Container } from '@/ui/atoms/Container/Container.styles';
import type { PhoneDetailProps } from './PhoneDetails.types';
import { RelatedProducts } from '@/ui/molecules/RelatedProducts/RelatedProducts';
import { ResponsiveImage } from '@/ui/atoms/ResponsiveImage/ResponsiveImage';
import { SectionContainer } from '@/ui/atoms/SectionContainer/SectionContainer.styles';
import { StorageSelector } from '@/ui/molecules/StorageSelector/StorageSelector';
import { Text } from '@/ui/atoms/Text/Text.styles';
import { useErrorHandler } from '@/ui/hooks/useErrorHandler';
import { useMemo, useState } from 'react';
import { useTranslation } from '@/ui/hooks/useTranslation';
import * as S from './PhoneDetail.styles';

export const PhoneDetail = ({
  phone,
  onAddToCart,
  loading,
}: PhoneDetailProps) => {
  const [selectedStorage, setSelectedStorage] = useState<string>();
  const [selectedColor, setSelectedColor] = useState<string>();
  const { handleError } = useErrorHandler();
  const { t } = useTranslation();

  const selectedStorageOption = useMemo(
    () =>
      phone.storageOptions.find(
        (option) => option.capacity === selectedStorage
      ),
    [selectedStorage, phone.storageOptions]
  );

  const selectedColorOption = useMemo(
    () => phone.colorOptions.find((option) => option.name === selectedColor),
    [selectedColor, phone.colorOptions]
  );

  const handleAddToCart = async () => {
    if (!selectedStorageOption || !selectedColorOption) return;
    try {
      void onAddToCart(selectedColorOption, selectedStorageOption);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <Container $maxWidth="xl">
        <S.MainContent>
          <S.ImageSection>
            <ResponsiveImage
              data-testid="phone-image"
              src={
                selectedColorOption?.imageUrl || phone.colorOptions[0].imageUrl
              }
              alt={`${phone.brand} ${phone.name}`}
              fill
              priority
              style={{ objectFit: 'contain' }}
              isLCP={true}
            />
          </S.ImageSection>

          <SectionContainer direction="column" $gap="6xl">
            <SectionContainer direction="column" $gap="lg">
              <Text
                size="2xl"
                transform="uppercase"
                $weight="regular"
                data-testid="phone-title"
              >
                {phone.name}
              </Text>
              <Text
                size="lg"
                transform="capitalize"
                $weight="regular"
                data-testid="phone-price"
              >
                {t('common.from')}{' '}
                {selectedStorageOption?.price || phone.basePrice} EUR
              </Text>
            </SectionContainer>

            <SectionContainer direction="column" $gap="3xl">
              <StorageSelector
                data-testid="storage-selector"
                options={phone.storageOptions}
                selectedStorage={selectedStorage}
                onSelect={setSelectedStorage}
              />

              <ColorSelector
                data-testid="color-selector"
                options={phone.colorOptions}
                selectedColor={selectedColor}
                onSelect={setSelectedColor}
              />

              <Button
                data-testid="add-to-cart-button"
                disabled={!selectedColor || !selectedStorage || loading}
                onClick={handleAddToCart}
                $$fullWidth
                $variant="primary"
                size="large"
              >
                <Text transform="uppercase" $weight="light" color="white">
                  {loading ? t('detail.addingToCart') : t('detail.addToCart')}
                </Text>
              </Button>
            </SectionContainer>
          </SectionContainer>

          <S.Specifications>
            <Text size="lg" color="primary" transform="uppercase">
              {t('common.specifications')}
            </Text>
            <S.SpecsList>
              <S.SpecItem>
                <Text transform="uppercase" size="sm">
                  {t('detail.brand')}
                </Text>
                <Text size="sm">{phone.brand}</Text>
              </S.SpecItem>
              <S.SpecItem>
                <Text transform="uppercase" size="sm">
                  {t('detail.name')}
                </Text>
                <Text size="sm">{phone.name}</Text>
              </S.SpecItem>
              <S.SpecItem>
                <Text transform="uppercase" size="sm">
                  {t('detail.description')}
                </Text>
                <Text size="sm">{phone.description}</Text>
              </S.SpecItem>
              {Object.entries(phone.specs).map(([key, value]) => (
                <S.SpecItem key={key}>
                  <Text transform="uppercase" size="sm">
                    {t(`detail.${key}`).toUpperCase()}
                  </Text>
                  <Text size="sm">{value}</Text>
                </S.SpecItem>
              ))}
            </S.SpecsList>
          </S.Specifications>
        </S.MainContent>
        <RelatedProducts products={phone.similarProducts} />
      </Container>
    </>
  );
};
