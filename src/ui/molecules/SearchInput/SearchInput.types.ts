import type { InputProps } from '@/ui/atoms/Input/Input.types';

export type SearchInputProps = {
  onSearch?: (value: string) => Promise<void> | void;
  resultsCount?: number;
} & Omit<InputProps, 'type'>;
