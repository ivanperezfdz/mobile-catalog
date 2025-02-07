import { SectionContainer } from '@/ui/atoms/SectionContainer/SectionContainer.styles';
import { Text } from '@/ui/atoms/Text/Text.styles';
import { useTranslation } from '@/ui/hooks/useTranslation';
import * as S from './StorageSelector.styles';

type StorageSelectorProps = {
  options: Array<{ capacity: string; price?: number }>;
  selectedStorage?: string;
  onSelect: (capacity: string) => void;
};

export const StorageSelector = ({
  options,
  selectedStorage,
  onSelect,
}: StorageSelectorProps) => {
  const { t } = useTranslation();

  return (
    <SectionContainer direction="column" $gap="xl">
      <Text size="sm" transform="uppercase">
        {t('detail.storageQuestion')}
      </Text>
      <S.OptionsGrid>
        {options.map((option) => (
          <S.Option
            key={option.capacity}
            data-testid={`storage-option-${option.capacity}`}
            selected={selectedStorage === option.capacity}
            aria-selected={selectedStorage === option.capacity}
            onClick={() => onSelect(option.capacity)}
          >
            {option.capacity}
          </S.Option>
        ))}
      </S.OptionsGrid>
    </SectionContainer>
  );
};
