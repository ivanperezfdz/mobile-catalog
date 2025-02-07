import { SectionContainer } from '@/ui/atoms/SectionContainer/SectionContainer.styles';
import { Text } from '@/ui/atoms/Text/Text.styles';
import { useTranslation } from '@/ui/hooks/useTranslation';
import type { ColorSelectorProps } from './ColorSelector.types';
import * as S from './ColorSelector.styles';

export const ColorSelector = ({
  options,
  selectedColor,
  onSelect,
}: ColorSelectorProps) => {
  const { t } = useTranslation();

  return (
    <SectionContainer direction="column" $gap="xl">
      <Text size="sm" transform="uppercase">
        {t('detail.colorQuestion')}
      </Text>
      <SectionContainer direction="column" $gap="md">
        <SectionContainer direction="row" $gap="lg">
          {options.map((option) => (
            <S.ColorOption
              data-testid={`color-option-${option.name}`}
              key={option.name}
              color={option.hexCode}
              selected={selectedColor === option.name}
              aria-selected={selectedColor === option.name}
              onClick={() => onSelect(option.name)}
              title={option.name}
            />
          ))}
        </SectionContainer>
        {selectedColor && (
          <S.ColorName size="sm" transform="capitalize">
            {selectedColor}
          </S.ColorName>
        )}
      </SectionContainer>
    </SectionContainer>
  );
};
