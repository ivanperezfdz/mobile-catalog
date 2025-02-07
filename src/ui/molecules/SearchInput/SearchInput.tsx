import { ResponsiveImage } from '@/ui/atoms/ResponsiveImage/ResponsiveImage';
import type { SearchInputProps } from './SearchInput.types';
import { useDebounce } from '@/ui/hooks/useDebounce';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/ui/hooks/useTranslation';
import * as S from './SearchInput.styles';
import ClearIcon from '@/ui/styles/icons/clear.svg';

export const SearchInput = ({
  onSearch,
  resultsCount,
  ...props
}: SearchInputProps) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, 500);
  const { t } = useTranslation();

  useEffect(() => {
    void onSearch?.(debouncedValue);
  }, [debouncedValue, onSearch]);

  const handleClear = () => {
    setValue('');
    void onSearch?.('');
  };

  return (
    <>
      <S.SearchContainer>
        <S.SearchInput
          data-testid="search-input"
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          $fullWidth
          spellCheck="false"
        />
        {value && (
          <S.ClearButton onClick={handleClear}>
            <ResponsiveImage src={ClearIcon} alt="Clear search" />
          </S.ClearButton>
        )}
      </S.SearchContainer>
      <S.ResultsCount size="xs" transform="uppercase">
        {t('common.results', { params: { count: resultsCount || 0 } })}
      </S.ResultsCount>
    </>
  );
};
